'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Plane, MapPin, Hotel, Camera, UtensilsCrossed, Ticket,
  ArrowRight, CheckCircle2, Sparkles, Sun, Mountain, Compass
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';

const products = [
  { icon: MapPin, name: 'Destinácie', description: 'Mestá a regióny' },
  { icon: Hotel, name: 'Ubytovanie', description: 'Hotely a apartmány' },
  { icon: Camera, name: 'Atrakcie', description: 'Pamiatky a zážitky' },
  { icon: UtensilsCrossed, name: 'Gastro', description: 'Reštaurácie a špecial.' },
  { icon: Ticket, name: 'Aktivity', description: 'Výlety a dobrodruž.' },
  { icon: Mountain, name: 'Príroda', description: 'Národné parky' },
];

const benefits = [
  'Destinácie ožívajú pred očami klientov',
  'Virtuálne prehliadky cez AR',
  'Zákazníci "zažijú" dovolenku ešte pred kúpou',
  'Zvýšenie záujmu o zájazdy o 41%',
];

const useCases = [
  {
    title: 'Veľtrhy a výstavy',
    description: 'Zaujmite návštevníkov interaktívnou prezentáciou destinácií.',
    icon: Sparkles,
  },
  {
    title: 'Cestovné kancelárie',
    description: 'Klienti objavujú zájazdy hravou formou.',
    icon: Sun,
  },
  {
    title: 'Hotelové reťazce',
    description: 'Prezentujte služby a vybavenie hotela cez AR.',
    icon: Hotel,
  },
  {
    title: 'DMO a turistické centrá',
    description: 'Propagujte región inovatívnym spôsobom.',
    icon: Compass,
  },
];

export default function CestovnyRuchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20">Cestovný ruch</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dovolenka začína{' '}
                <span style={{ background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  už pri hraní
                </span>
              </h1>
              
              <p className="text-lg text-foreground-secondary mb-8">
                Destinácie, hotely a atrakcie v rozšírenej realite. 
                Zákazníci "zažijú" dovolenku ešte pred kúpou.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-[#10B981] to-[#10B981]/80" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Získať demo
                  </Button>
                </Link>
                <Link href="/ako-to-funguje">
                  <Button variant="outline" size="lg">
                    Ako to funguje
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#10B981]/20 rounded-full blur-[100px]" />
              <div className="relative grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-4 border border-border text-center hover:border-[#10B981]/30 transition-all"
                  >
                    <product.icon className="w-8 h-8 mx-auto mb-2" style={{ color: '#10B981' }} />
                    <p className="text-sm font-medium">{product.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section background="secondary" padding="md">
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground-secondary">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* AR Preview */}
      <Section background="default" padding="lg">
        <SectionHeader
          badge="AR ukážka"
          title="BLIK pre cestovný ruch"
          description="Vizualizujte destinácie v rozšírenej realite."
        />
        <ARCardPreview category="travel" />
      </Section>

      {/* Use Cases */}
      <Section background="gradient" padding="lg">
        <SectionHeader
          badge="Use cases"
          title="Kde BLIK využijete"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                    <useCase.icon className="w-6 h-6" style={{ color: '#10B981' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-foreground-secondary">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="secondary" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pripravení inšpirovať cestovateľov?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Dohodnite si konzultáciu a ukážeme vám BLIK v akcii.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-gradient-to-r from-[#10B981] to-[#10B981]/80" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Získať demo pre cestovný ruch
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



