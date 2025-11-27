'use client';

import { motion } from 'framer-motion';
import { 
  CreditCard, Home, PiggyBank, Wallet, TrendingUp, Shield,
  Heart, Car, Plane, Briefcase, GraduationCap, BookOpen,
  Users, Building2, Lightbulb, Target, Trophy, Gift,
  MapPin, Camera, Compass, Mountain, UtensilsCrossed, Ticket,
  Landmark, Clock, Lock, Key, Star, Zap,
  Globe, Smartphone, Wifi, Cloud, Database, Settings
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';

const symbolCategories = [
  {
    name: 'Finančné služby',
    color: '#0066FF',
    icons: [CreditCard, Home, PiggyBank, Wallet, TrendingUp, Landmark],
  },
  {
    name: 'Poistenie',
    color: '#FF6B4A',
    icons: [Shield, Heart, Car, Plane, Briefcase, Lock],
  },
  {
    name: 'Vzdelávanie',
    color: '#9333EA',
    icons: [GraduationCap, BookOpen, Lightbulb, Target, Trophy, Star],
  },
  {
    name: 'Firemné',
    color: '#F59E0B',
    icons: [Users, Building2, Settings, Key, Clock, Gift],
  },
  {
    name: 'Cestovný ruch',
    color: '#10B981',
    icons: [MapPin, Camera, Compass, Mountain, UtensilsCrossed, Ticket],
  },
  {
    name: 'Technológie',
    color: '#06B6D4',
    icons: [Globe, Smartphone, Wifi, Cloud, Database, Zap],
  },
];

export default function Symbols() {
  return (
    <Section background="default" padding="lg">
      <SectionHeader
        badge="57 Symbolov"
        title={
          <>
            Až <span className="text-gradient">57 unikátnych symbolov</span> pre vašu komunikáciu
          </>
        }
        description="Každý symbol môže reprezentovať iný produkt, službu alebo tému. Ku každému sa dajú nahrať vlastné AR objekty, voiceover aj prekliky."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {symbolCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: catIndex * 0.1 }}
            className="bg-background-secondary/50 rounded-2xl p-6 border border-border hover:border-foreground-muted/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <h3 className="font-semibold">{category.name}</h3>
            </div>
            
            <div className="grid grid-cols-6 gap-2">
              {category.icons.map((Icon, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: catIndex * 0.1 + iconIndex * 0.03 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: category.color }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">57</div>
            <div className="text-sm text-foreground-secondary">Symbolov</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-warm">57</div>
            <div className="text-sm text-foreground-secondary">Kariet v sade</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: '#00D9A6' }}>∞</div>
            <div className="text-sm text-foreground-secondary">Možností</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}



