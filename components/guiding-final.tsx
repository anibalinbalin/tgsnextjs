import ContentBlock from './content-block'

export default function GuidingFinal() {
    return (
        <ContentBlock name="guiding-final" className="py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-center text-black underline text-4xl leading-snug font-medium decoration-[#D39885]">
                    Our Guiding Accreditation Principles
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-black text-2xl leading-loose font-light">
                    <li><span className="font-bold">Excellence in Learning:</span> A clearly defined curriculum and competency framework that fosters curiosity, agency, and critical thinking.</li>
                    <li><span className="font-bold">Integrity in Governance:</span> Transparent, ethical leadership under a non-profit Asociación Civil structure.</li>
                    <li><span className="font-bold">Well-being & Safety:</span> Robust safeguarding, inclusion, and health protocols aligned with international standards.</li>
                    <li><span className="font-bold">Sustainability & Innovation:</span> A purpose-built, nature-integrated campus that embodies our mission and values.</li>
                </ul>
            </div>
        </ContentBlock>
    )
}
