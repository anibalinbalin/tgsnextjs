import Testimonial1Hero from '@/components/testimonial1-hero'
import TestimonialCard from '@/components/testimonial-card'
import HowtojoinFinal from '@/components/howtojoin-final'
import FooterSection from '@/components/footer'

export default function Testimonial1Page() {
    return (
        <main>
            <Testimonial1Hero />
            <TestimonialCard
                name="Aníbal"
                subtitle="Aníbal, TGS Parent"
                quote="At TGS, learning is like flying a kite — the child is the kite and the teacher is the one holding the string. The kite moves freely and joyfully, discovering new things and exploring new horizons. The teacher follows, guiding the kite but never restricting its movement. The end goal is always in sight, but the journey is what makes the experience truly special.

Coming from a school where I, as a parent, wasn't even allowed to run, TGS feels like soaring. TGS takes a unique approach to education, following the child's interests and curiosity, like breadcrumbs, and developing from there. I couldn't be happier that we attend TGS, where education is all about exploration, growth, and following the child's natural curiosity."
                imageSrc="/assets/2_admissions/4-testimonials/_DSC2772.jpg"
                hideButton
            />
            <HowtojoinFinal />
            <FooterSection />
        </main>
    )
}
