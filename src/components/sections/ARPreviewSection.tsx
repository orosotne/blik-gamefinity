'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';
import { ArrowDown } from 'lucide-react';

export default function ARPreviewSection() {
  const scrollToReal = () => {
    const element = document.getElementById('ar-real');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Section background="secondary" padding="lg">
      <SectionHeader
        badge="Interaktívna ukážka"
        title={
          <>
            Ako vyzerá{' '}
            <span className="text-gradient">AR v praxi</span>
          </>
        }
        description="Toto je ilustrácia, ako AR funguje. Skutočný zážitok spustíte naskenovaním QR kódu z fyzickej karty BLIK."
      />
      
      {/* Desktop hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8 -mt-4"
      >
        <button 
          onClick={scrollToReal}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium group"
        >
          <span>Ste na desktope? Prejdite na skutočnú AR ukážku</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>

      <ARCardPreview category="all" />
    </Section>
  );
}



