"use client"

import { useTranslations } from 'next-intl'
import DevBadge from './dev-badge'

interface EventItem {
    date: string
    title: string
    location: string
}

const WavySeparator = () => (
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="mx-6 inline-block">
        <path d="M0 10 Q 10 0, 20 10 Q 30 20, 40 10" stroke="white" strokeWidth="3" fill="none" />
    </svg>
)

export default function CollectiveMarquee() {
    const t = useTranslations('CommitteesPage')
    const events = t.raw('changemaker.events') as EventItem[]

    return (
        <section className="relative bg-terracotta overflow-hidden">
            {/* Marquee */}
            <div className="py-6 overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="flex items-center text-white text-3xl md:text-4xl font-light">
                            {t('upcomingEvents')} <WavySeparator />
                        </span>
                    ))}
                </div>
            </div>

            {/* Events Grid */}
            <div className="max-w-6xl mx-auto px-6 pb-16 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {events.map((event, index) => (
                        <div key={index} className="text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            <div className="text-xl md:text-2xl font-medium mb-4">
                                {event.date}
                            </div>
                            <div className="text-lg md:text-xl font-light mb-1">
                                {event.title}
                            </div>
                            <div className="text-base md:text-lg font-light opacity-90">
                                {event.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DevBadge name="collective-marquee" />
        </section>
    )
}
