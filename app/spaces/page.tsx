import SpacesHero from '@/components/spaces-hero'
import SpacesContent5 from '@/components/spaces-content-5'
import CurriculumTable from '@/components/spaces-table/curriculum-table'
import SpacesContent5Bottom from '@/components/spaces-content-5-bottom'
import MorningFinalSection from '@/components/morning-final-section'
import FooterSection from '@/components/footer'

export default function SpacesPage() {
    return (
        <>
            <SpacesHero />
            <SpacesContent5 />
            <CurriculumTable />
            <SpacesContent5Bottom />
            <MorningFinalSection />
            <FooterSection />
        </>
    )
}
