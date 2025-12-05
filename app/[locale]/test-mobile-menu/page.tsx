'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Sample navigation data
const navigationLinks = [
  {
    label: 'Nuestro Colegio',
    items: [
      { href: '/welcome', label: 'Bienvenida de los Directores' },
      { href: '/missionvisionvalues', label: 'Misión, Visión y Valores' },
      { href: '/team', label: 'Conoce a Nuestro Equipo' },
      { href: '/governance', label: 'Gobernanza' },
      { href: '/policies', label: 'Políticas' },
      { href: '/press', label: 'Prensa' },
      { href: '/safeguarding', label: 'Protección' },
      { href: '/work', label: 'Trabaja en TGS' },
    ],
  },
  {
    label: 'Admisiones',
    items: [
      { href: '/howtojoin', label: 'Cómo Unirse' },
      { href: '/openmornings', label: 'Mañanas Abiertas' },
      { href: '/spaces', label: 'Disponibilidad de Espacios' },
      { href: '/testimonials', label: 'Testimonios de Padres' },
      { href: '/moving-to-uruguay', label: 'Mudarse a Uruguay' },
      { href: '/fees', label: 'Matrícula y Aranceles' },
      { href: '/softlanding', label: 'Soft Landing' },
    ],
  },
  {
    label: 'Aprendizaje',
    items: [
      { href: '/curriculum', label: 'Currículo' },
      { href: '/inquiry-based-learning', label: 'Aprendizaje por Indagación' },
      { href: '/wellbeing-and-inclusion', label: 'Bienestar e Inclusión' },
    ],
  },
]

// Option A: Accordion Style with collapsible sections
function MenuOptionA() {
  const [openSections, setOpenSections] = useState<string[]>(['Nuestro Colegio'])

  const toggleSection = (label: string) => {
    setOpenSections(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    )
  }

  return (
    <div className="w-72 bg-white rounded-lg shadow-lg border overflow-hidden">
      <div className="p-3 bg-[#D39885]/10 border-b">
        <span className="text-sm font-semibold text-[#D39885]">Option A: Accordion</span>
      </div>
      <nav className="p-2">
        {navigationLinks.map((section) => (
          <div key={section.label} className="mb-1">
            <button
              onClick={() => toggleSection(section.label)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
            >
              {section.label}
              <ChevronDown
                className={cn(
                  'size-4 text-gray-400 transition-transform',
                  openSections.includes(section.label) && 'rotate-180'
                )}
              />
            </button>
            {openSections.includes(section.label) && (
              <ul className="mt-1 ml-3 border-l-2 border-[#D39885]/30 pl-3 space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-[#D39885] hover:bg-[#D39885]/5 rounded transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

// Option B: Card sections with colored headers
function MenuOptionB() {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg border overflow-hidden">
      <div className="p-3 bg-[#8EB096]/10 border-b">
        <span className="text-sm font-semibold text-[#8EB096]">Option B: Card Sections</span>
      </div>
      <nav className="p-3 space-y-4">
        {navigationLinks.map((section) => (
          <div key={section.label} className="rounded-lg overflow-hidden border border-gray-100">
            <div className="px-3 py-2 bg-gradient-to-r from-[#D39885]/10 to-transparent">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C65D3B]">
                {section.label}
              </span>
            </div>
            <ul className="p-2 space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

// Option C: Bold headers with dividers (clean & minimal)
function MenuOptionC() {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg border overflow-hidden">
      <div className="p-3 bg-[#802E3A]/10 border-b">
        <span className="text-sm font-semibold text-[#802E3A]">Option C: Bold Headers</span>
      </div>
      <nav className="py-2">
        {navigationLinks.map((section, idx) => (
          <div key={section.label}>
            {idx > 0 && <div className="my-2 mx-4 border-t border-gray-200" />}
            <div className="px-4 py-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {section.label}
              </span>
            </div>
            <ul>
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2.5 px-4 text-[15px] text-gray-800 hover:bg-gray-50 hover:text-[#C65D3B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

// Option D: Sidebar style with accent stripe
function MenuOptionD() {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg border overflow-hidden">
      <div className="p-3 bg-blue-50 border-b">
        <span className="text-sm font-semibold text-blue-600">Option D: Accent Stripe</span>
      </div>
      <nav className="p-2">
        {navigationLinks.map((section) => (
          <div key={section.label} className="mb-4">
            <div className="flex items-center gap-2 px-2 mb-1">
              <div className="w-1 h-4 bg-[#D39885] rounded-full" />
              <span className="text-sm font-semibold text-gray-800">
                {section.label}
              </span>
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-[#D39885]/5 rounded-md transition-colors group"
                  >
                    <ChevronRight className="size-3 text-gray-300 group-hover:text-[#D39885] transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

// Option E: Full-width with terracotta accents (most native feel)
function MenuOptionE() {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg border overflow-hidden">
      <div className="p-3 bg-[#D39885]/10 border-b">
        <span className="text-sm font-semibold text-[#D39885]">Option E: Native Feel</span>
      </div>
      <nav>
        {navigationLinks.map((section, idx) => (
          <div key={section.label}>
            <div className={cn(
              "px-4 py-3 bg-gray-50/80",
              idx > 0 && "border-t border-gray-200"
            )}>
              <span className="text-xs font-semibold uppercase tracking-wide text-[#C65D3B]">
                {section.label}
              </span>
            </div>
            <ul>
              {section.items.map((item, itemIdx) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "block py-3 px-4 text-[15px] text-gray-700 hover:bg-[#D39885]/5 active:bg-[#D39885]/10 transition-colors",
                      itemIdx < section.items.length - 1 && "border-b border-gray-100"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default function TestMobileMenuPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mobile Menu Options</h1>
        <p className="text-gray-600 mb-8">Compare different mobile menu styles. View on mobile or resize browser.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <MenuOptionA />
            <p className="mt-3 text-sm text-gray-500 px-1">
              <strong>A: Accordion</strong> - Collapsible sections, saves space, familiar UX pattern
            </p>
          </div>

          <div>
            <MenuOptionB />
            <p className="mt-3 text-sm text-gray-500 px-1">
              <strong>B: Card Sections</strong> - Visual separation with cards, clear hierarchy
            </p>
          </div>

          <div>
            <MenuOptionC />
            <p className="mt-3 text-sm text-gray-500 px-1">
              <strong>C: Bold Headers</strong> - Clean minimal, clear section labels
            </p>
          </div>

          <div>
            <MenuOptionD />
            <p className="mt-3 text-sm text-gray-500 px-1">
              <strong>D: Accent Stripe</strong> - Terracotta accents, chevron indicators
            </p>
          </div>

          <div>
            <MenuOptionE />
            <p className="mt-3 text-sm text-gray-500 px-1">
              <strong>E: Native Feel</strong> - iOS-like sections, familiar mobile pattern
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">Current Issues Fixed:</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Section headers now visually distinct from menu items</li>
            <li>• Clear hierarchy between categories</li>
            <li>• Better spacing and touch targets</li>
            <li>• Brand colors (terracotta) integrated</li>
            <li>• Visual separators between sections</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
