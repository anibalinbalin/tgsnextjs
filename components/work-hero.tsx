import React from 'react'
import { HeroHeader } from './header'
import DevBadge from './dev-badge'

export default function WorkHero() {
    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/1_ourschool/7-great_place/IMG_2450.JPG)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <HeroHeader />
                <main>
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6">
                            <div className="mx-auto max-w-5xl text-center">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl mt-8 font-medium text-white lg:mt-16 whitespace-nowrap">We are recognised as a<br />Great Place to Work®</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>
            <DevBadge name="work-hero" />
        </div>
    )
}
