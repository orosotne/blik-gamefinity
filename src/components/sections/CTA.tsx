'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground-secondary">
              Začnite s BLIK už dnes
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Pripravení zmeniť spôsob,{' '}
            <span className="text-gradient">ako komunikujete?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-secondary mb-10"
          >
            Dohodnite si konzultáciu a ukážeme vám, ako BLIK môže transformovať 
            vašu komunikáciu s klientmi alebo študentmi.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/kontakt">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Získať demo
              </Button>
            </Link>
            <Link href="/kontakt#kalendar">
              <Button variant="outline" size="lg" leftIcon={<Calendar className="w-5 h-5" />}>
                Naplánovať hovor
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-sm text-foreground-muted mb-4">Dôverujú nám</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {['Alfapureo', 'BAMIPA', 'Orostone', 'Renesančný Kaštieľ Bošany'].map((company) => (
                <div key={company} className="text-lg font-semibold text-foreground-secondary">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



