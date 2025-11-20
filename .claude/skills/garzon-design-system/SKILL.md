# Garzón School Design System

Apply The Garzón School's design system when building or modifying UI components. Enforces brand colors, typography, spacing patterns, and component styles from the project's style guide.

## When to Use

Use this skill when:
- Building new UI components for the Garzón School website
- Modifying existing components to match design standards
- User asks to "follow the style guide" or "match the design system"
- Creating pages, sections, or features that need brand consistency
- User asks about design patterns, colors, or styling

## Core Design Principles

<design_philosophy>
- **Utility-first**: Heavy reliance on Tailwind utilities over custom CSS
- **Modern color system**: OKLCH color space for consistency
- **Responsive patterns**: Container queries and mobile-first design
- **Performance**: Next.js Image optimization throughout
- **Accessibility**: Strong focus states with ring indicators
- **Minimal custom CSS**: Use Tailwind utilities and shadcn/ui components
</design_philosophy>

## Brand Colors

<brand_colors>
### Terracotta (Primary Brand Color)
- **Hex**: `#D39885`
- **Usage**: Primary backgrounds, CTAs, accent sections
- **Hover**: `#C28775`

```tsx
// CTA Button
<button className="bg-[#D39885] hover:bg-[#C28775] text-white">
  Learn More
</button>
```

### Heading Text
- **Hex**: `#C65D3B`
- **Usage**: Primary heading text color
- **Class**: `.text-heading-empowering`

```css
.text-heading-empowering {
  font-family: var(--font-sans);
  font-weight: 500;
  color: #C65D3B;
  font-size: 35px;
  line-height: 47px;
}
```

### Green Accent
- **Hex**: `#95af98`
- **Usage**: Alternative accent for team/careers sections

### Overlay Colors
```tsx
bg-black/20   // Standard image overlays
bg-black/40   // Darker overlays
bg-black/70   // Dev badge background
bg-white/90   // Semi-opaque button backgrounds
bg-white/50   // Borders on colored backgrounds
bg-white/10   // Subtle hover states
```
</brand_colors>

## Typography

<typography>
### Fonts
- **Primary**: Fugue (variable: `--font-sans`)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium)
- **Secondary**: Geist Sans, Geist Mono

### Custom Text Utilities
```tsx
// Heading Empowering (35px/47px, weight 500, #C65D3B)
<h2 className="text-heading-empowering">

// Body Intro (22px/40px, weight 300)
<p className="text-body-intro">
```

### Typography Hierarchy
```tsx
// Hero Headlines
<h1 className="text-[99px] leading-[99px] font-medium text-white">

// Section Headings (Responsive)
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">

// Features
<h3 className="text-2xl font-semibold">

// Footer Heading
<span className="text-[35px] leading-[47px] font-medium">
```

### Font Weight Scale
- `font-light` / `300` - Light weight
- `font-normal` / `400` - Normal weight
- `font-medium` / `500` - Medium weight (most common)
- `font-semibold` / `600` - Semibold weight
- `font-bold` / `700` - Bold weight
</typography>

## Common Patterns

<common_patterns>
### Container Pattern
```tsx
<div className="mx-auto max-w-5xl px-6">
  {/* Content */}
</div>
```

### Section Pattern
```tsx
<section className="relative py-16 md:py-32">
  {/* Section content */}
</section>
```

### Grid Patterns
```tsx
// 2 columns
<div className="grid md:grid-cols-2 gap-6">

// 3 columns
<div className="grid sm:grid-cols-3 gap-6">
// or with container query
<div className="@container grid @min-4xl:grid-cols-3 gap-6">
```

### Image Overlay Pattern
```tsx
<div className="relative h-[70vh] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/20 z-0" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

### Terracotta Section with Clip Path
```tsx
<section
  className="relative py-16 md:py-32"
  style={{
    background: '#D39885',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 75% 100%, 0 85%)'
  }}
>
  <div className="mx-auto max-w-5xl px-6 text-white">
    {children}
  </div>
</section>
```
</common_patterns>

## Spacing System

<spacing>
### Container Widths
```tsx
max-w-sm    // 384px - Mobile-first grids
max-w-md    // 448px
max-w-lg    // 512px - Centered hero content
max-w-2xl   // 672px
max-w-4xl   // 896px - Content sections
max-w-5xl   // 1024px - Most common container
max-w-6xl   // 1152px - Header, hero sections
max-w-7xl   // 1280px - Wide containers
```

### Section Padding
```tsx
// Standard vertical padding (most common)
<section className="py-16 md:py-32">

// Standard horizontal (container)
<div className="px-4 md:px-6">
```

### Gap Patterns
```tsx
gap-2   // 8px - Small gaps (navigation, grids)
gap-4   // 16px - Medium gaps (button groups)
gap-6   // 24px - Large gaps (feature grids, content)
gap-8   // 32px - XL gaps (section spacing)
gap-12  // 48px - 2XL gaps (major sections)
```
</spacing>

## Components

<components>
### Buttons
```tsx
// Terracotta CTA (most common)
<Button className="bg-[#D39885] hover:bg-[#C28775] text-white border-[#D39885]">

// White on Terracotta
<Button className="bg-white/90 hover:bg-white text-[#D39885] border-white/50">

// Support Button
<Button className="bg-rose-200 text-rose-900 hover:bg-rose-300">
```

### Button Sizes
```tsx
// Default
<Button size="default" className="h-9 px-4 py-2">

