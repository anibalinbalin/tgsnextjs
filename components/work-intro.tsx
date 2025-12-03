import ContentBlock from './content-block'

export default function WorkIntro() {
    return (
        <ContentBlock name="work-intro" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">
                    We believe that a thriving educational community starts with a strong, happy, and motivated team. As a{' '}
                    <a
                        href="https://certificaciones.greatplacetowork.com.uy/the-garzon-school"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D39885] hover:underline"
                    >
                        Great Place to Work®
                    </a>{' '}
                    certified school, we<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re proud to foster a workplace where innovation, collaboration, and a shared passion for education thrive. Our commitment to team wellbeing is woven into our culture, because we know that when educators and staff feel valued, inspired, and supported, they bring out the best in themselves and our students. Whether you<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>re a teacher shaping young minds or a professional contributing behind the scenes, working at TGS means being part of a team united by purpose, creativity, and care.
            </p>
        </ContentBlock>
    )
}
