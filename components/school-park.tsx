import Image from 'next/image'
import { Button } from '@/components/ui/button'
import DevBadge from './dev-badge'

export default function SchoolPark() {
    return (
        <section className="relative h-[50rem] overflow-hidden">
            <Image
                src="/assets/0_mainpage/drone.jpg"
                alt="Aerial view of school park"
                fill
                className="object-cover"
                priority={false}
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10 @container mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                <div className="text-center space-y-8">
                    <h2 className="text-balance text-white font-medium" style={{ fontSize: '99px', lineHeight: '99px' }}>The school is the park.<br />The park is the school.</h2>
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-[#D39885] hover:bg-[#C28775] text-white border-[#D39885]"
                        >
                            Discover a world-stage campus!
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="school-park" />
        </section>
    )
}
