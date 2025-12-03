import ContentBlock from './content-block'

export default function CocurricularDetail() {
    return (
        <ContentBlock name="cocurricular-detail" className="py-12 md:py-20 bg-white">
            <h1 className="text-center text-black" style={{ fontSize: '35px', lineHeight: '47px', fontWeight: 500 }}>Co-Curricular</h1>
            <p className="text-2xl leading-relaxed font-light text-black mt-6">Our co-curricular programme offers a rich array of opportunities to enhance learning beyond the classroom. It consists of three core elements: <span className="font-bold">Pathways</span>, our signature clubs designed to foster mastery and excellence; <span className="font-bold">Sports</span>, which encourage teamwork and physical development; and <span className="font-bold">W.I.L.D.</span> (Wilderness Immersion and Leadership Development), an immersive program focused on outdoor education and leadership skills. We are committed to running <span className="font-bold">W.I.L.D.</span> run free of charge, while Pathways and Sports activities incur a small additional charge per term.</p>
        </ContentBlock>
    )
}
