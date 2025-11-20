import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-5";
import Features from "@/components/features-1";
import ContentSection2 from "@/components/content-section-2";
import Features4 from "@/components/features-4";
import { Gallery6 } from "@/components/blocks/gallery6";
import LearnersToLeaders from "@/components/learners-to-leaders";
import SchoolPark from "@/components/school-park";
import Features5 from "@/components/features-5";
import FallInLove from "@/components/fall-in-love";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <Features />
      <ContentSection2 />
      <Gallery6 />
      <LearnersToLeaders />
      <SchoolPark />
      <Features5 />
      <Features4 />
      <FallInLove />
      <Footer />
    </>
  );
}
