"use client"

import DevBadge from './dev-badge'

const items = [
    "Ballet", "Taekwondo", "Board Games", "Music", "Swimming", "French", "Surfing",
    "Book Club", "Volunteering", "Cooking", "Skateboarding", "Art", "Sailing", "Yoga",
    "Tennis", "Football", "Cinema", "Italian", "Student Newspaper"
]

export default function PathMarquee() {
    return (
        <section className="relative bg-[#8EB096] py-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...items, ...items, ...items].map((item, index) => (
                    <span key={index} className="text-black text-3xl md:text-4xl font-light mx-4">
                        {item} <span className="mx-4">.</span>
                    </span>
                ))}
            </div>
            <DevBadge name="path-marquee" />
        </section>
    )
}
