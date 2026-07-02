import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Wine } from 'lucide-react';

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Don't show on legal pages
  // Use a stable value for isLegalPage based on pathname
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isLegalPage = pathname === '/privacy' || pathname === '/terms';

  useEffect(() => {
    if (isLegalPage) return;
    const verified = localStorage.getItem('ageVerified');
    if (verified) {
      const verifiedTime = parseInt(verified);
      const now = Date.now();
      const hoursDiff = (now - verifiedTime) / (1000 * 60 * 60);
      if (hoursDiff < 24) {
        setIsVerified(true);
        return;
      }
    }
    setIsOpen(true);
  }, [isLegalPage]);

  const handleYes = () => {
    localStorage.setItem('ageVerified', Date.now().toString());
    setIsVerified(true);
    setIsOpen(false);
  };

  const handleNo = () => {
    window.location.href = 'https://www.google.com';
  };

  if (isVerified || isLegalPage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="fixed z-[1000] w-[94vw] sm:max-w-md bg-[#0A0A0F] border-white/10 p-0 overflow-hidden shadow-[0_0_100px_rgba(255,0,0,0.2)]"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="p-8 sm:p-10 flex flex-col items-center text-center">

          <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse" />
            <Wine className="w-6 h-6 relative z-10" />
          </div>

          <div className="mb-5">
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-2">Identity Verification</div>
            <DialogTitle className="text-3xl font-display font-black italic tracking-tighter text-white uppercase leading-none">
              Security Gate
            </DialogTitle>
          </div>

          <DialogDescription className="text-white/50 text-sm font-medium mb-7 max-w-[260px] leading-relaxed">
            Confirm you are 21 or older to access this site.
          </DialogDescription>

          <div className="flex flex-col gap-3 w-full">
            <Button
              onClick={handleYes}
              className="bg-primary text-white h-11 text-sm font-black uppercase tracking-widest rounded-none hover:bg-white hover:text-black transition-all duration-500 glow-red border-none"
            >
              I AM 21+
            </Button>
            <button
              onClick={handleNo}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all py-2"
            >
              EXIT SYSTEM
            </button>
          </div>

          <p className="mt-6 text-[9px] font-black uppercase tracking-[0.8em] text-white/10 pt-5 border-t border-white/5 w-full">
            RESPONSIBLE ACCESS
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;