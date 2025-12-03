import NatureHero from '@/components/nature-hero'
import NatureContent5 from '@/components/nature-content5'
import PrefoxContent5 from '@/components/prefox-content5'
import FoxSection from '@/components/fox-section'
import PostFoxContent5 from '@/components/post-fox-content5'
import NatureImageSection from '@/components/nature-image-section'
import LearningnatureContent5 from '@/components/learningnature-content-5'
import NatureThreeImages from '@/components/nature-three-images'
import PostnatureContent5 from '@/components/postnature-content-5'
import VisitMap from '@/components/visit-map'
import PostvisitusContent5 from '@/components/postvisitus-content-5'
import Nature2ThreeImages from '@/components/nature2-three-images'
import LearningfromContent5 from '@/components/learningfrom-content5'
import Footer from '@/components/footer'

export default function NaturePage() {
    return (
        <main>
            <NatureHero />
            <NatureContent5 />
            <PrefoxContent5 />
            <FoxSection />
            <PostFoxContent5 />
            <NatureImageSection />
            <LearningnatureContent5 />
            <NatureThreeImages />
            <PostnatureContent5 />
            <VisitMap />
            <PostvisitusContent5 />
            <Nature2ThreeImages />
            <LearningfromContent5 />
            <Footer />
        </main>
    )
}
