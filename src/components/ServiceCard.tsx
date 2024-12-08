import { Clock } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  price: number;
  duration: number;
}

export const ServiceCard = ({ title, description, price, duration }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="service-price">R$ {price.toFixed(2)}</span>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
      )}
      <div className="service-time">
        <Clock className="w-4 h-4" />
        <span>{duration} min</span>
      </div>
      <button className="book-button mt-4">Agendar Horário</button>
    </div>
  );
};