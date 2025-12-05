'use client'

import { useEffect, useState } from 'react'
import { HeroHeader } from '@/components/header'
import { AnnouncementBar } from '@/components/announcement-bar'
import { AnnouncementPill } from '@/components/announcement-pill'
import { AnnouncementHeaderBadge } from '@/components/announcement-header-badge'

const SIGNUP_URL = 'https://forms.gle/summercamp2025'

// Helper to clear localStorage for testing
function ClearButton({ ids }: { ids: string[] }) {
  const handleClear = () => {
    ids.forEach(id => localStorage.removeItem(`tgs-announcement-${id}`))
    window.location.reload()
  }
  return (
    <button
      onClick={handleClear}
      className="fixed bottom-4 right-4 z-[100] bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors text-sm font-medium"
    >
      Reset All Badges
    </button>
  )
}

export default function TestAnnouncementBadges() {
  // Clear localStorage on mount for testing
  useEffect(() => {
    const ids = ['bar-1', 'bar-2', 'bar-3', 'bar-4', 'pill-1', 'pill-2', 'pill-3', 'header-1']
    ids.forEach(id => localStorage.removeItem(`tgs-announcement-${id}`))
  }, [])

  return (
    <div>
      {/* Reset button */}
      <ClearButton ids={['bar-1', 'bar-2', 'bar-3', 'bar-4', 'pill-1', 'pill-2', 'pill-3', 'header-1']} />

      {/* OPTION 1: Top Announcement Bar */}
      <section className="mb-16">
        <div className="bg-gray-100 py-4 px-6 mb-0">
          <h2 className="text-2xl font-bold text-gray-900">Option 1: Top Announcement Bar</h2>
          <p className="text-gray-600">Full-width strip above the header - like Vercel, Stripe, Linear</p>
        </div>

        {/* Variant A: Terracotta */}
        <div className="relative">
          <AnnouncementBar
            id="bar-1"
            message="2025 Summer Learning Camp — Dec 15-19"
            linkText="Sign up now"
            linkHref={SIGNUP_URL}
            variant="terracotta"
          />
          <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
              <HeroHeader />
              <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
                <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                  <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Terracotta Bar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Variant B: Gradient */}
        <div className="relative mt-8">
          <AnnouncementBar
            id="bar-2"
            message="2025 Summer Learning Camp — Dec 15-19"
            linkText="Sign up now"
            linkHref={SIGNUP_URL}
            variant="gradient"
          />
          <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
              <HeroHeader />
              <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
                <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                  <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Gradient Bar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Variant C: Sage */}
        <div className="relative mt-8">
          <AnnouncementBar
            id="bar-3"
            message="2025 Summer Learning Camp — Dec 15-19"
            linkText="Sign up now"
            linkHref={SIGNUP_URL}
            variant="sage"
          />
          <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
              <HeroHeader />
              <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
                <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                  <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Sage Bar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Variant D: Wine */}
        <div className="relative mt-8">
          <AnnouncementBar
            id="bar-4"
            message="2025 Summer Learning Camp — Dec 15-19"
            linkText="Sign up now"
            linkHref={SIGNUP_URL}
            variant="wine"
          />
          <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="relative z-10">
              <HeroHeader />
              <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
                <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                  <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Wine Bar</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPTION 2: Floating Pill Badge */}
      <section className="mb-16">
        <div className="bg-gray-100 py-4 px-6 mb-0">
          <h2 className="text-2xl font-bold text-gray-900">Option 2: Floating Pill Badge</h2>
          <p className="text-gray-600">Small animated pill floating over the hero</p>
        </div>

        {/* Variant A: Shimmer */}
        <div className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="relative z-10">
            <HeroHeader />
            <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
              <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Shimmer Pill</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Pill positioned relative to this hero */}
          <div className="absolute top-28 right-4 md:right-8 z-50">
            <AnnouncementPillInline
              id="pill-1"
              message="Summer Camp Open!"
              linkHref={SIGNUP_URL}
              variant="shimmer"
            />
          </div>
        </div>

        {/* Variant B: Pulse */}
        <div className="relative h-[60vh] bg-cover bg-center bg-no-repeat mt-8" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="relative z-10">
            <HeroHeader />
            <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
              <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Pulse Pill</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-28 right-4 md:right-8 z-50">
            <AnnouncementPillInline
              id="pill-2"
              message="Summer Camp Open!"
              linkHref={SIGNUP_URL}
              variant="pulse"
            />
          </div>
        </div>

        {/* Variant C: Glow */}
        <div className="relative h-[60vh] bg-cover bg-center bg-no-repeat mt-8" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="relative z-10">
            <HeroHeader />
            <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
              <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Glow Pill</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-28 right-4 md:right-8 z-50">
            <AnnouncementPillInline
              id="pill-3"
              message="Summer Camp Open!"
              linkHref={SIGNUP_URL}
              variant="glow"
            />
          </div>
        </div>
      </section>

      {/* OPTION 3: Header Badge */}
      <section className="mb-16">
        <div className="bg-gray-100 py-4 px-6 mb-0">
          <h2 className="text-2xl font-bold text-gray-900">Option 3: Header Badge</h2>
          <p className="text-gray-600">Small badge integrated in header area with expandable dropdown</p>
        </div>

        <div className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/assets/0_mainpage/header.jpg)' }}>
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="relative z-10">
            {/* Custom header with badge */}
            <header className="">
              <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="flex h-24 items-center justify-between gap-4">
                  {/* Left side with logo and badge */}
                  <div className="flex items-center gap-4">
                    <a href="/" className="shrink-0 text-white font-bold text-xl">TGS Logo</a>
                    <AnnouncementHeaderBadge
                      id="header-1"
                      label="NEW"
                      message="2025 Summer Learning Camp — Registration now open! Dec 15-19"
                      linkHref={SIGNUP_URL}
                    />
                  </div>
                  {/* Right side placeholder */}
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm opacity-70">(Navigation here)</span>
                  </div>
                </div>
              </div>
            </header>
            <div className="pb-12 pt-8 md:pb-16 lg:pb-24 lg:pt-20">
              <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 max-w-2xl font-medium text-white lg:mt-8">Header Badge</h1>
                  <p className="mt-4 text-white/80 text-lg">Hover over the "NEW" badge above to see the dropdown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Inline pill component (non-fixed position for demo)
