import { SectionWrapper } from "@/components/section-wrapper";
import { ContactForm } from "@/components/contact-form";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left-12 duration-700 ease-out">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Discover how Archer can revolutionize your stablecoin operations. Fill out the form, and our expert team will contact you shortly to discuss your specific needs and schedule a personalized demo.
          </p>
           <div className="mt-8 space-y-4 text-foreground/70">
            <p><strong>Email:</strong> nottidge@archer.africa</p>
            <p><strong>Phone:</strong> +2348155591444</p>
            <p><strong>Address:</strong> Freedom Way, Lekki Phase 1</p>
          </div>
        </div>
        <div className="animate-in fade-in slide-in-from-right-12 duration-1000 ease-out">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
