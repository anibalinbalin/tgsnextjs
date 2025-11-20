'use client'
import { Instagram, Linkedin, BookOpen, LifeBuoy, Info } from "lucide-react"

import Logo from "@/components/navbar-components/logo"
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

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks: NavigationLink[] = [
  {
    label: "Our School",
    submenu: true,
    type: "simple",
    items: [
      { href: "/welcome", label: "Welcome from the Heads" },
      { href: "/missionvisionvalues", label: "Mission, Vision & Values" },
      { href: "/team", label: "Meet Our Team" },
      { href: "#", label: "Governance" },
      { href: "#", label: "Policies" },
      { href: "#", label: "Press" },
      { href: "#", label: "Safeguarding" },
      { href: "#", label: "Work at TGS" },
    ],
  },
  {
    label: "Admissions",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "How to Join" },
      { href: "#", label: "Open Mornings" },
      { href: "#", label: "Space Availability" },
      { href: "#", label: "Parent Testimonials" },
      { href: "#", label: "Moving to Uruguay" },
      { href: "#", label: "Tuition & Fees" },
      { href: "#", label: "Soft Landing" },
      { href: "#", label: "FAQs" },
    ],
  },
  {
    label: "Learning",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Curriculum" },
      { href: "#", label: "Inquiry-Based Learning" },
      { href: "#", label: "Wellbeing & Inclusion" },
      { href: "#", label: "Translanguaging" },
      { href: "#", label: "Educating for a Changing World" },
      { href: "#", label: "Accreditation" },
    ],
  },
  {
    label: "Campus",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Our Learning Village" },
      { href: "#", label: "Nurtured by Nature" },
    ],
  },
  {
    label: "Co-Curricular",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "Pathways" },
      { href: "#", label: "The Heron" },
    ],
  },
  {
    label: "School Life",
    submenu: true,
    type: "simple",
    items: [
      { href: "#", label: "TGS Committees" },
      { href: "#", label: "Calendar & Term Dates" },
      { href: "#", label: "School Day" },
      { href: "#", label: "Multiform" },
      { href: "#", label: "Nutrition" },
    ],
  },
]

export const HeroHeader = () => {
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
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="py-1.5"
                                >
                                  {item.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {(() => {
                        const nextLink = navigationLinks[index + 1]
                        if (index >= navigationLinks.length - 1) return false

                        // Show separator if:
                        // 1. One is submenu and one is simple link
                        if (link.submenu !== nextLink.submenu) return true

                        // 2. Both are submenus but with different types
                        if (link.submenu && nextLink.submenu) {
                          return link.type !== nextLink.type
                        }

                        return false
                      })() && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="-mx-1 my-1 h-px w-full bg-border"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              {/* Mobile menu actions */}
              <div className="mt-4 flex items-center justify-center gap-2 border-t pt-4">
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
                  <a href="#">Support TGS</a>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
            {/* Navigation menu */}
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 font-medium text-white hover:text-white/80 *:[svg]:-me-0.5 *:[svg]:size-3.5">
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
                                  className="py-1.5"
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
          <Button asChild variant="ghost" size="icon" className="size-8 text-white hover:bg-white/10 hover:text-white">
            <a href="#" aria-label="Instagram">
              <Instagram className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="size-8 text-white hover:bg-white/10 hover:text-white">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
          </Button>
          <Button asChild size="sm" className="bg-rose-200 text-rose-900 hover:bg-rose-300">
            <a href="#">Support TGS</a>
          </Button>
        </div>
        </div>
      </div>
    </header>
  )
}
