type Gtag = (type: string, action: string, data?: Record<string, unknown>) => void;

/** Safe wrapper around window.gtag — no-ops if analytics isn't loaded/blocked. */
export const trackEvent = (action: string, label?: string, category = "cta") => {
  try {
    const w = window as typeof window & { gtag?: Gtag };
    w.gtag?.("event", action, { event_category: category, event_label: label });
  } catch {
    /* ignore */
  }
};
