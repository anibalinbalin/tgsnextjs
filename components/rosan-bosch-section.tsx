import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import DevBadge from './dev-badge'

export default function RosanBoschSection() {
    return (
        <section className="relative py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
                    <div className="flex flex-col">
                        <video
                            src="/assets/4-campus/1-learning/rosan-bosch-video.mp4"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B]">Designed by Rosan Bosch</h2>
                        <div className="text-2xl leading-relaxed font-light text-black space-y-6">
                            <p>
                                We believe that spaces influence how you feel, behave, interact, and
                                ultimately, how you learn. That<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s why The Garzón School partnered with
                                Rosan Bosch Studio to design and create our purpose-built campus in the
                                beautiful Uruguayan countryside—a space thoughtfully crafted to inspire
                                curiosity, collaboration, and a love of learning.
                            </p>
                            <p>
                                Rosan Bosch Studio designs innovative, playful learning spaces that
                                empower and inspire learners worldwide. For The Garzón School, they have
                                created a truly world-class campus that serves as a beacon of
                                high-quality, design-led, and nature-based education—not only for Latin
                                America but for the global stage.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <Button asChild className="w-fit bg-[#D39885] hover:bg-[#C65D3B] text-white">
                                <Link href="https://rosanbosch.com/en/page/projects" target="_blank" rel="noopener noreferrer">
                                    See other projects designed by Rosan Bosch Studio
                                </Link>
                            </Button>
                            <Link
                                href="https://youtu.be/q5mpeEa_VZo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full max-w-sm group"
                            >
                                <Image
                                    src="https://img.youtube.com/vi/q5mpeEa_VZo/maxresdefault.jpg"
                                    alt="Watch Rosan Bosch Studio video"
                                    width={480}
                                    height={270}
                                    className="w-full rounded-lg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors rounded-lg">
                                    <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <DevBadge name="rosan-bosch-section" />
        </section>
    )
}
