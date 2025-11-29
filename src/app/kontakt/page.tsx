'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, 
  Calendar, MessageSquare, Building2, User
} from 'lucide-react';
import { Section, SectionHeader, Card, Button, Input, Textarea, Badge } from '@/components/ui';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@gamefinity.sk',
    href: 'mailto:info@gamefinity.sk',
  },
  {
    icon: Phone,
    label: 'Telefón',
    value: '+421 917 588 738',
    href: 'tel:+421917588738',
  },
  {
    icon: MapPin,
    label: 'Adresa',
    value: 'Landererova 8, 811 09 Bratislava',
    href: 'https://maps.google.com/?q=Landererova+8+Bratislava',
  },
];

const reasons = [
  'Demo produktu',
  'Cenová ponuka',
  'Partnerstvo',
  'Technická podpora',
  'Kariéra',
  'Iné',
];

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    reason: '',
    message: '',
    website: '', // Honeypot pole - skryté pred používateľmi
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Load Calendly script
  useEffect(() => {
    // Check if already loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).Calendly) {
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Load the CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const openCalendly = () => {
    const calendlyUrl = 'https://calendly.com/martinmiskeje/30-minute-meeting-gamefinity';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calendly = (window as any).Calendly;
    if (calendly) {
      calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      // Fallback - open in new tab
      window.open(calendlyUrl, '_blank');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Nepodarilo sa odoslať správu');
      }
      
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Chyba pri odosielaní. Skúste znova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <Badge variant="primary" className="mb-6">Kontakt</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Poďme sa <span className="text-gradient">porozprávať</span>
            </h1>
            
            <p className="text-lg text-foreground-secondary">
              Máte otázky? Chcete vidieť demo? Napíšte nám a ozveme sa vám do 24 hodín.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section background="default" padding="lg">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Kontaktné informácie</h2>
              <p className="text-foreground-secondary">
                Neváhajte nás kontaktovať akýmkoľvek spôsobom, ktorý vám vyhovuje.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-background-secondary rounded-xl border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Calendar CTA */}
            <Card variant="gradient" className="relative overflow-hidden" id="kalendar">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Rezervujte si čas</h3>
              <p className="text-sm text-foreground-secondary mb-4">
                Dohodnite si 30-minútový hovor a ukážeme vám BLIK naživo.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={openCalendly}
              >
                Otvoriť kalendár
              </Button>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card variant="glass">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Ďakujeme!</h3>
                  <p className="text-foreground-secondary mb-6">
                    Vaša správa bola odoslaná. Ozveme sa vám do 24 hodín.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        reason: '',
                        message: '',
                        website: '',
                      });
                    }}
                  >
                    Poslať ďalšiu správu
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Meno a priezvisko"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Ján Novák"
                      icon={<User className="w-5 h-5" />}
                      required
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jan@firma.sk"
                      icon={<Mail className="w-5 h-5" />}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Spoločnosť"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Názov firmy"
                      icon={<Building2 className="w-5 h-5" />}
                    />
                    <div>
                      <label className="block text-sm font-medium text-foreground-secondary mb-2">
                        Dôvod kontaktovania
                      </label>
                      <select
                        name="reason"
                        value={formState.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="">Vyberte možnosť</option>
                        {reasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Textarea
                    label="Správa"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Napíšte nám, čo vás zaujíma..."
                    rows={5}
                    required
                  />

                  {/* Honeypot pole - skryté pred používateľmi, boti ho vyplnia */}
                  <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website (nevypĺňajte)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formState.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    Odoslať správu
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section background="secondary" padding="lg">
        <div className="max-w-2xl mx-auto text-center">
          <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Máte ďalšie otázky?</h2>
          <p className="text-foreground-secondary mb-8">
            Pozrite si často kladené otázky alebo nám napíšte priamo.
          </p>
          <Button variant="outline" onClick={() => window.location.href = '/ako-to-funguje#faq'}>
            Prejsť na FAQ
          </Button>
        </div>
      </Section>
    </>
  );
}



