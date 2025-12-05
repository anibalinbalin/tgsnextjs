import CampusHero from '@/components/campus-hero'
import CampusContent5 from '@/components/campus-content5'
import CampusMapSection from '@/components/campus-map-section'
import OurcampusSection5 from '@/components/ourcampus-section5'
import RosanBoschSection from '@/components/rosan-bosch-section'
import RosanquoteSection from '@/components/rosanquote-section'
import TwoMapsSection from '@/components/two-maps-section'
import SixImagesSection from '@/components/six-images-section'
import Footer from '@/components/footer'

export default function LearningVillagePage() {
    return (
        <div>
            <CampusHero />
            <CampusContent5 />
            <CampusMapSection />
            <OurcampusSection5 />
            <RosanBoschSection />
            <RosanquoteSection />
            <TwoMapsSection />
            <SixImagesSection />
            <Footer />
        </div>
    )
}
