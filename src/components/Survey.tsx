import { useState, useEffect } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Gift } from 'lucide-react';
import { useSurveyStore } from '@/hooks/use-survey';
import { useShallow } from 'zustand/react/shallow';

export const SurveyButton = () => {
  const openSurvey = useSurveyStore((state) => state.openSurvey);
  return (
    <Button
      onClick={openSurvey}
      size="sm"
      className="flex items-center gap-2 bg-primary text-white rounded-none font-bold tracking-widest uppercase text-[10px] h-10 px-6 boutique-shadow"
    >
      <Gift className="w-3.5 h-3.5" />
      Survey
    </Button>
  );
};

const Survey = () => {
  const { isOpen, openSurvey, closeSurvey } = useSurveyStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      openSurvey: state.openSurvey,
      closeSurvey: state.closeSurvey,
    }))
  );
  
  const setIsOpen = (open: boolean) => open ? openSurvey() : closeSurvey();
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [other1, setOther1] = useState('');
  const [other2, setOther2] = useState('');
  const [other4, setOther4] = useState('');
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    const today = new Date().toDateString();
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      const shownDate = localStorage.getItem('surveyShown');

      if (e.clientY <= 0 && !triggered && shownDate !== today) {
        triggered = true;

        setTimeout(() => {
          openSurvey();
          localStorage.setItem('surveyShown', today);
        }, 300);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [openSurvey]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setFieldErrors({});

    // Honeypot — silently drop bot submissions
    if (honeypot.trim() !== '') {
      setIsSubmitted(true);
      return;
    }

    // Frontend rate limit
    try {
      const now = Date.now();
      const last = Number(localStorage.getItem('surveyLastSubmit') || 0);
      const todayKey = new Date().toDateString();
      const countKey = `surveyCount:${todayKey}`;
      const todayCount = Number(localStorage.getItem(countKey) || 0);
      if (now - last < 60_000) {
        setSubmitError('Please wait a moment before submitting again.');
        return;
      }
      if (todayCount >= 3) {
        setSubmitError('Submission limit reached for today. Thank you!');
        return;
      }
    } catch { /* ignore */ }

    // Validate inputs
    const schema = z.object({
      q1: z.string().trim().min(1, 'Please select an option').max(120),
      q2: z.string().trim().min(1, 'Please select an option').max(120),
      q4: z.string().trim().min(1, 'Please select an option').max(500),
    });
    const parsed = schema.safeParse({
      q1: q1 === 'Other' ? other1 : q1,
      q2: q2 === 'Other' ? other2 : q2,
      q4: q4 === 'Other' ? other4 : q4,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setFieldErrors(errs);
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const res = await fetch('https://formspree.io/f/xlgzdaoa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      try {
        const now = Date.now();
        const todayKey = new Date().toDateString();
        const countKey = `surveyCount:${todayKey}`;
        localStorage.setItem('surveyLastSubmit', String(now));
        localStorage.setItem(countKey, String(Number(localStorage.getItem(countKey) || 0) + 1));
      } catch { /* ignore */ }
      try {
        const windowWithGtag = window as typeof window & { gtag?: (type: string, action: string, data: Record<string, unknown>) => void };
        windowWithGtag.gtag?.('event', 'survey_submit', { event_category: 'engagement' });
      } catch { /* ignore */ }
      setIsSubmitted(true);
      setIsOpen(false);
    } catch (error) {
      console.error('Submission failed', error);
      setSubmitError("We couldn't submit your survey. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={true} onOpenChange={() => setIsSubmitted(false)}>
        <DialogContent className="sm:max-w-md bg-background text-foreground border-white/10">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-display font-bold">Thank You! 🎉</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-lg mb-4 font-medium italic">"We appreciate your feedback."</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Show this in-store for a special offer</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg bg-background text-foreground border-white/10 max-h-[90vh] overflow-y-auto p-0">
          <div className="p-8 md:p-12">
            <DialogHeader className="mb-10">
              <div className="flex items-center gap-3 text-primary text-[10px] font-bold tracking-[0.4em] mb-4 uppercase">
                <span className="w-10 h-[1px] bg-primary" />
                Feedback
              </div>
              <DialogTitle className="text-4xl font-display font-bold uppercase tracking-tighter">Quick Survey</DialogTitle>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-8">
              <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3">How did you hear about us?</label>
                  <Select value={q1} onValueChange={setQ1}>
                    <SelectTrigger className="bg-card border-white/10 h-12 rounded-none">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-white/10 rounded-none">
                      <SelectItem value="Instagram">Instagram</SelectItem>
                      <SelectItem value="Facebook">Facebook</SelectItem>
                      <SelectItem value="Google">Google</SelectItem>
                      <SelectItem value="Friends">Friends</SelectItem>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="AI">AI</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {q1 === 'Other' && <Input value={other1} onChange={(e) => setOther1(e.target.value)} placeholder="Please specify" className="mt-3 bg-card border-white/10 h-12 rounded-none" />}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3">What do you usually buy?</label>
                  <Select value={q2} onValueChange={setQ2}>
                    <SelectTrigger className="bg-card border-white/10 h-12 rounded-none">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-white/10 rounded-none">
                      <SelectItem value="Beer">Beer</SelectItem>
                      <SelectItem value="Wine">Wine</SelectItem>
                      <SelectItem value="Whiskey">Whiskey</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {q2 === 'Other' && <Input value={other2} onChange={(e) => setOther2(e.target.value)} placeholder="Please specify" className="mt-3 bg-card border-white/10 h-12 rounded-none" />}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3">What would you like more of?</label>
                  <Select value={q4} onValueChange={setQ4}>
                    <SelectTrigger className="bg-card border-white/10 h-12 rounded-none">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-white/10 rounded-none">
                      <SelectItem value="Discounts">Discounts</SelectItem>
                      <SelectItem value="New products">New products</SelectItem>
                      <SelectItem value="Events">Events</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {q4 === 'Other' && <Textarea value={other4} onChange={(e) => setOther4(e.target.value)} placeholder="Please specify" className="mt-3 bg-card border-white/10 rounded-none min-h-[100px]" />}
                </div>
              </div>

              {submitError && (
                <div role="alert" className="text-xs font-bold text-red-400 bg-red-950/20 border border-red-900/50 p-4 uppercase tracking-widest">
                  {submitError}
                </div>
              )}
              
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase h-14 rounded-none boutique-shadow">
                {isSubmitting ? 'Submitting...' : 'Send Feedback'}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Survey;