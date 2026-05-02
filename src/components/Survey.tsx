import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Gift } from 'lucide-react';

export const SurveyButton = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Button
      onClick={onOpen}
      variant="gold"
      size="sm"
      className="flex items-center gap-2"
    >
      <Gift className="w-4 h-4" />
      Quick Survey
    </Button>
  );
};

const Survey = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [other1, setOther1] = useState('');
  const [other2, setOther2] = useState('');
  const [other4, setOther4] = useState('');

  useEffect(() => {
    const shown = localStorage.getItem('surveyShown');
    const today = new Date().toDateString();
    
    // Exit intent - show dialog only once per day
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        setIsOpen(true);
        localStorage.setItem('surveyShown', today);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleOpenSurvey = () => {
    setIsOpen(true);
    const today = new Date().toDateString();
    localStorage.setItem('surveyShown', today);
  };

  // Expose handler to parent
  useEffect(() => {
    (window as any).__openSurvey = handleOpenSurvey;
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      await fetch('https://formspree.io/f/xlgzdaoa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      setIsSubmitted(true);
      setIsOpen(false);
    } catch (error) {
      // Handle error, maybe show toast
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={true} onOpenChange={() => setIsSubmitted(false)}>
        <DialogContent className="sm:max-w-md bg-black text-white border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">Thank You! 🎉</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-lg mb-4">You'll receive better offers from us soon.</p>
            <p className="text-sm text-gray-400">Show this in-store for a special offer</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg bg-black text-white border-gray-800 max-h-[80vh] overflow-y-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-xl font-bold">Quick Survey</DialogTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-6">
            <input type="hidden" name="q1" value={q1 === 'Other' ? other1 : q1} />
            <input type="hidden" name="q2" value={q2 === 'Other' ? other2 : q2} />
            <input type="hidden" name="q3" value={q3} />
            <input type="hidden" name="q4" value={q4 === 'Other' ? other4 : q4} />
            <div>
              <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
              <Select value={q1} onValueChange={setQ1}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Instagram">Instagram</SelectItem>
                  <SelectItem value="Facebook">Facebook</SelectItem>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Friends">Friends</SelectItem>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="AI">AI</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {q1 === 'Other' && (
                <Input
                  value={other1}
                  onChange={(e) => setOther1(e.target.value)}
                  placeholder="Please specify"
                  className="mt-2 bg-gray-900 border-gray-700"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What do you usually buy?</label>
              <Select value={q2} onValueChange={setQ2}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Beer">Beer</SelectItem>
                  <SelectItem value="Wine">Wine</SelectItem>
                  <SelectItem value="Whiskey">Whiskey</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {q2 === 'Other' && (
                <Input
                  value={other2}
                  onChange={(e) => setOther2(e.target.value)}
                  placeholder="Please specify"
                  className="mt-2 bg-gray-900 border-gray-700"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">How often do you visit?</label>
              <Select value={q3} onValueChange={setQ3}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Occasionally">Occasionally</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What would you like more?</label>
              <Select value={q4} onValueChange={setQ4}>
                <SelectTrigger className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Discounts">Discounts</SelectItem>
                  <SelectItem value="New products">New products</SelectItem>
                  <SelectItem value="Events">Events</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {q4 === 'Other' && (
                <Textarea
                  value={other4}
                  onChange={(e) => setOther4(e.target.value)}
                  placeholder="Please specify"
                  className="mt-2 bg-gray-900 border-gray-700"
                />
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-gold hover:bg-gold/90">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Survey;