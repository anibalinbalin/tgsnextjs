import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Button } from './ui/button'
import DevBadge from './dev-badge'

export default async function SchoolLevels() {
    const t = await getTranslations('HomePage.schoolLevels')

    return (
        <section className="relative bg-terracotta pb-32 clip-school-levels">
            <div className="@container mx-auto max-w-7xl px-6 pt-12">
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 md:mt-8">
                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/0_mainpage/early-years.jpg"
                                alt={t('earlyYears.alt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-3">{t('earlyYears.title')}</h3>
                            <p className="mb-8 line-clamp-2 text-base md:text-lg text-white md:mb-12 lg:mb-9">{t('earlyYears.description')}</p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/0_mainpage/primary-school.jpg"
                                alt={t('primary.alt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-3">{t('primary.title')}</h3>
                            <p className="mb-8 line-clamp-2 text-base md:text-lg text-white md:mb-12 lg:mb-9">{t('primary.description')}</p>
                        </div>
                    </div>

                    <div className="group">
                        <div className="overflow-hidden relative aspect-[3/4] mb-6 rounded-lg">
                            <Image
                                src="/assets/0_mainpage/secondary-school.jpg"
                                alt={t('secondary.alt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-white mb-3">{t('secondary.title')}</h3>
                            <p className="mb-8 line-clamp-2 text-base md:text-lg text-white md:mb-12 lg:mb-9">{t('secondary.description')}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button variant="terracotta" size="lg" asChild>
                        <Link href="/howtojoin">
                            {t('applyButton')}
                        </Link>
                    </Button>
                </div>
            </div>
            <DevBadge name="school-levels" />
        </section>
    )
}
