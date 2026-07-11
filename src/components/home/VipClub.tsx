import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Section } from "@/components/Section";
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
  company: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const BENEFITS = [
  { icon: Sparkles, text: "Early access to rare bottle drops" },
  { icon: Gift, text: "A free birthday bottle pick, on us" },
  { icon: Award, text: "Invitations to exclusive in-store tastings" },
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
    if (values.company) {
      setSubmitted(true);
      return;
    }
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
      className="relative"
      eyebrow="Members Only"
      title="The VIP Club"
      subtitle="Free to join. First to know about rare drops, tastings, and seasonal offers."
    >
      <div className="max-w-3xl mx-auto pt-10">
        <TiltCard>
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] border border-[#B8952A]/40 shadow-[0_0_80px_rgba(184,149,42,0.15),0_20px_50px_rgba(0,0,0,0.8)] min-h-[400px] flex flex-col justify-center">
            {/* Metal Texture / Shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10 opacity-30 pointer-events-none mix-blend-overlay z-10" />
            
            {/* Dark base background */}
            <div className="absolute inset-0 bg-[#050505] opacity-70" />

            <div className="absolute top-0 left-0 w-full h-full bg-[#050505]/40 z-10 pointer-events-none backdrop-blur-sm" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none z-10" />

            <div className="relative z-20 grid md:grid-cols-5 p-8 md:p-12 gap-8 md:gap-12 items-center">
              
              {/* Left Side: Card Details & Benefits */}
              <div className="md:col-span-2 space-y-12 border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0 md:pr-12">
                <div>
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-full mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                    <Star className="w-8 h-8 text-white/80" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase text-white tracking-widest">
                    Black Card
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-[0.3em] font-bold uppercase mt-2">
                    Exclusive Membership
                  </p>
                </div>

                <ul className="space-y-6">
                  {BENEFITS.map((b) => (
                    <li key={b.text} className="flex items-center gap-4 group">
                      <b.icon className="w-4 h-4 text-white/30 group-hover:text-primary transition-colors shrink-0" />
                      <span className="text-xs text-white/60 font-sans leading-relaxed group-hover:text-white transition-colors">{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side: Form */}
              <div className="md:col-span-3">
                {submitted ? (
                  <div className="relative flex flex-col items-center justify-center text-center h-full min-h-[280px]">
                    <ConfettiBurst />
                    <h3 className="text-4xl font-display font-black uppercase text-white tracking-widest mb-4">You're In</h3>
                    <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                      Welcome to the club. Keep an eye on your inbox for your first VIP offer.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                        <FormField control={form.control} name="company" render={({ field }) => (
                          <FormItem><FormControl><Input tabIndex={-1} autoComplete="off" {...field} /></FormControl></FormItem>
                        )} />
                      </div>

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">First Name (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="JANE DOE" className="h-12 md:h-14 rounded-xl border-white/10 bg-white/5 text-white focus:border-white/30 transition-colors uppercase placeholder:text-white/20 font-mono tracking-widest" {...field} />
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
                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="JANE@EXAMPLE.COM" className="h-12 md:h-14 rounded-xl border-white/10 bg-white/5 text-white focus:border-white/30 transition-colors uppercase placeholder:text-white/20 font-mono tracking-widest" {...field} />
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
                          className="group relative inline-flex h-16 w-full items-center justify-center gap-3 bg-white text-black rounded-xl px-8 font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:bg-white/90 hover:scale-[1.02] shadow-2xl mt-4"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {form.formState.isSubmitting ? "ACTIVATING..." : "ACTIVATE MEMBERSHIP"}
                          </span>
                        </button>
                      </Magnetic>
                    </form>
                  </Form>
                )}
              </div>

            </div>
          </div>
        </TiltCard>
      </div>
    </Section>
  );
};
