import CurriHero from '@/components/curri-hero'
import CurriContent5 from '@/components/curri-content-5'
import ReportingsContent5 from '@/components/reportings-content-5'
import BannerLearning from '@/components/banner-learning'
import FaqTgsCurriculum from '@/components/faq-tgs-curriculum'
import BannertgsLearning from '@/components/bannertgs-learning'
import AssessmentTable from '@/components/assessment-table/assessment-table'
import CurriculumContent5Final from '@/components/curriculum-content-5-final'
import FooterSection from '@/components/footer'

export default function CurriculumPage() {
    return (
        <>
            <CurriHero />
            <CurriContent5 />
            <BannerLearning />
            <FaqTgsCurriculum />
            <BannertgsLearning />
            <AssessmentTable />
            <ReportingsContent5 />
            <CurriculumContent5Final />
            <FooterSection />
        </>
    )
}
