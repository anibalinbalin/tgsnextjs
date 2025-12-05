'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementPillProps {
  id: string
  message: string
  linkHref?: string
  variant?: 'shimmer' | 'pulse' | 'glow'
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  className?: string
}

export function AnnouncementPill({
  id,
  message,
  linkHref,
  variant = 'shimmer',
  position = 'top-right',
  className,
}: AnnouncementPillProps) {
  const [isDismissed, setIsDismissed] = useState(true)

  useEffect(() => {
    const dismissed = localStorage.getItem(`tgs-announcement-${id}`)
    setIsDismissed(dismissed === 'true')
  }, [id])

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    localStorage.setItem(`tgs-announcement-${id}`, 'true')
    setIsDismissed(true)
  }

  if (isDismissed) return null

  const positionClasses = {
    'top-right': 'top-28 right-4 md:right-8',
    'top-left': 'top-28 left-4 md:left-8',
    'bottom-right': 'bottom-8 right-4 md:right-8',
    'bottom-left': 'bottom-8 left-4 md:left-8',
  }

  const Wrapper = linkHref ? 'a' : 'div'
  const wrapperProps = linkHref
    ? { href: linkHref, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        'fixed z-50 flex items-center gap-2 rounded-full py-2 pl-3 pr-2 text-sm font-medium shadow-xl backdrop-blur-sm transition-all animate-in fade-in slide-in-from-right duration-500',
        'bg-white/95 text-gray-900 border border-gray-200/50',
        'hover:shadow-2xl hover:scale-[1.02] cursor-pointer',
        positionClasses[position],
        className
      )}
    >
      {/* Shimmer effect overlay */}
      {variant === 'shimmer' && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#D39885]/20 to-transparent" />
        </div>
      )}

      {/* Pulse ring */}
      {variant === 'pulse' && (
        <div className="absolute -inset-1 rounded-full bg-[#D39885]/30 animate-ping" />
      )}

      {/* Glow effect */}
      {variant === 'glow' && (
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#D39885] to-[#C65D3B] opacity-75 blur animate-pulse" />
      )}

      <div className="relative flex items-center gap-2">
        <span className="flex items-center justify-center size-6 rounded-full bg-[#D39885] text-white">
          <Sparkles className="size-3.5" />
        </span>
        <span className="max-w-[200px] truncate">{message}</span>
        <ArrowRight className="size-4 text-[#D39885]" />
      </div>

      <button
        onClick={handleDismiss}
        className="relative ml-1 p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="size-3.5 text-gray-500" />
      </button>
    </Wrapper>
  )
}
