import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Wine } from 'lucide-react';

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Don't show on legal pages
  const isLegalPage = typeof window !== 'undefined' &&
    (window.location.pathname === '/privacy' || window.location.pathname === '/terms');

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
  }, []);

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
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleNo(); }}>
      <DialogContent className="w-[92vw] sm:max-w-md bg-background border-white/10 p-0 overflow-hidden shadow-2xl">
        <div className="p-6 sm:p-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-primary/10 border border-primary/30 flex items-center justify-center mb-8 text-primary">
            <Wine className="w-10 h-10" />
          </div>
          
          <div className="mb-6">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">Age Verification</div>
            <h2 className="text-4xl font-display font-bold uppercase tracking-tighter">Are you 21+?</h2>
          </div>
          
          <p className="text-muted-foreground font-medium mb-10 max-w-[280px] italic">
            "You must be 21 or older to enter Johnnie's Liquor Store."
          </p>
          
          <div className="flex flex-col gap-4 w-full">
            <Button 
              onClick={handleYes} 
              className="bg-primary text-white h-16 text-lg font-bold uppercase tracking-widest rounded-none boutique-shadow hover:translate-y-[-2px] transition-all"
            >
              YES, I AM 21+
            </Button>
            <Button 
              onClick={handleNo} 
              variant="outline"
              className="border border-white/10 h-14 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-white/5"
            >
              EXIT
            </Button>
          </div>
          
          <p className="mt-8 text-[9px] font-bold uppercase tracking-widest text-muted-foreground/40 pt-4 w-full">
            PLEASE DRINK RESPONSIBLY
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;