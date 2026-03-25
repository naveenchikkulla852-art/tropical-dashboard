# 🌴 Tropique — Tropical Destinations Dashboard

A responsive, production-grade Tropical Destinations Dashboard built with **Vite + React**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

---

## 🗂️ Project Structure

```
tropique/
├── index.html                        # HTML entry point
├── vite.config.js                    # Vite configuration
├── package.json
└── src/
    ├── main.jsx                      # ReactDOM root + BrowserRouter
    ├── App.jsx                       # Routes + layout shell
    ├── pages/
    │   └── Home.jsx                  # Home page (assembles all sections)
    ├── components/
    │   ├── Navbar/
    │   │   ├── Navbar.jsx            # Fixed nav, hamburger, scroll-state
    │   │   └── Navbar.module.css
    │   ├── Hero/
    │   │   ├── Hero.jsx              # Full-screen hero with stats
    │   │   └── Hero.module.css
    │   ├── Featured/
    │   │   ├── Featured.jsx          # Featured destination highlight
    │   │   └── Featured.module.css
    │   ├── Destinations/
    │   │   ├── Destinations.jsx      # Section container (search + grid)
    │   │   ├── Destinations.module.css
    │   │   ├── DestinationCard.jsx   # Individual destination card
    │   │   ├── DestinationCard.module.css
    │   │   ├── FilterPills.jsx       # Category filter buttons
    │   │   ├── FilterPills.module.css
    │   │   ├── SearchBar.jsx         # Search input + result count
    │   │   └── SearchBar.module.css
    │   ├── Promo/
    │   │   ├── Promo.jsx             # Student discount section
    │   │   └── Promo.module.css
    │   ├── Booking/
    │   │   ├── Booking.jsx           # Section layout (info + form)
    │   │   ├── Booking.module.css
    │   │   ├── BookingForm.jsx       # Form with validation
    │   │   └── BookingForm.module.css
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   └── Footer.module.css
    │   └── ui/                       # Shared/reusable components
    │       ├── Stars.jsx             # Star rating display
    │       ├── SkeletonCard.jsx      # Loading placeholder
    │       └── SkeletonCard.module.css
    ├── context/
    │   ├── ToastContext.jsx          # Global toast notification context
    │   └── ToastContext.module.css
    ├── hooks/
    │   ├── useDestinations.js        # API fetch + normalise + fallback
    │   └── useScrolled.js           # Scroll position detection
    ├── utils/
    │   ├── constants.js             # API URL, fallback data, nav links
    │   └── helpers.js               # Pure utility functions
    └── styles/
        └── global.css               # CSS variables, reset, shared classes
```

---

## ✅ Features

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

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Vite 5 | Build tool + dev server |
| React 18 | UI library |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped component styles |
| CSS Custom Properties | Design tokens / theming |

No extra UI libraries — pure React + CSS.

---

## 🔌 API

- **Endpoint**: `https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/...`
- Fetched in `useDestinations` custom hook using native `fetch`
- AbortController used for cleanup on unmount
- Falls back silently to local data if API is unreachable

---

## 🌍 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — Vite projects are auto-detected
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic CI/CD.
