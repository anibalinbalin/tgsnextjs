import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function TalentpoolSection() {
    return (
        <section className="relative">
            {/* Hero Image */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                    src="/assets/1_ourschool/7-great_place/EleazarCuadros29_RosanBosh_3.jpg"
                    alt="Modern classroom with students learning in creative spaces"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="bg-[#D39885] py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8">
                        Join Our Teacher Talentpool
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 mb-6">
                        We are always looking for passionate educators dedicated to shaping the changemakers of today and tomorrow. If you have excellent subject knowledge, positivity, and energy, we<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>d love to hear from you.
                    </p>

                    <p className="text-lg md:text-xl text-white/90 mb-10">
                        To join our candidate database for future teaching opportunities, please fill in the <span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span>Work With Us<span style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>'</span> form by clicking on the button below.
                    </p>

                    <Button
                        variant="outline"
                        className="bg-white text-[#D39885] border-white hover:bg-white/90 hover:text-[#D39885] px-8 py-6 text-base"
                    >
                        Join our Teacher Talentpool
                    </Button>
                </div>
            </div>
            <DevBadge name="talentpool-section" />
        </section>
    )
}
