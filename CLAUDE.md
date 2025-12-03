# Project Memory - The Garzón School Website

## Brand Colors

### Terracotta
- **Color**: `#D39885`
- **Usage**: Background color used in gallery6 component and primary CTAs
- **Reference**: See `components/blocks/gallery6.tsx:229`

### Text Heading (Empowering)
- **Color**: `#C65D3B`
- **Usage**: Heading text color
- **Reference**: See `app/globals.css:128`

### Sage Green
- **Color**: `#8EB096`
- **Usage**: Nature-themed sections background
- **Reference**: See https://www.thegarzonschool.edu.uy/nature

### Wine
- **Color**: `#802E3A`
- **Usage**: Rich accent color

## Clip-Path/Polygon Components

When a component follows another with a clip-path that creates diagonal/angled cuts, reduce the following component's top padding to compensate for the visual space created by the clip-path.

**Example**: `proactive-section` uses `pt-6 md:pt-12` instead of `py-12 md:py-20` because `safe-quote` above it has a clip-path that creates ~15% visual space.

## FAQ/Accordion Components

### Content Text Styling
- **Font Size**: `22px`
- **Line Height**: `40px`
- **Font Weight**: `300`
- **Usage**: Always apply to `AccordionContent` components
- **Example**: `style={{ fontSize: '22px', lineHeight: '40px', fontWeight: 300 }}`

### Trigger Text Styling
- **Font Size**: `text-xl md:text-2xl` or `style={{ fontSize: '35px', lineHeight: '47px' }}`
- **Font Weight**: `font-light` or `500`
- **Color**: `text-[#D39885]` (terracotta)

### Reference Components
- `pool-faq.tsx` - terracotta themed FAQ
- `faq-great-place.tsx` - 2-column layout with image
- `faq-howtojoin.tsx` - 2-column layout with button
