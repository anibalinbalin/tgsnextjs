import HeronHero from '@/components/heron-hero'
import HeronIntro from '@/components/heron-intro'
import SafeguardFinalSection from '@/components/safeguard-final-section'
import Footer from '@/components/footer'

export default function HeronPage() {
    return (
        <>
            <HeronHero />
            <HeronIntro />
            <SafeguardFinalSection noClipPath />
            <Footer />
        </>
    )
}
