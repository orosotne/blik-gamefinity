'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, Users, Target, Trophy, Lightbulb, Heart,
  ArrowRight, CheckCircle2, Sparkles, Calendar, Megaphone, Settings
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';

const products = [
  { icon: Users, name: 'Teambuilding', description: 'Stmeľovacie aktivity' },
  { icon: Target, name: 'Onboarding', description: 'Zapracovanie nováčikov' },
  { icon: Heart, name: 'Firemné hodnoty', description: 'Kultúra spoločnosti' },
  { icon: Trophy, name: 'Produkty', description: 'Produktové portfólio' },
  { icon: Lightbulb, name: 'Inovácie', description: 'Nové projekty a nápady' },
  { icon: Settings, name: 'Procesy', description: 'Interné postupy' },
];

const benefits = [
  'Teambuilding, ktorý sa nezabudne',
  'Onboarding nových zamestnancov hrou',
  'Komunikácia firemných hodnôt interaktívne',
  'Zvýšenie engagement zamestnancov o 380%',
];

const useCases = [
  {
    title: 'Firemný teambuilding',
    description: 'Stmeľte tím hrou, ktorá baví a zároveň učí.',
    icon: Users,
  },
  {
    title: 'Onboarding nováčikov',
    description: 'Nový zamestnanec spozná firmu zábavnou formou.',
    icon: Sparkles,
  },
  {
    title: 'Firemné eventy',
    description: 'Oživte konferencie a meetingy interaktívnou hrou.',
    icon: Calendar,
  },
  {
    title: 'Interná komunikácia',
    description: 'Komunikujte novinky a zmeny efektívne.',
    icon: Megaphone,
  },
];

export default function FirmyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20">Pre firmy</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Firemná komunikácia{' '}
                <span style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ktorá funguje
                </span>
              </h1>
              
              <p className="text-lg text-foreground-secondary mb-8">
                Od teambuildingu po onboarding – BLIK zapojí každého zamestnanca. 
                Firemné hodnoty a produkty komunikované interaktívne.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/80" rightIcon={<ArrowRight className="w-5 h-5" />}>
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
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#F59E0B]/20 rounded-full blur-[100px]" />
              <div className="relative grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-4 border border-border text-center hover:border-[#F59E0B]/30 transition-all"
                  >
                    <product.icon className="w-8 h-8 mx-auto mb-2" style={{ color: '#F59E0B' }} />
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
          title="BLIK pre firmy"
          description="Vizualizujte firemné témy v rozšírenej realite."
        />
        <ARCardPreview category="company" />
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                    <useCase.icon className="w-6 h-6" style={{ color: '#F59E0B' }} />
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
            Pripravení zapojiť tím?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Dohodnite si konzultáciu a ukážeme vám BLIK v akcii.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/80" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Získať demo pre firmy
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



