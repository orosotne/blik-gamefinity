'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Landmark, Shield, GraduationCap, Building2, Plane, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';

const industries = [
  {
    icon: Landmark,
    name: 'Banky',
    slug: 'banky',
    description: 'Účty, hypotéky, investície, vernostné programy',
    color: '#0066FF',
    examples: ['Bežné účty', 'Sporenie', 'Hypotéky', 'Investície'],
  },
  {
    icon: Shield,
    name: 'Poisťovne',
    slug: 'poistovne',
    description: 'Životné, majetkové, cestovné poistenie',
    color: '#FF6B4A',
    examples: ['Životné', 'Autopoist.', 'Cestovné', 'Majetkové'],
  },
  {
    icon: GraduationCap,
    name: 'Školy',
    slug: 'skoly',
    description: 'Študijné programy, kurzy, vzdelávací obsah',
    color: '#9333EA',
    examples: ['Študijné odbory', 'Kurzy', 'E-learning', 'Certifikáty'],
  },
  {
    icon: Building2,
    name: 'Firmy',
    slug: 'firmy',
    description: 'Interná komunikácia, teambuilding, produkty',
    color: '#F59E0B',
    examples: ['Onboarding', 'Teambuilding', 'Produkty', 'Hodnoty'],
  },
  {
    icon: Plane,
    name: 'Cestovný ruch',
    slug: 'cestovny-ruch',
    description: 'Destinácie, služby, atrakcie, zážitky',
    color: '#10B981',
    examples: ['Destinácie', 'Hotely', 'Atrakcie', 'Zážitky'],
  },
];

export default function Industries() {
  return (
    <Section background="gradient" padding="lg">
      <SectionHeader
        badge="Pre koho"
        title={
          <>
            Riešenie <span className="text-gradient">šité na mieru</span> vášmu odvetviu
          </>
        }
        description="BLIK sa prispôsobí vášmu podnikaniu. Namiesto všeobecných symbolov sa zobrazujú konkrétne veci z vášho sveta."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={`/riesenia/${industry.slug}`}>
              <Card 
                variant="glass" 
                className="h-full group cursor-pointer hover:border-foreground-muted/30"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${industry.color}20` }}
                >
                  <industry.icon className="w-7 h-7" style={{ color: industry.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {industry.name}
                </h3>
                <p className="text-foreground-secondary mb-4">{industry.description}</p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {industry.examples.map((example) => (
                    <span
                      key={example}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-foreground-muted"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  <span>Zistiť viac</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}



