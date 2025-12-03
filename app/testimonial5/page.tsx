import Testimonial5Hero from '@/components/testimonial5-hero'
import TestimonialCard from '@/components/testimonial-card'
import HowtojoinFinal from '@/components/howtojoin-final'
import FooterSection from '@/components/footer'

export default function Testimonial5Page() {
    return (
        <main>
            <Testimonial5Hero />
            <TestimonialCard
                name="David"
                subtitle="David, TGS Parent"
                quote="Since starting at The Garzón School last year, our son has shown a new appreciation for learning, especially in math and science. The Co-Curricular Clubs have also had a profound impact, as he is now excelling in many activities that he previously found intimidating.

He is genuinely happy to go to school every day, and for that we are extremely grateful."
                imageSrc="/placeholder.svg"
                hideButton
            />
            <HowtojoinFinal />
            <FooterSection />
        </main>
    )
}
