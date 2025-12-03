import SoftlandingHero from "@/components/softlanding-hero";
import SoftIntroDetail from "@/components/soft-intro-detail";
import SoftLandingFaq from "@/components/soft-landing-faq";
import TestimonialCard from "@/components/testimonial-card";
import SoftFinal from "@/components/soft-final";
import FallinloveFinalSection from "@/components/fallinlove-final-section";
import NondiscDetail from "@/components/nondisc-detail";
import Footer from "@/components/footer";

export default function SoftlandingPage() {
  return (
    <>
      <SoftlandingHero />
      <SoftIntroDetail />
      <SoftLandingFaq />
      <SoftFinal />
      <TestimonialCard
        name="Leona"
        subtitle="Leona Dauphin, Co-Head of School"
        quote="By providing opportunities for students to interact and connect with one another, our Soft Landing helps to foster a sense of belonging and support. This ultimately leads to improved outcomes for learning as children transition."
        imageSrc="/assets/2_admissions/7-soft-landing/Leona.jpg"
        hideButton
        inverted
      />
      <FallinloveFinalSection />
      <NondiscDetail />
      <Footer />
    </>
  );
}
