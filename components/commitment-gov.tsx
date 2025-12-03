import ContentBlock from './content-block'

export default function CommitmentGov() {
    return (
        <ContentBlock name="commitment-gov" className="py-12 md:py-20 bg-[#D39885]">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-center text-white underline text-4xl leading-snug font-medium">
                    Our Commitment
                </h2>
                <p className="text-left text-white text-2xl leading-loose font-light">
                    We believe that governance should model the same values we aim to instill in our students: <strong>agency, integrity, and collaboration</strong>. The Asociación Civil model empowers us to do just that, by making The Garzón School a non-profit, community-driven institution that serves the common good.
                </p>
                <p className="text-left text-white text-2xl leading-loose font-light">
                    For questions about governance or membership, please contact: <a href="mailto:board@thegarzonschool.edu.uy" className="underline">board@thegarzonschool.edu.uy</a>
                </p>
            </div>
        </ContentBlock>
    )
}
