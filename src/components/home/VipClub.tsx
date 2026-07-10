import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { Star, Gift, Award, Sparkles } from "@/components/Icons";
import { subscribeToVipClub } from "@/lib/emailSignup";
import { TiltCard } from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";

const schema = z.object({
  name: z.string().trim().max(80).optional(),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  company: z.string().optional(), // honeypot — bots fill this, humans never see it (validated manually, not via schema)
});

type FormValues = z.infer<typeof schema>;

const BENEFITS = [
  { icon: Sparkles, text: "Early access to rare bottle drops before they hit the shelf" },
  { icon: Gift, text: "A free birthday bottle pick, on us" },
  { icon: Award, text: "Invitations to exclusive in-store tastings" },
  { icon: Star, text: "Seasonal discount codes sent straight to your inbox" },
];

export const VipClub = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);

    // Honeypot — silently accept without sending
    if (values.company) {
      setSubmitted(true);
      return;
    }

    // Frontend rate limit — same pattern as the feedback survey
    const now = Date.now();
    const last = Number(localStorage.getItem("vipSignupLastSubmit") || 0);
    if (now - last < 60_000) {
      setSubmitError("Please wait a moment before submitting again.");
      return;
    }

    const result = await subscribeToVipClub(values.email, values.name);
    if (!result.ok) {
      setSubmitError("We couldn't sign you up. Please check your connection and try again.");
      return;
    }
    localStorage.setItem("vipSignupLastSubmit", String(now));
    setSubmitted(true);
  };

  return (
    <Section
      id="vip-club"
      className=""
      eyebrow="Members Only"
      title="Join the VIP Club"
      subtitle="Free to join. First to know about rare drops, tastings, and seasonal offers."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Benefits */}
        <TiltCard>
          <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 sm:p-10 md:p-14 h-full rounded-2xl">
          <ul className="space-y-6 sm:space-y-8">
            {BENEFITS.map((b) => (
              <li key={b.text} className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/70 sm:h-11 sm:w-11">
                  <b.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="pt-1 text-sm leading-relaxed text-white/70 sm:pt-2 sm:text-base">{b.text}</p>
              </li>
            ))}
          </ul>
          </div>
        </TiltCard>

        {/* Form */}
        <TiltCard>
          <div className="relative bg-black/40 backdrop-blur-md border border-white/5 p-6 sm:p-10 md:p-14 h-full rounded-2xl">
          {submitted ? (
            <div className="relative flex flex-col items-center justify-center text-center h-full min-h-[280px]">
              <ConfettiBurst />
              <div className="relative z-10 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-white/70" />
              </div>
              <h3 className="text-2xl font-display font-black italic text-white mb-3 tracking-tight">You're In</h3>
              <p className="text-white/50 text-sm max-w-xs">
                Welcome to the club. Keep an eye on your inbox for your first VIP offer.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" noValidate>
                <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="vip-company">Company</FormLabel>
                        <FormControl>
                          <Input id="vip-company" tabIndex={-1} autoComplete="off" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="vip-name" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                        First Name (optional)
                      </FormLabel>
                      <FormControl>
                        <Input id="vip-name" placeholder="Jane" className="h-12 rounded-none border-white/10 bg-white/5 text-white sm:h-14" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="vip-email" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input id="vip-email" type="email" placeholder="jane@example.com" className="h-12 rounded-none border-white/10 bg-white/5 text-white sm:h-14" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError && (
                  <div role="alert" className="text-[10px] font-black text-primary bg-primary/10 border border-primary/20 p-4 uppercase tracking-[0.2em]">
                    {submitError}
                  </div>
                )}

                <Magnetic>
                  <button 
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="group relative inline-flex h-12 sm:h-14 w-full items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 font-black uppercase tracking-[0.2em] text-[11px] text-white overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 shadow-xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {form.formState.isSubmitting ? "Joining…" : "Join Free"}
                    </span>
                  </button>
                </Magnetic>
                <p className="text-white/20 text-[10px] text-center mt-4">No spam. Unsubscribe anytime.</p>
              </form>
            </Form>
          )}
          </div>
        </TiltCard>
      </div>
    </Section>
  );
};
