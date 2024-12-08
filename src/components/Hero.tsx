export const Hero = () => {
  return (
    <div className="text-center py-20">
      <div className="space-y-2">
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-200 to-primary animate-text">
          Sr. Oliveira
        </h1>
        <p className="text-2xl text-primary font-semibold tracking-wider mb-8">BARBEARIA</p>
      </div>
      <p className="text-lg mb-8 text-muted-foreground">Premium grooming for the modern gentleman</p>
      <button className="book-button max-w-xs">Agendar Horário</button>
    </div>
  );
};