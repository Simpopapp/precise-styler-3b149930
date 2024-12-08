import { ServiceCard } from "./ServiceCard";

const basicServices = [
  {
    title: "Corte",
    description: "Corte tradicional",
    price: 60,
    duration: 30
  },
  {
    title: "Barba (Barboterapia com Ozônio)",
    description: "Tratamento completo com catação",
    price: 50,
    duration: 30
  },
  {
    title: "Sobrancelha",
    description: "Design e acabamento perfeito",
    price: 35,
    duration: 15
  },
  {
    title: "Pezinho",
    description: "Alinhamento na nuca",
    price: 25,
    duration: 15
  }
];

const comboServices = [
  {
    title: "Corte + Barba",
    description: "Combo completo",
    price: 90,
    duration: 60
  },
  {
    title: "Corte, Barba e Sobrancelha",
    description: "Pacote completo de cuidados",
    price: 90,
    duration: 60
  },
  {
    title: "Barba + Pezinho",
    description: "Alinhamento completo",
    price: 65,
    duration: 45
  }
];

const specialTreatments = [
  {
    title: "Luzes",
    description: "A partir de",
    price: 80,
    duration: 120
  },
  {
    title: "Platinado Global",
    description: "Descoloração completa",
    price: 180,
    duration: 180
  },
  {
    title: "Relaxamento",
    description: "Tratamento para cabelos",
    price: 50,
    duration: 45
  },
  {
    title: "Selagem",
    description: "A partir de",
    price: 80,
    duration: 60
  },
  {
    title: "Pigmento para Barba",
    description: "Coloração e acabamento",
    price: 28,
    duration: 30
  }
];

export const ServicesSection = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="section-title">✂️ Serviços Básicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {basicServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">⭐ Combos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comboServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">💈 Tratamentos Especiais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialTreatments.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};