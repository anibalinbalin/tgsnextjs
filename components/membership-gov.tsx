import ContentBlock from './content-block'

export default function MembershipGov() {
    return (
        <ContentBlock name="membership-gov" className="py-12 md:py-20 bg-white">
            <div className="mx-auto max-w-4xl space-y-6">
                <h2 className="text-left text-black underline text-4xl leading-snug font-medium decoration-[#D39885]">
                    Membership: Joining the Asociación Civil
                </h2>
                <p className="text-left text-black text-2xl leading-loose font-light">
                    Membership of the Asociación Civil is <strong>open to all parents and guardians</strong> of currently enrolled students, as well as individuals who wish to support the mission of the school.
                </p>
                <p className="text-left text-black text-2xl leading-loose font-light">
                    By becoming a member, you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black text-2xl leading-loose font-light">
                    <li>Gain the right to <strong>vote</strong> at the General Assembly.</li>
                    <li>Help <strong>elect the Board of Directors.</strong></li>
                    <li>Contribute to discussions and decisions that shape the school<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s future.</li>
                </ul>
                <p className="text-left text-black pt-4 text-2xl leading-loose font-light">
                    <strong>Membership Requirements:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black text-2xl leading-loose font-light">
                    <li>Request a membership form from the School Office (TGS Campus).</li>
                    <li>Return the completed form to the School Office with a copy of your ID.</li>
                    <li>Renew your membership annually by confirming your participation at the General Assembly.</li>
                </ul>
                <p className="text-left text-black pt-4 text-2xl leading-loose font-light">
                    <strong>Why join:</strong><br />
                    The Asociación Civil is not just an administrative structure — it is the living expression of our school<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s values: community, transparency, and shared purpose. Joining means taking part in building an institution that belongs to all of us and will serve generations to come.
                </p>
            </div>
        </ContentBlock>
    )
}
