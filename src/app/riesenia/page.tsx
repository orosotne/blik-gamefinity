'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Landmark, Shield, GraduationCap, Building2, Plane, ArrowRight, Sparkles } from 'lucide-react';
import { Section, SectionHeader, Card, Button } from '@/components/ui';

const solutions = [
  {
    icon: Landmark,
    name: 'Pre banky',
    slug: 'banky',
    description: 'Prezentujte finančné produkty interaktívnym spôsobom. Účty, hypotéky, investície a vernostné programy ožijú cez AR.',
    color: '#0066FF',
    features: ['Produktové portfólio', 'Finančná gramotnosť', 'Vernostné programy', 'Onboarding klientov'],
    stats: { engagement: '+340%', recall: '78%', conversion: '+45%' },
  },
  {
    icon: Shield,
    name: 'Pre poisťovne',
    slug: 'poistovne',
    description: 'Vysvetlite komplexné poistné produkty zrozumiteľne. Od životného po cestovné poistenie.',
    color: '#FF6B4A',
    features: ['Životné poistenie', 'Autopoist.', 'Cestovné poistenie', 'Majetkové poistenie'],
    stats: { engagement: '+290%', recall: '72%', conversion: '+38%' },
  },
  {
    icon: GraduationCap,
    name: 'Pre školy',
    slug: 'skoly',
    description: 'Predstavte študijné programy a kurzy novým spôsobom. Ideálne pre dni otvorených dverí.',
    color: '#9333EA',
    features: ['Študijné odbory', 'E-learning', 'Orientácia kampusom', 'Certifikáty'],
    stats: { engagement: '+420%', recall: '85%', conversion: '+52%' },
  },
  {
    icon: Building2,
    name: 'Pre firmy',
    slug: 'firmy',
    description: 'Teambuilding, onboarding alebo prezentácia firemných hodnôt. BLIK zapojí každého zamestnanca.',
    color: '#F59E0B',
    features: ['Onboarding', 'Teambuilding', 'Firemné hodnoty', 'Produktové školenia'],
    stats: { engagement: '+380%', recall: '81%', conversion: '+48%' },
  },
  {
    icon: Plane,
    name: 'Cestovný ruch',
    slug: 'cestovny-ruch',
    description: 'Destinácie, hotely a atrakcie v AR. Dovolenka začína už pri hraní.',
    color: '#10B981',
    features: ['Destinácie', 'Hotelové služby', 'Atrakcie', 'Lokálne zážitky'],
    stats: { engagement: '+310%', recall: '76%', conversion: '+41%' },
  },
];

export default function RieseniaPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Riešenia pre každé odvetvie</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              BLIK pre <span className="text-gradient">vašu branžu</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary">
              Namiesto všeobecných symbolov sa nad kartami zobrazujú konkrétne veci z vášho sveta. 
              Vyberte si riešenie pre vaše odvetvie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <Section background="default" padding="lg">
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/riesenia/${solution.slug}`}>
                <Card 
                  variant="glass" 
                  className="group cursor-pointer hover:border-foreground-muted/30 overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Left - Info */}
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-5">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${solution.color}20` }}
                        >
                          <solution.icon className="w-8 h-8" style={{ color: solution.color }} />
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                            {solution.name}
                          </h2>
                          <p className="text-foreground-secondary mb-4">{solution.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {solution.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-3 py-1 text-sm rounded-full bg-white/5 text-foreground-muted"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right - Stats */}
                    <div className="flex md:flex-col gap-4 md:gap-2 md:text-right">
                      <div>
                        <div className="text-2xl font-bold" style={{ color: solution.color }}>
                          {solution.stats.engagement}
                        </div>
                        <div className="text-xs text-foreground-muted">Engagement</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {solution.stats.recall}
                        </div>
                        <div className="text-xs text-foreground-muted">Zapamätateľnosť</div>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-2xl font-bold text-accent">
                          {solution.stats.conversion}
                        </div>
                        <div className="text-xs text-foreground-muted">Konverzia</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="secondary" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neviete, ktoré riešenie je pre vás?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Kontaktujte nás a spoločne nájdeme najlepší spôsob, ako využiť BLIK vo vašej organizácii.
          </p>
          <Link href="/kontakt">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Konzultácia zadarmo
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



