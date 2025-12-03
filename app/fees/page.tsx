import FeesHero from '@/components/fees-hero'
import FeeIntroDetail from '@/components/fee-intro-detail'
import FeesTableSection from '@/components/fees-table/fees-table-section'
import TuitionDetail from '@/components/tuition-detail'
import SchoolmealsDetail from '@/components/schoolmeals-detail'
import CocurricularDetail from '@/components/cocurricular-detail'
import ScholarshipCtaHero from '@/components/scholarship-cta-hero'
import Footer from '@/components/footer'

export default function FeesPage() {
    return (
        <>
            <FeesHero />
            <FeeIntroDetail />
            <FeesTableSection />
            <TuitionDetail />
            <SchoolmealsDetail />
            <CocurricularDetail />
            <ScholarshipCtaHero />
            <Footer />
        </>
    )
}
