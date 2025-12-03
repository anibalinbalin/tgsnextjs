import Link from 'next/link'
import ContentBlock from './content-block'

export default function SchoolmealsDetail() {
    return (
        <ContentBlock name="schoolmeals-detail" className="py-12 md:py-20 bg-white">
            <h1 className="text-center text-black" style={{ fontSize: '35px', lineHeight: '47px', fontWeight: 500 }}>School Meals</h1>
            <p className="text-2xl leading-relaxed font-light text-black mt-6">The Garzón School strives to minimize additional costs and ensures that most extras are optional. However, the primary non-optional cost outside of the Tuition Fee is our daily meal programme, which includes a morning snack, lunch, and an afternoon snack. These meals are freshly prepared on-site and enjoyed by our students. The cost is UYU $470 per day in 2025. Please note that this rate is subject to review, and any revised pricing will be set by our catering partners, <Link href="/nutrition" className="underline text-[#D39885]">Piña Dulce</Link>. (2nd child discount: 10%; 3rd child discount: 15%).</p>
        </ContentBlock>
    )
}
