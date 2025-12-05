'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function MovingIntroDetail() {
    const t = useTranslations('MovingToUruguayPage')

    return (
        <ContentBlock name="moving-intro-detail" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">
                {t.rich('intro', {
                    link: (chunks) => (
                        <a
                            href="https://worldhappiness.report/ed/2024/happiness-of-the-younger-the-older-and-those-in-between/#ranking-of-happiness-2021-2023"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D39885] underline hover:opacity-80"
                        >
                            {chunks}
                        </a>
                    )
                })}
            </p>
        </ContentBlock>
    )
}
