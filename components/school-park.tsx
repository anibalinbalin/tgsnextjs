import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default async function SchoolPark() {
    const t = await getTranslations('HomePage.park')

    return (
        <section className="relative h-[60vh] md:h-[50rem] overflow-hidden">
            <Image
                src="/assets/0_mainpage/drone.jpg"
                alt={t('alt')}
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl text-balance text-white font-medium">{t('title')}</h2>
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-terracotta hover:bg-terracotta/90 text-white border-terracotta"
                        >
                            {t('button')}
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="school-park" />
        </section>
    )
}
