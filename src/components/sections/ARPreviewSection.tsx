'use client';

import { Section, SectionHeader } from '@/components/ui';
import { ARCardPreview } from '@/components/ar-mockup';

export default function ARPreviewSection() {
  return (
    <Section background="secondary" padding="lg">
      <SectionHeader
        badge="AR Demo"
        title={
          <>
            Vyskúšajte si{' '}
            <span className="text-gradient">AR zážitok</span>
          </>
        }
        description="Kliknite na symboly nižšie a sledujte, ako sa nad kartami zobrazujú 3D objekty a animácie."
      />

      <ARCardPreview category="all" />
    </Section>
  );
}



