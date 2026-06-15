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
      className="flex items-center gap-3 bg-white text-black rounded-none font-black tracking-widest uppercase text-[9px] h-10 px-6 hover:bg-primary hover:text-white transition-all duration-500 shadow-boutique border-none"
    >
      <Gift className="w-4 h-4" />
      Feedback
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
  const [other3, setOther3] = useState('');
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
      q3: z.string().trim().min(1, 'Please select an option').max(120),
      q4: z.string().trim().min(1, 'Please select an option').max(500),
    });
    const parsed = schema.safeParse({
      q1: q1 === 'Other' ? other1 : q1,
      q2: q2 === 'Other' ? other2 : q2,
      q3: q3 === 'Other' ? other3 : q3,
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
        <DialogContent className="sm:max-w-md bg-[#050508] text-white border-white/5 shadow-2xl">
          <div className="text-center py-12">
            <Gift className="w-12 h-12 text-primary mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl font-display font-black italic uppercase tracking-tighter mb-4">Confirmed</h2>
            <p className="text-white/40 italic text-lg mb-8">"We appreciate your contribution to the heritage collection."</p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-primary text-white h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
              Dismiss
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="fixed z-[1000] sm:max-w-lg bg-[#050508] text-white border-white/10 max-h-[90vh] overflow-y-auto p-0 shadow-2xl">
          <div className="p-8 md:p-14">
            <DialogHeader className="mb-12">
              <div className="flex items-center gap-3 text-primary text-[10px] font-black tracking-[0.5em] mb-6 uppercase">
                <span className="w-10 h-[1px] bg-primary" />
                Intelligence
              </div>
              <DialogTitle className="text-5xl font-display font-black italic tracking-tighter uppercase leading-none">Feedback System</DialogTitle>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-10">
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
              
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">How did you hear about us?</label>
                  <Select value={q1} onValueChange={setQ1}>
                    <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-none text-white/60">
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0F] border-white/10 rounded-none text-white z-[9999]">
                      <SelectItem value="Instagram">Instagram</SelectItem>
                      <SelectItem value="Facebook">Facebook</SelectItem>
                      <SelectItem value="Google">Google</SelectItem>
                      <SelectItem value="Friends">Friends</SelectItem>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="AI">AI</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="source" value={q1 === 'Other' ? other1 : q1} />
                  {q1 === 'Other' && <Input value={other1} onChange={(e) => setOther1(e.target.value)} placeholder="Specify Source" className="mt-4 bg-white/5 border-white/10 h-14 rounded-none" />}
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Primary Interest</label>
                  <Select value={q2} onValueChange={setQ2}>
                    <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-none text-white/60">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0F] border-white/10 rounded-none text-white z-[9999]">
                      <SelectItem value="Beer">Beer</SelectItem>
                      <SelectItem value="Wine">Wine</SelectItem>
                      <SelectItem value="Whiskey">Whiskey</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="interest" value={q2 === 'Other' ? other2 : q2} />
                  {q2 === 'Other' && <Input value={other2} onChange={(e) => setOther2(e.target.value)} placeholder="Specify Category" className="mt-4 bg-white/5 border-white/10 h-14 rounded-none" />}
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">How often do you visit?</label>
                  <Select value={q3} onValueChange={setQ3}>
                    <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-none text-white/60">
                      <SelectValue placeholder="Select Frequency" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0F] border-white/10 rounded-none text-white z-[9999]">
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Rarely">Rarely</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="frequency" value={q3 === 'Other' ? other3 : q3} />
                  {q3 === 'Other' && <Input value={other3} onChange={(e) => setOther3(e.target.value)} placeholder="Specify Frequency" className="mt-4 bg-white/5 border-white/10 h-14 rounded-none" />}
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Inventory Request</label>
                  <Select value={q4} onValueChange={setQ4}>
                    <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-none text-white/60">
                      <SelectValue placeholder="Select Need" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0F] border-white/10 rounded-none text-white z-[9999]">
                      <SelectItem value="Discounts">Discounts</SelectItem>
                      <SelectItem value="New products">New products</SelectItem>
                      <SelectItem value="Events">Events</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="request" value={q4 === 'Other' ? other4 : q4} />
                  {q4 === 'Other' && <Textarea value={other4} onChange={(e) => setOther4(e.target.value)} placeholder="Detail your request..." className="mt-4 bg-white/5 border-white/10 rounded-none min-h-[120px]" />}
                </div>
              </div>

              {submitError && (
                <div role="alert" className="text-[10px] font-black text-primary bg-primary/10 border border-primary/20 p-5 uppercase tracking-[0.3em]">
                  {submitError}
                </div>
              )}
              
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-white hover:text-black text-white font-black tracking-[0.3em] uppercase h-16 rounded-none transition-all duration-500 shadow-boutique border-none">
                {isSubmitting ? 'Transmitting...' : 'Transmit Feedback'}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Survey;