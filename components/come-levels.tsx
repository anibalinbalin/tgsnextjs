import Image from 'next/image'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function ComeLevels() {
    return (
        <section className="relative bg-[#D39885] pb-32">
            <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Discover The Garzón School in person!</h2>
                    <p className="text-2xl leading-relaxed font-light text-white">Our Open Mornings are a chance for prospective families to experience the spirit of TGS firsthand. Set against the backdrop of our stunning 94-acre campus on Ruta 104, these mornings offer guided tours, opportunities to meet members of our teaching and leadership team, and time to ask questions about our learning philosophy, community, and admissions process. Whether you<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re relocating or exploring local options, we warmly invite you to come see what makes The Garzón School such a unique place to grow and learn.</p>
                </div>
            </div>
            <div className="@container mx-auto max-w-7xl px-6">
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
            <DevBadge name="come-levels" />
        </section>
    )
}
