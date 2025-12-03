import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-5";
import SchoolLevels from "@/components/school-levels";
import ContentSection2 from "@/components/content-section-2";
import InstagramGrid from "@/components/instagram-grid";
import { TeamCarousel } from "@/components/blocks/team-carousel";
import LearnersToLeaders from "@/components/learners-to-leaders";
import SchoolPark from "@/components/school-park";
import Accreditations from "@/components/accreditations";
import FallInLove from "@/components/fall-in-love";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <SchoolLevels />
      <ContentSection2 />
      <TeamCarousel />
      <LearnersToLeaders />
      <SchoolPark />
      <Accreditations />
      <InstagramGrid />
      <FallInLove />
      <Footer />
    </>
  );
}
