import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import DevBadge from './dev-badge'

export default function ProactiveSection() {
    return (
        <section className="relative pt-6 md:pt-12 pb-32 bg-[#D39885]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                        <Image
                            src="/assets/1_ourschool/6-safeguarding/IMG_07072.JPG"
                            alt="Students learning about safety"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Card className="md:col-span-2 bg-transparent border-none shadow-none">
                        <CardContent className="flex flex-col justify-center p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Proactive care.<br />Educating for safety.</h2>
                            <p className="text-2xl leading-relaxed font-light text-white mb-8">
                                Much of the Safeguarding Team<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s work is proactive and educational, fostering awareness and sharing best practices in areas such as online safety, healthy relationships, and emotional well-being. Our team is dedicated to equipping students, families, and staff with the knowledge and tools they need to create and maintain a safe, respectful, and supportive community. These efforts are guided by The Garzón School<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s comprehensive Safeguarding Policy, ensuring a clear framework for safeguarding excellence.
                            </p>
                            <Button asChild className="w-fit bg-white text-[#D39885] hover:bg-white/90">
                                <Link href="https://drive.google.com/file/d/15YLWwx7uJI6gqXZZb7ykcMWhXARziDu6/view?usp=drive_link" target="_blank">
                                    Read the policy
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <DevBadge name="proactive-section" />
        </section>
    )
}
