'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import Link from 'next/link';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    // Here you would typically initialize analytics/marketing based on preferences
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing cookies
      console.log('Marketing cookies enabled');
    }
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    savePreferences(defaultPreferences);
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-background-secondary/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
            {!showSettings ? (
              // Main Banner
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      🍪 Používame cookies
                    </h3>
                    <p className="text-sm text-foreground-secondary mb-4 leading-relaxed">
                      Táto stránka používa cookies na zlepšenie vášho zážitku. Nevyhnutné cookies 
                      zabezpečujú základné funkcie. Analytické a marketingové cookies nám pomáhajú 
                      pochopiť, ako stránku používate.{' '}
                      <Link href="/ochrana-osobnych-udajov" className="text-primary hover:underline">
                        Viac informácií
                      </Link>
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={acceptAll}
                        className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Prijať všetky
                      </button>
                      <button
                        onClick={acceptNecessary}
                        className="px-5 py-2.5 bg-white/10 text-foreground rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-border"
                      >
                        Len nevyhnutné
                      </button>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-5 py-2.5 text-foreground-secondary rounded-full text-sm font-medium hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Nastavenia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Nastavenia cookies
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-border">
                    <div>
                      <h4 className="font-medium text-foreground">Nevyhnutné cookies</h4>
                      <p className="text-sm text-foreground-secondary mt-1">
                        Potrebné pre základné fungovanie stránky. Vždy aktívne.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-primary/30 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-border">
                    <div>
                      <h4 className="font-medium text-foreground">Analytické cookies</h4>
                      <p className="text-sm text-foreground-secondary mt-1">
                        Pomáhajú nám pochopiť, ako používate stránku.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-primary/30 justify-end' : 'bg-white/10 justify-start'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-colors ${
                        preferences.analytics ? 'bg-primary' : 'bg-white/40'
                      }`} />
                    </button>
                  </div>
                  
                  {/* Marketing Cookies */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-border">
                    <div>
                      <h4 className="font-medium text-foreground">Marketingové cookies</h4>
                      <p className="text-sm text-foreground-secondary mt-1">
                        Používané na personalizovanú reklamu.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-primary/30 justify-end' : 'bg-white/10 justify-start'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-primary' : 'bg-white/40'
                      }`} />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={saveCustom}
                    className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Uložiť nastavenia
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-white/10 text-foreground rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-border"
                  >
                    Prijať všetky
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}




