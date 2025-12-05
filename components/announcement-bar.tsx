'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementBarProps {
  id: string
  message: string
  linkText?: string
  linkHref?: string
  variant?: 'terracotta' | 'sage' | 'wine' | 'gradient'
  className?: string
}

export function AnnouncementBar({
  id,
  message,
  linkText,
  linkHref,
  variant = 'terracotta',
  className,
}: AnnouncementBarProps) {
  const [isDismissed, setIsDismissed] = useState(true) // Start hidden to prevent flash

  useEffect(() => {
    const dismissed = localStorage.getItem(`tgs-announcement-${id}`)
    setIsDismissed(dismissed === 'true')
  }, [id])

  const handleDismiss = () => {
    localStorage.setItem(`tgs-announcement-${id}`, 'true')
    setIsDismissed(true)
  }

  if (isDismissed) return null

  const variantClasses = {
    terracotta: 'bg-[#D39885] text-white',
    sage: 'bg-[#8EB096] text-white',
    wine: 'bg-[#802E3A] text-white',
    gradient: 'bg-gradient-to-r from-[#D39885] via-[#C65D3B] to-[#802E3A] text-white',
  }

  return (
    <div
      className={cn(
        'relative w-full py-2.5 px-4 text-center text-sm font-medium animate-in slide-in-from-top duration-300',
        variantClasses[variant],
        className
      )}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-center gap-2">
        <span className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">
            New
          </span>
          <span>{message}</span>
        </span>
        {linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:no-underline transition-all"
          >
            {linkText || 'Learn more'}
            <ArrowRight className="size-3.5" />
          </a>
        )}
      </div>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="size-4" />
      </button>
    </div>
  )
}
