'use client'
import { usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { Instagram, Linkedin, BookOpen, LifeBuoy, Info, Search } from "lucide-react"

import Logo from "@/components/navbar-components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useSearch } from "@/lib/search/use-search"
import { SearchCommand } from "@/components/search-command"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Navigation link types
type SubmenuLink = {
  label: string
  submenu: true
  type: string
  items: {
    href: string
    label: string
    description?: string
    icon?: string
  }[]
}

type SimpleLink = {
  label: string
  submenu: false
  href: string
}

type NavigationLink = SubmenuLink | SimpleLink

export const HeroHeader = () => {
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  // Navigation links with translated labels
  const navigationLinks: NavigationLink[] = [
    {
      label: t('ourSchool'),
      submenu: true,
      type: "simple",
      items: [
        { href: "/welcome", label: t('links.welcome') },
        { href: "/missionvisionvalues", label: t('links.missionVisionValues') },
        { href: "/team", label: t('links.meetOurTeam') },
        { href: "/governance", label: t('links.governance') },
        { href: "/policies", label: t('links.policies') },
        { href: "/press", label: t('links.press') },
        { href: "/safeguarding", label: t('links.safeguarding') },
        { href: "/work", label: t('links.workAtTGS') },
      ],
    },
    {
      label: t('admissions'),
      submenu: true,
      type: "simple",
      items: [
        { href: "/howtojoin", label: t('links.howToJoin') },
        { href: "/openmornings", label: t('links.openMornings') },
        { href: "/spaces", label: t('links.spaceAvailability') },
        { href: "/testimonials", label: t('links.parentTestimonials') },
        { href: "/moving-to-uruguay", label: t('links.movingToUruguay') },
        { href: "/fees", label: t('links.tuitionFees') },
        { href: "/softlanding", label: t('links.softLanding') },
        { href: "/faqs", label: t('links.faqs') },
      ],
    },
    {
      label: t('learning'),
      submenu: true,
      type: "simple",
      items: [
        { href: "/curriculum", label: t('links.curriculum') },
        { href: "/inquiry-based-learning", label: t('links.inquiryBasedLearning') },
        { href: "/wellbeing-and-inclusion", label: t('links.wellbeingInclusion') },
        { href: "/translanguaging", label: t('links.translanguaging') },
        { href: "/educating-for-a-changing-world", label: t('links.educatingChangingWorld') },
        { href: "/accreditation", label: t('links.accreditation') },
      ],
    },
    {
      label: t('campus'),
      submenu: true,
      type: "simple",
      items: [
        { href: "/learningvillage", label: t('links.learningVillage') },
        { href: "/nature", label: t('links.nurturedByNature') },
      ],
    },
    {
      label: t('coCurricular'),
      submenu: true,
      type: "simple",
      items: [
        { href: "/pathways", label: t('links.pathways') },
        { href: "/heron", label: t('links.theHeron') },
      ],
    },
    {
      label: t('schoolLife'),
      submenu: true,
      type: "simple",
      items: [
        { href: "/committees", label: t('links.committees') },
        { href: "/calendar", label: t('links.calendarTermDates') },
        { href: "/day", label: t('links.schoolDay') },
        { href: "/multiform", label: t('links.multiform') },
        { href: "/nutrition", label: t('links.nutrition') },
      ],
    },
  ]
  const { open, setOpen } = useSearch()

  // Check if any child route matches current path
  const isParentActive = (items: { href: string }[]) =>
    items.some(item => item.href !== "#" && pathname === item.href)

  // Check if specific child is active
  const isChildActive = (href: string) =>
    href !== "#" && pathname === href

  return (
    <header className="">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-24 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 text-white hover:bg-white/10 hover:text-white md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-72 p-0 md:hidden overflow-hidden">
              <nav>
                {navigationLinks.map((link, index) => (
                  <div key={index}>
                    {link.submenu ? (
                      <>
                        <div className={cn(
                          "px-4 py-3 bg-gray-50/80",
                          index > 0 && "border-t border-gray-200"
                        )}>
                          <span className={cn(
                            "text-xs font-semibold uppercase tracking-wide text-[#C65D3B]",
                            isParentActive(link.items) && "underline underline-offset-4"
                          )}>
                            {link.label}
                          </span>
                        </div>
                        <ul>
                          {link.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a
                                href={item.href}
                                className={cn(
                                  "block py-3 px-4 text-[15px] text-gray-700 hover:bg-[#D39885]/5 active:bg-[#D39885]/10 transition-colors",
                                  itemIndex < link.items.length - 1 && "border-b border-gray-100",
                                  isChildActive(item.href) && "text-[#C65D3B] font-medium"
                                )}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-3 px-4 text-[15px] text-gray-700 hover:bg-[#D39885]/5 border-b border-gray-100"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
              {/* Mobile menu actions */}
              <div className="mt-4 flex items-center justify-center gap-2 border-t pt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  onClick={() => setOpen(true)}
                  aria-label="Search"
                >
                  <Search className="size-4" />
                </Button>
                <LanguageSwitcher variant="default" />
                <Button asChild variant="ghost" size="icon" className="size-8">
                  <a href="#" aria-label="Instagram">
                    <Instagram className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="size-8">
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="size-4" />
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-rose-200 text-rose-900 hover:bg-rose-300">
                  <a href="/donate">Support TGS</a>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex shrink-0 items-center gap-6">
            <a href="/" className="shrink-0 text-primary hover:text-primary/90">
              <Logo />
            </a>
            {/* Navigation menu */}
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className={cn("!bg-transparent hover:!bg-transparent focus:!bg-transparent px-2 py-1.5 font-medium !text-white hover:!text-white focus:!text-white data-[state=open]:!text-white data-[state=open]:!bg-[#D39885]/60 data-[state=open]:rounded-md *:[svg]:-me-0.5 *:[svg]:size-3.5", isParentActive(link.items) && "underline underline-offset-4")}>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50 p-1 data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16!">
                          <ul
                            className={cn(
                              link.type === "description"
                                ? "min-w-64"
                                : "min-w-48"
                            )}
                          >
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className={cn("py-1.5", isChildActive(item.href) && "underline underline-offset-4")}
                                >
                                  {/* Display icon if present */}
                                  {link.type === "icon" && "icon" in item && (
                                    <div className="flex items-center gap-2">
                                      {item.icon === "BookOpenIcon" && (
                                        <BookOpen
                                          size={16}
                                          className="text-foreground opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "LifeBuoyIcon" && (
                                        <LifeBuoy
                                          size={16}
                                          className="text-foreground opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {item.icon === "InfoIcon" && (
                                        <Info
                                          size={16}
                                          className="text-foreground opacity-60"
                                          aria-hidden="true"
                                        />
                                      )}
                                      <span>{item.label}</span>
                                    </div>
                                  )}

                                  {/* Display label with description if present */}
                                  {link.type === "description" &&
                                  "description" in item ? (
                                    <div className="space-y-1">
                                      <div className="font-medium">
                                        {item.label}
                                      </div>
                                      <p className="line-clamp-2 text-xs text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  ) : (
                                    // Display simple label if not icon or description type
                                    !link.type ||
                                    (link.type !== "icon" &&
                                      link.type !== "description" && (
                                        <span>{item.label}</span>
                                      ))
                                  )}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5 font-medium text-white hover:text-white/80"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-white hover:bg-white/10 hover:text-white"
            onClick={() => setOpen(true)}
            aria-label="Search"
          >
            <Search className="size-4" />
          </Button>
          <LanguageSwitcher />
          <Button asChild variant="ghost" size="icon" className="hidden md:flex size-8 text-white hover:bg-white/10 hover:text-white">
            <a href="#" aria-label="Instagram">
              <Instagram className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="hidden md:flex size-8 text-white hover:bg-white/10 hover:text-white">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
          </Button>
          <Button asChild size="sm" className="bg-rose-200 text-rose-900 hover:bg-rose-300">
            <a href="/donate">Support TGS</a>
          </Button>
        </div>
        </div>
      </div>
      <SearchCommand open={open} onOpenChange={setOpen} />
    </header>
  )
}
