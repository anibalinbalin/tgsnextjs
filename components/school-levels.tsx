import Image from 'next/image'
import DevBadge from './dev-badge'

export default function SchoolLevels() {
    return (
        <section className="relative bg-terracotta pb-32" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}>
            <div className="@container mx-auto max-w-7xl px-6 pt-12">
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/0_mainpage/early-years.jpg"
                                alt="Early Years - A child reading in a cozy circular reading nook"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-3">Early Years</h3>
                            <p className="mb-8 line-clamp-2 text-sm text-white md:mb-12 md:text-base lg:mb-9">A joyful, nature-inspired start to learning for students aged 2-6, nurturing curiosity, creativity, and foundational skills through play and exploration.</p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/0_mainpage/primary-school.jpg"
                                alt="Primary School - Students learning in a modern classroom"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-3">Primary School</h3>
                            <p className="mb-8 line-clamp-2 text-sm text-white md:mb-12 md:text-base lg:mb-9">Empowering young learners aged 6-12 to grow as ethical thinkers, collaborators, and changemakers through inquiry-based learning and real-world connections.</p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/0_mainpage/secondary-school.jpg"
                                alt="Secondary School - Aerial view of students in a circular outdoor learning space"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-3">Secondary School</h3>
                            <p className="mb-8 line-clamp-2 text-sm text-white md:mb-12 md:text-base lg:mb-9">Challenging students to lead with purpose, authenticity, and integrity, combining individualised learning paths, nature immersion, and global citizenship.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DevBadge name="school-levels" />
        </section>
    )
}
