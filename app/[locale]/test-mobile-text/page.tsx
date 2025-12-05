export default function TestMobileText() {
    const sampleTitle = "Empowering learners to make a difference"
    const sampleDescription = "At The Garzón School, we believe that education is not just about acquiring knowledge, but about developing the skills, values, and mindset needed to navigate an ever-changing world. Our innovative approach combines rigorous academics with hands-on learning experiences."

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-4 bg-white sticky top-0 z-50 border-b">
                <h1 className="text-xl font-bold">Mobile Text Scaling Options</h1>
                <p className="text-sm text-gray-600">View on mobile (375px) to compare</p>
            </div>

            {/* Current (for reference) */}
            <div className="mb-8">
                <div className="bg-gray-800 text-white px-4 py-2 font-medium">
                    Current: No mobile scaling (text-4xl / text-2xl)
                </div>
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <h2 className="text-balance text-4xl leading-snug font-medium text-[#C65D3B]">
                            {sampleTitle}
                        </h2>
                        <p className="text-2xl leading-relaxed font-light">
                            {sampleDescription}
                        </p>
                    </div>
                </section>
            </div>

            {/* Option A: Conservative */}
            <div className="mb-8">
                <div className="bg-terracotta text-white px-4 py-2 font-medium">
                    Option A: Conservative (text-2xl→4xl / text-xl→2xl)
                </div>
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <h2 className="text-balance text-2xl md:text-4xl leading-snug font-medium text-[#C65D3B]">
                            {sampleTitle}
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed font-light">
                            {sampleDescription}
                        </p>
                    </div>
                </section>
            </div>

            {/* Option B: Aggressive */}
            <div className="mb-8">
                <div className="bg-sage text-white px-4 py-2 font-medium">
                    Option B: Aggressive (text-xl→4xl / text-lg→2xl)
                </div>
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <h2 className="text-balance text-xl md:text-4xl leading-snug font-medium text-[#C65D3B]">
                            {sampleTitle}
                        </h2>
                        <p className="text-lg md:text-2xl leading-relaxed font-light">
                            {sampleDescription}
                        </p>
                    </div>
                </section>
            </div>

            {/* Option C: Minimal */}
            <div className="mb-8">
                <div className="bg-wine text-white px-4 py-2 font-medium">
                    Option C: Minimal (only heading scales: text-2xl→4xl)
                </div>
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <h2 className="text-balance text-2xl md:text-4xl leading-snug font-medium text-[#C65D3B]">
                            {sampleTitle}
                        </h2>
                        <p className="text-2xl leading-relaxed font-light">
                            {sampleDescription}
                        </p>
                    </div>
                </section>
            </div>

            {/* Bonus: Extra small option */}
            <div className="mb-8">
                <div className="bg-blue-600 text-white px-4 py-2 font-medium">
                    Bonus: Extra compact (text-lg→4xl / text-base→2xl)
                </div>
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-4xl mx-auto space-y-6 text-center">
                        <h2 className="text-balance text-lg md:text-4xl leading-snug font-medium text-[#C65D3B]">
                            {sampleTitle}
                        </h2>
                        <p className="text-base md:text-2xl leading-relaxed font-light">
                            {sampleDescription}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}
