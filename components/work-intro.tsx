'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function WorkIntro() {
    const t = useTranslations('WorkPage')

    const link = (chunks: React.ReactNode) => (
        <a
            href="https://certificaciones.greatplacetowork.com.uy/the-garzon-school"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D39885] hover:underline"
        >
            {chunks}
        </a>
    )

    return (
        <ContentBlock name="work-intro" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">
                {t.rich('intro', { link })}
            </p>
        </ContentBlock>
    )
}
