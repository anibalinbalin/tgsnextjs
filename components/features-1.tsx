'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'
import { useTranslations } from 'next-intl'

type PolicyKey = 'admissions' | 'attendance' | 'conduct' | 'complaints' | 'health' | 'nondiscrimination' | 'nutrition' | 'safeguarding' | 'scholarship' | 'teaching' | 'technology' | 'tuition' | 'wellbeing'

const policyData: Array<{ key: PolicyKey; url: string }> = [
    { key: "admissions", url: "https://drive.google.com/file/d/14_P7Z4CI1ZFHMbOPupU7kVM33oXNGOHU/view?usp=sharing" },
    { key: "attendance", url: "https://drive.google.com/file/d/1Htt9dKwmFxoJEvMAPplc5J0fBX1pLRR6/view?usp=sharing" },
    { key: "conduct", url: "https://drive.google.com/file/d/1gqOCKdWzseXCTnAjXE4tpi7dkkU-wdNS/view?usp=sharing" },
    { key: "complaints", url: "https://drive.google.com/file/d/1ZYg5GV_qrEnnjAkGaTTfSOCGFcydGILB/view?usp=sharing" },
    { key: "health", url: "https://drive.google.com/file/d/1wQ4cFnCXd8TRRrxymKyObr4MzSSxkFf_/view?usp=sharing" },
    { key: "nondiscrimination", url: "https://drive.google.com/file/d/1yKFFhMf-7du1bY-cCS0DOd6hVXlMyHRh/view?usp=sharing" },
    { key: "nutrition", url: "https://drive.google.com/file/d/1GEXVU-Wf4TB9J8GJziATrwwMqX3IyygM/view?usp=sharing" },
    { key: "safeguarding", url: "https://drive.google.com/file/d/15YLWwx7uJI6gqXZZb7ykcMWhXARziDu6/view?usp=drive_link" },
    { key: "scholarship", url: "https://drive.google.com/file/d/1uGy-8JnuXqkifPpKEOSHzmDbabntt2vx/view?usp=drive_link" },
    { key: "teaching", url: "https://drive.google.com/file/d/186baS9jr8p4uWokIjCEXu7YdVHgZnymP/view?usp=sharing" },
    { key: "technology", url: "https://drive.google.com/file/d/1fKN1twRRNnHO8USmeFKmy2V0WXFdLwLd/view?usp=sharing" },
    { key: "tuition", url: "https://drive.google.com/file/d/1Eyyevlr4n6WQ41yAQw44L7B-K87PkEXH/view?usp=sharing" },
    { key: "wellbeing", url: "https://drive.google.com/file/d/1uGy-8JnuXqkifPpKEOSHzmDbabntt2vx/view?usp=drive_link" }
]

export default function Features() {
    const t = useTranslations('PoliciesPage')

    return (
        <section className="relative py-16 md:py-32" style={{ backgroundColor: '#8FA68A' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {policyData.map((policy, index) => (
                        <Card key={index} className="group shadow-zinc-950/5 flex flex-col h-full text-center bg-white">
                            <CardHeader className="pb-3">
                                <h3 className="text-2xl font-semibold text-black">{t(`policies.${policy.key}.title`)}</h3>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-black mb-6 flex-grow">{t(`policies.${policy.key}.description`)}</p>
                                <div className="mt-auto">
                                    <Button
                                        asChild
                                        className="text-white px-6 py-3 hover:opacity-90"
                                        style={{ backgroundColor: '#D39885' }}
                                    >
                                        <a href={policy.url} target="_blank" rel="noopener noreferrer">
                                            {t('readButton')}
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <DevBadge name="features-1" />
        </section>
    )
}
