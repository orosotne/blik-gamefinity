'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  QrCode, Smartphone, Box, Sparkles, 
  ArrowRight, Play, CheckCircle2, ChevronDown,
  Palette, Volume2, Link2, BarChart3, Settings, Layers
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';
import { useState } from 'react';

const steps = [
  {
    number: '01',
    icon: QrCode,
    title: 'Naskenujte QR kód',
    description: 'Na krabici alebo kartách nájdete QR kód. Po jeho naskenovaní sa priamo v prehliadači otvorí AR prostredie. Žiadna aplikácia na stiahnutie - funguje cez WebAR.',
    details: [
      'Žiadna inštalácia aplikácie',
      'Funguje na iOS aj Android',
      'Okamžité spustenie v prehliadači',
    ],
    color: 'primary',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Namierte na kartu',
    description: 'Mobil namierte na kartu so symbolom. Kamera rozpozná symbol a pripraví príslušný AR obsah. Každý symbol je prepojený s konkrétnym produktom alebo témou.',
    details: [
      'Rozpoznanie symbolu do 0.5 sekundy',
      'Stabilné sledovanie karty',
      'Podpora až 57 rôznych symbolov',
    ],
    color: 'secondary',
  },
  {
    number: '03',
    icon: Box,
    title: 'Objavte AR svet',
    description: 'Nad kartou sa zobrazí 3D animácia, produkt alebo interaktívna scéna. Môžete ju otáčať, približovať a interagovať s ňou. Voiceover vysvetľuje obsah.',
    details: [
      '3D objekty a animácie',
      'Voiceover a zvukové efekty',
      'Prekliky na váš web',
    ],
    color: 'accent',
  },
];

const customizationOptions = [
  {
    icon: Palette,
    title: 'Vlastné 3D objekty',
    description: 'Nahrajte vlastné 3D modely vašich produktov alebo služieb.',
  },
  {
    icon: Volume2,
    title: 'Voiceover',
    description: 'Pridajte hlasový komentár ku každému symbolu vo vašom jazyku.',
  },
  {
    icon: Link2,
    title: 'Prekliky',
    description: 'Prepojte AR obsah priamo na vaše produktové stránky.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Sledujte engagement a záujem o jednotlivé produkty.',
  },
  {
    icon: Settings,
    title: 'Branding',
    description: 'Prispôsobte AR prostredie vašej firemnej identite.',
  },
  {
    icon: Layers,
    title: 'Multi-layer obsah',
    description: 'Vytvorte vrstvy obsahu - od základného po pokročilý.',
  },
];

const faqs = [
  {
    question: 'Potrebujem špeciálnu aplikáciu?',
    answer: 'Nie, BLIK využíva WebAR technológiu, ktorá funguje priamo v prehliadači. Stačí naskenovať QR kód a AR prostredie sa otvorí automaticky.',
  },
  {
    question: 'Na akých zariadeniach to funguje?',
    answer: 'BLIK funguje na všetkých moderných smartfónoch s iOS 11+ alebo Android 7+. Podporované sú prehliadače Safari a Chrome.',
  },
  {
    question: 'Ako dlho trvá implementácia?',
    answer: 'Základná implementácia trvá 2-4 týždne v závislosti od rozsahu. Zahŕňa návrh symbolov, tvorbu 3D obsahu a nastavenie dashboardu.',
  },
  {
    question: 'Môžem meniť obsah po spustení?',
    answer: 'Áno, cez náš dashboard môžete kedykoľvek meniť 3D objekty, voiceover aj prekliky bez nutnosti tlačiť nové karty.',
  },
  {
    question: 'Koľko symbolov potrebujem?',
    answer: 'Závisí od vášho portfólia. Štandardná sada má 8 kariet, každá s unikátnym symbolom. Maximálne je možné použiť 57 rôznych symbolov.',
  },
  {
    question: 'Aké dáta získam z dashboardu?',
    answer: 'Dashboard ukazuje počet skenovaní, najpopulárnejšie symboly, čas strávený pri AR obsahu, kliknutia na prekliky a geografické rozloženie používateľov.',
  },
];

export default function AkoToFungujePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="primary" className="mb-6">Ako to funguje</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Od QR kódu k{' '}
              <span className="text-gradient">AR zážitku</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary mb-8">
              BLIK využíva WebAR technológiu - žiadna aplikácia na stiahnutie. 
              Celý proces trvá len niekoľko sekúnd.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Získať demo
                </Button>
              </Link>
              <Button variant="outline" size="lg" leftIcon={<Play className="w-5 h-5" />}>
                Pozrieť video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <Section background="default" padding="lg">
        <div className="max-w-5xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-foreground-muted/20">{step.number}</span>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      step.color === 'primary'
                        ? 'bg-primary/10'
                        : step.color === 'secondary'
                        ? 'bg-secondary/10'
                        : 'bg-accent/10'
                    }`}
                  >
                    <step.icon
                      className={`w-7 h-7 ${
                        step.color === 'primary'
                          ? 'text-primary'
                          : step.color === 'secondary'
                          ? 'text-secondary'
                          : 'text-accent'
                      }`}
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                <p className="text-foreground-secondary mb-6 leading-relaxed">{step.description}</p>
                
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground-secondary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div
                  className={`aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden ${
                    step.color === 'primary'
                      ? 'bg-gradient-to-br from-primary/20 to-primary/5'
                      : step.color === 'secondary'
                      ? 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                      : 'bg-gradient-to-br from-accent/20 to-accent/5'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-grid opacity-30"
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <step.icon
                    className={`w-32 h-32 ${
                      step.color === 'primary'
                        ? 'text-primary/30'
                        : step.color === 'secondary'
                        ? 'text-secondary/30'
                        : 'text-accent/30'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* AR Demo */}
      <Section background="secondary" padding="lg">
        <SectionHeader
          badge="Vyskúšajte"
          title={
            <>
              Interaktívna <span className="text-gradient">ukážka</span>
            </>
          }
          description="Kliknite na symboly a pozrite si, ako AR funguje v praxi."
        />
        <ARCardPreview />
      </Section>

      {/* Customization */}
      <Section background="default" padding="lg">
        <SectionHeader
          badge="Customizácia"
          title={
            <>
              Plne <span className="text-gradient">prispôsobiteľné</span>
            </>
          }
          description="AR vrstvu si môžete prispôsobiť presne podľa vašich potrieb."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-foreground-secondary">{option.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gradient" padding="lg" id="faq">
        <SectionHeader
          badge="FAQ"
          title="Často kladené otázky"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full bg-background-secondary/50 backdrop-blur-sm rounded-xl p-5 border border-border hover:border-foreground-muted/30 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground-muted transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-foreground-secondary leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="secondary" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pripravení začať?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Dohodnite si konzultáciu a ukážeme vám BLIK naživo.
          </p>
          <Link href="/kontakt">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Získať demo
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



