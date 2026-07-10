import { useEffect } from "react";
import { Seo } from "@/components/Seo";
import { PageTransition } from "@/components/ui/PageTransition";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="bg-transparent text-foreground pt-32 pb-20">
        <Seo
          title="Terms of Service | Johnnies Liquor Store"
          description="Terms and conditions for using the Johnnies Liquor Store website."
          path="/terms"
        />
        <div className="container mx-auto px-5 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6 text-sm">Last Updated: May 17, 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">1. Acceptance of Terms</h2>
            <p>By accessing or using Johnnie's Liquor Store website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">2. Age Requirement</h2>
            <p>You must be at least 21 years of age to access and use this website. By using this site, you represent and warrant that you are of legal drinking age in your jurisdiction. Misrepresenting your age to access this website is a violation of these terms.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">3. Prohibited Content & Activities</h2>
            <p>You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the website. This includes submitting false information in surveys or attempting to bypass age verification.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">4. Alcohol Sales & Delivery</h2>
            <p>All alcohol sales are subject to local, state, and federal laws. We reserve the right to refuse service to anyone for any reason. Delivery services are provided by third-party platforms (DoorDash, Grubhub) and are subject to their respective terms and conditions.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">5. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Johnnie's Liquor Store and is protected by copyright and other intellectual property laws.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">6. Limitation of Liability</h2>
            <p>Johnnie's Liquor Store shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our website.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">7. Changes to Terms</h2>
            <p>We reserve the right to update these Terms of Service at any time. Your continued use of the website after changes are posted constitutes your acceptance of the new terms.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-bold mb-4 text-gold">8. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Texas, without regard to its conflict of law principles.</p>
          </section>

          <div className="mt-12">
            <a href="/" className="text-gold hover:underline">← Back to Home</a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;
