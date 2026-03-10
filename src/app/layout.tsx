import type { Metadata } from "next";
import { Noticia_Text } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const noticiaText = Noticia_Text({
  subsets: ["latin"],
  variable: "--font-noticia",
  weight: ["400", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://staging.confluxe.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Confluxe | Digital Omnichannel Bridge to India",
  description: "We are building a digital omnichannel bridge to India. Technology woven with soul.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Confluxe | Digital Omnichannel Bridge to India",
    description: "We are building a digital omnichannel bridge to India. Technology woven with soul.",
    url: siteUrl,
    siteName: "Confluxe",
    images: [
      {
        url: "/images/hero-bg-1.jpg",
        width: 1200,
        height: 630,
        alt: "Confluxe - Scale Meets Soul",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confluxe | Digital Omnichannel Bridge to India",
    description: "We are building a digital omnichannel bridge to India. Technology woven with soul.",
    images: ["/images/hero-bg-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noticiaText.variable}>
      <body className="antialiased font-sans">{children}</body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
