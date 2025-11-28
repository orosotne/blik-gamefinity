'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileText, Building2, ShoppingCart, CreditCard, Truck, 
  RotateCcw, Shield, Scale, AlertCircle, BookOpen,
  Users, Mail, Phone, ArrowRight, CheckCircle2, Package
} from 'lucide-react';
import { Section, Card, Button, Badge } from '@/components/ui';

const sections = [
  { id: 'zakladne', title: '1. Základné ustanovenia', icon: Building2 },
  { id: 'predmet', title: '2. Predmet zmluvy', icon: Package },
  { id: 'objednavka', title: '3. Objednávka', icon: ShoppingCart },
  { id: 'cena', title: '4. Cena a platba', icon: CreditCard },
  { id: 'dodanie', title: '5. Dodacie podmienky', icon: Truck },
  { id: 'odstupenie', title: '6. Odstúpenie od zmluvy', icon: RotateCcw },
  { id: 'reklamacie', title: '7. Reklamácie a záruka', icon: Shield },
  { id: 'licencia', title: '8. Licencia a IP', icon: BookOpen },
  { id: 'zodpovednost', title: '9. Zodpovednosť', icon: Scale },
  { id: 'zaverecne', title: '10. Záverečné ustanovenia', icon: FileText },
];

export default function ObchodnePodmienkyPage() {
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
            <Badge variant="accent" className="mb-6">Právne informácie</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Obchodné <span className="text-gradient">podmienky</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary mb-4">
              Všeobecné obchodné podmienky upravujúce vzťahy medzi predávajúcim a kupujúcim 
              pri predaji produktov a poskytovaní služieb BLIK.
            </p>
            
            <p className="text-sm text-foreground-muted">
              Účinné od: 27. november 2024
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
          
          {/* 1. Základné ustanovenia */}
          <motion.div
            id="zakladne"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">1. Základné ustanovenia</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">1.1 Predávajúci</h3>
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
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border mt-4 grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-foreground-muted">Email:</p>
                      <a href="mailto:info@gamefinity.sk" className="text-primary hover:underline">info@gamefinity.sk</a>
                    </div>
                    <div>
                      <p className="text-foreground-muted">Telefón:</p>
                      <a href="tel:+421917588738" className="text-primary hover:underline">+421 917 588 738</a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">1.2 Definície pojmov</h3>
                <div className="space-y-4 text-foreground-secondary">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p><strong>Kupujúci</strong> – fyzická alebo právnická osoba, ktorá vstupuje do zmluvného vzťahu s predávajúcim</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p><strong>Spotrebiteľ</strong> – fyzická osoba, ktorá nakupuje tovar alebo služby pre osobnú potrebu, nie pre podnikateľskú činnosť</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p><strong>Podnikateľ</strong> – osoba, ktorá nakupuje tovar alebo služby v rámci svojej podnikateľskej činnosti</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p><strong>Tovar</strong> – fyzický produkt BLIK (stolová hra s komponentmi)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p><strong>Služba</strong> – digitálne služby vrátane AR vrstvy, prístupu k dashboardu, customizácie obsahu a technickej podpory</p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">1.3 Platnosť podmienok</h3>
                <p className="text-foreground-secondary">
                  Tieto všeobecné obchodné podmienky (ďalej len „VOP") upravujú práva a povinnosti zmluvných strán 
                  vyplývajúce z kúpnej zmluvy uzatvorenej medzi predávajúcim a kupujúcim. VOP sú neoddeliteľnou súčasťou 
                  každej zmluvy uzatvorenej medzi predávajúcim a kupujúcim. Odchýlky od VOP sú možné len na základe 
                  písomnej dohody zmluvných strán.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* 2. Predmet zmluvy */}
          <motion.div
            id="predmet"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">2. Predmet zmluvy</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">2.1 Fyzický produkt BLIK</h3>
                <p className="text-foreground-secondary mb-4">
                  Predmetom zmluvy je predaj stolovej hry BLIK, ktorá zahŕňa:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Herné karty s AR symbolmi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Hraciu dosku a herné komponenty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Pravidlá hry a návod na použitie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Prístup k základnej AR funkcionalite</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">2.2 Služby</h3>
                <p className="text-foreground-secondary mb-4">
                  Predávajúci poskytuje nasledovné služby:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>AR vrstva – rozšírená realita pre herné karty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Dashboard – analytický nástroj pre sledovanie zapojenia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Customizácia – prispôsobenie obsahu pre konkrétneho klienta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Technická podpora a školenia</span>
                  </li>
                </ul>
              </Card>

              <Card variant="gradient">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kombinácia produktu a služieb</h3>
                    <p className="text-foreground-secondary text-sm">
                      Štandardná ponuka zahŕňa kombináciu fyzického produktu a digitálnych služieb. 
                      Presný rozsah je vždy špecifikovaný v individuálnej ponuke alebo zmluve. 
                      Služby môžu byť poskytované na základe jednorazovej platby alebo predplatného.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* 3. Objednávka a uzatvorenie zmluvy */}
          <motion.div
            id="objednavka"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">3. Objednávka a uzatvorenie zmluvy</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">3.1 Spôsob objednania</h3>
                <p className="text-foreground-secondary mb-4">
                  Objednávku je možné vytvoriť nasledovnými spôsobmi:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background-secondary rounded-xl text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Kontaktný formulár</p>
                    <p className="text-sm text-foreground-muted">na webovej stránke</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">E-mail</p>
                    <p className="text-sm text-foreground-muted">info@gamefinity.sk</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Telefón</p>
                    <p className="text-sm text-foreground-muted">+421 917 588 738</p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">3.2 Proces uzatvorenia zmluvy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                    <div>
                      <p className="font-medium">Dopyt / Objednávka</p>
                      <p className="text-sm text-foreground-secondary">Kupujúci odošle dopyt alebo objednávku s požadovanými špecifikáciami</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                    <div>
                      <p className="font-medium">Cenová ponuka</p>
                      <p className="text-sm text-foreground-secondary">Predávajúci pripraví individuálnu cenovú ponuku do 3 pracovných dní</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">3</div>
                    <div>
                      <p className="font-medium">Akceptácia ponuky</p>
                      <p className="text-sm text-foreground-secondary">Kupujúci písomne potvrdí akceptáciu ponuky</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">4</div>
                    <div>
                      <p className="font-medium">Uzatvorenie zmluvy</p>
                      <p className="text-sm text-foreground-secondary">Zmluva je uzatvorená momentom potvrdenia objednávky predávajúcim</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">3.3 Záväznosť objednávky</h3>
                <p className="text-foreground-secondary">
                  Odoslaním objednávky kupujúci potvrdzuje, že sa oboznámil s týmito VOP a súhlasí s nimi. 
                  Objednávka je pre kupujúceho záväzná. Predávajúci si vyhradzuje právo odmietnuť objednávku 
                  alebo jej časť v prípade, že tovar nie je dostupný, alebo v prípade zjavnej chyby v cene.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* 4. Cena a platobné podmienky */}
          <motion.div
            id="cena"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">4. Cena a platobné podmienky</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">4.1 Cena</h3>
                <ul className="space-y-3 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Ceny produktov a služieb sú zmluvné a stanovujú sa individuálne na základe požiadaviek kupujúceho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Všetky ceny sú uvádzané bez DPH, ak nie je uvedené inak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>K cene sa pripočítava DPH v aktuálnej zákonnej výške (20%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Náklady na dopravu sú účtované zvlášť podľa zvoleného spôsobu dodania</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">4.2 Spôsoby platby</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <h4 className="font-medium mb-2">Bankový prevod</h4>
                    <p className="text-sm text-foreground-secondary">
                      Platba na základe vystavenej faktúry pred alebo po dodaní tovaru
                    </p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <h4 className="font-medium mb-2">Zálohová faktúra</h4>
                    <p className="text-sm text-foreground-secondary">
                      Pri väčších objednávkach môže byť požadovaná záloha vo výške 30-50%
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">4.3 Splatnosť</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-semibold">Typ zákazníka</th>
                        <th className="text-left py-3 px-2 font-semibold">Štandardná splatnosť</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">Spotrebitelia (B2C)</td>
                        <td className="py-3 px-2">Platba vopred alebo pri dodaní</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">Podnikatelia (B2B)</td>
                        <td className="py-3 px-2">14 dní od vystavenia faktúry</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2">Dlhodobí partneri</td>
                        <td className="py-3 px-2">Podľa individuálnej dohody (max. 30 dní)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* 5. Dodacie podmienky */}
          <motion.div
            id="dodanie"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">5. Dodacie podmienky</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">5.1 Spôsoby dodania</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <Truck className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-medium mb-1">Kuriér</h4>
                    <p className="text-sm text-foreground-secondary">Doručenie na adresu prostredníctvom kuriérskej služby</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <Package className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-medium mb-1">Slovenská pošta</h4>
                    <p className="text-sm text-foreground-secondary">Doručenie prostredníctvom Slovenskej pošty</p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <Building2 className="w-8 h-8 text-primary mb-2" />
                    <h4 className="font-medium mb-1">Osobný odber</h4>
                    <p className="text-sm text-foreground-secondary">Vyzdvihnutie v sídle spoločnosti po dohode</p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">5.2 Dodacie lehoty</h3>
                <ul className="space-y-3 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span><strong>Štandardné produkty:</strong> 5-10 pracovných dní od potvrdenia objednávky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span><strong>Customizované produkty:</strong> Podľa individuálnej dohody (zvyčajne 4-8 týždňov)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span><strong>Digitálne služby:</strong> Aktivácia do 48 hodín od úhrady</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">5.3 Prechod nebezpečenstva škody</h3>
                <p className="text-foreground-secondary">
                  Nebezpečenstvo škody na tovare prechádza na kupujúceho momentom prevzatia tovaru. 
                  Pri doručení kuriérom alebo poštou je kupujúci povinný skontrolovať neporušenosť 
                  obalu pri prevzatí a prípadné poškodenie ihneď reklamovať u prepravcu.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* 6. Odstúpenie od zmluvy */}
          <motion.div
            id="odstupenie"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">6. Odstúpenie od zmluvy</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="gradient">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Právo spotrebiteľa na odstúpenie</h3>
                    <p className="text-foreground-secondary text-sm">
                      Podľa zákona č. 102/2014 Z.z. má spotrebiteľ právo odstúpiť od zmluvy uzavretej na diaľku 
                      bez uvedenia dôvodu do <strong>14 dní</strong> od prevzatia tovaru.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">6.1 Postup pri odstúpení</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                    <div>
                      <p className="font-medium">Oznámenie o odstúpení</p>
                      <p className="text-sm text-foreground-secondary">Písomne oznámte odstúpenie na email info@gamefinity.sk alebo poštou</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                    <div>
                      <p className="font-medium">Vrátenie tovaru</p>
                      <p className="text-sm text-foreground-secondary">Tovar zašlite späť do 14 dní od oznámenia odstúpenia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">3</div>
                    <div>
                      <p className="font-medium">Vrátenie peňazí</p>
                      <p className="text-sm text-foreground-secondary">Platbu vrátime do 14 dní od doručenia vráteného tovaru</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">6.2 Výnimky z práva na odstúpenie</h3>
                <p className="text-foreground-secondary mb-4">
                  Spotrebiteľ nemôže odstúpiť od zmluvy, ktorej predmetom je:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Tovar zhotovený podľa osobitných požiadaviek spotrebiteľa (customizované produkty)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Poskytnutie digitálneho obsahu, ak sa začalo plnenie so súhlasom spotrebiteľa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Tovar, ktorý bol rozbalený a z hygienických dôvodov ho nie je možné vrátiť</span>
                  </li>
                </ul>
              </Card>

              <Card variant="outline">
                <h3 className="font-semibold text-lg mb-4">6.3 Podmienky vrátenia tovaru</h3>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Tovar musí byť nepoužitý a v pôvodnom stave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Tovar musí byť v pôvodnom obale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>K tovaru musí byť priložený doklad o kúpe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Náklady na vrátenie tovaru znáša spotrebiteľ</span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* 7. Reklamácie a záruka */}
          <motion.div
            id="reklamacie"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">7. Reklamácie a záruka</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">7.1 Záručná doba</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-semibold">Typ zákazníka</th>
                        <th className="text-left py-3 px-2 font-semibold">Záručná doba</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-2">Spotrebitelia (B2C)</td>
                        <td className="py-3 px-2"><strong>24 mesiacov</strong> od prevzatia tovaru</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2">Podnikatelia (B2B)</td>
                        <td className="py-3 px-2"><strong>12 mesiacov</strong> od prevzatia tovaru</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">7.2 Postup pri reklamácii</h3>
                <div className="space-y-4 text-foreground-secondary">
                  <p>Pre uplatnenie reklamácie kontaktujte predávajúceho:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a 
                      href="mailto:info@gamefinity.sk" 
                      className="flex items-center gap-3 p-4 bg-background-secondary rounded-xl hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span>info@gamefinity.sk</span>
                    </a>
                    <a 
                      href="tel:+421917588738" 
                      className="flex items-center gap-3 p-4 bg-background-secondary rounded-xl hover:bg-primary/10 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+421 917 588 738</span>
                    </a>
                  </div>
                  <p>
                    K reklamácii priložte popis vady, fotodokumentáciu a doklad o kúpe. 
                    Predávajúci potvrdí prijatie reklamácie a informuje o spôsobe jej vybavenia.
                  </p>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">7.3 Lehoty na vybavenie</h3>
                <ul className="space-y-3 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Predávajúci rozhodne o reklamácii <strong>ihneď</strong>, v zložitých prípadoch do <strong>3 pracovných dní</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Reklamácia vrátane odstránenia vady bude vybavená do <strong>30 dní</strong> od jej uplatnenia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Po uplynutí lehoty má spotrebiteľ právo na výmenu tovaru alebo vrátenie peňazí</span>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* 8. Licencia a duševné vlastníctvo */}
          <motion.div
            id="licencia"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">8. Licencia a duševné vlastníctvo</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">8.1 Licencia na AR obsah</h3>
                <p className="text-foreground-secondary mb-4">
                  Zakúpením produktu BLIK získava kupujúci nevýhradnú, neprenosnú licenciu na používanie 
                  AR obsahu a digitálnych služieb v súlade s týmito podmienkami:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Používanie pre interné účely organizácie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Používanie na vzdelávacích a marketingových podujatiach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Prístup pre zamestnancov a oprávnených používateľov</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">8.2 Obmedzenia</h3>
                <p className="text-foreground-secondary mb-4">
                  Kupujúci nesmie bez písomného súhlasu predávajúceho:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Kopírovať, modifikovať alebo distribuovať AR obsah tretím stranám</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Používať obsah na komerčný predaj alebo sublicencovanie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Odstraňovať ochranné prvky alebo vodoznaky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Spätne analyzovať alebo dekompilovať softvér</span>
                  </li>
                </ul>
              </Card>

              <Card variant="gradient">
                <div className="flex items-start gap-4">
                  <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Autorské práva</h3>
                    <p className="text-foreground-secondary text-sm">
                      Všetky autorské práva, ochranné známky a iné práva duševného vlastníctva k produktom 
                      a službám BLIK zostávajú majetkom spoločnosti Orostone s.r.o. alebo jej poskytovateľov licencií.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* 9. Zodpovednosť */}
          <motion.div
            id="zodpovednost"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">9. Zodpovednosť a obmedzenia</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">9.1 Obmedzenie zodpovednosti (B2B)</h3>
                <p className="text-foreground-secondary mb-4">
                  Pri zmluvách s podnikateľmi platia nasledovné obmedzenia zodpovednosti:
                </p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Predávajúci nezodpovedá za nepriame škody, ušlý zisk alebo stratu dát</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Celková zodpovednosť je obmedzená na výšku zaplatenej ceny</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Predávajúci nezodpovedá za výpadky služieb spôsobené tretími stranami</span>
                  </li>
                </ul>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">9.2 Vyššia moc (Force majeure)</h3>
                <p className="text-foreground-secondary">
                  Predávajúci nezodpovedá za nesplnenie záväzkov spôsobené okolnosťami vylučujúcimi zodpovednosť, 
                  ako sú prírodné katastrofy, vojny, štrajky, pandémie, rozhodnutia štátnych orgánov, výpadky 
                  dodávok energie alebo internetu a podobné nepredvídateľné okolnosti mimo kontroly predávajúceho.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* 10. Záverečné ustanovenia */}
          <motion.div
            id="zaverecne"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">10. Záverečné ustanovenia</h2>
            </div>
            
            <div className="space-y-6">
              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">10.1 Rozhodné právo</h3>
                <p className="text-foreground-secondary">
                  Tieto VOP a všetky zmluvné vzťahy medzi predávajúcim a kupujúcim sa riadia právnym poriadkom 
                  Slovenskej republiky, najmä zákonom č. 40/1964 Zb. Občiansky zákonník, zákonom č. 513/1991 Zb. 
                  Obchodný zákonník, zákonom č. 250/2007 Z.z. o ochrane spotrebiteľa a zákonom č. 102/2014 Z.z. 
                  o ochrane spotrebiteľa pri predaji tovaru na diaľku.
                </p>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">10.2 Riešenie sporov</h3>
                <p className="text-foreground-secondary mb-4">
                  V prípade sporu sa zmluvné strany pokúsia o zmierlivé riešenie. Ak to nie je možné:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <h4 className="font-medium mb-2">Pre spotrebiteľov</h4>
                    <p className="text-sm text-foreground-secondary mb-2">
                      Máte právo obrátiť sa na subjekt alternatívneho riešenia sporov:
                    </p>
                    <p className="text-sm text-foreground-muted">
                      Slovenská obchodná inšpekcia (SOI)<br />
                      <a href="https://www.soi.sk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.soi.sk</a>
                    </p>
                    <p className="text-sm text-foreground-muted mt-2">
                      Platforma ODR pre online riešenie sporov:<br />
                      <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ec.europa.eu/odr</a>
                    </p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <h4 className="font-medium mb-2">Pre podnikateľov</h4>
                    <p className="text-sm text-foreground-secondary">
                      Spory budú riešené príslušnými súdmi Slovenskej republiky.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">10.3 Ochrana osobných údajov</h3>
                <p className="text-foreground-secondary mb-4">
                  Informácie o spracúvaní osobných údajov nájdete v samostatnom dokumente:
                </p>
                <Link href="/ochrana-osobnych-udajov">
                  <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Ochrana osobných údajov (GDPR)
                  </Button>
                </Link>
              </Card>

              <Card variant="glass">
                <h3 className="font-semibold text-lg mb-4">10.4 Zmeny podmienok</h3>
                <p className="text-foreground-secondary">
                  Predávajúci si vyhradzuje právo na zmenu týchto VOP. Zmeny nadobúdajú účinnosť dňom ich 
                  zverejnenia na webovej stránke. Pre už uzatvorené zmluvy platí znenie VOP účinné v čase 
                  uzatvorenia zmluvy.
                </p>
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
            Máte otázky k podmienkam?
          </h2>
          <p className="text-foreground-secondary mb-8">
            Ak máte akékoľvek otázky ohľadom obchodných podmienok alebo potrebujete 
            individuálnu úpravu zmluvy, neváhajte nás kontaktovať.
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





