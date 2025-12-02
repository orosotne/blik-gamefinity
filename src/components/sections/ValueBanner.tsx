'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';
import { Section, Card } from '@/components/ui';

export default function ValueBanner() {
  return (
    <Section background="default" padding="lg">
      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Budujte <span className="text-gradient">lojálnych zákazníkov</span>, ktorí sa vracajú
        </h2>
        <p className="text-lg text-foreground-secondary leading-relaxed">
          Vytvorte nezabudnuteľný zážitok, ktorý prepája fyzický a digitálny svet
        </p>
      </motion.div>

      {/* AR Try Section */}
      <motion.div
        id="ar-real"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {/* Subheading */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <Smartphone className="w-4 h-4" />
            Vyskúšajte AR vrstvu
          </span>
        </div>

        {/* AR Demo - Side by Side Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* QR Code Card - Smaller */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Card variant="glass" className="p-4 text-center">
              <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 mb-3 rounded-xl overflow-hidden bg-white p-2">
                <img 
                  src="/images/ar-try/qr-code.png" 
                  alt="QR kód pre AR" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                        <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
              <h3 className="font-semibold text-sm mb-1">Naskenujte QR kód</h3>
              <p className="text-xs text-foreground-secondary">
                Otvorte kameru
              </p>
            </Card>
          </motion.div>

          {/* Animated Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white hidden md:block" />
              <ArrowRight className="w-4 h-4 text-white md:hidden rotate-90" />
            </motion.div>
          </motion.div>

          {/* Card Image - Larger & More Prominent */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full md:w-auto"
          >
            <Card variant="glass" className="p-6 md:p-8 text-center border-primary/20 shadow-xl shadow-primary/10">
              <div className="relative mx-auto w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border border-white/10">
                <img 
                  src="/images/ar-try/card.png" 
                  alt="BLIK karta" 
                  className="w-full h-full object-contain p-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center p-6">
                        <div class="grid grid-cols-3 gap-3 mb-4">
                          <div class="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center text-xl">🏠</div>
                          <div class="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center text-xl">💳</div>
                          <div class="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center text-xl">🔒</div>
                          <div class="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center text-xl">📱</div>
                          <div class="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center text-xl">⭐</div>
                          <div class="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center text-xl">🎯</div>
                        </div>
                        <p class="text-sm text-foreground-muted font-medium">BLIK karta</p>
                      </div>
                    `;
                  }}
                />
              </div>
              <h3 className="font-bold text-lg mb-1 mt-4">Namierte na kartu</h3>
              <p className="text-sm text-foreground-secondary">
                Sledujte AR zážitok
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-foreground-muted text-sm">
            💡 Po naskenovaní QR kódu namierte kameru na kartu a sledujte, ako ožije v AR
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
