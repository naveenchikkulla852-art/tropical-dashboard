#  Tropique — Tropical Destinations Dashboard

A responsive, production-grade Tropical Destinations Dashboard built with **Vite + React**.

---

##  Features

### Navigation
- Fixed top navbar with Home, About, Schedule, Membership, Pricing
- Frosted-glass effect activates on scroll
- **Explore** CTA smooth-scrolls to booking section
- Animated hamburger menu for mobile

### Hero Section
- Full-screen cinematic section
- Staggered fade-up animations (CSS-only)
- Stats: 200+ Destinations, 50K+ Travelers, 4.9★ Rating

### Featured Destination
- Prominent Maldives card with image, description, meta info
- "See More" CTA smooth-scrolls to booking

### Destinations (Dynamic API)
- Fetches from the NxtWave API endpoint
- Graceful fallback to 12 curated destinations on error/CORS
- **Real-time search** (name + location, case-insensitive)
- **"No such destination"** empty state when 0 results
- **Category filter pills** (derived from actual data)
- **Skeleton loading cards** during fetch
- **Load More** pagination (6 per page)

### Promotions & Discounts
- Student 30% off banner with animated number
- Free cancellation + 2× reward points offer cards
- "Book with Discount" CTA

### Booking Form
- Fields: Name, Email, Date, Passengers, Destination, Special Requests
- Client-side validation with inline error messages
- Mock async submission (1.6s delay) → success toast
- Fully keyboard accessible (labels linked to inputs)

### Responsive Design
- Mobile-first CSS using CSS Grid + Flexbox
- Breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- All sections adapt fluidly

### Bonus
- Toast notification system (React Context)
- Smooth scroll to sections
- CSS keyframe animations (fadeUp, float, shimmer, spin)
- CSS Modules for zero-collision styling

---

##  Tech Stack

| Tool | Purpose |
|------|---------|
| Vite 5 | Build tool + dev server |
| React 18 | UI library |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped component styles |
| CSS Custom Properties | Design tokens / theming |

No extra UI libraries — pure React + CSS.

---

##  API

- **Endpoint**: `https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/...`
- Fetched in `useDestinations` custom hook using native `fetch`
- AbortController used for cleanup on unmount
- Falls back silently to local data if API is unreachable

---

##  Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel


