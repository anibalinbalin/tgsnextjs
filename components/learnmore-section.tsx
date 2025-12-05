'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'
import { Button } from './ui/button'

export default function LearnmoreSection() {
    const t = useTranslations('PathwaysPage')

    return (
        <ContentBlock name="learnmore-section" className="py-12 md:py-20 bg-white">
            <p className="text-center text-black text-2xl leading-relaxed font-light">{t('learnMore.text')}</p>
            <div className="flex justify-center mt-8">
                <Button asChild className="bg-[#D39885] hover:bg-[#c08775] text-white">
                    <a href="mailto:maru@thegarzonschool.edu.uy?subject=Co-Curricular%20Club%20Provider">{t('learnMore.button')}</a>
                </Button>
            </div>
        </ContentBlock>
    )
}
