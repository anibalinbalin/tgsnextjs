import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

const Apos = () => <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>&apos;</span>

const policies = [
    {
        title: "Admissions & Re-enrolment",
        description: <>It is the Admissions Team<Apos />s mission to support student recruitment, enrolment and retention, ensuring that prospective and returning families understand the TGS ethos. Visits to the School campus are scheduled on an individual appointment basis and are highly encouraged.</>,
        url: "https://drive.google.com/file/d/14_P7Z4CI1ZFHMbOPupU7kVM33oXNGOHU/view?usp=sharing"
    },
    {
        title: "Attendance & Punctuality",
        description: "The Garzón School acknowledges the importance of all students attending school regularly and on time. For students to enjoy a complete and fulfilling academic, social and co-curricular life at The Garzón School, we encourage exemplary attendance and punctuality.",
        url: "https://drive.google.com/file/d/1Htt9dKwmFxoJEvMAPplc5J0fBX1pLRR6/view?usp=sharing"
    },
    {
        title: "Code of Conduct",
        description: "At The Garzón School, we place great importance on the social capital as a driving force for learning. \"Social capital\" refers to the valuable resources embedded in human relationships, such as those that connect administrators, teachers, students, and families.",
        url: "https://drive.google.com/file/d/1gqOCKdWzseXCTnAjXE4tpi7dkkU-wdNS/view?usp=sharing"
    },
    {
        title: "Complaints Procedure",
        description: <>The Garzón School<Apos />s students, parents, families, carers, or other adults who have concerns or complaints should feel that these can be voiced and be confident that they will be considered seriously in a sympathetic, efficient manner and at the appropriate level.</>,
        url: "https://drive.google.com/file/d/1ZYg5GV_qrEnnjAkGaTTfSOCGFcydGILB/view?usp=sharing"
    },
    {
        title: "Health & Safety",
        description: "The Garzón School will always work towards being fully compliant with all health and safety rules and regulations as established by the Administración Nacional de Educación Pública (ANEP), setting exemplary standards across all School activities.",
        url: "https://drive.google.com/file/d/1wQ4cFnCXd8TRRrxymKyObr4MzSSxkFf_/view?usp=sharing"
    },
    {
        title: "Non-Discrimination Policy",
        description: "The Garzón School embraces diversity and values the integrity of the individual. Individual differences of religion, culture, socioeconomic status, national origin, race, ethnicity, sexual orientation, physical appearance, and ability are acknowledged and respected.",
        url: "https://drive.google.com/file/d/1yKFFhMf-7du1bY-cCS0DOd6hVXlMyHRh/view?usp=sharing"
    },
    {
        title: "Nutrition",
        description: <>Good nutrition is vital to children<Apos />s overall development and well-being. To provide the best possible nutrition for our students and staff, The Garzón School implements the following policies to encourage the development of healthy and balanced eating habits.</>,
        url: "https://drive.google.com/file/d/1GEXVU-Wf4TB9J8GJziATrwwMqX3IyygM/view?usp=sharing"
    },
    {
        title: "Safeguarding",
        description: "Safeguarding is defined as all measures, steps and actions that must be taken to protect children from risks that may cause harm or injury. All activities organized by The Garzón School require all safeguarding procedures to be followed at all times.",
        url: "https://drive.google.com/file/d/15YLWwx7uJI6gqXZZb7ykcMWhXARziDu6/view?usp=drive_link"
    },
    {
        title: "Scholarship & Financial Aid",
        description: <>This policy outlines how The Garzón School provides both needs-based financial aid and merit-based Changemaker Scholarships to support equitable access and celebrate student excellence. It details eligibility, application processes, renewal timelines, and funding structures, with a focus on diversity, inclusion, and alignment with the school<Apos />s strategic priorities.</>,
        url: "https://drive.google.com/file/d/1uGy-8JnuXqkifPpKEOSHzmDbabntt2vx/view?usp=drive_link"
    },
    {
        title: "Teaching & Learning",
        description: "At The Garzón School, we believe that high-quality and high-impact teaching and learning occur when students are equipped to become independent learners and are empowered to become active participants in their learning journey.",
        url: "https://drive.google.com/file/d/186baS9jr8p4uWokIjCEXu7YdVHgZnymP/view?usp=sharing"
    },
    {
        title: "Technology",
        description: <>This policy outlines The Garzón School<Apos />s approach to integrating technology in ways that enhance learning, foster creativity, and promote responsible digital citizenship. It covers device provision, acceptable use, online safety, data protection, and family engagement, all grounded in principles of equity, ethics, and purposeful tech use.</>,
        url: "https://drive.google.com/file/d/1fKN1twRRNnHO8USmeFKmy2V0WXFdLwLd/view?usp=sharing"
    },
    {
        title: "Tuition & Fee Payments",
        description: "The Garzón School has a transparent fee structure. Up-to-date tuition fees will be outlined in the annual re-enrolment letter and shared with parents. Tuition Fees are an essential source of revenue for the school to attract and retain the best teachers and leaders, and provide students with an outstanding education and facilities.",
        url: "https://drive.google.com/file/d/1Eyyevlr4n6WQ41yAQw44L7B-K87PkEXH/view?usp=sharing"
    },
    {
        title: "Wellbeing & Inclusion",
        description: "The Garzón School increases access and engagement in learning for all students by identifying and removing barriers and providing a safe and caring environment. We provide all students with the opportunity to achieve their best academically, emotionally and socially.",
        url: "https://drive.google.com/file/d/1uGy-8JnuXqkifPpKEOSHzmDbabntt2vx/view?usp=drive_link"
    }
]

export default function Features() {
    return (
        <section className="relative py-16 md:py-32" style={{ backgroundColor: '#8FA68A' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {policies.map((policy, index) => (
                        <Card key={index} className="group shadow-zinc-950/5 flex flex-col h-full text-center bg-white">
                            <CardHeader className="pb-3">
                                <h3 className="text-2xl font-semibold text-black">{policy.title}</h3>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-black mb-6 flex-grow">{policy.description}</p>
                                <div className="mt-auto">
                                    <Button
                                        asChild
                                        className="text-white px-6 py-3 hover:opacity-90"
                                        style={{ backgroundColor: '#D39885' }}
                                    >
                                        <a href={policy.url} target="_blank" rel="noopener noreferrer">
                                            Read the full Policy
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <DevBadge name="features-1" />
        </section>
    )
}
