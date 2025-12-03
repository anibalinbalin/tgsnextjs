import React from 'react'
import DevBadge from './dev-badge'
import { Button } from './ui/button'

export default function TeamCtaHero() {
    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/7-great_place/DSC_6360.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6">
                                <div className="mx-auto max-w-5xl text-center">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl mt-8 font-medium text-white lg:mt-16 whitespace-nowrap">Our team isn<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>t just valued;<br />they<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re invaluable.</h1>
                                    <div className="mt-8">
                                        <Button size="lg" className="text-lg px-8 py-6 bg-[#D39885] hover:bg-[#C65D3B] text-white">
                                            Meet our team!
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <DevBadge name="team-cta-hero" />
        </div>
    )
}
