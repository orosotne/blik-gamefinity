'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layers, Star, Link2, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, Card, Button } from '@/components/ui';

const features = [
  {
    icon: Layers,
    number: '57',
    label: 'kariet',
  },
  {
    icon: Star,
    number: '57',
    label: 'symbolov',
  },
  {
    icon: Link2,
    number: '1',
    label: 'spoločný',
  },
];

export default function GameIntro() {
  return (
    <Section background="secondary" padding="lg">
      <SectionHeader
        badge="Čo je BLIK?"
        title={
          <>
            Rýchla postrehová{' '}
            <span className="text-gradient">kartová hra</span>
          </>
        }
        description="BLIK je jednoduchá, no návyková hra postavená na jednom pravidle: medzi ľubovoľnými dvoma kartami je vždy práve jeden spoločný symbol. Tvoja úloha? Nájsť ho prvý."
      />

      <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="glass" className="text-center py-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {feature.number}
              </div>
              <div className="text-sm text-foreground-secondary">
                {feature.label}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <Link href="/ako-sa-hra">
          <Button variant="outline" size="lg">
            Zisti viac o pravidlách
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}





