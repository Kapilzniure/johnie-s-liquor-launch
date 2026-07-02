import { useEffect } from "react";
import { Seo } from "@/components/Seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <Seo
        title="Privacy Policy | Johnnies Liquor Store"
        description="How Johnnies Liquor Store collects, uses, and protects your information."
        path="/privacy"
      />
      <div className="container mx-auto px-5 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6 text-sm">Effective Date: May 17, 2026</p>
        
        <section className="mb-10">
          <h2 className="text-2xl font-display font-bold mb-4 text-gold">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us through our website, such as when you fill out our survey or contact us. This may include your name, email address, and preferences regarding our products.</p>
          <p>We also automatically collect certain information about your device and how you interact with our website using Google Analytics. This includes your IP address, browser type, and pages visited.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-bold mb-4 text-gold">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide, maintain, and improve our services.</li>
            <li>To understand how visitors use our website and improve the user experience.</li>
            <li>To communicate with you about our products, services, and promotions.</li>
            <li>To comply with legal obligations, including age verification for alcohol-related content.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-bold mb-4 text-gold">3. Age Verification</h2>
          <p>Our website is intended for individuals who are 21 years of age or older. We use age verification tools to ensure that our content is only accessible to those of legal drinking age. We do not knowingly collect information from individuals under the age of 21.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-bold mb-4 text-gold">4. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share information with third-party service providers (like Google Analytics and Formspree) who perform services on our behalf, but only as necessary for them to provide those services.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-bold mb-4 text-gold">5. Your Choices</h2>
          <p>You can choose not to provide personal information, although it may limit your ability to use certain features of our website (like participating in our survey).</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-display font-bold mb-4 text-gold">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2 font-medium">Johnnie's Liquor Store</p>
          <p>13201 Pond Springs Rd, Suite 203</p>
          <p>Austin, TX 78729</p>
          <p>(512) 383-5004</p>
        </section>

        <div className="mt-12">
          <a href="/" className="text-gold hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
