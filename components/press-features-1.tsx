'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type CountryKey = 'unitedStates' | 'chile' | 'italy' | 'uruguay' | 'unitedKingdom' | 'argentina' | 'denmark'

const pressItems: Array<{
    title: string
    publication: string | React.ReactNode
    author?: string
    locationKey: CountryKey
    date: string
    url: string
    signUpRequired?: boolean
    image: string
}> = [
    {
        title: "Rosan Bosch Studio Releases Nature-Based Campus for The Garzón School in Uruguay",
        publication: "The World Architecture Community",
        locationKey: "unitedStates",
        date: "May 2025",
        url: "https://worldarchitecture.org/architecture-news/fhmng/rosan-bosch-studio-releases-nature-based-campus-for-the-garz%C3%B3n-school-in-uruguay.html",
        image: "/assets/1_ourschool/5-press/press_assets/Eleazar+Cuadros55.jpg"
    },
    {
        title: "The Garzón School / Rosan Bosch Studio",
        publication: "ArchDaily",
        author: "Hadir Al Koshta",
        locationKey: "chile",
        date: "May 2025",
        url: "https://www.archdaily.com/1030340/the-garzon-school-rosan-bosch-studio",
        image: "/assets/1_ourschool/5-press/press_assets/the-garzon-school-rosan-bosch-studio_19.jpg"
    },
    {
        title: "Rosan Bosch Designs Nature-Integrated Garzón School in a Eucalyptus Forest in Uruguay",
        publication: "Designboom",
        author: "Kat Barandy",
        locationKey: "italy",
        date: "May 2025",
        url: "https://www.designboom.com/architecture/rosan-bosch-studio-garzon-school-eucalyptus-forest-uruguay-05-20-2025/",
        image: "/assets/1_ourschool/5-press/press_assets/Eleazar+Cuadros.(2025)_RosanBosh+-+Previos_49.jpg"
    },
    {
        title: "Discovering Excellence: The Best International Schools in Uruguay",
        publication: "Team Haverkate",
        author: "Ralph Haverkate",
        locationKey: "uruguay",
        date: "January 2025",
        url: "https://www.realestate-in-uruguay.com/blog/best-international-schools-uruguay/",
        image: "/assets/1_ourschool/5-press/press_assets/The-Garzon-School.jpg"
    },
    {
        title: "Education in Uruguay: What Your Family Must Know",
        publication: "Guru'guay",
        author: "Karen A Higgs",
        locationKey: "uruguay",
        date: "December 2024",
        url: "https://www.guruguay.com/education-in-uruguay/",
        image: "/assets/1_ourschool/5-press/press_assets/Screenshot+2025-01-24+at+21.34.16.png"
    },
    {
        title: "The Garzón School avanza en la construcción de un nuevo campus en la Ruta 104",
        publication: "Radio Viva",
        author: "Marcos Grolero",
        locationKey: "uruguay",
        date: "June 2024",
        url: "https://radiovivafm.uy/podcast/samuel-irving-y-jacques-paullier-en-conexion-empresarial/",
        image: "/assets/1_ourschool/5-press/press_assets/3A3A8385.jpg"
    },
    {
        title: "In Uruguay, a Tax Haven With Lots of Beaches and Little Crime",
        publication: "Bloomberg",
        author: "Ken Parks",
        locationKey: "unitedStates",
        date: "November 2023",
        url: "https://www.bloomberg.com/news/articles/2023-11-07/rich-expats-flock-to-uruguay-a-tax-haven-with-lots-of-beaches-and-little-crime#xj4y7vzkg",
        signUpRequired: true,
        image: "/assets/1_ourschool/5-press/press_assets/1000x749.jpg"
    },
    {
        title: "Co-Headship: Are two heads better than one?",
        publication: "International Schools Network (ISN)",
        locationKey: "unitedKingdom",
        date: "April 2023",
        url: "https://isn.education/articles/co-headship-are-two-heads-better-than-one/",
        signUpRequired: true,
        image: "/assets/1_ourschool/5-press/press_assets/IMG_9439.jpg"
    },
    {
        title: "The Garzón School, una escuela «al aire libre» que se levanta en Uruguay",
        publication: "Agencia EFE",
        author: "Daniela Calone",
        locationKey: "unitedStates",
        date: "March 2023",
        url: "https://quepasamedia.com/noticias/the-garzon-school-una-escuela-al-aire-libre-que-se-levanta-en-uruguay/",
        image: "/assets/1_ourschool/5-press/press_assets/Screenshot+2023-03-19+at+19.33.15.png"
    },
    {
        title: "The Garzón School: un enfoque tanslingüístico en inglés y español",
        publication: "El País",
        author: "Maite Beer",
        locationKey: "uruguay",
        date: "February 2023",
        url: "https://epaper.elpais.com.uy/article/281676849104260",
        image: "/assets/1_ourschool/5-press/press_assets/IMG_9805.JPG"
    },
    {
        title: "Innovaciones en el aula: proyectos tecnológicos, Inteligencia Artificial y translingüismo en Uruguay",
        publication: "El País",
        author: "Maite Beer",
        locationKey: "uruguay",
        date: "February 2023",
        url: "https://www.elpais.com.uy/informacion/educacion/innovaciones-en-el-aula-proyectos-tecnologicos-inteligencia-artificial-y-translinguismo-en-uruguay",
        image: "/assets/1_ourschool/5-press/press_assets/IMG_9806.JPG"
    },
    {
        title: "Surf, hamburguesas de quinoa y pedagogía flexible: así es el colegio fundado por los nuevos migrantes",
        publication: "La Nación",
        author: "Nathalie Kantt",
        locationKey: "argentina",
        date: "December 2022",
        url: "https://www.lanacion.com.ar/sociedad/punta-del-este-surf-hamburguesas-de-quinoa-y-pedagogia-flexible-asi-es-el-colegio-fundado-por-los-nid15122022/",
        image: "/assets/1_ourschool/5-press/press_assets/Screenshot+2023-02-26+at+19.55.44.png"
    },
    {
        title: "The Garzón School in Uruguay is an Ecosystem for Natural Growth",
        publication: "Rosan Bosch Studio",
        locationKey: "denmark",
        date: "August 2022",
        url: "https://rosanbosch.com/en/journal/garz%C3%B3n-school-uruguay-ecosystem-natural-growth",
        image: "/assets/1_ourschool/5-press/press_assets/tgs_render_newsletter_aug202.png"
    },
    {
        title: "La Escuela Garzón: Un Ecosistema para el Crecimiento Natural en Uruguay",
        publication: "Rosan Bosch Studio",
        locationKey: "denmark",
        date: "August 2022",
        url: "https://rosanbosch.com/es/blog/la-escuela-garz%C3%B3n-un-ecosistema-para-el-crecimiento-natural-en-uruguay",
        image: "/assets/1_ourschool/5-press/press_assets/tgs_render_newsletter_aug202.png"
    },
]

export default function PressFeatures() {
    const t = useTranslations('PressPage')

    return (
        <section className="relative py-16 md:py-32" style={{ backgroundColor: '#D39885' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pressItems.map((item, index) => (
                        <Card key={index} className="group shadow-zinc-950/5 flex flex-col h-full text-center bg-white overflow-hidden pt-0 border-0">
                            <div className="relative w-full h-56">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader className="pb-3">
                                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-black mb-2 font-medium">{item.publication}</p>
                                {item.author && <p className="text-gray-600 mb-2">{item.author}</p>}
                                <p className="text-gray-500 mb-6">{t(`countries.${item.locationKey}`)}, {item.date}</p>
                                <div className="mt-auto">
                                    <Button
                                        asChild
                                        className="text-white px-6 py-3 hover:opacity-90"
                                        style={{ backgroundColor: '#8FA68A' }}
                                    >
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            {t('readHere')}{item.signUpRequired && ` ${t('signUpRequired')}`}
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <DevBadge name="press-features-1" />
        </section>
    )
}
