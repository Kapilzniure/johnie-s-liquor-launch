import { useState, useEffect } from 'react';
import { z } from 'zod';
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
    setSubmitError(null);
    setFieldErrors({});

    // Honeypot — silently drop bot submissions
    if (honeypot.trim() !== '') {
      setIsSubmitted(true);
      return;
    }

    // Frontend rate limit: 1 submission per 60s, max 3 per day
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
    } catch { /* localStorage unavailable — ignore */ }

    // Validate inputs
    const schema = z.object({
      q1: z.string().trim().min(1, 'Please select an option').max(120),
      q2: z.string().trim().min(1, 'Please select an option').max(120),
      q3: z.string().trim().min(1, 'Please select an option').max(60),
      q4: z.string().trim().min(1, 'Please select an option').max(500),
    });
    const parsed = schema.safeParse({
      q1: q1 === 'Other' ? other1 : q1,
      q2: q2 === 'Other' ? other2 : q2,
      q3,
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
      // GA event (no-op if gtag not present)
      try { (window as any).gtag?.('event', 'survey_submit', { event_category: 'engagement' }); } catch { /* ignore */ }
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
            {/* Honeypot — hidden from real users, visible to bots */}
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
            <input type="hidden" name="q1" value={q1 === 'Other' ? other1 : q1} />
            <input type="hidden" name="q2" value={q2 === 'Other' ? other2 : q2} />
            <input type="hidden" name="q3" value={q3} />
            <input type="hidden" name="q4" value={q4 === 'Other' ? other4 : q4} />
            <div>
              <label htmlFor="q1-trigger" className="block text-sm font-medium mb-2">How did you hear about us?</label>
              <Select value={q1} onValueChange={setQ1}>
                <SelectTrigger id="q1-trigger" aria-invalid={!!fieldErrors.q1} className="bg-gray-900 border-gray-700">
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
                  maxLength={120}
                  aria-label="Specify how you heard about us"
                  className="mt-2 bg-gray-900 border-gray-700"
                />
              )}
              {fieldErrors.q1 && <p className="mt-1 text-xs text-red-400">{fieldErrors.q1}</p>}
            </div>

            <div>
              <label htmlFor="q2-trigger" className="block text-sm font-medium mb-2">What do you usually buy?</label>
              <Select value={q2} onValueChange={setQ2}>
                <SelectTrigger id="q2-trigger" aria-invalid={!!fieldErrors.q2} className="bg-gray-900 border-gray-700">
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
                  maxLength={120}
                  aria-label="Specify what you usually buy"
                  className="mt-2 bg-gray-900 border-gray-700"
                />
              )}
              {fieldErrors.q2 && <p className="mt-1 text-xs text-red-400">{fieldErrors.q2}</p>}
            </div>

            <div>
              <label htmlFor="q3-trigger" className="block text-sm font-medium mb-2">How often do you visit?</label>
              <Select value={q3} onValueChange={setQ3}>
                <SelectTrigger id="q3-trigger" aria-invalid={!!fieldErrors.q3} className="bg-gray-900 border-gray-700">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Occasionally">Occasionally</SelectItem>
                </SelectContent>
              </Select>
              {fieldErrors.q3 && <p className="mt-1 text-xs text-red-400">{fieldErrors.q3}</p>}
            </div>

            <div>
              <label htmlFor="q4-trigger" className="block text-sm font-medium mb-2">What would you like more?</label>
              <Select value={q4} onValueChange={setQ4}>
                <SelectTrigger id="q4-trigger" aria-invalid={!!fieldErrors.q4} className="bg-gray-900 border-gray-700">
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
                  maxLength={500}
                  aria-label="Specify what you'd like more of"
                  className="mt-2 bg-gray-900 border-gray-700"
                />
              )}
              {fieldErrors.q4 && <p className="mt-1 text-xs text-red-400">{fieldErrors.q4}</p>}
            </div>

            {submitError && (
              <div role="alert" className="text-sm text-red-400 bg-red-950/40 border border-red-900 rounded-md p-3">
                {submitError}
              </div>
            )}
            <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="w-full bg-gold hover:bg-gold/90">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Survey;