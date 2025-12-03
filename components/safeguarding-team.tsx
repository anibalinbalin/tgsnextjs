import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

const teamMembers = [
    {
        name: 'Catalina Garat',
        role: 'Designated Safeguarding Lead',
        image: '/assets/1_ourschool/6-safeguarding/stuff/IMG_1815catalina.jpeg',
    },
    {
        name: 'Leona Dauphin',
        role: 'Deputy Designated Safeguarding Lead',
        image: '/assets/1_ourschool/6-safeguarding/stuff/Leona.jpg',
    },
    {
        name: 'Sam Irving',
        role: 'Deputy Designated Safeguarding Lead',
        image: '/assets/1_ourschool/6-safeguarding/stuff/Sam.JPG',
    },
]

export default function SafeguardingTeam() {
    return (
        <section className="relative pt-6 md:pt-12 pb-16 md:pb-24 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-4xl leading-snug font-medium text-[#C65D3B] text-center mb-12 md:mb-16">
                    Our Safeguarding Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 rounded-full overflow-hidden bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-light text-[#C65D3B] mb-2">
                                {member.name}
                            </h3>
                            <p className="text-gray-600">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button asChild className="bg-[#D39885] hover:bg-[#C65D3B] text-white px-8 py-3 h-auto text-center">
                        <Link href="mailto:catalina@thegarzonschool.edu.uy?subject=Safeguarding%20Incident">
                            Report an Incident to our<br />Designated Safeguarding Lead
                        </Link>
                    </Button>
                </div>
            </div>
            <DevBadge name="safeguarding-team" />
        </section>
    )
}
