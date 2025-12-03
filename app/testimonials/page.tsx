import TestiHero from '@/components/testi-hero'
import ParentIdeasDetail from '@/components/parent-ideas-detail'
import TestimonialCard from '@/components/testimonial-card'
import FallinloveFinalSection from '@/components/fallinlove-final-section'
import FooterSection from '@/components/footer'

export default function TestimonialsPage() {
    return (
        <main>
            <TestiHero />
            <ParentIdeasDetail />
            <TestimonialCard
                name="Aníbal"
                quote="TGS takes a unique approach to education. I couldn't be happier that we attend [a school] where education is all about exploration, growth, and following the child's natural curiosity."
                imageSrc="/assets/2_admissions/4-testimonials/_DSC2772.jpg"
                href="/testimonial1"
            />
            <TestimonialCard
                name="Hannah"
                quote="[Our children] have such a thirst for learning, they are so engaged in everything they do, not just at school but at home now too. The change has been huge. Passion oozes through the school walls."
                imageSrc="/assets/2_admissions/4-testimonials/_DSC2716.jpg"
                href="/testimonial2"
                flipped
                inverted
            />
            <TestimonialCard
                name="Adam"
                quote="The development of the School is mirrored in our daughter's growth; we see her curiosity and creativity, driving her towards a desire for knowledge. As parents, the teachers make us feel that our daughter is in the best hands."
                imageSrc="/assets/2_admissions/4-testimonials/TGS-11.jpg"
                href="/testimonial3"
            />
            <TestimonialCard
                name="Isabella"
                quote="The most poignant shift we observed in our daughter in her first year at TGS was that she slowly but surely gained more confidence in herself. She truly began to understand that making mistakes is a healthy part of the learning process."
                imageSrc="/placeholder.svg"
                href="/testimonial4"
                flipped
                inverted
            />
            <TestimonialCard
                name="David"
                quote="Our son has shown a new appreciation for learning, especially in math and science. The Co-Curricular Clubs have also had a profound impact, as he is now excelling in many activities that he previously found intimidating."
                imageSrc="/placeholder.svg"
                href="/testimonial5"
            />
            <FallinloveFinalSection />
            <FooterSection />
        </main>
    )
}
