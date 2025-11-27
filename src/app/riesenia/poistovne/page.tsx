'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Heart, Car, Plane, Home, Briefcase,
  ArrowRight, CheckCircle2, Sparkles, Users, FileText, Target
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';

const products = [
  { icon: Heart, name: 'Životné poistenie', description: 'Ochrana pre vás a rodinu' },
  { icon: Car, name: 'PZP a havarijné', description: 'Poistenie vozidiel' },
  { icon: Plane, name: 'Cestovné poistenie', description: 'Bezpečie na cestách' },
  { icon: Home, name: 'Majetkové poistenie', description: 'Dom, byt, domácnosť' },
  { icon: Briefcase, name: 'Podnikateľské', description: 'Poistenie firiem' },
  { icon: Shield, name: 'Úrazové poistenie', description: 'Ochrana pred úrazmi' },
];

const benefits = [
  'Zrozumiteľné vysvetlenie komplexných produktov',
  'Vizualizácia poistných situácií cez AR',
  'Klienti pochopia, čo všetko pokrýva poistenie',
  'Zvýšenie konverzie o 38%',
];

const useCases = [
  {
    title: 'Prezentácia na eventoch',
    description: 'Zaujmite potenciálnych klientov interaktívnou hrou.',
    icon: Users,
  },
  {
    title: 'Pobočková sieť',
    description: 'Klienti sa hrou dozvedajú o produktoch počas čakania.',
    icon: Sparkles,
  },
  {
    title: 'Školenie agentov',
    description: 'Agenti sa učia produktové portfólio zábavnou formou.',
    icon: FileText,
  },
  {
    title: 'Cross-sell kampane',
    description: 'Ukážte klientom produkty, ktoré ešte nemajú.',
    icon: Target,
  },
];

export default function PoistovnePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">Pre poisťovne</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Poistné produkty{' '}
                <span className="text-gradient-warm">zrozumiteľne</span>
              </h1>
              
              <p className="text-lg text-foreground-secondary mb-8">
                Komplexné poistné produkty vysvetlené jednoducho a vizuálne. 
                Klienti pochopia, čo všetko ich poistenie pokrýva.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
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
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
              <div className="relative grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-4 border border-border text-center hover:border-secondary/30 transition-all"
                  >
                    <product.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
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
          title={
            <>
              BLIK pre <span className="text-gradient-warm">poisťovne</span>
            </>
          }
          description="Vizualizujte poistné produkty v rozšírenej realite."
        />
        <ARCardPreview category="insurance" />
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
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-secondary" />
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
            Pripravení začať?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Dohodnite si konzultáciu a ukážeme vám BLIK v akcii.
          </p>
          <Link href="/kontakt">
            <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Získať demo pre poisťovne
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



