import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { addDays, format, setHours, setMinutes, startOfToday } from "date-fns";
import { Clock } from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  serviceName: string;
  duration: number;
  price: number;
  isPremium?: boolean;
}

const WORKING_HOURS = {
  start: 9, // 9 AM
  end: 20, // 8 PM
};

export const BookingModal = ({ serviceName, duration, price, isPremium = false }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Por favor, selecione data e horário");
      return;
    }

    console.log("Booking:", {
      service: serviceName,
      date: selectedDate,
      time: selectedTime,
      duration,
      price,
    });

    toast.success("Agendamento realizado com sucesso!");
  };

  const generateTimeSlots = (date: Date) => {
    const slots: string[] = [];
    const startHour = WORKING_HOURS.start;
    const endHour = WORKING_HOURS.end;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = setMinutes(setHours(date, hour), minute);
        slots.push(format(time, "HH:mm"));
      }
    }
    
    return slots;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className={isPremium ? "premium-button mt-4" : "book-button mt-4"}>
          {isPremium ? "Torne-se Premium" : "Agendar Horário"}
        </button>
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:max-w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-center text-xl font-bold">
            {serviceName}
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6 pb-20">
          <div>
            <h3 className="font-medium mb-2">Selecione a data</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < startOfToday() || date > addDays(new Date(), 30)}
              className="rounded-md border mx-auto"
            />
          </div>

          {selectedDate && (
            <div>
              <h3 className="font-medium mb-2">Horários disponíveis</h3>
              <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto p-2">
                {generateTimeSlots(selectedDate).map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className="flex items-center gap-2"
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="w-4 h-4" />
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span>Duração</span>
              <span>{duration} min</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Valor</span>
              <span className="text-primary font-semibold">R$ {price.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
          <Button 
            className="w-full"
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
          >
            Confirmar Agendamento
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};