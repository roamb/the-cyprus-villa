import { spawn } from "node:child_process";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const viewports = [
  [360, 800],
  [375, 812],
  [390, 844],
  [412, 915],
  [430, 932],
  [768, 1024],
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function requestJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }
  return response.json();
}

function createCdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        reject(new Error(message.error.message));
      } else {
        resolve(message.result);
      }
    }
  });

  return new Promise((resolve, reject) => {
    ws.addEventListener("open", () => {
      resolve({
        send(method, params = {}, sessionId) {
          const messageId = ++id;
          ws.send(JSON.stringify({ id: messageId, method, params, sessionId }));
          return new Promise((messageResolve, messageReject) => {
            pending.set(messageId, {
              resolve: messageResolve,
              reject: messageReject,
            });
          });
        },
        close() {
          ws.close();
        },
      });
    });
    ws.addEventListener("error", reject);
  });
}

async function waitForChrome(port) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      return await requestJson(`http://127.0.0.1:${port}/json/version`);
    } catch {
      await delay(250);
    }
  }
  throw new Error("Chrome did not start");
}

async function waitForReady(client, sessionId) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    const result = await client.send(
      "Runtime.evaluate",
      {
        expression: "document.readyState",
        returnByValue: true,
      },
      sessionId,
    );
    if (result.result.value === "complete") {
      return;
    }
    await delay(250);
  }
  throw new Error("Page did not finish loading");
}

const userDataDir = await mkdtemp(join(tmpdir(), "tcv-chrome-"));
const port = 9223;
const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  "--disable-gpu",
  "--no-first-run",
  "about:blank",
]);

try {
  const version = await waitForChrome(port);
  const client = await createCdpClient(version.webSocketDebuggerUrl);
  const results = [];

  for (const [width, height] of viewports) {
    const target = await client.send("Target.createTarget", {
      url: "about:blank",
    });
    const attached = await client.send("Target.attachToTarget", {
      targetId: target.targetId,
      flatten: true,
    });
    const sessionId = attached.sessionId;

    await client.send(
      "Emulation.setDeviceMetricsOverride",
      {
        width,
        height,
        deviceScaleFactor: 2,
        mobile: width < 768,
      },
      sessionId,
    );
    await client.send("Page.enable", {}, sessionId);
    await client.send("Runtime.enable", {}, sessionId);
    await client.send(
      "Page.navigate",
      {
        url: "http://127.0.0.1:3000",
      },
      sessionId,
    );
    await waitForReady(client, sessionId);
    await delay(500);

    const evaluation = await client.send(
      "Runtime.evaluate",
      {
        returnByValue: true,
        expression: `(() => {
        const section = document.querySelector("section");
        const video = document.querySelector("video");
        const h1 = document.querySelector("h1");
        const spans = [...h1.querySelectorAll("span")];
        const subtitle = h1.nextElementSibling;
        const arrow = document.querySelector("a[aria-label='Scroll to introduction']");
        const rect = (el) => {
          const r = el.getBoundingClientRect();
          return { top: r.top, right: r.right, bottom: r.bottom, left: r.left, width: r.width, height: r.height };
        };
        const lineRects = spans.map((span) => [...span.getClientRects()].map((r) => ({
          top: r.top, right: r.right, bottom: r.bottom, left: r.left, width: r.width, height: r.height
        })));
        return {
          viewport: { width: innerWidth, height: innerHeight },
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          section: rect(section),
          video: rect(video),
          h1: rect(h1),
          spans: spans.map(rect),
          lineRects,
          subtitle: rect(subtitle),
          arrow: rect(arrow),
          headlineText: h1.innerText,
          videoRatio: rect(video).width / rect(video).height,
        };
      })()`,
      },
      sessionId,
    );

    const data = evaluation.result.value;
    const checks = {
      noOverflow:
        data.documentWidth <= width + 1 &&
        data.bodyWidth <= width + 1 &&
        data.spans.every((span) => span.left >= -1 && span.right <= width + 1),
      twoLines:
        data.lineRects.length === 2 &&
        data.lineRects.every((rects) => rects.length === 1),
      video169: Math.abs(data.videoRatio - 16 / 9) < 0.02,
      arrowVisible: data.arrow.bottom <= height + 1,
    };
    results.push({ width, height, checks, data });

    await client.send("Target.closeTarget", { targetId: target.targetId });
  }

  client.close();

  for (const result of results) {
    const status = Object.values(result.checks).every(Boolean) ? "OK" : "FAIL";
    console.log(`${status} ${result.width}x${result.height}`, result.checks);
  }

  const failed = results.filter(
    (result) => !Object.values(result.checks).every(Boolean),
  );
  if (failed.length > 0) {
    console.log(JSON.stringify(failed, null, 2));
    process.exitCode = 1;
  }
} finally {
  chrome.kill();
}
