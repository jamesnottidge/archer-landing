import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import BenefitsSection from '@/components/sections/benefits';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </>
  );
}
