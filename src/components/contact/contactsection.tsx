import { ContactParticles } from "./ContactParticles";
import { ContactHeader } from "./ContactHeader";
import { ContactDetails } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-background text-foreground transition-colors duration-500" id="contact">
      {/* Background Layer */}
      <ContactParticles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            <ContactHeader />
            <ContactDetails />
          </div>

          {/* Right Column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}