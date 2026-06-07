# NodensCare — Frontend Redesign

A modern, high-converting frontend for [NodensCare](https://www.nodenscare.com), Istanbul's premier medical tourism consultancy.

## Tech Stack

- **React 19** + **Vite 8** — fast development and builds
- **Tailwind CSS v3** — utility-first styling
- **AOS** — scroll animations
- **react-icons** — social media icons
- **Web3Forms** — zero-backend contact form (submissions go straight to email)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to **Netlify**, **Vercel**, or **GitHub Pages**.

## Setting Up the Contact Form

The contact form uses [Web3Forms](https://web3forms.com) — no backend needed.

1. Go to [web3forms.com](https://web3forms.com) and enter `info@nodenscare.com`
2. Copy your free API key
3. Open `src/components/Contact.jsx`
4. Replace `'YOUR_WEB3FORMS_KEY'` with your actual key

Form submissions will be delivered to the client's email instantly.

## Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky, transparent-to-solid on scroll, dropdown menus, mobile responsive |
| **Hero** | Full-screen gradient with floating stats cards, animated badges |
| **Stats** | Animated count-up statistics bar |
| **Services** | 4-category service grid with hover effects |
| **Why NodensCare** | 6 trust-building standards in card grid |
| **Treatments** | Filterable treatment packages with pricing |
| **Gallery** | Drag-to-compare before/after slider with medical disclaimer gate |
| **Doctors** | Professor profiles + specialist network |
| **Testimonials** | Auto-scrolling review carousel |
| **FAQ** | Animated accordion with 10 questions |
| **Contact** | Web3Forms contact form + WhatsApp + address cards |
| **Footer** | Full sitemap, social links, legal |
| **WhatsApp Button** | Fixed floating button with pulse animation |

## Deployment (Recommended: Netlify)

1. Push to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy — free forever for static sites
