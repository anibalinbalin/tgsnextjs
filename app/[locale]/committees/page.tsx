import CommitteeHero from '@/components/committee-hero'
import ComiIntroContent5 from '@/components/comi-intro-content5'
import WavyDivider from '@/components/wavy-divider'
import FaqCollective from '@/components/faq-collective'
import { ChangemakerCarousel } from '@/components/blocks/changemaker-carousel'
import CollectiveMarquee from '@/components/collective-marquee'
import { OutdoorCarousel } from '@/components/blocks/outdoor-carousel'
import OutdoorMarquee from '@/components/outdoor-marquee'
import { LibraryCarousel } from '@/components/blocks/library-carousel'
import LibraryMarquee from '@/components/library-marquee'
import { ArtsCarousel } from '@/components/blocks/arts-carousel'
import ArtsMarquee from '@/components/arts-marquee'
import Footer from '@/components/footer'

export default function CommitteesPage() {
    return (
        <>
            <CommitteeHero />
            <ComiIntroContent5 />
            <WavyDivider />
            <FaqCollective />
            <ChangemakerCarousel />
            <CollectiveMarquee />
            <OutdoorCarousel />
            <OutdoorMarquee />
            <LibraryCarousel />
            <LibraryMarquee />
            <ArtsCarousel />
            <ArtsMarquee />
            <Footer />
        </>
    )
}
