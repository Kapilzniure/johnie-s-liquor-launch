import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Wine } from 'lucide-react';

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
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

  if (isVerified) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-background border-gold/20 shadow-gold/10 p-0 overflow-hidden">
        <div className="relative p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold animate-fade-up">
            <Wine className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <DialogHeader>
            <DialogTitle className="text-3xl font-display font-bold mb-2">Age Verification</DialogTitle>
          </DialogHeader>
          
          <p className="text-muted-foreground mb-8 max-w-[280px]">
            You must be <span className="text-gold font-bold">21 or older</span> to enter Johnnie's Liquor Store.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button 
              onClick={handleYes} 
              variant="gold" 
              className="flex-1 py-6 text-base font-bold uppercase tracking-widest"
            >
              I am 21+
            </Button>
            <Button 
              onClick={handleNo} 
              variant="outlineGold" 
              className="flex-1 py-6 text-base font-bold uppercase tracking-widest"
            >
              Exit
            </Button>
          </div>
          
          <p className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Please drink responsibly
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;