'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  Shield, 
  GraduationCap, 
  Building2, 
  Plane, 
  CreditCard, 
  Home, 
  PiggyBank,
  Briefcase,
  Heart,
  Car,
  BookOpen,
  Users,
  Trophy,
  MapPin,
  Camera,
  Sparkles
} from 'lucide-react';

interface Symbol {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
  category: 'bank' | 'insurance' | 'school' | 'company' | 'travel';
}

const symbols: Symbol[] = [
  { id: '1', name: 'Bežný účet', icon: CreditCard, color: '#0066FF', description: 'Správa vašich financií', category: 'bank' },
  { id: '2', name: 'Hypotéka', icon: Home, color: '#0066FF', description: 'Cesta k vlastnému bývaniu', category: 'bank' },
  { id: '3', name: 'Investície', icon: PiggyBank, color: '#00D9A6', description: 'Zhodnoťte svoje úspory', category: 'bank' },
  { id: '4', name: 'Životné poistenie', icon: Heart, color: '#FF6B4A', description: 'Ochrana pre vás a rodinu', category: 'insurance' },
  { id: '5', name: 'Autopoist.', icon: Car, color: '#FF6B4A', description: 'PZP a havarijné', category: 'insurance' },
  { id: '6', name: 'Študijný program', icon: BookOpen, color: '#9333EA', description: 'Vzdelávací obsah', category: 'school' },
  { id: '7', name: 'Teambuilding', icon: Users, color: '#F59E0B', description: 'Firemné aktivity', category: 'company' },
  { id: '8', name: 'Destinácia', icon: MapPin, color: '#10B981', description: 'Objavte nové miesta', category: 'travel' },
];

