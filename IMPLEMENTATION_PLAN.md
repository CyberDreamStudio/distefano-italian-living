# DiStefano Italian Living - Implementation Plan

## Design Inspiration: Six Senses / Belmond

**Key Principles:**
- Cinematic pacing with generous whitespace (py-32 to py-40)
- Warm, earthy color palette (sage/olive, terracotta, antique gold)
- Light font weights for elegance
- Scroll-triggered fade-in animations
- Asymmetric, editorial layouts
- Thin borders, understated buttons
- Wide letter-spacing throughout

---

## PHASE 0 — Project Setup [DONE]

### Next.js Setup [DONE]
Options used:
- TypeScript: Yes
- Tailwind: Yes
- App Router: Yes
- **src directory: No** (using default `/app` structure)

### shadcn Setup [DONE]

### Project Structure
```
/app
/components
/components/sections
/components/ui (pre-configured)
/lib
/public
```

---

## PHASE 0.5 — Design Foundation [DONE - NEEDS REFINEMENT]

### Typography Setup
Configure in `layout.tsx`:
- **Headings:** Playfair Display (luxury serif) - **use light/regular weights**
- **Body:** Inter (clean sans-serif) - **use light weight (300)**

### Color Palette (Six Senses Inspired)
Configure warm luxury palette in `globals.css`:
- **Background:** Warm cream (#FAF8F5)
- **Foreground:** Warm charcoal (#2C2A26)
- **Accent Primary:** Sage/Olive (#7D8471)
- **Accent Secondary:** Terracotta (#C4A484)
- **Accent Tertiary:** Antique Gold (#B8A88A)
- **Muted:** Warm stone gray (#A39E93)

### Placeholder Colors (Warm Tones)
Instead of gray placeholders:
- Sage: #E8EBE4
- Sand: #F0EBE3
- Terracotta Light: #F2E8E0

### Global Styles
- Wide letter-spacing on headings: tracking-[0.2em] to tracking-[0.3em]
- Light font weights: font-light (300)
- Generous line-height: leading-relaxed to leading-loose
- Scroll-triggered animations using CSS @keyframes + Intersection Observer

---

## STEP 1 — Navigation Bar [DONE - NEEDS REFINEMENT]

Create file: `/components/navbar.tsx`

**Brand:** DiStefano Italian Living (or just "DiStefano")

**Left:** Brand logo text using Playfair Display, light weight

**Right links:** Experience | Properties | Contact (reduced to 3 links)

**CTA button:** Text-only link style "Begin Your Journey" with subtle underline

**Behavior:**
- Transparent over hero with white text
- Warm cream background when scrolling (sticky)

**Mobile:** Minimal hamburger, full-screen overlay menu

**Style:** 
- Ultra-minimal like Six Senses
- Wide letter-spacing (tracking-[0.15em])
- Generous padding (py-6 to py-8)
- Thin, elegant typography

---

## STEP 2 — Hero Section (Video Infrastructure) [DONE - NEEDS REFINEMENT]

Create file: `/components/sections/hero.tsx`

**Background:** Warm-toned placeholder (sage or sand color, not gray)
- Ready for `<video>` element swap later (no external platform branding)

**Gradient overlay:** Subtle, barely visible - `bg-gradient-to-b from-black/40 via-transparent to-black/50`

**Content (LEFT-ALIGNED, not centered - Six Senses style):**
- **Small tagline above:** "Private Property Advisory" (uppercase, wide tracking)
- **Headline:** Own a Piece of Italy (Playfair Display, light weight, very large)
- **Subheadline:** Positioned below with generous spacing, light font
- **Links:** Text-only with subtle underlines, not heavy buttons

**Layout:**
- Text positioned in bottom-left quadrant
- Generous padding from edges (px-12 to px-20)
- Asymmetric, editorial feel

**Watch the Film:**
- Small text link, not prominent button
- Uses shadcn Dialog with warm overlay

**Bottom:** Minimal scroll indicator (thin line or small arrow)

**Animation:** Text fades in on load with staggered timing

**Design feel:** Six Senses - cinematic, understated, breathing room

---

## STEP 3 — Emotional Story Section [DONE - NEEDS REFINEMENT]

Create file: `/components/sections/emotional.tsx`

**Layout:** Two columns, generous gap, asymmetric sizing

**Section padding:** py-32 to py-40 (Six Senses breathing room)

**Title:** More Than Property. A Way of Living.
- Light weight, wide tracking

**Left:** Large editorial image placeholder (warm sand/sage tone)
- Aspect ratio 3:4 or 4:5 (portrait, editorial)

**Right text:**
- Each paragraph separated with generous margin
- Light font weight, relaxed line-height
- Text fades in on scroll

**Animation:** Staggered fade-in-up on scroll

---

## STEP 4 — Services Section [DONE - NEEDS REFINEMENT]

Create file: `/components/sections/services.tsx`

**Background:** Warm charcoal or deep sage (dark section for contrast)
**Text:** Cream/off-white

**Section padding:** py-32 to py-40

**Section title:** Your Journey to Italy
- Uppercase, wide tracking, small size

**4 Service Items (minimal cards, no heavy borders):**
- Number prefix: 01, 02, 03, 04
- Title in Playfair, light weight
- Description in Inter light
- Thin bottom border separator only

**Layout:** 2x2 grid on desktop, single column mobile

**Interaction:** Subtle opacity/translate on hover

---

## STEP 5 — Lifestyle Section [DONE - NEEDS REFINEMENT]

Create file: `/components/sections/lifestyle.tsx`

**Title:** Experience the Italy Few Truly Know
- Uppercase tagline above, wide tracking

**Section padding:** py-32

**Layout:** Three large image tiles (warm-toned placeholders)
- Full-width on mobile
- Asymmetric grid on desktop (1 large left, 2 stacked right)

**Placeholder colors:** 
- Coastal: Soft blue-gray (#E5E8EB)
- Countryside: Sage (#E8EBE4)
- Historic: Warm terracotta (#F2E8E0)

**Interaction:** 
- Slow scale on hover (scale-105, duration-700)
- Title overlay appears on hover

**Animation:** Staggered fade-in on scroll

---

## STEP 6 — Process Section [DONE - NEEDS REFINEMENT]

Create file: `/components/sections/process.tsx`

**Background:** Warm cream

**Title:** A Discreet and Personal Process
- Centered, light weight

**Section padding:** py-32 to py-40

**Steps (horizontal on desktop, vertical on mobile):**
1. **01** Initial Consultation
2. **02** Curated Discovery
3. **03** Italy Experience
4. **04** Secure Acquisition

**Design:** 
- Large step numbers in light Playfair
- Thin connecting lines between steps
- Minimal text, wide spacing

**Animation:** Steps fade in sequentially on scroll

---

## STEP 7 — Authority Section [DONE - NEEDS REFINEMENT]

Create file: `/components/sections/authority.tsx`

**Background:** Deep warm charcoal
**Text:** Cream

**Section padding:** py-32

**Layout:** 
- Large pull quote style
- Image placeholder on one side (portrait)
- Quote on the other side with attribution

**Typography:**
- Quote in large Playfair italic
- Attribution in small uppercase Inter

---

## STEP 8 — Inquiry Form Section [NO CHANGES TO FIELDS]

Create file: `/components/sections/inquiry.tsx`

**Background:** Warm cream

**Section padding:** py-32

**Layout:** Two columns
- Left: Heading + supportive text
- Right: Form fields

**Styling refinements:**
- Thin border inputs (1px)
- Wide letter-spacing on labels
- Light font weights
- Submit button: Thin border, wide tracking, subtle

**Fields:** (unchanged)
- Name, Email, Country, Property Budget Range, Message

---

## STEP 9 — Footer [DONE - NEEDS REFINEMENT]

Create file: `/components/footer.tsx`

**Background:** Warm charcoal
**Text:** Cream/muted

**Style:**
- Ultra-minimal like Six Senses
- Wide letter-spacing
- Generous padding (py-16 to py-20)

**Left:** DiStefano (simplified brand)
**Right links:** Experience | Contact (minimal)

**Bottom:** Small copyright, muted color

---

## STEP 10 — Assemble Homepage (Single-Page Scroll)

Edit: `/app/page.tsx`

All sections assembled as single-page scroll:
```tsx
<Navbar />
<Hero />
<Emotional />
<Services />
<Lifestyle />
<Process />
<Authority />
<Inquiry />
<Footer />
```

Add smooth scroll behavior and section IDs for anchor navigation.

---

## STEP 11 — SEO Setup

Edit metadata in: `/app/layout.tsx`

**Title:** DiStefano Italian Living | Own a Piece of Italy

**Description:** Private property acquisition and Italian lifestyle advisory for international buyers seeking to own a home in Italy.