function AnnouncementPillInline({
  id,
  message,
  linkHref,
  variant = 'shimmer',
}: {
  id: string
  message: string
  linkHref?: string
  variant?: 'shimmer' | 'pulse' | 'glow'
}) {
  const [isDismissed, setIsDismissed] = useState(false)

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

  const Wrapper = linkHref ? 'a' : 'div'
  const wrapperProps = linkHref
    ? { href: linkHref, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="relative flex items-center gap-2 rounded-full py-2 pl-3 pr-2 text-sm font-medium shadow-xl backdrop-blur-sm transition-all animate-in fade-in slide-in-from-right duration-500 bg-white/95 text-gray-900 border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
    >
      {variant === 'shimmer' && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#D39885]/20 to-transparent" />
        </div>
      )}
      {variant === 'pulse' && (
        <div className="absolute -inset-1 rounded-full bg-[#D39885]/30 animate-ping" />
      )}
      {variant === 'glow' && (
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#D39885] to-[#C65D3B] opacity-75 blur animate-pulse" />
      )}
      <div className="relative flex items-center gap-2">
        <span className="flex items-center justify-center size-6 rounded-full bg-[#D39885] text-white">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </span>
        <span className="max-w-[200px] truncate">{message}</span>
        <svg className="size-4 text-[#D39885]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <button
        onClick={handleDismiss}
        className="relative ml-1 p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Dismiss"
      >
        <svg className="size-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </Wrapper>
  )
}

