'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GraduationCap, BookOpen, Lightbulb, Trophy, Users, Star,
  ArrowRight, CheckCircle2, Calendar, MapPin, Award, Sparkles
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';

const products = [
  { icon: GraduationCap, name: 'Študijné odbory', description: 'Bakalárske a magisterské' },
  { icon: BookOpen, name: 'Kurzy', description: 'Krátkodobé vzdelávanie' },
  { icon: Lightbulb, name: 'Projekty', description: 'Výskumné aktivity' },
  { icon: Trophy, name: 'Certifikáty', description: 'Profesijné osvedčenia' },
  { icon: Users, name: 'Študentský život', description: 'Kluby a organizácie' },
  { icon: Star, name: 'Úspechy', description: 'Alumni a absolventov' },
];

const benefits = [
  'Interaktívna prezentácia študijných programov',
  'Študenti objavujú odbory, o ktorých nevedeli',
  'Ideálne pre dni otvorených dverí',
  'Zvýšenie záujmu o štúdium o 52%',
];

const useCases = [
  {
    title: 'Deň otvorených dverí',
    description: 'Záujemcovia o štúdium spoznajú ponuku školy interaktívne.',
    icon: Calendar,
  },
  {
    title: 'Orientácia prvákov',
    description: 'Noví študenti sa zorientujú na kampuse a v štúdiu.',
    icon: MapPin,
  },
  {
    title: 'Kariérne dni',
    description: 'Prepojenie štúdia s praxou a pracovnými príležitosťami.',
    icon: Award,
  },
  {
    title: 'Vedecké festivaly',
    description: 'Prezentácia výskumu a projektov zábavnou formou.',
    icon: Sparkles,
  },
];

export default function SkolyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-[#9333EA]/10 text-[#9333EA] border-[#9333EA]/20">Pre školy</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vzdelávanie v{' '}
                <span style={{ background: 'linear-gradient(135deg, #9333EA 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  novej dimenzii
                </span>
              </h1>
              
              <p className="text-lg text-foreground-secondary mb-8">
                Študijné programy, kurzy a projekty prezentované interaktívne. 
                Študenti objavujú možnosti, o ktorých by sa inak nedozvedeli.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="bg-gradient-to-r from-[#9333EA] to-[#9333EA]/80" rightIcon={<ArrowRight className="w-5 h-5" />}>
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
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#9333EA]/20 rounded-full blur-[100px]" />
              <div className="relative grid grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-background-secondary/80 backdrop-blur-sm rounded-xl p-4 border border-border text-center hover:border-[#9333EA]/30 transition-all"
                  >
                    <product.icon className="w-8 h-8 mx-auto mb-2" style={{ color: '#9333EA' }} />
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
          title="BLIK pre školy"
          description="Vizualizujte študijné programy v rozšírenej realite."
        />
        <ARCardPreview category="school" />
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(147, 51, 234, 0.1)' }}>
                    <useCase.icon className="w-6 h-6" style={{ color: '#9333EA' }} />
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
            Pripravení inovovať vzdelávanie?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Dohodnite si konzultáciu a ukážeme vám BLIK v akcii.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-gradient-to-r from-[#9333EA] to-[#9333EA]/80" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Získať demo pre školy
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



