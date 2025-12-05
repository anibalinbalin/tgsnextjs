'use client'

import { useState, useEffect } from 'react'
import { X, ChevronRight, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementHeaderBadgeProps {
  id: string
  label: string
  message: string
  linkHref?: string
  className?: string
}

export function AnnouncementHeaderBadge({
  id,
  label,
  message,
  linkHref,
  className,
}: AnnouncementHeaderBadgeProps) {
  const [isDismissed, setIsDismissed] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

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

  return (
    <div
      className={cn(
        'relative inline-flex',
        className
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Badge trigger */}
      <div className="relative flex items-center gap-1.5 rounded-full bg-[#D39885] px-2.5 py-1 text-xs font-semibold text-white cursor-pointer animate-in fade-in duration-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span>{label}</span>
      </div>

      {/* Expanded dropdown */}
      <div
        className={cn(
          'absolute left-0 top-full mt-2 w-72 rounded-lg bg-white shadow-xl border border-gray-100 p-4 transition-all duration-200 z-50',
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 size-10 rounded-full bg-[#D39885]/10 flex items-center justify-center">
            <Calendar className="size-5 text-[#D39885]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{message}</p>
            {linkHref && (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#C65D3B] hover:text-[#D39885] transition-colors"
              >
                Sign up now
                <ChevronRight className="size-4" />
              </a>
            )}
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 rounded hover:bg-gray-100 transition-colors"
            aria-label="Dismiss"
          >
            <X className="size-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
