'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target, Users, Heart, Award, Lightbulb,
  ArrowRight, Linkedin
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui';

const values = [
  {
    icon: Lightbulb,
    title: 'Inovácia',
    description: 'Neustále hľadáme nové spôsoby, ako technológie môžu zlepšiť komunikáciu.',
  },
  {
    icon: Users,
    title: 'Spolupráca',
    description: 'Veríme v silu partnerstva. Každý projekt je výsledkom tímovej práce.',
  },
  {
    icon: Target,
    title: 'Výsledky',
    description: 'Zameriavame sa na merateľné výsledky a skutočnú hodnotu pre klientov.',
  },
  {
    icon: Heart,
    title: 'Vášeň',
    description: 'Milujeme to, čo robíme. A to vidieť v každom projekte.',
  },
];

const team = [
  {
    name: 'Martin Miškeje',
    role: 'CEO & Co-founder',
    bio: 'Zodpovedá za víziu BLIK a prepája AR, obchod a partnerstvá.',
    initials: 'MM',
    linkedin: 'https://www.linkedin.com/in/martin-miskeje-bamipa/',
    photo: '/images/o-nas/team/martin miškeje.png',
  },
  {
    name: 'Natalia Miškeje',
    role: 'CFO & Co-founder',
    bio: 'Vedie financie a operatívu, aby projekty bežali načas a v kvalite.',
    initials: 'NM',
    linkedin: 'https://www.linkedin.com/in/nataliakonecna/',
    photo: '/images/o-nas/team/natalia miškeje.png',
  },
  {
    name: 'Marian Brazdil',
    role: 'Head of Sales',
    bio: 'Stará sa o partnerstvá a prináša BLIK k bankám, školám a firmám.',
    initials: 'MB',
    linkedin: 'https://www.linkedin.com/in/marian-brazdil-333a9b97/',
    photo: '/images/o-nas/team/marian brazdil.png',
  },
  {
    name: 'Miloš Miškeje',
    role: 'Head of Design',
    bio: 'Formuje vizuálnu identitu hry aj AR vrstvy.',
    initials: 'MM',
    linkedin: null,
    photo: '/images/o-nas/team/miloš miškeje.jpg',
  },
];

const milestones = [
  { year: '2021', event: 'Založenie Gamefinity' },
  { year: '2022', event: 'Prvý klient - Slovenská banka' },
  { year: '2023', event: 'Rozšírenie do 5 odvetví' },
  { year: '2024', event: 'Launch BLIK 2.0 s pokročilým AR' },
  { year: '2025', event: 'Expanzia do Čiech a Rakúska' },
];

const clients = [
  'Alfapureo', 'BAMIPA', 'Orostone', 'Renesančný Kaštieľ Bošany'
];

export default function ONasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="accent" className="mb-6">O nás</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sme <span className="text-gradient">Gamefinity</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary mb-8">
              Vytvárame inovatívne riešenia, ktoré menia spôsob, akým firmy 
              komunikujú so svojimi klientmi a zamestnancami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <Section background="default" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-4">Naša misia</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformovať komunikáciu cez{' '}
              <span className="text-gradient">gamifikáciu</span>
            </h2>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              Veríme, že učenie a objavovanie môže byť zábavné. BLIK je dôkazom, 
              že hra dokáže komunikovať efektívnejšie než stovky prezentácií.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Spojili sme tradičnú stolovú hru s modernou AR technológiou a vytvorili 
              nástroj, ktorý mení pasívne publikum na aktívnych objaviteľov.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              {/* Nahraďte src vlastným obrázkom - napr. /images/o-nas/team.jpg */}
              <img 
                src="/images/o-nas/misia.png" 
                alt="Naša misia - BLIK tím" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section background="secondary" padding="lg">
        <SectionHeader
          badge="Hodnoty"
          title="Čo nás poháňa"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-foreground-secondary">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="default" padding="lg">
        <SectionHeader
          badge="Tím"
          title={
            <>
              Ľudia za <span className="text-gradient">BLIK</span>
            </>
          }
          description="Náš tím spája expertízu v technológiách, dizajne a obchode."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="text-center h-full">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">{member.initials}</span>
                  )}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-foreground-secondary mb-4">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-primary/10 transition-colors text-sm font-medium text-foreground-secondary"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    LinkedIn
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="gradient" padding="lg">
        <SectionHeader
          badge="História"
          title="Naša cesta"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  <Card variant="glass" className="inline-block">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    <p className="text-foreground-secondary">{milestone.event}</p>
                  </Card>
                </div>
                
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background-secondary" />
                
                <div className="flex-1 pl-12 md:pl-0">
                  <Card variant="glass" className="md:hidden">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    <p className="text-foreground-secondary">{milestone.event}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section background="secondary" padding="lg">
        <SectionHeader
          badge="Klienti"
          title="Dôverujú nám"
        />

        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-8 py-4 bg-white/5 rounded-xl border border-border"
            >
              <span className="text-lg font-semibold text-foreground-secondary">{client}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="default" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Staňte sa súčasťou príbehu
          </h2>
          <p className="text-foreground-secondary mb-8">
            Pripojte sa k našim klientom a transformujte komunikáciu s vaším publikom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Kontaktujte nás
              </Button>
            </Link>
            <Link href="/riesenia">
              <Button variant="outline" size="lg">
                Pozrieť riešenia
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}



