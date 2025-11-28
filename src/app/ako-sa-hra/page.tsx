'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Layers, 
  Star, 
  Link2, 
  Eye, 
  Search, 
  Hand, 
  Zap, 
  Timer, 
  RefreshCw, 
  Target, 
  Gift,
  CheckCircle,
  XCircle,
  Lightbulb,
  Palette,
  MessageCircle,
  GraduationCap,
  Brain,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Section, SectionHeader, Card, Button } from '@/components/ui';

// Čo je BLIK - hlavné body
const whatIsBlik = [
  {
    icon: Layers,
    title: '57 kariet',
    description: 'V balíčku nájdeš presne 57 kariet, každá s unikátnou kombináciou symbolov.',
  },
  {
    icon: Star,
    title: '57 symbolov',
    description: 'Každý symbol je unikátny a má svoj význam - od produktov po hodnoty značky.',
  },
  {
    icon: Link2,
    title: '1 spoločný',
    description: 'Medzi ľubovoľnými dvoma kartami je VŽDY práve jeden spoločný symbol.',
  },
];

// Základný princíp - kroky
const basicSteps = [
  {
    icon: Eye,
    step: 1,
    title: 'Odhalenie',
    description: 'Dve karty sa ocitnú pred hráčmi - jedna v strede, druhá tvoja.',
  },
  {
    icon: Search,
    step: 2,
    title: 'Hľadanie',
    description: 'Očami skenuješ obe karty a hľadáš ten jeden spoločný symbol.',
  },
  {
    icon: Hand,
    step: 3,
    title: 'Akcia',
    description: 'Prvý kto nájde, nahlas zakričí meno symbolu a ukáže naň prstom.',
  },
];

// Herné režimy
const gameModes = [
  {
    icon: Zap,
    name: 'BLESK',
    tagline: 'Zbieraj a vyhraj',
    description: 'Klasická verzia. Karta v strede, každý hľadá zhodu. Kto nájde prvý, berie kartu. Kto má najviac kariet, vyhráva.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Timer,
    name: 'SPRINT',
    tagline: 'Zbav sa prvý',
    description: 'Opačný cieľ. Máš kôpku kariet a snažíš sa ich čo najrýchlejšie umiestniť do stredu. Kto sa zbaví všetkých prvý, vyhráva.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: RefreshCw,
    name: 'KOLOTOČ',
    tagline: 'Posúvaj ďalej',
    description: 'Hrá sa v kruhu. Hľadáš zhodu medzi svojou kartou a kartou suseda. Nájdeš? Posúvaš kartu jemu. Nechceš skončiť s najviac kartami.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    name: 'RADAR',
    tagline: 'Zameriavaj terče',
    description: 'Okolo stredovej karty sú rozložené ďalšie. Hľadáš zhodu so stredovou a berieš vonkajšie karty. Strategická verzia pre pokročilých.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gift,
    name: 'BOMBA',
    tagline: 'Daruj súperom',
    description: 'Škodoradostná verzia. Hľadáš zhodu medzi stredovou kartou a kartou SÚPERA. Nájdeš? "Daruješ" mu kartu zo stredu.',
    color: 'from-red-500 to-rose-500',
  },
];

// Pravidlá fair play
const fairPlayRules = [
  {
    icon: CheckCircle,
    title: 'Platný bod',
    items: [
      'Správny symbol (musí byť na oboch kartách)',
      'Nahlas pomenovaný (ostatní musia počuť)',
      'Ukázaný prstom (jednoznačne identifikovaný)',
    ],
    positive: true,
  },
  {
    icon: XCircle,
    title: 'Penalta za zlý tip',
    items: [
      'Vezmeš si 1 kartu navyše',
      'Alebo preskočíš ďalšie kolo',
      'Podľa dohody pred hrou',
    ],
    positive: false,
  },
];

