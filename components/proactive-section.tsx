'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import DevBadge from './dev-badge'

export default function ProactiveSection() {
    const t = useTranslations('SafeguardingPage')

    return (
        <section className="relative pt-6 md:pt-12 pb-32 bg-[#D39885]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                    <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg">
                        <Image
                            src="/assets/1_ourschool/6-safeguarding/IMG_07072.JPG"
                            alt={t('proactive.imageAlt')}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Card className="md:col-span-2 bg-transparent border-none shadow-none">
                        <CardContent className="flex flex-col justify-center p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">{t('proactive.title1')}<br />{t('proactive.title2')}</h2>
                            <p className="text-2xl leading-relaxed font-light text-white mb-8">
                                {t('proactive.content')}
                            </p>
                            <Button asChild className="w-fit bg-white text-[#D39885] hover:bg-white/90">
                                <Link href="https://drive.google.com/file/d/15YLWwx7uJI6gqXZZb7ykcMWhXARziDu6/view?usp=drive_link" target="_blank">
                                    {t('proactive.button')}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <DevBadge name="proactive-section" />
        </section>
    )
}