// 3D Cube Component - renders a rotating cube with icon on each face
function Cube3D({ icon: Icon, color, size = 80 }: { icon: React.ElementType; color: string; size?: number }) {
  const half = size / 2;
  
  const faceStyle = (transform: string): React.CSSProperties => ({
    position: 'absolute',
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(135deg, ${color}30 0%, ${color}15 100%)`,
    border: `1px solid ${color}40`,
    borderRadius: 12,
    backfaceVisibility: 'visible',
    transform,
  });

  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Front */}
      <div style={faceStyle(`translateZ(${half}px)`)}>
        <Icon style={{ color, width: size * 0.5, height: size * 0.5 }} />
      </div>
      {/* Back */}
      <div style={faceStyle(`rotateY(180deg) translateZ(${half}px)`)}>
        <Icon style={{ color, width: size * 0.5, height: size * 0.5 }} />
      </div>
      {/* Right */}
      <div style={faceStyle(`rotateY(90deg) translateZ(${half}px)`)}>
        <Icon style={{ color, width: size * 0.5, height: size * 0.5 }} />
      </div>
      {/* Left */}
      <div style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`)}>
        <Icon style={{ color, width: size * 0.5, height: size * 0.5 }} />
      </div>
      {/* Top */}
      <div style={faceStyle(`rotateX(90deg) translateZ(${half}px)`)}>
        <Icon style={{ color, width: size * 0.5, height: size * 0.5 }} />
      </div>
      {/* Bottom */}
      <div style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`)}>
        <Icon style={{ color, width: size * 0.5, height: size * 0.5 }} />
      </div>
    </div>
  );
}

interface ARCardPreviewProps {
  category?: 'all' | 'bank' | 'insurance' | 'school' | 'company' | 'travel';
}

export default function ARCardPreview({ category = 'all' }: ARCardPreviewProps) {
  const [activeSymbol, setActiveSymbol] = useState<Symbol | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const filteredSymbols = category === 'all' 
    ? symbols 
    : symbols.filter(s => s.category === category);

  const handleCardClick = (symbol: Symbol) => {
    setIsScanning(true);
    setActiveSymbol(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setActiveSymbol(symbol);
    }, 800);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Phone Frame */}
      <div className="relative mx-auto w-[300px] md:w-[360px]">
        {/* Phone body */}
        <div className="relative bg-[#1a1a1a] rounded-[40px] p-2 shadow-2xl">
          {/* Screen */}
          <div className="relative bg-background-secondary rounded-[32px] overflow-hidden aspect-[9/16]">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-20 flex items-center justify-center">
              <div className="w-20 h-6 bg-black rounded-full" />
            </div>

            {/* Camera view simulation */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-tertiary to-background flex items-center justify-center">
              {/* Scanning overlay */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-30"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-48 h-48 border-2 border-primary rounded-lg"
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(0, 102, 255, 0.4)',
                            '0 0 0 20px rgba(0, 102, 255, 0)',
                          ],
                        }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </div>
                    <motion.div
                      className="absolute left-0 right-0 h-0.5 bg-primary"
                      initial={{ top: '20%' }}
                      animate={{ top: '80%' }}
                      transition={{ duration: 0.8, ease: 'linear' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Card in camera view */}
              <div className="relative w-40 h-56 md:w-48 md:h-64">
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 backdrop-blur-sm">
                  <div className="absolute inset-4 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center"
                      animate={activeSymbol ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {activeSymbol ? (
                        <activeSymbol.icon 
                          className="w-8 h-8 md:w-10 md:h-10" 
                          style={{ color: activeSymbol.color }}
                        />
                      ) : (
                        <Camera className="w-8 h-8 md:w-10 md:h-10 text-foreground-muted" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* AR 3D Object */}
                <AnimatePresence>
                  {activeSymbol && !isScanning && (
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.5 }}
                      animate={{ opacity: 1, y: -60, scale: 1 }}
                      exit={{ opacity: 0, y: 50, scale: 0.5 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center"
                    >
                      {/* 3D floating cube container */}
                      <motion.div
                        className="relative"
                        animate={{ 
                          y: [0, -8, 0],
                          rotateY: [0, 360],
                          rotateX: [0, 15, 0, -15, 0],
                        }}
                        transition={{ 
                          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
                          rotateY: { duration: 6, repeat: Infinity, ease: 'linear' },
                          rotateX: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        style={{ 
                          perspective: 800,
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {/* 3D Cube */}
                        <div 
                          className="relative"
                          style={{ 
                            filter: `drop-shadow(0 20px 40px ${activeSymbol.color}50)`,
                          }}
                        >
                          <Cube3D 
                            icon={activeSymbol.icon} 
                            color={activeSymbol.color} 
                            size={70}
                          />
                          
                          {/* Sparkle effects */}
                          <Sparkles 
                            className="absolute -top-3 -right-3 w-5 h-5 text-white animate-pulse" 
                          />
                          <Sparkles 
                            className="absolute -bottom-2 -left-2 w-4 h-4 text-white/60 animate-pulse" 
                            style={{ animationDelay: '0.5s' }}
                          />
                        </div>
                      </motion.div>

                      {/* Info bubble - BELOW the cube, not overlapping */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 bg-background-secondary/95 backdrop-blur-xl rounded-lg px-4 py-2 border border-border text-center"
                        style={{
                          boxShadow: `0 8px 32px ${activeSymbol.color}20`,
                        }}
                      >
                        <p className="text-xs font-semibold text-foreground">{activeSymbol.name}</p>
                        <p className="text-[10px] text-foreground-secondary">{activeSymbol.description}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AR UI Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-center">
                  <p className="text-xs text-foreground-secondary mb-1">
                    {activeSymbol ? 'AR objekt detekovaný' : 'Namierte na kartu'}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {activeSymbol ? activeSymbol.name : 'BLIK skener'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phone reflection */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-gradient-to-b from-white/5 to-transparent blur-xl rounded-full" />
      </div>

      {/* Symbol cards */}
      <div className="mt-12 md:mt-16">
        <p className="text-center text-sm text-foreground-secondary mb-6">
          Kliknite na symbol pre ukážku AR
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {filteredSymbols.map((symbol, index) => (
            <motion.button
              key={symbol.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleCardClick(symbol)}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-xl border transition-all duration-300 flex items-center justify-center group ${
                activeSymbol?.id === symbol.id
                  ? 'bg-white/10 border-primary shadow-lg shadow-primary/20'
                  : 'bg-background-secondary border-border hover:border-foreground-muted'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <symbol.icon 
                className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                  activeSymbol?.id === symbol.id ? '' : 'text-foreground-secondary group-hover:text-foreground'
                }`}
                style={{ color: activeSymbol?.id === symbol.id ? symbol.color : undefined }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}



