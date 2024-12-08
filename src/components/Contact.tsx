import { Phone, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="section-title">Contact Us</h2>
      <div className="flex justify-center gap-8">
        <a href="tel:(234) 456-7890" className="flex items-center gap-2 text-primary hover:text-primary/80">
          <Phone className="w-5 h-5" />
          (234) 456-7890
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80">
          <Instagram className="w-5 h-5" />
          Follow us
        </a>
      </div>
    </section>
  );
};