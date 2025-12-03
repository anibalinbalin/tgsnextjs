import Testimonial3Hero from '@/components/testimonial3-hero'
import TestimonialCard from '@/components/testimonial-card'
import HowtojoinFinal from '@/components/howtojoin-final'
import FooterSection from '@/components/footer'

export default function Testimonial3Page() {
    return (
        <main>
            <Testimonial3Hero />
            <TestimonialCard
                name="Adam"
                subtitle="Adam, TGS Parent"
                quote="As a new family at a brand new school, it took a leap of faith to enrol our daughter at TGS. We are now one year into the journey, and haven't looked back once. The development of the School is mirrored in our daughter's growth where we see her curiosity and creativity, driving her towards a desire for knowledge.

Thanks to the teachers individualised attention, we've seen a significant increase in our daughters confidence and self-motivation as a learner. School and education has played a vital role in shaping who my daughter is today, and we are confident that it will continue to shape her future in a positive way.

The community-driven approach of TGS, where teachers, parents and students actively participate in shaping the School's development and core values is truly unique. We never imagined being able to have such a direct impact on our daughter's education.

Perhaps most important is the passion and dedication that the teachers show for the students. Whether this is through their daily contact with our daughter, or the ongoing open dialogue with us as parents, the teachers make us feel that our daughter is in the best hands and that education and well-being are a top priority.

Returning from the summer break, there was nothing that our daughter looked forward to more than seeing her teachers: Jess, Leona, Sam, Vicki, Santi and the rest of the TGS crew."
                imageSrc="/assets/2_admissions/4-testimonials/TGS-11.jpg"
                hideButton
            />
            <HowtojoinFinal />
            <FooterSection />
        </main>
    )
}
