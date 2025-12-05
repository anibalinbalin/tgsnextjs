'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function CommitmentGov() {
    const t = useTranslations('GovernancePage')

    return (
        <ContentBlock name="commitment-gov" className="py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-center text-white underline text-4xl leading-snug font-medium">
                    {t('commitment.title')}
                </h2>
                <p className="text-left text-white text-2xl leading-loose font-light" dangerouslySetInnerHTML={{ __html: t.raw('commitment.text') }} />
                <p className="text-left text-white text-2xl leading-loose font-light">
                    {t('commitment.contact')} <a href="mailto:board@thegarzonschool.edu.uy" className="underline">board@thegarzonschool.edu.uy</a>
                </p>
            </div>
        </ContentBlock>
    )
}
