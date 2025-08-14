# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MuchGlow Landing Page - A multilingual Next.js 15 beauty salon booking platform with separate component implementations for Arabic (RTL) and English (LTR) layouts.

## Development Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

## Architecture & Routing

### Multi-language Implementation
The project uses a **duplicated component architecture** for internationalization:
- **English components**: Located in `/src/app/component/` (e.g., `HeroSection.tsx`)
- **Arabic components**: Separate Arabic versions with "Ar" suffix (e.g., `HeroSectionAr.tsx`)
- **Routing structure**:
  - `/` - Premium integrated landing page (imports from `/premium-integrated/page.tsx`)
  - `/en/*` - English version pages
  - `/ar/*` - Arabic version pages with RTL support
  - `/ai-beauty` - AI Beauty Analysis feature page
  - `/login` - Partner login page
  - `/premium-landing` - Alternative premium landing page
  - `/premium-integrated` - Main premium integrated page component

### Page Structure
- **Root page** (`/src/app/page.tsx`): Imports and renders PremiumIntegratedLanding component
- **Language-specific pages**: Under `/en/page.tsx` and `/ar/page.tsx`
- **Shared pages**: gallery, privacy, terms, delete-account (duplicated in both `/en/` and `/ar/`)

### Layout Hierarchy
1. **Root layout** (`/src/app/layout.tsx`): Imports fonts, all global CSS files, Bootstrap CSS
2. **Language layouts**: 
   - `/en/layout.tsx`: Sets `dir="ltr"` and `lang="en"`
   - `/ar/layout.tsx`: Sets `dir="rtl"`, `lang="ar"`, and adds `rtl` class

## Key Dependencies

- **Framework**: Next.js 15.0.3, React 18.3.1
- **UI Framework**: React Bootstrap 5.3.3
- **Animations**: Framer Motion 12.23.12
- **Icons**: FontAwesome 6.7.1, Lucide React
- **Carousel**: Embla Carousel React 8.6.0
- **Internationalization**: Language-specific component duplication (next-i18next and next-translate installed but not actively used)
- **Notifications**: React Toastify 11.0.5
- **Utilities**: React Intersection Observer 9.16.0

## Important Patterns

### Component Duplication for RTL/LTR
Each major component has two versions:
- Standard version for English/LTR
- Arabic version with "Ar" suffix for RTL layout
- Both versions are maintained separately
- No shared translation files - content is hardcoded in each component

### Styling Approach
Multiple global CSS files loaded in root layout:
- `globals.css`: Base styles
- `premium-aesthetic.css`: Premium aesthetic enhancements
- `animations.css`: Animation definitions
- `muchglow-premium.css`: MuchGlow premium styles
- `premium-animations.css`: Premium-specific animations
- `globals-premium.css`: Premium global styles
- Component-specific CSS: `ai-beauty-analysis.css`, `partner-hero.css`, `gift-transfer.css`

### TypeScript Configuration
- Strict mode enabled
- Module resolution: bundler
- Target: ES2017
- JSX: preserve
- Path aliases: `@/*` maps to `./src/*`

### Component Organization
Premium integrated landing page uses modular component imports:
- NavbarSection, PartnerHeroSection, TrustBadges
- AboutAppSection, FeatureSection, PaymentFeature
- ClinicServices, SalonClients, TestimonialsSection
- AIBeautySection, GiftTransferSection, AppShowcase
- GalleryySection, PremiumPartnerSection, AccordionData, FooterSection