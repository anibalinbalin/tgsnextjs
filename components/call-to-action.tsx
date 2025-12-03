import { Button } from '@/components/ui/button'
import Link from 'next/link'
import DevBadge from './dev-badge'

export default function CallToAction() {
    return (
        <section className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl leading-snug font-medium text-[#C65D3B]">Start Building</h2>
                    <p className="mt-4 text-2xl leading-relaxed font-light">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>Get Started</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/">
                                <span>Book Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <DevBadge name="call-to-action" />
        </section>
    )
}
