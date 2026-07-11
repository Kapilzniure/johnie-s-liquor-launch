import { Seo } from "@/components/Seo";
import { PageTransition } from "@/components/ui/PageTransition";
import { Specials } from "@/components/home/Specials";
import { Occasions } from "@/components/home/Occasions";
import { Delivery } from "@/components/home/Delivery";

const Services = () => {
  return (
    <PageTransition>
      <Seo title="Services & Specials | Johnnie's Liquor Store" description="Discover our delivery services, weekly specials, and curated occasions." />
      <div className="pt-24 bg-[#050505]">
        <div className="flex flex-col gap-24 sm:gap-32 py-24">
          <Specials />
          <Occasions />
          <Delivery />
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
