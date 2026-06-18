# BINC Premix Concrete — Next.js 15 Website

Production-ready lead generation website for BINC Premix Concrete, Sydney.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Fonts**: Inter (via next/font/google)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Services, Why Us, Projects, Process, Testimonials |
| `/services` | All services overview |
| `/services/[slug]` | Individual service pages (4 services) |
| `/projects` | Project portfolio gallery |
| `/projects/[slug]` | Individual project detail pages |
| `/about` | About, team, values, service area |
| `/contact` | Contact form + contact details |
| `/quote` | 3-step quote request form (primary lead gen) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## SEO Features

- Full metadata per page (title, description, OG, Twitter)
- Auto-generated sitemap (`/sitemap.xml`)
- Robots.txt
- Schema-ready structure

## Integrating Form Submissions

Forms currently simulate submission with a timeout. To integrate with a real email service:

1. Copy `.env.local.example` to `.env.local`
2. Add your API keys
3. Update `/src/app/api/contact/route.ts` and `/src/app/api/quote/route.ts`

Recommended services: [Resend](https://resend.com), [SendGrid](https://sendgrid.com)

## Brand Colors

- **Primary (Orange)**: `brand-600` = `#f0610c`
- **Dark Background**: `dark` = `#0f1117`
- **Concrete Greys**: `concrete-*` scale

## Deployment

Deploy to [Vercel](https://vercel.com) for zero-config Next.js hosting:

```bash
npx vercel
```
