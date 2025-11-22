# Design Guidelines: Oscar Rivero Portfolio

## Design Approach: Modern Technical Portfolio

**Selected Approach:** Hybrid - Apple HIG minimalism + custom technical aesthetics inspired by modern developer portfolios (GitHub, Linear)

**Key Principles:**
- Clean, technical precision with generous whitespace
- Information hierarchy through typography and spacing
- Subtle, purposeful interactions that enhance rather than distract
- Content-first approach showcasing professional experience

## Typography

**Font Families (Google Fonts):**
- Primary: 'Inter' - Clean, technical, excellent readability (headings, body)
- Accent: 'JetBrains Mono' - Monospace for technical elements, labels

**Type Scale:**
- Headings: text-4xl/text-5xl (font-bold)
- Section Titles: text-2xl/text-3xl (font-semibold)
- Subsection/Card Titles: text-xl (font-medium)
- Body Text: text-base (font-normal)
- Captions/Labels: text-sm (font-mono for technical labels)
- Small Text: text-xs

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Tight spacing: gap-2, p-2
- Standard spacing: gap-4, p-4, mb-6
- Section spacing: py-12, py-16, py-20
- Large gaps: gap-8, mt-12

**Container Strategy:**
- Max width: max-w-6xl
- Content sections: px-6 (mobile), px-12 (desktop)
- Single column focus with strategic use of 2-column grids for experience/skills

## Component Library

### Navigation
- Fixed header with glass morphism effect (backdrop-blur-md, bg-opacity-90)
- Language switcher (4 flags/labels: EN, ES, CA, FR) with smooth transitions
- Minimal navigation: About, Experience, Education, Skills, Contact
- Smooth scroll anchors

### Profile Section (Above Fold)
- Asymmetric layout: Profile photo (circular, 256px) left, professional info right
- Photo in 2/5 width column, info in 3/5 width column
- Name in text-4xl, current role in text-xl with monospace font
- Brief intro paragraph max-w-prose
- Primary CTA button (satin finish) linking to contact

### Experience Timeline
- Vertical timeline with left-aligned dates (monospace)
- Company/role cards with subtle border, rounded-lg
- Hover effect: slight elevation (shadow-lg), satin button reveals
- Each card: Company name, role, duration, bullet points

### Education Cards
- 2-column grid on desktop, stack on mobile
- Institution logo placeholder, degree name, duration, key highlights
- Clean borders, consistent padding-6

### Skills Grid
- **Languages:** 4-column grid with proficiency indicators (C2, C1, B2)
- **Digital Skills:** Tag cloud style with skill badges (rounded-full, px-4, py-2)
- Categorized: Professional, Advanced, with visual hierarchy

### Contact Section
- Clean, centered layout
- Email and phone with icon prefixes (Heroicons)
- Professional social links (LinkedIn implied)
- Simple, elegant presentation

### Buttons & Interactive Elements
**Satin Finish Implementation:**
- Background: Gradient overlay with subtle shine
- Border: 1px solid with semi-transparent white/black
- Shadow: Soft drop shadow that deepens on hover
- Hover: Transform scale(1.02), increased shadow, brightness shift
- Active: Transform scale(0.98)
- Transition: all 300ms ease

### Animations (Minimal)
- Page load: Fade-in elements with staggered delays (100ms increments)
- Scroll: Intersection Observer fade-in for sections (once per session)
- Navigation: Smooth scroll behavior
- Card hovers: Subtle lift and shadow
- Language switcher: Smooth opacity transition

## Images

**Profile Photo:**
- Location: Profile section, left column
- Treatment: Circular crop (rounded-full), subtle border, shadow-lg
- Size: 256x256px (w-64 h-64)
- No hero background image - profile photo serves as visual anchor

**Additional Images:** None required - clean, professional, content-focused design

## Critical Notes

- No full-width hero section - lead with profile + professional summary
- Maintain consistent vertical rhythm (py-16 between sections)
- All sections full viewport width with inner max-w-6xl container
- Mobile: Stack all multi-column layouts to single column
- Language content swaps via JavaScript - maintain identical layout across all languages
- Satin effects only on primary CTAs and interactive cards, not overwhelming