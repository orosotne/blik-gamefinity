import {
  Hero,
  ValueBanner,
  ProblemSolution,
  GameIntro,
  HowItWorks,
  ARPreviewSection,
  Symbols,
  Industries,
  Testimonials,
  CTA,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueBanner />
      <ProblemSolution />
      <GameIntro />
      <HowItWorks />
      <ARPreviewSection />
      <Symbols />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
