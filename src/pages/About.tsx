import { Seo } from "@/components/Seo";
import { PageTransition } from "@/components/ui/PageTransition";
import { OurStory } from "@/components/home/OurStory";
import { StaffPicks } from "@/components/home/StaffPicks";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";

const About = () => {
  return (
    <PageTransition>
      <Seo title="Our Story | Johnnie's Liquor Store" description="Learn about the heritage of Johnnie's Liquor Store." />
      <div className="pt-24 bg-[#050505]">
        <div className="flex flex-col gap-24 sm:gap-32 py-24">
          <OurStory />
          <StaffPicks />
          <Gallery />
          <Reviews />
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
