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
      {/* POZADIE: 4 VEĽKÉ KARTY ZA TEXTOM - RÔZNY BLUR */}
      {/* Hĺbka cez rôzne úrovne rozmazania */}
      {/* ============================================= */}
      <div className="absolute inset-0 pointer-events-none z-[0] hidden lg:block overflow-hidden">
        
        {/* Karta 1 - Vľavo hore - JEMNÝ BLUR (bližšie) */}
        <motion.div
          className="absolute left-[8%] xl:left-[12%] top-[18%] w-40 h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 opacity-20 animate-float-slow"
          style={{ 
            filter: 'blur(4px)',
            '--rotate': '-10deg'
          } as React.CSSProperties}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.20 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <img src="/images/cards/card(1).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Karta 2 - Vpravo hore - JEMNÝ BLUR (bližšie) */}
        <motion.div
          className="absolute right-[10%] xl:right-[15%] top-[8%] w-56 h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 opacity-10 animate-float-slow"
          style={{ 
            filter: 'blur(3px)',
            '--rotate': '6deg',
            animationDelay: '2s'
          } as React.CSSProperties}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.10 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <img src="/images/cards/card(4).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Karta 3 - Vľavo dole - STREDNÝ BLUR */}
        <motion.div
          className="absolute left-[5%] xl:left-[10%] top-[52%] w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 opacity-15 animate-float-slow"
          style={{ 
            filter: 'blur(7px)',
            '--rotate': '12deg',
            animationDelay: '1s'
          } as React.CSSProperties}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <img src="/images/cards/card(6).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Karta 4 - Vpravo dole - VEĽMI JEMNÝ BLUR (najbližšie) */}
        <motion.div
          className="absolute right-[8%] xl:right-[14%] top-[48%] w-44 h-44 lg:w-60 lg:h-60 xl:w-72 xl:h-72 opacity-18 animate-float-slow"
          style={{ 
            filter: 'blur(3px)',
            '--rotate': '-8deg',
            animationDelay: '3s'
          } as React.CSSProperties}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.18 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <img src="/images/cards/card(7).png" alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      {/* ============================================= */}
      {/* POPREDIE: 4 OSTRÉ KARTY - RÔZNE VEĽKOSTI */}
      {/* Ďalej od okrajov, organické rozloženie */}
      {/* ============================================= */}
      <div className="absolute inset-0 pointer-events-none z-[2] hidden lg:block">
        
        {/* Karta vľavo hore - VEĽKÁ */}
        <motion.div
          className="absolute left-[4%] xl:left-[6%] 2xl:left-[8%] top-[15%] w-28 h-28 lg:w-40 lg:h-40 xl:w-48 xl:h-48 animate-float-slow"
          style={{ 
            filter: 'drop-shadow(0 25px 50px rgba(0, 102, 255, 0.35))',
            '--rotate': '-12deg'
          } as React.CSSProperties}
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring', stiffness: 60 }}
        >
          <img src="/images/cards/card(3).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Karta vpravo hore - STREDNÁ */}
        <motion.div
          className="absolute right-[5%] xl:right-[7%] 2xl:right-[9%] top-[10%] w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 animate-float-medium"
          style={{ 
            filter: 'drop-shadow(0 20px 40px rgba(255, 107, 74, 0.3))',
            '--rotate': '8deg',
            animationDelay: '0.8s'
          } as React.CSSProperties}
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, type: 'spring', stiffness: 60 }}
        >
          <img src="/images/cards/card(5).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Karta vľavo dole - MALÁ */}
        <motion.div
          className="absolute left-[6%] xl:left-[8%] 2xl:left-[10%] top-[58%] w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 animate-float-fast"
          style={{ 
            filter: 'drop-shadow(0 15px 30px rgba(0, 217, 166, 0.3))',
            '--rotate': '15deg',
            animationDelay: '1.2s'
          } as React.CSSProperties}
          initial={{ y: 80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: 'spring', stiffness: 70 }}
        >
          <img src="/images/cards/card(8).png" alt="" className="w-full h-full object-contain" />
        </motion.div>

        {/* Karta vpravo dole - VEĽKÁ */}
        <motion.div
          className="absolute right-[4%] xl:right-[6%] 2xl:right-[8%] top-[55%] w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 animate-float-slow"
          style={{ 
            filter: 'drop-shadow(0 25px 50px rgba(0, 102, 255, 0.3))',
            '--rotate': '-10deg',
            animationDelay: '0.5s'
          } as React.CSSProperties}
          initial={{ y: 80, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.0, type: 'spring', stiffness: 60 }}
        >
          <img src="/images/cards/card(9).png" alt="" className="w-full h-full object-contain" />
        </motion.div>
      </div>
    </section>
  );
}

