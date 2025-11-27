'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Shield, Mail, Building2, FileText, Eye, Trash2, 
  Download, Ban, Clock, Lock, Globe, AlertCircle,
  Cookie, Server, Users, ArrowRight
} from 'lucide-react';
import { Section, Card, Button, Badge } from '@/components/ui';

const sections = [
  { id: 'prevadzkovatel', title: '1. Prevádzkovateľ', icon: Building2 },
  { id: 'udaje', title: '2. Spracúvané údaje', icon: FileText },
  { id: 'ucel', title: '3. Účel a právny základ', icon: Eye },
  { id: 'prava', title: '4. Vaše práva', icon: Shield },
  { id: 'cookies', title: '5. Cookies', icon: Cookie },
  { id: 'doba', title: '6. Doba uchovávania', icon: Clock },
  { id: 'bezpecnost', title: '7. Bezpečnosť', icon: Lock },
  { id: 'tretie-strany', title: '8. Tretie strany', icon: Globe },
  { id: 'kontakt', title: '9. Kontakt', icon: Mail },
];

export default function OchranaOsobnychUdajovPage() {
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
            <Badge variant="primary" className="mb-6">GDPR</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ochrana <span className="text-gradient">osobných údajov</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary mb-4">
              Vaše súkromie je pre nás prioritou. Tu nájdete všetky informácie o tom, 
              ako spracúvame a chránime vaše osobné údaje.
            </p>
            
            <p className="text-sm text-foreground-muted">
              Posledná aktualizácia: 27. november 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <Section background="secondary" padding="md">
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section, index) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/50 transition-all text-sm"
            >
              <section.icon className="w-4 h-4 text-primary" />
              <span>{section.title}</span>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Content */}
      <Section background="default" padding="lg">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 1. Prevádzkovateľ */}
          <motion.div
            id="prevadzkovatel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">1. Prevádzkovateľ osobných údajov</h2>
            </div>
            
            <Card variant="glass">
              <p className="text-foreground-secondary mb-6">
                Prevádzkovateľom osobných údajov v zmysle Nariadenia Európskeho parlamentu a Rady (EÚ) 
                2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov (GDPR) a zákona 
                č. 18/2018 Z. z. o ochrane osobných údajov je:
              </p>
              
              <div className="bg-background-secondary rounded-xl p-6 space-y-3">
                <p className="text-xl font-bold">Orostone s.r.o.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-foreground-muted">Sídlo:</p>
                    <p>Landererova 8</p>
                    <p>811 09 Bratislava - mestská časť Staré Mesto</p>
                    <p>Slovenská republika</p>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-foreground-muted">IČO:</p>
                      <p className="font-medium">55254772</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">DIČ:</p>
                      <p className="font-medium">2121930580</p>
                    </div>
                    <div>
                      <p className="text-foreground-muted">IČ DPH:</p>
                      <p className="font-medium">SK2121930580</p>
                      <p className="text-xs text-foreground-muted">podľa §4, registrácia od 11.4.2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 2. Spracúvané údaje */}
          <motion.div
            id="udaje"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">2. Aké osobné údaje spracúvame</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Kontaktný formulár
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Keď nás kontaktujete prostredníctvom kontaktného formulára, spracúvame:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Meno a priezvisko</strong> – pre personalizovanú komunikáciu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>E-mailová adresa</strong> – pre odpoveď na váš dopyt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Názov spoločnosti</strong> – pre identifikáciu obchodného partnera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Dôvod kontaktovania</strong> – pre správne nasmerovanie vašej požiadavky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Text správy</strong> – obsah vašej požiadavky</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Technické údaje (automaticky)
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Pri návšteve webu automaticky zaznamenávame:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>IP adresa (anonymizovaná)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Typ prehliadača a operačného systému</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Dátum a čas prístupu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Navštívené stránky</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-primary" />
                  Marketing cookies
                </h3>
                <p className="text-foreground-secondary">
                  S vaším súhlasom používame marketingové cookies tretích strán (napr. Meta/Facebook Pixel) 
                  na meranie efektivity reklám a remarketingové účely. Viac informácií nájdete v sekcii Cookies.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* 3. Účel a právny základ */}
          <motion.div
            id="ucel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">3. Účel a právny základ spracovania</h2>
            </div>
            
            <Card variant="glass">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-2 font-semibold">Účel</th>
                      <th className="text-left py-4 px-2 font-semibold">Právny základ</th>
                      <th className="text-left py-4 px-2 font-semibold">Článok GDPR</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-2">Odpoveď na kontaktný formulár</td>
                      <td className="py-4 px-2">Oprávnený záujem</td>
                      <td className="py-4 px-2">čl. 6 ods. 1 písm. f)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-2">Obchodná komunikácia</td>
                      <td className="py-4 px-2">Plnenie zmluvy / Predzmluvné vzťahy</td>
                      <td className="py-4 px-2">čl. 6 ods. 1 písm. b)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-2">Marketing a reklama</td>
                      <td className="py-4 px-2">Súhlas</td>
                      <td className="py-4 px-2">čl. 6 ods. 1 písm. a)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2">Technická prevádzka webu</td>
                      <td className="py-4 px-2">Oprávnený záujem</td>
                      <td className="py-4 px-2">čl. 6 ods. 1 písm. f)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* 4. Vaše práva */}
          <motion.div
            id="prava"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">4. Vaše práva ako dotknutej osoby</h2>
            </div>
            
            <p className="text-foreground-secondary mb-6">
              Podľa GDPR (čl. 15-22) máte nasledujúce práva, ktoré môžete kedykoľvek uplatniť:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Eye, title: 'Právo na prístup', desc: 'Môžete požiadať o kópiu všetkých údajov, ktoré o vás spracúvame.' },
                { icon: FileText, title: 'Právo na opravu', desc: 'Ak sú vaše údaje nesprávne alebo neúplné, môžete požiadať o ich opravu.' },
                { icon: Trash2, title: 'Právo na vymazanie', desc: 'Môžete požiadať o vymazanie vašich údajov ("právo byť zabudnutý").' },
                { icon: Download, title: 'Právo na prenosnosť', desc: 'Môžete získať vaše údaje v štruktúrovanom formáte.' },
                { icon: Ban, title: 'Právo namietať', desc: 'Môžete namietať proti spracúvaniu na základe oprávneného záujmu.' },
                { icon: Clock, title: 'Právo na obmedzenie', desc: 'Môžete požiadať o dočasné obmedzenie spracovania vašich údajov.' },
              ].map((right) => (
                <Card key={right.title} variant="outline" className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <right.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{right.title}</h3>
                      <p className="text-sm text-foreground-secondary">{right.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card variant="gradient" className="mt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Právo odvolať súhlas</h3>
                  <p className="text-foreground-secondary text-sm">
                    Ak spracúvame vaše údaje na základe súhlasu (napr. marketing cookies), 
                    máte právo tento súhlas kedykoľvek odvolať bez uvedenia dôvodu. 
                    Odvolanie súhlasu nemá vplyv na zákonnosť spracovania pred jeho odvolaním.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 5. Cookies */}
          <motion.div
            id="cookies"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">5. Cookies a sledovacie technológie</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">Čo sú cookies?</h3>
                <p className="text-foreground-secondary">
                  Cookies sú malé textové súbory, ktoré sa ukladajú do vášho zariadenia pri návšteve webu. 
                  Pomáhajú nám zlepšovať funkčnosť stránky a poskytovať lepší používateľský zážitok.
                </p>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">Typy cookies, ktoré používame</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Nevyhnutné cookies</span>
                      <Badge variant="accent">Vždy aktívne</Badge>
                    </div>
                    <p className="text-sm text-foreground-secondary">
                      Potrebné pre základnú funkčnosť webu. Bez nich by stránka nefungovala správne.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Marketingové cookies</span>
                      <Badge variant="secondary">Vyžaduje súhlas</Badge>
                    </div>
                    <p className="text-sm text-foreground-secondary mb-3">
                      Používame Meta (Facebook) Pixel na meranie efektivity reklám a zobrazovanie 
                      relevantných reklám na platformách Meta.
                    </p>
                    <div className="text-xs text-foreground-muted">
                      Poskytovateľ: Meta Platforms, Inc. (USA) • 
                      <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                        Zásady ochrany osobných údajov Meta
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">Ako spravovať cookies?</h3>
                <p className="text-foreground-secondary mb-4">
                  Cookies môžete kedykoľvek zakázať alebo vymazať v nastaveniach vášho prehliadača:
                </p>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• <strong>Chrome:</strong> Nastavenia → Ochrana súkromia a zabezpečenie → Cookies</li>
                  <li>• <strong>Firefox:</strong> Nastavenia → Súkromie a zabezpečenie → Cookies</li>
                  <li>• <strong>Safari:</strong> Predvoľby → Súkromie → Cookies</li>
                  <li>• <strong>Edge:</strong> Nastavenia → Cookies a povolenia stránok</li>
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* 6. Doba uchovávania */}
          <motion.div
            id="doba"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">6. Doba uchovávania údajov</h2>
            </div>
            
            <Card variant="glass">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-2 font-semibold">Typ údajov</th>
                      <th className="text-left py-4 px-2 font-semibold">Doba uchovávania</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground-secondary">
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-2">Údaje z kontaktného formulára</td>
                      <td className="py-4 px-2">Po dobu komunikácie + 3 roky (premlčacia lehota)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-2">Obchodná korešpondencia</td>
                      <td className="py-4 px-2">10 rokov (účtovné predpisy)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-2">Marketing cookies</td>
                      <td className="py-4 px-2">Do odvolania súhlasu alebo max. 2 roky</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2">Technické logy</td>
                      <td className="py-4 px-2">90 dní</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* 7. Bezpečnosť */}
          <motion.div
            id="bezpecnost"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">7. Bezpečnosť údajov</h2>
            </div>
            
            <Card variant="glass">
              <p className="text-foreground-secondary mb-6">
                Implementovali sme primerané technické a organizačné opatrenia na ochranu vašich osobných údajov:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'SSL/TLS šifrovanie prenosu dát',
                  'Zabezpečené servery s obmedzeným prístupom',
                  'Pravidelné zálohovanie dát',
                  'Školenie zamestnancov o ochrane údajov',
                  'Prístup len pre oprávnené osoby',
                  'Monitorovanie bezpečnostných incidentov',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* 8. Tretie strany */}
          <motion.div
            id="tretie-strany"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">8. Príjemcovia a tretie strany</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">Zdieľanie údajov</h3>
                <p className="text-foreground-secondary mb-4">
                  Vaše osobné údaje môžeme zdieľať s nasledujúcimi kategóriami príjemcov:
                </p>
                <ul className="space-y-3 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Poskytovatelia IT služieb</strong> – hosting, e-mailové služby</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Marketingové platformy</strong> – Meta Platforms (Facebook Pixel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Štátne orgány</strong> – ak to vyžaduje zákon</span>
                  </li>
                </ul>
              </Card>

              <Card variant="gradient">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Prenos údajov do tretích krajín</h3>
                    <p className="text-foreground-secondary text-sm">
                      Pri používaní služieb Meta (Facebook Pixel) môže dochádzať k prenosu údajov do USA. 
                      Meta je certifikovaná v rámci EU-U.S. Data Privacy Framework, ktorý zabezpečuje 
                      primeranú úroveň ochrany osobných údajov v súlade s požiadavkami EÚ.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* 9. Kontakt */}
          <motion.div
            id="kontakt"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">9. Kontakt a sťažnosti</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">Kontakt na prevádzkovateľa</h3>
                <p className="text-foreground-secondary mb-4">
                  Pre uplatnenie vašich práv alebo akékoľvek otázky týkajúce sa ochrany osobných údajov nás kontaktujte:
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@gamefinity.sk" 
                    className="flex items-center gap-3 p-3 bg-background-secondary rounded-xl hover:bg-primary/10 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@gamefinity.sk</span>
                  </a>
                  <div className="flex items-start gap-3 p-3 bg-background-secondary rounded-xl">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p>Orostone s.r.o.</p>
                      <p className="text-foreground-muted">Landererova 8, 811 09 Bratislava</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">Podanie sťažnosti</h3>
                <p className="text-foreground-secondary mb-4">
                  Ak nie ste spokojný so spôsobom, akým spracúvame vaše osobné údaje, máte právo podať sťažnosť dozornému orgánu:
                </p>
                <div className="p-4 bg-background-secondary rounded-xl">
                  <p className="font-medium mb-2">Úrad na ochranu osobných údajov SR</p>
                  <div className="text-sm text-foreground-secondary space-y-1">
                    <p>Hraničná 12</p>
                    <p>820 07 Bratislava 27</p>
                    <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      dataprotection.gov.sk
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* CTA */}
      <Section background="secondary" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Máte otázky?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Ak máte akékoľvek otázky ohľadom spracovania vašich osobných údajov, 
            neváhajte nás kontaktovať.
          </p>
          <Link href="/kontakt">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Kontaktujte nás
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}




