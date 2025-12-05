import SoftlandingHero from "@/components/softlanding-hero";
import SoftIntroDetail from "@/components/soft-intro-detail";
import SoftLandingFaq from "@/components/soft-landing-faq";
import TestimonialCard from "@/components/testimonial-card";
import SoftFinal from "@/components/soft-final";
import FallinloveFinalSection from "@/components/fallinlove-final-section";
import NondiscDetail from "@/components/nondisc-detail";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";

export default function SoftlandingPage() {
  const t = useTranslations("SoftlandingPage");
  return (
    <>
      <SoftlandingHero />
      <SoftIntroDetail />
      <SoftLandingFaq />
      <SoftFinal />
      <TestimonialCard
        name={t("testimonial.name")}
        subtitle={t("testimonial.subtitle")}
        quote={t("testimonial.quote")}
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
