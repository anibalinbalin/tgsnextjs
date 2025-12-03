import DevBadge from '@/components/dev-badge'

export default function SchoolHoursSection() {
    return (
        <section className="relative py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-4">
                    {/* K2-K3 Card */}
                    <div className="bg-[#8EB096] rounded-lg p-8 md:p-12 text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            K2-K3
                        </h3>
                        <p className="text-lg md:text-xl text-black">
                            <span className="font-semibold">Curricular Hours:</span> 09:00–12:30
                        </p>
                        <p className="text-lg md:text-xl text-black mt-2">
                            (Optional nap time until 15:00)
                        </p>
                    </div>

                    {/* K4-S2 Card */}
                    <div className="bg-[#8EB096] rounded-lg p-8 md:p-12 text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            K4-S2
                        </h3>
                        <p className="text-lg md:text-xl text-black">
                            <span className="font-semibold">Curricular Hours:</span> 09:00–15:00
                        </p>
                        <p className="text-lg md:text-xl text-black mt-2">
                            <span className="font-semibold">Co-Curricular Clubs:</span> 15:15–16:30
                        </p>
                    </div>
                </div>
            </div>
            <DevBadge name="school-hours-section" />
        </section>
    )
}
