'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import DevBadge from './dev-badge'

export default function RosanBoschSection() {
    const t = useTranslations('LearningVillagePage')

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
                        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B]">{t('rosanBosch.title')}</h2>
                        <div className="text-2xl leading-relaxed font-light text-black space-y-6">
                            <p>{t('rosanBosch.paragraph1')}</p>
                            <p>{t('rosanBosch.paragraph2')}</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <Button asChild className="w-fit bg-[#D39885] hover:bg-[#C65D3B] text-white">
                                <Link href="https://rosanbosch.com/en/page/projects" target="_blank" rel="noopener noreferrer">
                                    {t('rosanBosch.projectsButton')}
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
