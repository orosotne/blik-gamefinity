import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { CookieConsent } from "@/components/ui";

const siteUrl = "https://blik.gamefinity.sk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BLIK | Stolová hra s rozšírenou realitou",
    template: "%s | BLIK",
  },
  description: "BLIK je stolová hra s AR vrstvou, navrhnutá pre banky, poisťovne, školy a firmy. Gamifikovaný komunikačný nástroj pre vaše publikum.",
  keywords: "AR hra, rozšírená realita, stolová hra, gamifikácia, firemná komunikácia, vzdelávanie, marketing, BLIK, Gamefinity",
  authors: [{ name: "Gamefinity", url: siteUrl }],
  creator: "Gamefinity",
  publisher: "Gamefinity",
  icons: {
    icon: [
      { url: '/logo_blik.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/logo_blik.png',
    apple: '/logo_blik.png',
  },
  openGraph: {
    title: "BLIK | Stolová hra s rozšírenou realitou",
    description: "BLIK je stolová hra s AR vrstvou, navrhnutá pre banky, poisťovne, školy a firmy. Gamifikovaný komunikačný nástroj pre vaše publikum.",
    type: "website",
    locale: "sk_SK",
    url: siteUrl,
    siteName: "BLIK by Gamefinity",
    images: [
      {
        url: '/logo_blik.png',
        width: 512,
        height: 512,
        alt: 'BLIK - Stolová hra s rozšírenou realitou',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BLIK | Stolová hra s rozšírenou realitou",
    description: "BLIK je stolová hra s AR vrstvou, navrhnutá pre banky, poisťovne, školy a firmy.",
    images: ['/logo_blik.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
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
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0066FF" />
        {/* Calendly Widget CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        
        {/* JSON-LD Structured Data for AI and Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://blik.gamefinity.sk/#organization",
                  "name": "Gamefinity",
                  "url": "https://blik.gamefinity.sk",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://blik.gamefinity.sk/logo_blik.png"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+421917588738",
                    "contactType": "sales",
                    "email": "martin.miskeje@gamefinity.sk",
                    "availableLanguage": ["Slovak", "English"]
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Landererova 8",
                    "addressLocality": "Bratislava",
                    "postalCode": "811 09",
                    "addressCountry": "SK"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/gamefinity",
                    "https://www.instagram.com/gamefinity",
                    "https://www.facebook.com/gamefinity"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://blik.gamefinity.sk/#website",
                  "url": "https://blik.gamefinity.sk",
                  "name": "BLIK by Gamefinity",
                  "description": "Stolová hra s rozšírenou realitou pre firmy, banky, poisťovne a školy",
                  "publisher": {
                    "@id": "https://blik.gamefinity.sk/#organization"
                  },
                  "inLanguage": "sk"
                },
                {
                  "@type": "Product",
                  "@id": "https://blik.gamefinity.sk/#product",
                  "name": "BLIK",
                  "description": "BLIK je stolová hra s AR vrstvou, kde hráči hľadajú zhodné symboly medzi kartami a objavujú produkty a služby cez rozšírenú realitu. Navrhnuté pre banky, poisťovne, školy a firmy.",
                  "brand": {
                    "@id": "https://blik.gamefinity.sk/#organization"
                  },
                  "category": "Stolové hry / Gamifikácia / AR riešenia",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": "Firmy, banky, poisťovne, školy"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "EUR"
                  },
                  "image": "https://blik.gamefinity.sk/logo_blik.png"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "BLIK AR",
                  "applicationCategory": "GameApplication",
                  "operatingSystem": "Web Browser",
                  "description": "Webová AR aplikácia pre interaktívne zobrazenie obsahu na kartách BLIK",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "EUR"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        
        {/* Cookie Consent Banner - GDPR */}
        <CookieConsent />
        
        {/* Calendly Widget Script */}
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
