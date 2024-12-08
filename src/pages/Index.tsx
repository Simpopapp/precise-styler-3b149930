import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen container mx-auto px-4 py-8">
      <Hero />
      <ServicesSection />
      <Amenities />
      <Contact />
    </div>
  );
};

export default Index;