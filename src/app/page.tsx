import {
  Hero,
  ValueBanner,
  ProblemSolution,
  GameIntro,
  HowItWorks,
  ARPreviewSection,
  Symbols,
  Industries,
  Testimonials,
  CTA,
} from '@/components/sections';

// FAQ Schema for AI and Search Engines
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Čo je BLIK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLIK je stolová hra s rozšírenou realitou (AR), kde hráči hľadajú zhodné symboly medzi kartami. Je to gamifikovaný komunikačný nástroj navrhnutý pre banky, poisťovne, školy a firmy. Po naskenovaní karty mobilom sa symboly oživia s interaktívnym AR obsahom."
      }
    },
    {
      "@type": "Question",
      "name": "Ako funguje AR vrstva v hre BLIK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Používateľ naskenuje QR kód, ktorý otvorí AR skener v prehliadači. Následne namieri kameru na kartu a symboly sa oživia s interaktívnym obsahom o produktoch a službách. Nie je potrebná žiadna aplikácia - AR funguje priamo v webovom prehliadači."
      }
    },
    {
      "@type": "Question",
      "name": "Pre koho je BLIK určený?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLIK je určený pre banky (finančná gramotnosť, produktové vzdelávanie), poisťovne (onboarding, produkty), školy (interaktívne vzdelávanie), firmy (teambuilding, onboarding) a cestovný ruch (propagácia destinácií)."
      }
    },
    {
      "@type": "Question",
      "name": "Koľko hráčov môže hrať BLIK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLIK je určený pre 2-8 hráčov. Ideálny počet pre optimálny herný zážitok je 3-5 hráčov."
      }
    },
    {
      "@type": "Question",
      "name": "Dá sa BLIK prispôsobiť na mieru?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Áno, BLIK je 100% customizovateľný. Symboly na kartách, dizajn kariet aj AR obsah sa prispôsobujú potrebám a brandu klienta."
      }
    },
    {
      "@type": "Question",
      "name": "Potrebujem špeciálnu aplikáciu na AR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nie, AR funguje priamo v webovom prehliadači cez WebXR technológiu. Stačí naskenovat QR kód a otvoriť odkaz v mobilnom prehliadači."
      }
    },
    {
      "@type": "Question",
      "name": "Koľko kariet obsahuje balíček BLIK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Balíček obsahuje 57 unikátnych kariet. Každá karta má 8 symbolov a medzi ľubovoľnými dvoma kartami existuje vždy práve jeden zhodný symbol."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* FAQ Schema for AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ValueBanner />
      <ProblemSolution />
      <GameIntro />
      <HowItWorks />
      <ARPreviewSection />
      <Symbols />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
