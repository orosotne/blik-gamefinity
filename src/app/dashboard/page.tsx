'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BarChart3, Users, Eye, MousePointerClick, TrendingUp, Clock,
  ArrowRight, Sparkles, Download, Filter, Calendar, Lock,
  CreditCard, Home, PiggyBank, Shield, Heart, GraduationCap
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';

// Mock data for the dashboard
const stats = [
  { label: 'Celkové skenovania', value: '12,847', change: '+23%', icon: Eye },
  { label: 'Unikátni používatelia', value: '3,241', change: '+18%', icon: Users },
  { label: 'Prekliky na web', value: '1,892', change: '+31%', icon: MousePointerClick },
  { label: 'Priem. čas v AR', value: '2:34', change: '+12%', icon: Clock },
];

const topSymbols = [
  { name: 'Hypotéky', scans: 2341, clicks: 456, icon: Home, color: '#0066FF' },
  { name: 'Investície', scans: 1987, clicks: 389, icon: PiggyBank, color: '#00D9A6' },
  { name: 'Bežný účet', scans: 1654, clicks: 312, icon: CreditCard, color: '#0066FF' },
  { name: 'Životné poist.', scans: 1432, clicks: 287, icon: Heart, color: '#FF6B4A' },
  { name: 'Autopoist.', scans: 1298, clicks: 254, icon: Shield, color: '#FF6B4A' },
  { name: 'Študijné prog.', scans: 1123, clicks: 198, icon: GraduationCap, color: '#9333EA' },
];

const weeklyData = [
  { day: 'Po', scans: 1234 },
  { day: 'Ut', scans: 1456 },
  { day: 'St', scans: 1678 },
  { day: 'Št', scans: 1543 },
  { day: 'Pi', scans: 1890 },
  { day: 'So', scans: 987 },
  { day: 'Ne', scans: 876 },
];

const maxScans = Math.max(...weeklyData.map(d => d.scans));

const features = [
  {
    title: 'Real-time Analytics',
    description: 'Sledujte engagement v reálnom čase. Vidíte, ktoré symboly sú práve skenované.',
  },
  {
    title: 'Export dát',
    description: 'Exportujte dáta do CSV alebo pripojte cez API do vašich systémov.',
  },
  {
    title: 'Segmentácia',
    description: 'Filtrujte dáta podľa času, lokality, zariadenia alebo kampane.',
  },
  {
    title: 'Porovnanie',
    description: 'Porovnajte výkon rôznych symbolov a obsahu.',
  },
];

export default function DashboardPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="primary" className="mb-6">Dashboard</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Merateľné <span className="text-gradient">výsledky</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary mb-8">
              Prehľadný dashboard vám ukáže, koľko ľudí si ktorý symbol otvorilo, 
              na čo klikali a čo ich najviac zaujalo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <Section background="default" padding="lg">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-1">BLIK Analytics</h2>
              <p className="text-foreground-secondary">Posledných 30 dní</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" leftIcon={<Calendar className="w-4 h-4" />}>
                Dátum
              </Button>
              <Button variant="outline" size="sm" leftIcon={<Filter className="w-4 h-4" />}>
                Filter
              </Button>
              <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>
                Export
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <Card key={stat.label} variant="glass" className="text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-foreground-secondary mb-2">{stat.label}</div>
                <div className="text-xs text-accent font-medium">{stat.change}</div>
              </Card>
            ))}
          </motion.div>

          {/* Main Dashboard Area */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card variant="glass">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Skenovania za týždeň</h3>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent">+15% oproti minulému týždňu</span>
                  </div>
                </div>
                
                {/* Simple Bar Chart */}
                <div className="flex items-end justify-between gap-2 h-48">
                  {weeklyData.map((data, index) => (
                    <motion.div
                      key={data.day}
                      className="flex-1 flex flex-col items-center gap-2"
                      initial={{ height: 0 }}
                      whileInView={{ height: 'auto' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div className="text-xs text-foreground-muted">{data.scans}</div>
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-primary-light rounded-t-md transition-all hover:opacity-80"
                        style={{ height: `${(data.scans / maxScans) * 150}px` }}
                      />
                      <div className="text-xs text-foreground-secondary">{data.day}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Top Symbols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="glass" className="h-full">
                <h3 className="font-semibold mb-4">Top symboly</h3>
                <div className="space-y-4">
                  {topSymbols.slice(0, 5).map((symbol, index) => (
                    <div key={symbol.name} className="flex items-center gap-3">
                      <div className="text-sm text-foreground-muted w-4">{index + 1}.</div>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${symbol.color}20` }}
                      >
                        <symbol.icon className="w-4 h-4" style={{ color: symbol.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{symbol.name}</div>
                        <div className="text-xs text-foreground-muted">
                          {symbol.scans.toLocaleString()} skenov
                        </div>
                      </div>
                      <div className="text-xs text-accent">{symbol.clicks} klikov</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Premium Features Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <Card variant="gradient" className="relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm bg-background/50 z-10 flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold mb-2">Premium Analytics</p>
                  <p className="text-sm text-foreground-secondary mb-4">
                    Geografické rozloženie, heatmapy a pokročilé metriky
                  </p>
                  <Link href="/kontakt">
                    <Button size="sm">Kontaktujte nás</Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-8 opacity-30">
                <div className="h-32 bg-background-tertiary rounded-xl" />
                <div className="h-32 bg-background-tertiary rounded-xl" />
                <div className="h-32 bg-background-tertiary rounded-xl" />
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Features */}
      <Section background="secondary" padding="lg">
        <SectionHeader
          badge="Funkcie"
          title={
            <>
              Všetko čo potrebujete <span className="text-gradient">vedieť</span>
            </>
          }
          description="Dashboard poskytuje komplexný prehľad o tom, ako vaši klienti interagujú s hrou."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground-secondary">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="default" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chcete vidieť dashboard naživo?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Ukážeme vám, ako vyzerá reálny dashboard s dátami od našich klientov.
          </p>
          <Link href="/kontakt">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Dohodnúť ukážku
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}



