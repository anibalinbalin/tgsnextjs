export default function TestHeroSizes() {
    const options = [
        {
            name: "Current",
            classes: "text-4xl md:text-5xl lg:text-6xl",
            sizes: "36px → 48px → 60px"
        },
        {
            name: "Option A",
            classes: "text-5xl md:text-6xl lg:text-7xl",
            sizes: "48px → 60px → 72px"
        },
        {
            name: "Option B",
            classes: "text-5xl md:text-7xl lg:text-8xl",
            sizes: "48px → 72px → 96px"
        },
        {
            name: "Option C",
            classes: "text-6xl md:text-7xl lg:text-9xl",
            sizes: "60px → 72px → 128px"
        },
        {
            name: "Option D",
            classes: "text-5xl md:text-6xl lg:text-8xl",
            sizes: "48px → 60px → 96px"
        },
    ]

    return (
        <div className="min-h-screen bg-stone-900 py-16 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <h1 className="text-white text-2xl mb-8">Hero Text Size Comparison</h1>

                {options.map((option, i) => (
                    <div key={i} className="border-b border-stone-700 pb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[#D39885] text-lg font-medium">{option.name}</span>
                            <code className="text-stone-400 text-sm bg-stone-800 px-2 py-1 rounded">{option.classes}</code>
                            <span className="text-stone-500 text-sm">{option.sizes}</span>
                        </div>
                        <h2 className={`${option.classes} font-medium text-white leading-tight`}>
                            Welcome to TGS
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
