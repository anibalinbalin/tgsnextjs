import { SvgPlaceholder } from './svg-placeholder'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12">
                    <div className="border-border/50 relative rounded-3xl border p-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <SvgPlaceholder className="rounded-[15px] shadow dark:hidden" />
                        </div>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <SvgPlaceholder className="rounded-[15px] shadow dark:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
