'use client'

import React, { useRef, useEffect } from 'react'
import { HeroHeader } from '@/components/header'
import DevBadge from '@/components/dev-badge'

export default function NatureHero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {})
        }
    }, [])

    return (
        <div className="relative h-[70vh] overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/assets/4-campus/2-nature/nature-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
                <HeroHeader />
                <main>
                    <section>
                        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                                        The school is the park.
                                    </h1>
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mt-2">
                                        The park is the school.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <DevBadge name="nature-hero" />
        </div>
    )
}
