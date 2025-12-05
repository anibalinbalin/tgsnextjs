import Image from "next/image"

export default function TestLogoSizes() {
    const sizes = [
        { name: "40px height", classes: "h-10 w-auto" },
        { name: "48px height", classes: "h-12 w-auto" },
        { name: "56px height", classes: "h-14 w-auto" },
    ]

    return (
        <div className="min-h-screen bg-stone-900 py-16 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                <h1 className="text-white text-2xl mb-8">Mobile Logo Size Comparison</h1>
                <p className="text-stone-400 text-sm mb-8">View on mobile viewport (or resize browser to ~375px width)</p>

                {sizes.map((size, i) => (
                    <div key={i} className="border-b border-stone-700 pb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[#D39885] text-lg font-medium">{size.name}</span>
                            <code className="text-stone-400 text-sm bg-stone-800 px-2 py-1 rounded">{size.classes}</code>
                        </div>

                        {/* Mock navbar */}
                        <div className="bg-[#87a7b3] h-16 flex items-center justify-between px-4 rounded">
                            {/* Hamburger */}
                            <div className="w-8 h-8 flex flex-col justify-center gap-1">
                                <span className="w-5 h-0.5 bg-white"></span>
                                <span className="w-5 h-0.5 bg-white"></span>
                            </div>

                            {/* Logo */}
                            <Image
                                src="/assets/0_mainpage/TGS_Isotype_black_Vectorial.svg"
                                alt="TGS Logo"
                                width={132}
                                height={132}
                                className={size.classes}
                            />

                            {/* Search */}
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