// Small
<Button size="sm" className="h-8 rounded-md gap-1.5 px-3">

// Large
<Button size="lg" className="h-10 rounded-md px-6">
```

### Cards
```tsx
<Card className="bg-card border rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle className="text-2xl font-semibold mb-2">
      {title}
    </CardTitle>
    <CardDescription className="text-muted-foreground">
      {description}
    </CardDescription>
  </CardHeader>
</Card>
```

### Forms
```tsx
// Input
<Input className="h-10 border border-input rounded-md px-3 py-2 text-sm" />

// Textarea
<Textarea className="min-h-16 border border-input rounded-md px-3 py-2 shadow-xs" />

// Label
<Label className="text-sm font-medium">
```
</components>

## Border Radius

<border_radius>
```tsx
rounded-sm     // Small - Navigation links
rounded-md     // Medium - Buttons, inputs, most UI
rounded-lg     // Large - Images, feature cards
rounded-xl     // XL - Cards, large containers
rounded-2xl    // 2XL - Special containers
rounded-full   // Full - Pills, icons

// Directional rounding (for grid layouts)
rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none
```
</border_radius>

## Shadows & Elevation

<shadows>
```tsx
shadow-xs    // Extra small - Form elements
shadow-sm    // Small - Cards
shadow-md    // Medium - Popovers, dropdowns
shadow-lg    // Large - Elevated elements

// Specialized shadows
shadow-zinc-950/5  // Subtle dark shadows on cards
```
</shadows>

## Animations

<animations>
```tsx
// Transition properties
transition-all              // Buttons, general elements
transition-[color,box-shadow] // Form elements
transition-transform        // Arrows, icons, switches
transition-colors          // Colors only

// Durations
duration-150   // Fast - Links, simple hovers
duration-200   // Standard - Icons
duration-300   // Slow - Complex animations
```
</animations>

## Responsive Breakpoints

<responsive>
```tsx
sm:   // 640px
md:   // 768px
lg:   // 1024px
xl:   // 1280px
2xl:  // 1536px

// Container queries
@container
@min-4xl:
```
</responsive>

## Example Components

<examples>
### CTA Button
```tsx
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTAButton() {
  return (
    <Button className="bg-[#D39885] hover:bg-[#C28775] text-white border-[#D39885] px-6 py-2 gap-2 transition-all">
      Learn More
      <ArrowRight className="size-4" />
    </Button>
  );
}
```

### Feature Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function FeatureCard({ title, description, icon }) {
  return (
    <Card className="bg-card border rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="size-12 mb-4 text-[#C65D3B]">
          {icon}
        </div>
        <CardTitle className="text-2xl font-semibold mb-2">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
```

### Hero Section
```tsx
export function HeroSection() {
  return (
    <section className="relative h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-[99px] leading-[99px] font-medium text-white mb-6">
            Fall in love with learning
          </h1>
          <p className="text-xl text-white mb-8">
            Subtitle text here
          </p>
          <Button size="lg" className="bg-white/90 hover:bg-white text-[#D39885]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### Responsive Grid Layout
```tsx
export function FeatureGrid({ features }) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-heading-empowering mb-6">
            Our Features
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Contact Form
```tsx
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  return (
    <form className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          className="h-10 border border-input rounded-md px-3 py-2"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your message"
          className="min-h-16 border border-input rounded-md px-3 py-2"
        />
      </div>

      <Button type="submit" className="w-full bg-[#D39885] hover:bg-[#C28775] text-white">
        Send Message
      </Button>
    </form>
  );
}
```
</examples>

## Quick Reference

<quick_reference>
### Most Used Classes
```tsx
// Container
mx-auto max-w-5xl px-6

// Section
py-16 md:py-32

// Heading
text-3xl md:text-4xl lg:text-5xl font-semibold

// Button
bg-[#D39885] hover:bg-[#C28775] text-white px-6 py-2 rounded-md

// Grid
grid gap-6 md:grid-cols-2 lg:grid-cols-3

// Card
rounded-xl shadow-sm border p-6
```

### Color Quick Reference
```
Terracotta:       #D39885
Terracotta Hover: #C28775
Heading:          #C65D3B
Green Accent:     #95af98
```

### Spacing Quick Reference
```
Container: max-w-5xl px-6
Section:   py-16 md:py-32
Gap:       gap-6 (24px)
Margin:    mb-12 (48px)
```
</quick_reference>

## Implementation Guidelines

When building components:

1. **Start with the pattern** - Use common patterns from this guide as starting points
2. **Use brand colors** - Terracotta (#D39885) for primary CTAs, #C65D3B for headings
3. **Follow spacing** - Standard section padding is `py-16 md:py-32`, containers use `max-w-5xl px-6`
4. **Maintain hierarchy** - Use established typography scale and font weights
5. **Stay responsive** - Mobile-first with `md:` and `lg:` breakpoints
6. **Use utilities** - Prefer Tailwind utilities over custom CSS
7. **Optimize images** - Always use Next.js `<Image>` component with `fill` prop
8. **Add transitions** - Use `transition-all` on interactive elements
9. **Ensure accessibility** - Include focus states with `focus-visible:ring-[3px]`
10. **Import from shadcn/ui** - Use existing Button, Card, Input components

## Reference Location

Full style guide: `/Users/anibalin/Sites/2025/tgs_nextjs/my-app/STYLE_GUIDE.md`
