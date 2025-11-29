# 🌟 MuchGlow Landing Page

A premium, multilingual Next.js 15 beauty & wellness booking platform for beauty centers, spas, and clinics.

![Node Version](https://img.shields.io/badge/node-%3E%3D18.17.0-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![License](https://img.shields.io/badge/license-Private-red)

---

## ✨ Features

- 🌍 **Bilingual Support** - Full English (LTR) and Arabic (RTL) implementations
- 🤖 **AI Beauty Analysis** - Advanced AI-powered skin analysis and recommendations
- 💳 **Payment Integration** - Support for Tabby & Tamara installment payments
- 🎁 **Gift Transfer System** - Send beauty treatments as gifts
- 💪 **Gym & Fitness Module** - Integrated fitness center booking
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Premium Animations** - Smooth Framer Motion animations
- 🎨 **Modern UI** - Clean, elegant design with Bootstrap 5

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or 20.x
- npm 9.x or higher

### Installation

```bash
# 1. Navigate to project folder
cd MuchGlow-Landing-Page

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

**That's it!** 🎉

---

## 📚 Documentation

For your convenience, we've created multiple documentation files:

| Document | Purpose |
|----------|---------|
| **[QUICK_START.md](./QUICK_START.md)** | ⚡ Fast setup guide (2 minutes) |
| **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** | 📖 Complete setup & deployment guide |
| **[CLAUDE.md](./CLAUDE.md)** | 🤖 Project structure & architecture |

---

## 🗂️ Project Structure

```
MuchGlow-Landing-Page/
├── public/                    # Static assets
│   ├── muchglow.png          # Main logo
│   └── ...                   # Other images
├── src/
│   └── app/
│       ├── component/        # Reusable components
│       │   ├── NavbarSection.tsx         # English navigation
│       │   ├── NavbarSectionAr.tsx       # Arabic navigation
│       │   ├── UnifiedNavigation.tsx     # Beauty/Fitness toggle nav
│       │   ├── HeroSection.tsx           # Hero sections
│       │   ├── AIBeautySection.tsx       # AI Beauty feature
│       │   ├── GiftTransferSection.tsx   # Gift system
│       │   ├── GymFitnessSection.tsx     # Fitness module
│       │   └── ...                       # Other components
│       ├── en/               # English pages
│       ├── ar/               # Arabic pages
│       ├── ai-beauty/        # AI Beauty Test page
│       ├── premium-integrated/ # Main landing page
│       ├── page.tsx          # Root page
│       └── layout.tsx        # Root layout
├── node_modules/             # Dependencies (auto-generated)
├── .next/                    # Build output (auto-generated)
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript config
└── next.config.ts            # Next.js config
```

---

## 🌐 Available Routes

### Main Pages
- `/` - Premium integrated landing page (English)
- `/ar` - Arabic version
- `/en` - English version

### Feature Pages
- `/ai-beauty` - AI Beauty Analysis tool
- `/ar/ai-beauty` - Arabic AI Beauty page
- `/login` - Partner login

### Information Pages
- `/en/gallery` - Photo gallery
- `/en/terms` - Terms & conditions
- `/en/privacy` - Privacy policy
- `/ar/gallery` - Arabic gallery
- `/ar/terms` - Arabic terms
- `/ar/privacy` - Arabic privacy

---

## 💻 Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Create production build
npm run build

# Run production server
npm run start

# Run ESLint
npm run lint
```

---

## 🛠️ Technology Stack

### Core
- **Next.js 15.0.3** - React framework
- **React 18.3.1** - UI library
- **TypeScript 5** - Type safety

### UI & Styling
- **React Bootstrap 2.10.5** - UI components
- **Bootstrap 5.3.3** - CSS framework
- **Framer Motion 12.23.12** - Animations

### Icons & Assets
- **FontAwesome 6.7.1** - Icon library
- **Lucide React 0.539.0** - Modern icons

### Additional Features
- **Embla Carousel 8.6.0** - Carousels
- **React Toastify 11.0.5** - Notifications
- **React Intersection Observer 9.16.0** - Scroll animations

---

## 🌍 Internationalization

The project uses a **component duplication strategy** for internationalization:

- **English components**: Standard naming (e.g., `NavbarSection.tsx`)
- **Arabic components**: "Ar" suffix (e.g., `NavbarSectionAr.tsx`)
- **Layout**: Separate layouts for LTR (`/en`) and RTL (`/ar`)

### Language Switching
Users can switch languages using:
- Globe icon button in navigation
- Direct URL access (`/en` or `/ar`)

---

## 🎨 Key Components

### Navigation
- **UnifiedNavigation** - Modern nav with Beauty/Fitness mode toggle
- **NavbarSection** / **NavbarSectionAr** - Traditional navigation

### Hero & Landing
- **PartnerHeroSection** - Main hero section
- **TrustBadges** - Social proof badges
- **AboutAppSection** - App introduction

### Features
- **AIBeautySection** - AI analysis showcase
- **GiftTransferSection** - Gift card system
- **GymFitnessSection** - Fitness center integration
- **FeatureSection** - Feature highlights
- **PaymentFeature** - Payment options

### Content
- **SalonClients** / **ClinicServices** - Service displays
- **TestimonialsSection** - Customer reviews
- **GalleryySection** - Photo gallery
- **AppShowcase** - App download section

### Footer
- **FooterSection** / **FooterSectionAr** - Site footer
- **AccordionData** - FAQ section

---

## 🚨 Troubleshooting

### Seeing ESLint warnings?
**Don't worry!** The project is configured to show warnings instead of errors. The app will run fine. These are code quality suggestions, not critical issues.

### Common Issues

**Problem:** "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

**Problem:** "Port 3000 already in use"
```bash
PORT=3001 npm run dev
```

**Problem:** Changes not appearing
```bash
rm -rf .next
npm run dev
```

For more solutions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

---

## 🚀 Deployment

### Recommended: Vercel
1. Push code to GitHub/GitLab
2. Import project to Vercel
3. Deploy with one click
4. Add custom domain

### Alternative: Traditional Server
See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed server deployment instructions.

---

## 📝 Development Notes

### Code Style
- TypeScript for type safety
- Component-based architecture
- Responsive-first design
- RTL support for Arabic

### Performance
- Next.js Image optimization
- Lazy loading components
- Code splitting
- Static generation where possible

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 🔒 Security

- No sensitive data in code
- Environment variables for API keys
- Input validation
- Secure payment integration

---

## 📞 Support

For technical issues or questions:
1. Check documentation files
2. Review Next.js docs: https://nextjs.org/docs
3. Check component code comments

---

## 📄 License

Private - All rights reserved

---

## 👥 Team

Developed for MuchGlow - Premium Beauty & Wellness Platform

---

**Last Updated:** November 2025
**Version:** 0.1.0
**Node.js Required:** ≥18.17.0
**Status:** ✅ Production Ready

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Test English and Arabic versions
5. ✅ Review features and components
6. ✅ Deploy to production

Happy coding! 🚀✨
