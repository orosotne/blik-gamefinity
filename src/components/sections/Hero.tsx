'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, Zap, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Elegant gradient blur effects with subtle animation */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Blue glow - top left - slow drift animation */}
        <div 
          className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-40 animate-glow-drift-1"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.4) 0%, rgba(0, 102, 255, 0.1) 40%, transparent 70%)',
          }}
        />
        {/* Coral/Orange glow - bottom right - slow drift animation */}
        <div 
          className="absolute -bottom-20 -right-40 w-[600px] h-[600px] rounded-full opacity-30 animate-glow-drift-2"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 74, 0.4) 0%, rgba(255, 107, 74, 0.1) 40%, transparent 70%)',
          }}
        />
        {/* Subtle center accent - gentle pulse */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 animate-glow-pulse"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 217, 166, 0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nová úroveň gamifikácie</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Stolová hra s{' '}
            <span className="text-gradient">rozšírenou realitou</span>
            {' '}pre vašu značku
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto mb-10"
          >
            BLIK je gamifikovaný komunikačný nástroj, kde hráči hľadajú zhodné symboly 
            a objavujú vaše produkty a služby cez AR vrstvu. Navrhnuté pre banky, 
            poisťovne, školy a firmy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/kontakt">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Získať demo
              </Button>
            </Link>
            <Link href="/ako-to-funguje">
              <Button variant="outline" size="lg" leftIcon={<Play className="w-5 h-5" />}>
                Pozrieť ako to funguje
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Zap, value: '57', label: 'Unikátnych symbolov' },
              { icon: Users, value: '2-8', label: 'Hráčov na hru' },
              { icon: BarChart3, value: '100%', label: 'Customizácia' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-border mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ============================================= */}
      {/* LAYER 1: LARGE BACKGROUND SYMBOLS (behind text) */}
      {/* ============================================= */}
      <div className="absolute inset-0 pointer-events-none z-[0] hidden lg:block">
        {/* Domček - veľký, rozmazaný, za textom vľavo */}
        <motion.div
          className="absolute left-[8%] xl:left-[12%] top-[20%] w-40 h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 opacity-25 animate-float-slow"
          style={{ 
            filter: 'blur(3px) drop-shadow(0 30px 40px rgba(0, 102, 255, 0.3))',
            '--rotate': '-8deg'
          } as React.CSSProperties}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img src="/images/cards/card(3).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Prasiatko - veľké, rozmazané, za textom vpravo */}
        <motion.div
          className="absolute right-[5%] xl:right-[10%] top-[35%] w-44 h-44 lg:w-56 lg:h-56 xl:w-72 xl:h-72 opacity-20 animate-float-slow"
          style={{ 
            filter: 'blur(4px) drop-shadow(0 30px 40px rgba(255, 107, 74, 0.25))',
            '--rotate': '10deg',
            animationDelay: '1s'
          } as React.CSSProperties}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img src="/images/cards/card(6).png" alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      {/* ============================================= */}
      {/* LAYER 2: MEDIUM SYMBOLS (mid-layer, slight blur) */}
      {/* ============================================= */}
      <div className="absolute inset-0 pointer-events-none z-[2] hidden lg:block">
        {/* Koník - stredný, ľahký blur, vpravo hore */}
        <motion.div
          className="absolute right-[3%] xl:right-[5%] 2xl:right-[7%] top-[8%] w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 animate-float-medium"
          style={{ 
            filter: 'blur(1px) drop-shadow(0 20px 30px rgba(0, 102, 255, 0.35))',
            '--rotate': '12deg',
            animationDelay: '0.5s'
          } as React.CSSProperties}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.6, type: 'spring' }}
        >
          <img src="/images/cards/card(4).png" alt="Bezpečnosť" className="w-full h-full object-contain" />
        </motion.div>

        {/* Symboly poistenie - stredný, vľavo */}
        <motion.div
          className="absolute left-[2%] xl:left-[4%] 2xl:left-[6%] top-[32%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 animate-float-medium"
          style={{ 
            filter: 'blur(0.5px) drop-shadow(0 15px 25px rgba(255, 107, 74, 0.3))',
            '--rotate': '5deg',
            animationDelay: '1.5s'
          } as React.CSSProperties}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.8, type: 'spring' }}
        >
          <img src="/images/cards/card(3).png" alt="Poistenie" className="w-full h-full object-contain" />
        </motion.div>

        {/* Symboly investície - stredný, vpravo dole */}
        <motion.div
          className="absolute right-[4%] xl:right-[6%] 2xl:right-[8%] top-[62%] w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 animate-float-medium"
          style={{ 
            filter: 'blur(0.5px) drop-shadow(0 15px 25px rgba(0, 217, 166, 0.3))',
            '--rotate': '-8deg',
            animationDelay: '2s'
          } as React.CSSProperties}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 1, delay: 1.0, type: 'spring' }}
        >
          <img src="/images/cards/card(7).png" alt="Investície" className="w-full h-full object-contain" />
        </motion.div>

        {/* Symboly vzdelávanie - stredný, vľavo dole */}
        <motion.div
          className="absolute left-[3%] xl:left-[5%] 2xl:left-[7%] top-[68%] w-24 h-24 lg:w-30 lg:h-30 xl:w-36 xl:h-36 animate-float-medium"
          style={{ 
            filter: 'blur(0.5px) drop-shadow(0 15px 25px rgba(255, 255, 255, 0.15))',
            '--rotate': '-6deg',
            animationDelay: '0.8s'
          } as React.CSSProperties}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.85 }}
          transition={{ duration: 1, delay: 1.2, type: 'spring' }}
        >
          <img src="/images/cards/card(8).png" alt="Vzdelávanie" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      {/* ============================================= */}
      {/* LAYER 3: SMALL SHARP SYMBOLS (foreground, no blur) */}
      {/* ============================================= */}
      <div className="absolute inset-0 pointer-events-none z-[3] hidden lg:block">
        {/* Domček malý - ostrý, vľavo hore */}
        <motion.div
          className="absolute left-[1%] xl:left-[2%] 2xl:left-[3%] top-[12%] w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 animate-float-fast"
          style={{ 
            filter: 'drop-shadow(0 15px 20px rgba(0, 102, 255, 0.4))',
            '--rotate': '-15deg'
          } as React.CSSProperties}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
        >
          <img src="/images/cards/card(11).png" alt="Hypotéky" className="w-full h-full object-contain" />
        </motion.div>

        {/* Prasiatko malé - ostré, vpravo stred */}
        <motion.div
          className="absolute right-[1%] xl:right-[2%] 2xl:right-[3%] top-[38%] w-18 h-18 lg:w-22 lg:h-22 xl:w-26 xl:h-26 animate-float-fast"
          style={{ 
            filter: 'drop-shadow(0 12px 18px rgba(255, 107, 74, 0.4))',
            '--rotate': '-10deg',
            animationDelay: '0.3s'
          } as React.CSSProperties}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
        >
          <img src="/images/cards/card(6).png" alt="Sporenie" className="w-full h-full object-contain" />
        </motion.div>

        {/* Chlapec s kartou - ostrý, vľavo stred-dole */}
        <motion.div
          className="absolute left-[0%] xl:left-[1%] 2xl:left-[2%] top-[52%] w-18 h-18 lg:w-24 lg:h-24 xl:w-28 xl:h-28 animate-float-fast"
          style={{ 
            filter: 'drop-shadow(0 12px 18px rgba(0, 217, 166, 0.35))',
            '--rotate': '8deg',
            animationDelay: '0.6s'
          } as React.CSSProperties}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: 'spring' }}
        >
          <img src="/images/cards/card(5).png" alt="Platby" className="w-full h-full object-contain" />
        </motion.div>

        {/* Koník malý - ostrý, vpravo dole */}
        <motion.div
          className="absolute right-[2%] xl:right-[3%] 2xl:right-[4%] top-[78%] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 animate-float-fast"
          style={{ 
            filter: 'drop-shadow(0 10px 15px rgba(0, 102, 255, 0.35))',
            '--rotate': '15deg',
            animationDelay: '0.9s'
          } as React.CSSProperties}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, type: 'spring' }}
        >
          <img src="/images/cards/card(4).png" alt="Bezpečnosť" className="w-full h-full object-contain" />
        </motion.div>
      </div>
    </section>
  );
}
