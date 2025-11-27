'use client';

import { motion } from 'framer-motion';
import { FileX, Presentation, Mail, Gamepad2, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';

const problems = [
  {
    icon: FileX,
    title: 'Letáky končia v koši',
    description: 'Tradičné materiály majú minimálnu zapamätateľnosť a engagement.',
  },
  {
    icon: Presentation,
    title: 'Prezentácie nudia',
    description: 'Ďalšia PowerPoint prezentácia nepritiahne pozornosť publika.',
  },
  {
    icon: Mail,
    title: 'Emaily sa nečítajú',
    description: 'Priemerná open rate firemných emailov je len 21%.',
  },
];

const solutions = [
  {
    icon: Gamepad2,
    title: 'Zábava a engagement',
    description: 'Hráči sú aktívne zapojení a sústredení na obsah.',
  },
  {
    icon: Sparkles,
    title: 'Nezabudnuteľný zážitok',
    description: 'AR vrstva vytvára WOW efekt a silnú pamäťovú stopu.',
  },
  {
    icon: TrendingUp,
    title: 'Merateľné výsledky',
    description: 'Dashboard ukazuje, čo vašich klientov skutočne zaujíma.',
  },
];

export default function ProblemSolution() {
  return (
    <Section background="secondary" padding="lg">
      <SectionHeader
        badge="Prečo BLIK?"
        title={
          <>
            Namiesto ďalšieho letáku dajte klientom{' '}
            <span className="text-gradient">zážitok</span>
          </>
        }
        description="Tradičná komunikácia už nefunguje. BLIK mení pasívne publikum na aktívnych objaviteľov vašej značky."
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Problém
            </span>
          </div>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant="outline" className="flex gap-4 items-start border-secondary/20 hover:border-secondary/40">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                    <p className="text-sm text-foreground-secondary">{problem.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Riešenie BLIK
            </span>
          </div>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <Card variant="gradient" className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{solution.title}</h3>
                    <p className="text-sm text-foreground-secondary">{solution.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="hidden md:flex justify-center mt-12"
      >
        <div className="flex items-center gap-4 text-foreground-muted">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-foreground-muted" />
          <ArrowRight className="w-5 h-5" />
          <span className="text-sm">Transformácia komunikácie</span>
          <ArrowRight className="w-5 h-5" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-foreground-muted" />
        </div>
      </motion.div>
    </Section>
  );
}