// Tipy pre hráčov
const playerTips = [
  {
    icon: Brain,
    title: 'Nepanikár',
    description: 'Ak sa všetci prekrikujú, ľahko stratíš hlavu. Sústreď sa len na dve karty pred sebou.',
  },
  {
    icon: Palette,
    title: 'Hľadaj podľa farieb',
    description: 'Vidíš na svojej karte niečo výrazne modré? Hľadaj modrú na druhej karte. Farby sú rýchlejšie ako tvary.',
  },
  {
    icon: MessageCircle,
    title: 'Pomenuj ako vieš',
    description: 'Nevieš ako sa to volá? Povedz "to zelené" alebo "ten kruh". Hlavne ukáž prstom na správny symbol.',
  },
];

// Prečo je BLIK špeciálny
const whySpecial = [
  {
    icon: GraduationCap,
    title: 'Každý symbol = obsah',
    description: '57 symbolov = 57 tém. Bankové produkty, firemné hodnoty, bezpečnostné pravidlá - všetko sa dá zakódovať do hry.',
  },
  {
    icon: Brain,
    title: 'Pamäť cez emócie',
    description: 'Hráč si nepamätá prezentáciu. Pamätá si moment víťazstva + symbol. Učenie cez zážitok.',
  },
  {
    icon: Sparkles,
    title: 'AR rozšírenie',
    description: 'Po nájdení symbolu môžeš spustiť AR vrstvu - video, 3D model, kvíz. Hra sa stáva interaktívnym školením.',
  },
];

