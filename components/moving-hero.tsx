import React from 'react'
import { HeroHeader } from './header'
import DevBadge from './dev-badge'

export default function MovingHero() {
    return (
        <div className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/2_admissions/5-moving/Photo_6553723_DJI_123_jpg_4855318_0_202281411420_photo_original.jpg.JPG)' }}>
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10">
                <HeroHeader />
                <main>
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-3xl text-center lg:ml-0 lg:text-left">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl mt-8 max-w-2xl font-medium text-white lg:mt-16">Latin America<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s best kept secret.</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </div>
            <DevBadge name="moving-hero" />
        </div>
    )
}
