import FaqsHero from '@/components/faqs-hero'
import FaqsDeploy from '@/components/faqs-deploy'
import SafeguardFinalSection from '@/components/safeguard-final-section'
import Footer from '@/components/footer'

export default function FaqsPage() {
    return (
        <>
            <FaqsHero />
            <FaqsDeploy />
            <SafeguardFinalSection noClipPath />
            <Footer />
        </>
    )
}
