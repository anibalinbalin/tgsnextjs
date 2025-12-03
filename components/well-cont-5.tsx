import ContentBlock from './content-block'

export default function WellCont5() {
    return (
        <ContentBlock name="well-cont-5" className="py-12 md:py-20 bg-[#D39885]">
            <p className="text-2xl leading-relaxed font-light text-white mb-8">Our focus on wellbeing means creating a safe, supportive and positive learning environment where each student feels valued and respected. We achieve this in a number of different ways:</p>
            <ul className="text-2xl leading-relaxed font-light text-white space-y-4 list-disc list-inside ml-8">
                <li>Strong <span className="underline">student-teacher relationships</span> which promote positive interactions and provide continued emotional support</li>
                <li>Focus on development of <span className="underline">lifelong healthy habits</span> through our schoolwide Wellness & Movement programme</li>
                <li><span className="underline">Social and Emotional Learning</span> (SEL) delivered in-house by experts as a compulsory component of the our curriculum</li>
                <li>Positive peer-to-peer relationships that form the foundation of our interactions, <span className="underline">community and sense of belonging</span></li>
                <li>Guidance for students to reframe challenges as opportunities for growth, building resilience and a <span className="underline">positive sense of self</span></li>
            </ul>
        </ContentBlock>
    )
}
