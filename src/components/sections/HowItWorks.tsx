'use client';

import { motion } from 'framer-motion';
import { QrCode, Smartphone, Box, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';

const steps = [
  {
    number: '01',
    icon: QrCode,
    title: 'Naskenujte QR kód',
    description: 'Hráč naskenuje QR kód na krabici alebo kartách, ktorý otvorí AR prostredie priamo v prehliadači.',
    color: 'primary',
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Namierte na kartu',
    description: 'Mobil namierte na kartu so symbolom. Aplikácia rozpozná symbol a pripraví AR obsah.',
    color: 'secondary',
  },
  {
    number: '03',
    icon: Box,
    title: 'Objavte AR svet',
    description: 'Nad kartou sa zobrazí 3D animácia, produkt alebo interaktívna scéna s vaším obsahom.',
    color: 'accent',
  },
];

export default function HowItWorks() {
  return (
    <Section background="secondary" padding="lg">
      <SectionHeader
        badge="Ako to funguje"
        title={
          <>
            Tri jednoduché kroky k{' '}
            <span className="text-gradient">AR zážitku</span>
          </>
        }
        description="BLIK využíva WebAR technológiu - žiadna aplikácia na stiahnutie, funguje priamo v prehliadači."
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Connection line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card */}
              <div className="relative bg-background-secondary/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-foreground-muted/30 transition-all group">
                {/* Step number */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-background-tertiary rounded-full border border-border">
                  <span className="text-sm font-bold text-foreground-muted">{step.number}</span>
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all ${
                    step.color === 'primary'
                      ? 'bg-primary/10 group-hover:bg-primary/20'
                      : step.color === 'secondary'
                      ? 'bg-secondary/10 group-hover:bg-secondary/20'
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <step.icon
                    className={`w-8 h-8 ${
                      step.color === 'primary'
                        ? 'text-primary'
                        : step.color === 'secondary'
                        ? 'text-secondary'
                        : 'text-accent'
                    }`}
                  />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">{step.description}</p>

                {/* Arrow to next */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-background-tertiary border border-border flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-foreground-muted" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-border">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-foreground-secondary">
            Žiadna inštalácia potrebná • Funguje na iOS aj Android • WebAR technológia
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

