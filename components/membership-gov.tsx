'use client'

import { useTranslations } from 'next-intl'
import ContentBlock from './content-block'

export default function MembershipGov() {
    const t = useTranslations('GovernancePage')

    return (
        <ContentBlock name="membership-gov" className="py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-left text-black underline text-4xl leading-snug font-medium decoration-[#D39885]">
                    {t('membership.title')}
                </h2>
                <p className="text-left text-black text-2xl leading-loose font-light" dangerouslySetInnerHTML={{ __html: t.raw('membership.openTo') }} />
                <p className="text-left text-black text-2xl leading-loose font-light">
                    {t('membership.byBecoming')}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black text-2xl leading-loose font-light">
                    {(t.raw('membership.benefits') as string[]).map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
                <p className="text-left text-black pt-4 text-2xl leading-loose font-light">
                    <strong>{t('membership.requirementsTitle')}</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black text-2xl leading-loose font-light">
                    {(t.raw('membership.requirements') as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="text-left text-black pt-4 text-2xl leading-loose font-light">
                    <strong>{t('membership.whyJoinLabel')}</strong><br />
                    {t('membership.whyJoin')}
                </p>
            </div>
        </ContentBlock>
    )
}
