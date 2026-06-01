import type { Metadata } from "next";
import "./globals.css";

const title =
  "TCV — The Cyprus Villa | Private Residence in Germasogeia, Limassol";
const description =
  "A spacious private residence in coastal Germasogeia, Limassol, with 426 m² of living space, private pool, garden, 5 bedrooms, 6 bathrooms and title deed available.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thecyprusvilla.com"),
  title,
  description,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "TCV — The Cyprus Villa",
    images: [
      {
        url: "/media/gallery/tcv-outside-01-w.webp",
        width: 1200,
        height: 900,
        alt: "TCV The Cyprus Villa exterior in Germasogeia, Limassol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/media/gallery/tcv-outside-01-w.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
