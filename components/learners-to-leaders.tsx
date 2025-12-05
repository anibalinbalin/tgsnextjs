import { getTranslations } from 'next-intl/server'
import ContentBlock from './content-block'

export default async function LearnersToLeaders() {
    const t = await getTranslations('HomePage.learners')

    return (
        <ContentBlock name="learners-to-leaders">
            <h2 className="text-balance text-center text-4xl md:text-4xl leading-snug font-medium text-[#C65D3B]">{t('title')}</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light">{t('description')}</p>
        </ContentBlock>
    )
}
