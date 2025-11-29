'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  riesenia: [
    { name: 'Pre banky', href: '/riesenia/banky' },
    { name: 'Pre poisťovne', href: '/riesenia/poistovne' },
    { name: 'Pre školy', href: '/riesenia/skoly' },
    { name: 'Pre firmy', href: '/riesenia/firmy' },
    { name: 'Cestovný ruch', href: '/riesenia/cestovny-ruch' },
  ],
  produkt: [
    { name: 'Ako to funguje', href: '/ako-to-funguje' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Prípadové štúdie', href: '/o-nas#pripadove-studie' },
    { name: 'FAQ', href: '/ako-to-funguje#faq' },
  ],
  spolocnost: [
    { name: 'O nás', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Kariéra', href: '/o-nas#kariera' },
    { name: 'Ochrana osobných údajov', href: '/ochrana-osobnych-udajov' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* CTA Section */}
        <div className="py-16 border-b border-border">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Pripravení <span className="text-gradient">transformovať</span> vašu komunikáciu?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground-secondary text-lg mb-8"
            >
              Kontaktujte nás a zistite, ako BLIK môže pomôcť vašej organizácii.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Získať demo
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ako-to-funguje"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-border rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Zistiť viac
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">BLIK</span>
            </Link>
            <p className="text-sm text-foreground-secondary mb-6">
              Stolová hra s rozšírenou realitou pre modernú komunikáciu a vzdelávanie.
            </p>
            {/* DOČASNE SKRYTÉ - sociálne siete */}
            <div className="flex gap-3 hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-foreground-secondary" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Riešenia
            </h3>
            <ul className="space-y-3">
              {footerLinks.riesenia.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Produkt
            </h3>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Spoločnosť
            </h3>
            <ul className="space-y-3">
              {footerLinks.spolocnost.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-foreground-secondary">
            <a href="mailto:martin.miskeje@gamefinity.sk" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              martin.miskeje@gamefinity.sk
            </a>
            <a href="tel:+421917588738" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +421 917 588 738
            </a>
            <a 
              href="https://maps.google.com/?q=Landererova+8+Bratislava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Landererova 8, 811 09 Bratislava
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Gamefinity. Všetky práva vyhradené.
          </p>
          <div className="flex gap-6 text-sm text-foreground-muted">
            <Link href="/ochrana-osobnych-udajov" className="hover:text-foreground transition-colors">
              Ochrana osobných údajov
            </Link>
            <Link href="/obchodne-podmienky" className="hover:text-foreground transition-colors">
              Obchodné podmienky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



