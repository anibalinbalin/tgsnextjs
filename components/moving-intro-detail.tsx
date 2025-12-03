import ContentBlock from './content-block'

export default function MovingIntroDetail() {
    return (
        <ContentBlock name="moving-intro-detail" className="py-12 md:py-20 bg-white">
            <p className="text-2xl leading-relaxed font-light text-black">A beacon of freedom, equality, democracy, and quality of life, Uruguay offers an exceptional environment for families seeking to relocate. In an increasingly unstable world, it remains the highest-ranked South American country in the <a href="https://worldhappiness.report/ed/2024/happiness-of-the-younger-the-older-and-those-in-between/#ranking-of-happiness-2021-2023" target="_blank" rel="noopener noreferrer" className="text-[#D39885] underline hover:opacity-80">2024 World Happiness Report</a>. If your family is considering a move to Uruguay, The Garzón School is here to support you every step of the way—starting long before your child<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>s first day of school.</p>
        </ContentBlock>
    )
}
