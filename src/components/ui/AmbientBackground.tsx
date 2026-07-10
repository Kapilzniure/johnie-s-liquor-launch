import { cn } from "@/lib/utils";

export const AmbientBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#09090b]", className)}>
      {/* Gradient overlay to soften edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.8)_120%)] z-10" />

      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay z-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Blob 1 - Top Left (Deep Crimson) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#880808]/20 filter blur-[120px] animate-blob" 
        style={{ animationDelay: '0s' }}
      />

      {/* Blob 2 - Top Right (Electric Amber) */}
      <div 
        className="absolute top-[0%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#ffbf00]/15 filter blur-[120px] animate-blob" 
        style={{ animationDelay: '2s' }}
      />

      {/* Blob 3 - Bottom Left (Brand Red Bright) */}
      <div 
        className="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-red-900/30 filter blur-[150px] animate-blob" 
        style={{ animationDelay: '4s' }}
      />

      {/* Blob 4 - Center Right (Liquid Gold) */}
      <div 
        className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#d4af37]/20 filter blur-[100px] animate-blob" 
        style={{ animationDelay: '6s' }}
      />
    </div>
  );
};
