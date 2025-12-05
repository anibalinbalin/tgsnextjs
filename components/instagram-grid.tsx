import { getTranslations } from 'next-intl/server'
import DevBadge from './dev-badge'

export default async function InstagramGrid() {
    const t = await getTranslations('HomePage.instagram')

    return (
        <section className="relative py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl leading-snug font-medium text-[#C65D3B]">{t('title')}</h2>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50"></div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50"></div>
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50"></div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50"></div>
                    <div className="bg-gradient-to-br from-rose-50 to-red-50"></div>
                    <div className="bg-gradient-to-br from-cyan-50 to-sky-50"></div>
                </div>
            </div>
            <DevBadge name="instagram-grid" />
        </section>
    )
}
