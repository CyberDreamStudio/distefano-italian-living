# DiStefano Italian Living - Implementation Plan

## PHASE 0 — Project Setup

### Next.js Setup [DONE]
~~Run: `npx create-next-app@latest distefano-italian-living`~~

Options used:
- TypeScript: Yes
- Tailwind: Yes
- App Router: Yes
- **src directory: No** (using default `/app` structure)

### shadcn Setup [DONE]
~~Run: `npx shadcn@latest init`~~

Components to install as needed:
- button, card, dialog, input, textarea

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

## PHASE 0.5 — Design Foundation

### Typography Setup
Configure in `layout.tsx`:
- **Headings:** Playfair Display (luxury serif)
- **Body:** Inter (clean sans-serif)

### Color Palette
Configure luxury palette in `globals.css`:
- **Primary:** Deep charcoal (#1a1a1a)
- **Accent:** Warm gold (#b8860b) or Terracotta (#c67b5c)
- **Background:** Off-white/cream (#faf9f6)
- **Muted:** Warm grays

### Animations (Global)
- Smooth scroll behavior
- Subtle fade-in on scroll (Intersection Observer)
- Elegant hover transitions

---

## STEP 1 — Navigation Bar

Create file: `/components/navbar.tsx`

**Brand:** DiStefano Italian Living

**Left:** Brand logo text using Playfair Display

**Right links:** Experience | Properties | Process | About | Contact

**CTA button:** Start Your Journey

**Behavior:**
- Transparent over hero
- Solid background when scrolling (sticky)

**Mobile:** Hamburger menu with dropdown

**Style:** Luxury spacing, minimal, elegant typography

---

## STEP 2 — Hero Section (Video Infrastructure)

Create file: `/components/sections/hero.tsx`

**Background:** Placeholder container for future self-hosted video
- Styled placeholder box with "VIDEO PLACEHOLDER" text
- Ready for `<video>` element swap later (no external platform branding)

**Gradient overlay:** `bg-gradient-to-b from-black/60 via-black/30 to-black/70`

**Content (centered):**
- **Headline:** Own a Piece of Italy
- **Subheadline:** Private property acquisition and Italian lifestyle advisory for international buyers.
- **Buttons:** "Start Your Journey" | "Watch the Film"

**Watch the Film modal:**
- Uses shadcn Dialog
- Placeholder for self-hosted video (no YouTube/Vimeo)
- Structure ready for `<video src="/videos/film.mp4" controls />` integration

**Bottom:** Subtle scroll indicator

**Design feel:** Luxury hospitality (Aman, Six Senses pacing)

---

## STEP 3 — Emotional Story Section

Create file: `/components/sections/emotional.tsx`

**Layout:** Two columns

**Title:** More Than Property. A Way of Living.

**Left:** Large editorial image placeholder

**Right text:**
> For many, Italy is a destination.
> For a few, it becomes home.
> 
> DiStefano Italian Living guides international buyers through the journey of discovering, experiencing, and ultimately owning a piece of Italy.
> 
> From the moment you arrive to the moment you receive the keys to your home, every detail is curated.
> 
> This is not real estate. This is Italian living.

**Style:** Elegant typography, wide spacing, editorial layout

---

## STEP 4 — Services Section

Create file: `/components/sections/services.tsx`

**Section title:** Your Journey to Italy
**Subtitle:** A fully curated path from discovery to ownership.

**4 Cards (shadcn Card):**
1. **Discovery** — Private consultation to understand lifestyle goals.
2. **Curated Italy Experience** — Private tours and lifestyle immersion across Italy.
3. **Property Acquisition** — Access to exclusive properties and negotiation support.
4. **Legal & Ownership Support** — Complete legal assistance including notarial processes.

**Interaction:** Subtle hover animation

---

## STEP 5 — Lifestyle Section

Create file: `/components/sections/lifestyle.tsx`

**Title:** Experience the Italy Few Truly Know

**Layout:** Three large image tiles (placeholders)

**Tiles:**
1. Coastal Living
2. Countryside Retreats
3. Historic Estates

**Interaction:** Hover zoom effect

**Goal:** Make visitors imagine living in Italy

---

## STEP 6 — Process Section

Create file: `/components/sections/process.tsx`

**Title:** A Discreet and Personal Process

**Steps (elegant timeline):**
1. **01 Initial Consultation** — Understanding your goals and vision.
2. **02 Curated Property Discovery** — Private property selection across Italy.
3. **03 Italy Experience** — Visit Italy and explore properties.
4. **04 Secure Acquisition** — Legal process and ownership completion.

**Design:** Elegant vertical/horizontal timeline layout

---

## STEP 7 — Authority Section

Create file: `/components/sections/authority.tsx`

**Title:** Led by Legal Expertise

**Content:**
> DiStefano Italian Living is founded by an Italian legal professional with experience in property law and international transactions.
> 
> Clients benefit from legal expertise, local connections, and trusted guidance throughout the acquisition process.

**Layout:** Image left, text right

**Goal:** Build trust for international buyers

---

## STEP 8 — Inquiry Form Section

Create file: `/components/sections/inquiry.tsx`

**Title:** Begin Your Italian Journey
**Subtitle:** Tell us about your vision.

**Fields:**
- Name
- Email
- Country
- Property Budget Range
- Message

**CTA button:** Request Private Consultation

**Note below form:** All inquiries are handled privately and confidentially.

**Backend:** Form structured for easy future integration (commented placeholder for API route connection)

---

## STEP 9 — Footer

Create file: `/components/footer.tsx`

**Left:** DiStefano Italian Living
**Tagline:** Private Property & Lifestyle Advisory

**Right links:** Experience | Process | About | Contact

**Bottom:** © DiStefano Italian Living. All rights reserved.

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
