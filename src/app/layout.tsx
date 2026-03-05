import type { Metadata } from "next";
import { Noticia_Text } from "next/font/google";
import "./globals.css";

const noticiaText = Noticia_Text({
  subsets: ["latin"],
  variable: "--font-noticia",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Confluxe | Digital Omnichannel Bridge to India",
  description: "We are building a digital omnichannel bridge to India. Technology woven with soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noticiaText.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
