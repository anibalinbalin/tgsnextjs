import Testimonial4Hero from '@/components/testimonial4-hero'
import TestimonialCard from '@/components/testimonial-card'
import HowtojoinFinal from '@/components/howtojoin-final'
import FooterSection from '@/components/footer'

export default function Testimonial4Page() {
    return (
        <main>
            <Testimonial4Hero />
            <TestimonialCard
                name="Isabella"
                subtitle="Isabella, TGS Parent"
                quote="The most poignant shift we observed in our daughter during her first year at TGS was that she slowly but surely gained more confidence in herself, and truly began to understand that making mistakes is a healthy part of the process. This could only have come about with a consistent focus from her educators on her efforts — not her results.

We noticed a greater sense of ease in her body and she is always high spirits arriving to school in the mornings and leaving school in the afternoons. We're excited to have her little sister joining her at The Garzón School this year!"
                imageSrc="/placeholder.svg"
                hideButton
            />
            <HowtojoinFinal />
            <FooterSection />
        </main>
    )
}
