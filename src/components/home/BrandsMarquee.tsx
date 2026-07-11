export const BrandsMarquee = () => {
  const brands = [
    "THE MACALLAN",
    "CLASE AZUL",
    "BLANTON'S",
    "DOM PÉRIGNON",
    "PAPPY VAN WINKLE",
    "DON JULIO 1942",
    "LOUIS XIII",
    "YAMAZAKI",
    "KENDALL-JACKSON",
    "TITO'S HANDMADE",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-black/50 py-6 z-20">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee gap-16 md:gap-32 px-8">
        {[...brands, ...brands].map((brand, i) => (
          <div 
            key={i} 
            className="text-white/30 font-display font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-sm md:text-xl whitespace-nowrap hover:text-primary transition-colors cursor-default"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};
