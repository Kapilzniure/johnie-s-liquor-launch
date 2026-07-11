import { Seo } from "@/components/Seo";
import { PageTransition } from "@/components/ui/PageTransition";
import { VisitUs } from "@/components/home/VisitUs";
import { Faq } from "@/components/home/Faq";
import { CallStrip } from "@/components/home/CallStrip";

const Contact = () => {
  return (
    <PageTransition>
      <Seo title="Contact Us | Johnnie's Liquor Store" description="Visit us, read our FAQ, or get in touch today." />
      <div className="pt-24 bg-[#050505]">
        <div className="flex flex-col gap-24 sm:gap-32 py-24">
          <VisitUs />
          <Faq />
          <CallStrip />
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
