# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **IMPORTANT:** Always read `CONTEXT.md` for project history and previous conversations.

## Build & Development Commands

```bash
npm install          # Install dependencies (required first)
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Create production build
npm run start        # Run production build locally
npm run lint         # Run ESLint
```

## Technology Stack

- **Next.js 15.5.9** with App Router and TypeScript (security patched)
- **React Bootstrap** + Bootstrap 5.3 for UI components
- **Framer Motion** for animations
- **FontAwesome** + **Lucide React** for icons
- **Embla Carousel** for sliders
- Path alias: `@/*` maps to `./src/*`

## Production

- **URL**: https://muchglow.com
- **Server**: nginx/1.24.0 on Ubuntu
- **Deployment**: External IT company handles deployment

## Architecture

### Bilingual Pattern (Critical)
The app supports English (LTR) and Arabic (RTL) with a component duplication strategy:
- English components: `ComponentName.tsx`
- Arabic components: `ComponentNameAr.tsx` (same props, RTL styling)
- Routes: `/en/*` for English, `/ar/*` for Arabic
- Translation files: `src/app/en/en.json` and `src/app/ar/ar.json`

### Key Directories
```
src/app/
├── component/       # All 55+ reusable React components
├── en/              # English pages and layout (LTR)
├── ar/              # Arabic pages and layout (RTL)
├── ai-beauty/       # AI Beauty Analysis tool
├── api/             # API routes
├── fonts/           # Local Geist fonts
└── *.css            # Multiple global CSS files (responsive-system, premium-aesthetic, animations, etc.)
```

### CSS Architecture
Global styles are imported in `src/app/layout.tsx`:
- `globals.css` - Base styles
- `responsive-system.css` - Responsive utilities
- `premium-aesthetic.css` - Premium design system
- `animations.css` - Animation effects
- Feature-specific CSS files (gift-transfer.css, gym-fitness.css, ai-beauty-analysis.css, etc.)

## Routes

- `/`, `/en` - English landing page
- `/ar` - Arabic landing page
- `/ai-beauty`, `/ar/ai-beauty` - AI Beauty Analysis
- `/login` - Partner login
- `/en/gallery`, `/ar/gallery` - Photo galleries
- `/en/terms`, `/ar/terms` - Terms & conditions
- `/en/privacy`, `/ar/privacy` - Privacy policy

## ESLint Configuration

The project uses relaxed ESLint rules (warnings not errors) for:
- `@typescript-eslint/no-unused-vars`
- `react/no-unescaped-entities`
- `@typescript-eslint/no-explicit-any`

## Development Notes

- Delete `.next/` folder to force a clean rebuild if changes don't appear
- Test both `/en` and `/ar` routes when making changes
- Node.js 18+ required (20+ recommended)

## Security Notes

- **Keep Next.js updated**: Check for security patches regularly
- **2026-01-05**: Upgraded to Next.js 15.5.9 to fix 8 security advisories (GHSA-7m27-7ghc-44w9, GHSA-3h52-269p-cp9r, GHSA-67rr-84xm-4c7r, GHSA-g5qg-72qw-gw5v, GHSA-xv57-4mr9-wg8v, GHSA-4342-x723-ch2f, GHSA-qpjv-v59x-3qc4, GHSA-f82v-jwr5-mffw)
- CVE-2025-66478 (React2Shell) was patched by upgrading to Next.js 15.0.7
- Run `npm audit` periodically to check for vulnerabilities
- After security updates, always run `npm run build` to verify no breaking changes

## Deployment Checklist

When sending updates to the deployment team:
1. Run `npm run build` locally to verify production build works
2. Include `package.json` and `package-lock.json` if dependencies changed
3. Deployment commands on server:
   ```bash
   npm install
   npm run build
   # Restart the application (pm2 restart or systemctl restart)
   ```

## Build Verification Log

**2026-01-05**: Security update - Next.js upgraded to 15.5.9
- Fixed critical vulnerability (GHSA-7m27-7ghc-44w9 and 7 others)
- `npm audit` now shows **0 vulnerabilities**
- `npm run build` completes with zero errors
- All 22 static pages generate correctly
- Type checking passes

**2026-01-03**: Production build verified successfully
- `npm run build` completes with zero errors
- All 22 static pages generate correctly
- Type checking passes
- Only lint warnings (unused imports, unescaped quotes) — no breaking issues
- 502 Bad Gateway errors on production are server-side operational issues (nginx/PM2/port config), NOT codebase issues
