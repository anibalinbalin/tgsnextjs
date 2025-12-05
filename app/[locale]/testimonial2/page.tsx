import Testimonial2Hero from '@/components/testimonial2-hero'
import TestimonialCard from '@/components/testimonial-card'
import HowtojoinFinal from '@/components/howtojoin-final'
import FooterSection from '@/components/footer'

export default function Testimonial2Page() {
    return (
        <main>
            <Testimonial2Hero />
            <TestimonialCard
                name="Hannah"
                subtitle="Hannah, TGS Parent"
                quote="No words can describe how happy it makes me feel knowing that my kids adore school more than anything in this world. We joined the TGS family last year, and I have seen my children grow from shy church mice into independent, confident and autonomous kids. They shine!

They have such a thirst for learning, they are so engaged in everything they do, not just at school, but at home now too. The change has been huge. And of course this is mainly down to the immense dedication and enthusiasm that comes from the teachers. Their passion oozes through the school walls and you see that reflected on the kids' faces.

As parents, we couldn't feel happier if we tried."
                imageSrc="/assets/2_admissions/4-testimonials/_DSC2716.jpg"
                hideButton
            />
            <HowtojoinFinal />
            <FooterSection />
        </main>
    )
}
