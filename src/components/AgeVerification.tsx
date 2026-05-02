import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

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
    // Redirect or show message
    window.location.href = 'https://www.google.com';
  };

  if (isVerified) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-black text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Age Verification</DialogTitle>
        </DialogHeader>
        <div className="text-center py-8">
          <p className="text-lg mb-8">You must be 21+ to enter this site</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleYes} className="bg-gold hover:bg-gold/90 text-primary-foreground px-8 py-2">
              YES (Enter)
            </Button>
            <Button onClick={handleNo} variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-2">
              NO (Exit)
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerification;