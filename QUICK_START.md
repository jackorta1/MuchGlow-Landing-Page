# 🚀 Quick Start Guide - MuchGlow Landing Page

## ⚡ Get Running in 3 Steps

### 1️⃣ Install Node.js
Download from: https://nodejs.org/ (Version 18 or 20)

### 2️⃣ Install Dependencies
```bash
npm install
```
⏱️ Takes 2-5 minutes

### 3️⃣ Start Development Server
```bash
npm run dev
```
🌐 Open: http://localhost:3000

---

## 🔥 Most Common Commands

```bash
# Install everything (ALWAYS RUN THIS FIRST!)
npm install

# Start development (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Check code quality
npm run lint
```

---

## 🌍 Available Pages

| Page | URL |
|------|-----|
| Home (English) | http://localhost:3000 |
| Home (Arabic) | http://localhost:3000/ar |
| AI Beauty Test | http://localhost:3000/ai-beauty |
| Gallery | http://localhost:3000/en/gallery |
| Terms | http://localhost:3000/en/terms |

---

## ⚠️ Seeing ESLint Errors?

Don't worry! These are warnings, not failures. The app will still run.

**Quick Fix:**
The project is already configured to handle these. Just run:
```bash
npm run dev
```

---

## 🆘 Problems?

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 in use"
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
# Then: taskkill /PID <number> /F
```

### Need different port?
```bash
PORT=3001 npm run dev
```

---

## 📦 What Gets Installed?

When you run `npm install`, you get:
- ✅ Next.js 15 (React Framework)
- ✅ React 18 (UI Library)
- ✅ Bootstrap 5 (CSS Framework)
- ✅ Framer Motion (Animations)
- ✅ FontAwesome (Icons)
- ✅ And 100+ other dependencies

Total size: ~200-300 MB

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest)
1. Go to https://vercel.com
2. Import your project
3. Click Deploy
4. Done! ✨

### Option 2: Your Server
```bash
# On your server:
npm install
npm run build
npm run start
```

---

## 💡 Pro Tips

1. ⚡ Always run `npm install` after getting new code
2. 🗑️ Delete `.next` folder if things act weird
3. 🔄 Restart dev server if changes don't appear
4. 📱 Test on mobile (responsive design)
5. 🌐 Test both EN and AR versions

---

## 📞 Need Help?

1. Check SETUP_GUIDE.md for detailed instructions
2. Google the error message
3. Check Next.js docs: https://nextjs.org/docs

---

**Remember:** The `node_modules` folder is HUGE (200MB+)
- ❌ Don't commit it to Git
- ❌ Don't copy it manually
- ✅ Always use `npm install`
