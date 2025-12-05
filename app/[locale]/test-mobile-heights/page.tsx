import Image from 'next/image'

export default function TestMobileHeights() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-4 bg-white sticky top-0 z-50 border-b">
                <h1 className="text-xl font-bold">Mobile Height Options</h1>
                <p className="text-sm text-gray-600">View on mobile (375px) to compare</p>
            </div>

            {/* Option A: 60vh */}
            <div className="mb-8">
                <div className="bg-terracotta text-white px-4 py-2 font-medium">
                    Option A: h-[60vh] (viewport-based)
                </div>
                <section className="relative h-[60vh] overflow-hidden">
                    <Image
                        src="/assets/0_mainpage/drone.jpg"
                        alt="Drone view"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl text-white font-medium">A school unlike any other</h2>
                            <button className="bg-terracotta px-6 py-2 text-white rounded">Visit Us</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Option B: 400px fixed */}
            <div className="mb-8">
                <div className="bg-sage text-white px-4 py-2 font-medium">
                    Option B: h-[400px] (fixed height)
                </div>
                <section className="relative h-[400px] overflow-hidden">
                    <Image
                        src="/assets/0_mainpage/drone.jpg"
                        alt="Drone view"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl text-white font-medium">A school unlike any other</h2>
                            <button className="bg-terracotta px-6 py-2 text-white rounded">Visit Us</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Option C: aspect-[4/3] */}
            <div className="mb-8">
                <div className="bg-wine text-white px-4 py-2 font-medium">
                    Option C: aspect-[4/3] (aspect ratio)
                </div>
                <section className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                    <Image
                        src="/assets/0_mainpage/drone.jpg"
                        alt="Drone view"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl text-white font-medium">A school unlike any other</h2>
                            <button className="bg-terracotta px-6 py-2 text-white rounded">Visit Us</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Current (for reference) */}
            <div className="mb-8">
                <div className="bg-gray-800 text-white px-4 py-2 font-medium">
                    Current: h-[50rem] (800px - scroll down!)
                </div>
                <section className="relative h-[50rem] overflow-hidden">
                    <Image
                        src="/assets/0_mainpage/drone.jpg"
                        alt="Drone view"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <div className="relative z-10 mx-auto max-w-5xl px-6 h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl text-white font-medium">A school unlike any other</h2>
                            <button className="bg-terracotta px-6 py-2 text-white rounded">Visit Us</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
