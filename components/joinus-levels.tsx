import Image from 'next/image'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function JoinusLevels() {
    return (
        <section className="relative bg-terracotta pb-32">
            <div className="@container mx-auto max-w-7xl px-6 pt-12">
                <div className="mx-auto max-w-4xl text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Come and join us for an Open Morning!</h2>
                    <p className="text-white text-lg md:text-xl">Come explore our stunning campus on Ruta 104 and meet some of the passionate educators who will be part of your child<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s learning journey at TGS. Spaces are limited, so please RSVP using the link provided below.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/2_admissions/1-joinus/_DSC0643_3.JPG"
                                alt="Open Morning June 2025"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">Saturday 14 June 2025</h3>
                            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-terracotta">
                                <a href="https://forms.gle/vLnDSUrsovLX5Do19" target="_blank" rel="noopener noreferrer">RSVP (Google Forms)</a>
                            </Button>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/2_admissions/1-joinus/2025RosanBoshPrevios_11.jpg"
                                alt="Open Morning August 2025"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">Saturday 16 August 2025</h3>
                            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-terracotta">
                                <a href="https://forms.gle/vLnDSUrsovLX5Do19" target="_blank" rel="noopener noreferrer">RSVP (Google Forms)</a>
                            </Button>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/2_admissions/1-joinus/EleazarCuadros2025_RosanBosh_13.jpg"
                                alt="Open Morning November 2025"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-6">Saturday 8 November 2025</h3>
                            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-terracotta">
                                <a href="https://forms.gle/vLnDSUrsovLX5Do19" target="_blank" rel="noopener noreferrer">RSVP (Google Forms)</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <DevBadge name="joinus-levels" />
        </section>
    )
}
