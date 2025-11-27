import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "BLIK | Stolová hra s rozšírenou realitou",
  description: "BLIK je stolová hra s AR vrstvou, navrhnutá pre banky, poisťovne, školy a firmy. Gamifikovaný komunikačný nástroj pre vaše publikum.",
  keywords: "AR hra, rozšírená realita, stolová hra, gamifikácia, firemná komunikácia, vzdelávanie, marketing",
  authors: [{ name: "Gamefinity" }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "BLIK | Stolová hra s rozšírenou realitou",
    description: "BLIK je stolová hra s AR vrstvou, navrhnutá pre banky, poisťovne, školy a firmy.",
    type: "website",
    locale: "sk_SK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Calendly Widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        
        {/* Calendly Widget Script */}
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
