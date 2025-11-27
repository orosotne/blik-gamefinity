'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Landmark, CreditCard, Home, PiggyBank, TrendingUp, Gift,
  ArrowRight, CheckCircle2, Sparkles, BarChart3, Users, Clock
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';

const products = [
  { icon: CreditCard, name: 'Bežné účty', description: 'Osobné a firemné účty' },
  { icon: Home, name: 'Hypotéky', description: 'Financovanie bývania' },
  { icon: PiggyBank, name: 'Sporenie', description: 'Sporiacie produkty' },
  { icon: TrendingUp, name: 'Investície', description: 'Podielové fondy, akcie' },
  { icon: Gift, name: 'Vernostný program', description: 'Odmeny pre klientov' },
  { icon: Landmark, name: 'Úvery', description: 'Spotrebné a podnikateľské' },
];

const benefits = [
  'Prezentujte až 57 produktov v jednej hre',
  'Klienti objavujú služby, o ktorých nevedeli',
  'Dashboard ukazuje záujem o konkrétne produkty',
  'Ideálne pre pobočky, eventy a workshopy',
];

const useCases = [
  {
    title: 'Deň otvorených dverí',
    description: 'Klienti sa hrou dozvedajú o všetkých službách banky.',
    icon: Users,
  },
  {
    title: 'Onboarding nových klientov',
    description: 'Nový klient zábavnou formou spozná produktové portfólio.',
    icon: Sparkles,
  },
  {
    title: 'Školenie zamestnancov',
    description: 'Pracovníci pobočiek sa učia o produktoch interaktívne.',
    icon: BarChart3,
  },
  {
    title: 'Čakáreň na pobočke',
    description: 'Skráťte čakanie a zvýšte engagement klientov.',
    icon: Clock,
  },
];

export default function BankyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="primary" className="mb-4">Pre banky</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Finančné produkty v{' '}
                <span className="text-gradient">rozšírenej realite</span>
              </h1>
              
              <p className="text-lg text-foreground-secondary mb-8">
                Od bežných účtov po investície – všetky vaše produkty ožívajú cez AR. 
                Klienti objavujú služby, o ktorých by sa inak nikdy nedozvedeli.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
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
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="relative grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-4 border border-border text-center hover:border-primary/30 transition-all"
                  >
                    <product.icon className="w-8 h-8 text-primary mx-auto mb-2" />
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
              Ako vyzerá BLIK <span className="text-gradient">pre banky</span>
            </>
          }
          description="Kliknite na symboly a pozrite si, ako môžu vaše finančné produkty ožiť v rozšírenej realite."
        />
        <ARCardPreview category="bank" />
      </Section>

      {/* Use Cases */}
      <Section background="gradient" padding="lg">
        <SectionHeader
          badge="Use cases"
          title="Kde všade môžete BLIK využiť"
          description="BLIK sa hodí na rôzne príležitosti – od eventov po každodenné využitie na pobočkách."
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary" />
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
            Dohodnite si konzultáciu a ukážeme vám, ako BLIK môže transformovať komunikáciu s vašimi klientmi.
          </p>
          <Link href="/kontakt">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Získať demo pre banky
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



