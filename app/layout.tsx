import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Temi Tea Estate — Sip the Soul of the Himalayas | Est. 1969",
  description: "Experience the world-renowned 100% organic tea from the legendary Temi Tea Estate in Sikkim. Direct from the mountain to your cup.",
  authors: [{ name: "Temi Tea Estate" }],
  openGraph: {
    title: "Temi Tea Estate — Sip the Soul of the Himalayas",
    description: "Experience the world-renowned 100% organic tea from the legendary Temi Tea Estate in Sikkim.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
