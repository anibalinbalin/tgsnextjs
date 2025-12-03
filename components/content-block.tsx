import { ReactNode } from 'react'
import DevBadge from './dev-badge'

interface ContentBlockProps {
    name: string
    children: ReactNode
    className?: string
}

export default function ContentBlock({ name, children, className = "py-16 md:py-32" }: ContentBlockProps) {
    return (
        <section className={`relative ${className}`}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl space-y-6 text-justify">
                    {children}
                </div>
            </div>
            <DevBadge name={name} />
        </section>
    )
}