export default function AkoSaHraPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="xl" className="pt-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Pravidlá hry
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ako sa hrá{' '}
            <span className="text-gradient">BLIK</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground-secondary mb-8"
          >
            57 kariet. 57 symbolov. Jeden spoločný.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8"
          >
            BLIK je rýchla postrehová kartová hra, kde hľadáš spoločný symbol medzi kartami. 
            Jednoduchý princíp, nekonečná zábava a efektívny spôsob ako sa učiť hrou.
          </motion.p>
        </div>
      </Section>

      {/* Čo je BLIK */}
      <Section background="default" padding="xl">
        <SectionHeader
          badge="Základy"
          title={<>Čo je <span className="text-gradient">BLIK</span></>}
          description="Tri veci, ktoré potrebuješ vedieť pred prvou hrou."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {whatIsBlik.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground-secondary">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Zlaté pravidlo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card variant="gradient" className="text-center py-8 px-6">
            <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              ✨ Zlaté pravidlo
            </div>
            <h3 className="text-xl md:text-2xl font-bold max-w-2xl mx-auto">
              Medzi ľubovoľnými dvoma kartami je{' '}
              <span className="text-gradient">VŽDY práve jeden</span>{' '}
              spoločný symbol. Tvoja úloha? Nájsť ho prvý.
            </h3>
          </Card>
        </motion.div>
      </Section>

      {/* Základný princíp */}
      <Section background="secondary" padding="xl">
        <SectionHeader
          badge="Ako hrať"
          title="Základný princíp"
          description="Tri kroky k víťazstvu. Tak jednoduché, že to zvládne každý."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {basicSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < basicSteps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <Card variant="outline" className="text-center h-full relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground-secondary">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Herné režimy */}
      <Section background="default" padding="xl">
        <SectionHeader
          badge="5 spôsobov hrania"
          title={<>Herné <span className="text-gradient">režimy</span></>}
          description="Jeden balíček, päť rôznych hier. Vyber si podľa nálady a počtu hráčov."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameModes.map((mode, index) => (
            <motion.div
              key={mode.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card variant="glass" className="h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-4`}>
                  <mode.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{mode.name}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-foreground-secondary">
                    {mode.tagline}
                  </span>
                </div>
                <p className="text-foreground-secondary text-sm">{mode.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vizuálny príklad */}
      <Section background="secondary" padding="xl">
        <SectionHeader
          badge="Ukážka"
          title="Ako to vyzerá v hre"
          description="Vizuálny príklad hľadania spoločného symbolu."
        />

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Karta A */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="outline" className="text-center">
              <div className="text-sm font-medium text-foreground-muted mb-3">Karta v strede</div>
              <div className="grid grid-cols-3 gap-3 p-4 bg-white/5 rounded-xl">
                <div className="aspect-square rounded-lg bg-primary/20 flex items-center justify-center text-2xl">🏠</div>
                <div className="aspect-square rounded-lg bg-accent/20 flex items-center justify-center text-5xl">🔒</div>
                <div className="aspect-square rounded-lg bg-secondary/20 flex items-center justify-center text-xl">📊</div>
                <div className="aspect-square rounded-lg bg-primary/20 flex items-center justify-center text-xl">💡</div>
                <div className="aspect-square rounded-lg bg-accent/20 flex items-center justify-center text-2xl">🎯</div>
                <div className="aspect-square rounded-lg bg-secondary/20 flex items-center justify-center text-xl">⭐</div>
              </div>
            </Card>
          </motion.div>

          {/* Karta B */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="outline" className="text-center">
              <div className="text-sm font-medium text-foreground-muted mb-3">Tvoja karta</div>
              <div className="grid grid-cols-3 gap-3 p-4 bg-white/5 rounded-xl">
                <div className="aspect-square rounded-lg bg-primary/20 flex items-center justify-center text-xl">📱</div>
                <div className="aspect-square rounded-lg bg-accent/20 flex items-center justify-center text-2xl">💳</div>
                <div className="aspect-square rounded-lg bg-secondary/20 flex items-center justify-center text-xl">🔑</div>
                <div className="aspect-square rounded-lg bg-green-500/30 border-2 border-green-500 flex items-center justify-center text-xl">🔒</div>
                <div className="aspect-square rounded-lg bg-accent/20 flex items-center justify-center text-xl">📈</div>
                <div className="aspect-square rounded-lg bg-secondary/20 flex items-center justify-center text-2xl">🛡️</div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Vysvetlenie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center max-w-2xl mx-auto"
        >
          <Card variant="gradient" className="py-6">
            <p className="text-lg">
              Spoločný symbol je{' '}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-bold">
                🔒 Zámok
              </span>
            </p>
            <p className="text-foreground-secondary mt-2">
              Zakričíš <strong>"Zámok!"</strong> a ukážeš prstom → Získavaš bod!
            </p>
            <p className="text-sm text-foreground-muted mt-4">
              💡 Všimni si: Na jednej karte je zámok veľký, na druhej menší. 
              Stále je to ten istý symbol - na toto si dávaj pozor!
            </p>
          </Card>
        </motion.div>
      </Section>

      {/* Pravidlá fair play */}
      <Section background="default" padding="lg">
        <SectionHeader
          badge="Fair play"
          title="Pravidlá hry"
          description="Aby nevznikali hádky - jasné pravidlá pre všetkých."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {fairPlayRules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                variant="outline" 
                className={`h-full ${rule.positive ? 'border-green-500/30' : 'border-red-500/30'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    rule.positive ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    <rule.icon className={`w-5 h-5 ${rule.positive ? 'text-green-500' : 'text-red-500'}`} />
                  </div>
                  <h3 className="text-lg font-bold">{rule.title}</h3>
                </div>
                <ul className="space-y-2">
                  {rule.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground-secondary">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        rule.positive ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tipy pre hráčov */}
      <Section background="secondary" padding="lg">
        <SectionHeader
          badge="Pre začiatočníkov"
          title={<>Tipy pre <span className="text-gradient">hráčov</span></>}
          description="Tri rady, ktoré ti pomôžu vyhrávať častejšie."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {playerTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                <p className="text-foreground-secondary text-sm">{tip.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Prečo je BLIK špeciálny */}
      <Section background="default" padding="lg">
        <SectionHeader
          badge="57/57 výhoda"
          title={<>Prečo je BLIK <span className="text-gradient">špeciálny</span></>}
          description="Nie je to len hra. Je to nástroj na vzdelávanie a budovanie značky."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {whySpecial.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="gradient" className="h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-foreground-secondary text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pripravený vyskúšať BLIK?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground-secondary mb-8"
          >
            Dohodnite si ukážku a uvidíte BLIK naživo. Ukážeme vám všetky herné režimy aj AR vrstvu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/kontakt">
              <Button size="lg">
                Dohodnúť ukážku
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                Späť na úvod
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

