import { Wifi, Coffee, CreditCard } from "lucide-react";

export const Amenities = () => {
  return (
    <section className="py-12">
      <h2 className="section-title text-center">Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Wifi className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-medium">Free WiFi</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <Coffee className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-medium">Complimentary Drinks</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <CreditCard className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-medium">Card Payments</h3>
        </div>
      </div>
    </section>
  );
};