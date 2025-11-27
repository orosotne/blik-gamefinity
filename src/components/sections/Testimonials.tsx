'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';

const testimonials = [
  {
    quote: 'BLIK úplne zmenil spôsob, akým komunikujeme nové produkty klientom. Engagement sa zvýšil o 340% oproti tradičným materiálom.',
    author: 'Mária Kováčová',
    role: 'Marketing Manager',
    company: 'Slovenská banka',
    avatar: 'MK',
  },
  {
    quote: 'Študenti sú nadšení. Hra ich prirodzene vedie k objavovaniu študijných programov a my vidíme, čo ich skutočne zaujíma.',
    author: 'Peter Novák',
    role: 'Prorektor pre štúdium',
    company: 'Technická univerzita',
    avatar: 'PN',
  },
  {
    quote: 'Na firemnom evente sme použili BLIK ako icebreaker. Ľudia sa navzájom spoznávali a zároveň sa učili o našich hodnotách.',
    author: 'Jana Horváthová',
    role: 'HR Director',
    company: 'Tech Startup',
    avatar: 'JH',
  },
  {
    quote: 'Dashboard nám ukázal, že klienti sa najviac zaujímajú o produkty, ktoré sme doteraz nepropagovali. Game changer.',
    author: 'Tomáš Baláž',
    role: 'Product Owner',
    company: 'Poisťovňa Plus',
    avatar: 'TB',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section background="secondary" padding="lg">
      <SectionHeader
        badge="Referencie"
        title={
          <>
            Čo hovoria naši{' '}
            <span className="text-gradient">klienti</span>
          </>
        }
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-4 left-0 md:left-8 opacity-20">
            <Quote className="w-20 h-20 text-primary" />
          </div>

          {/* Testimonial */}
          <div className="relative bg-background-tertiary/50 rounded-3xl p-8 md:p-12 border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[current].author}</div>
                    <div className="text-sm text-foreground-secondary">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-border flex items-center justify-center transition-colors"
                aria-label="Predchádzajúca recenzia"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-border flex items-center justify-center transition-colors"
                aria-label="Ďalšia recenzia"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? 'w-8 bg-primary'
                    : 'bg-foreground-muted/30 hover:bg-foreground-muted/50'
                }`}
                aria-label={`Prejsť na recenziu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}



