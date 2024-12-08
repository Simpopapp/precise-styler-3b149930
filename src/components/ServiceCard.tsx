import { Clock } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  price: number;
  duration: number;
  isPremium?: boolean;
}

export const ServiceCard = ({ title, description, price, duration, isPremium = false }: ServiceCardProps) => {
  return (
    <div className={isPremium ? "premium-card" : "service-card"}>
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-medium ${isPremium ? "text-primary" : ""}`}>{title}</h3>
        <span className="service-price">R$ {price.toFixed(2)}</span>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
      )}
      <div className="service-time">
        <Clock className="w-4 h-4" />
        <span>{duration} min</span>
      </div>
      <button className={isPremium ? "premium-button mt-4" : "book-button mt-4"}>
        {isPremium ? "Torne-se Premium" : "Agendar Horário"}
      </button>
    </div>
  );
};