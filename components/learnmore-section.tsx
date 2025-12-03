import ContentBlock from './content-block'
import { Button } from './ui/button'

export default function LearnmoreSection() {
    return (
        <ContentBlock name="learnmore-section" className="py-12 md:py-20 bg-white">
            <p className="text-center text-black text-2xl leading-relaxed font-light">To learn more about our Co-Curricular offering, or to inquire into becoming an external Co-Curricular Club leader yourself, drop our Coordinator an email. We<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>d be delighted to hear from you!</p>
            <div className="flex justify-center mt-8">
                <Button asChild className="bg-[#D39885] hover:bg-[#c08775] text-white">
                    <a href="mailto:maru@thegarzonschool.edu.uy?subject=Co-Curricular%20Club%20Provider">Write to our Co-Curricular Coordinator</a>
                </Button>
            </div>
        </ContentBlock>
    )
}
