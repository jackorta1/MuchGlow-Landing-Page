# MuchGlow Landing Page - Setup & Deployment Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js**: Version 18.x or 20.x (Recommended: v20.5.0 or higher)
- **npm**: Version 9.x or higher (comes with Node.js)

### Check Your Versions
```bash
node --version  # Should show v18.x or v20.x
npm --version   # Should show 9.x or higher
```

### Installing Node.js
If you don't have Node.js installed or need to update:

1. **Download from Official Website**:
   - Visit: https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Follow installation instructions for your operating system

2. **Alternative - Using NVM (Node Version Manager)**:
   ```bash
   # Install NVM (Linux/Mac)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

   # Install Node.js
   nvm install 20
   nvm use 20
   ```

---

## Installation Steps

### 1. Clone or Download the Project
```bash
# If using Git
git clone <repository-url>
cd MuchGlow-Landing-Page

# Or extract the zip file and navigate to the folder
cd MuchGlow-Landing-Page
```

### 2. Install Dependencies
This is the most important step! Run this command in the project root directory:

```bash
npm install
```

**What this does:**
- Downloads all required packages listed in `package.json`
- Installs dependencies like Next.js, React, Bootstrap, Framer Motion, etc.
- Creates a `node_modules` folder (this folder should NOT be committed to git)

**Expected Output:**
- You should see a progress bar installing packages
- Installation may take 2-5 minutes depending on your internet speed
- A `node_modules` folder will be created
- You should see "added XXX packages" message when complete

---

## Running the Project

### Development Mode (Local Development)

```bash
npm run dev
```

**What happens:**
- Starts the Next.js development server
- Opens on `http://localhost:3000` by default
- Hot reload enabled (changes reflect automatically)
- You should see: "✓ Ready in X.XXs"

**Access the application:**
- Open your browser and go to: `http://localhost:3000`
- English version: `http://localhost:3000`
- Arabic version: `http://localhost:3000/ar`
- AI Beauty Test: `http://localhost:3000/ai-beauty`

---

## Handling ESLint Warnings/Errors

The errors shown in your screenshots are **ESLint warnings**, not build failures. They indicate code quality issues but won't prevent the app from running.

### Common ESLint Errors:

#### 1. "X is defined but never used" (@typescript-eslint/no-unused-vars)
**What it means:** A variable, import, or component is imported but not used in the code.

**Solutions:**

**Option A - Quick Fix for Development:**
Create or update `.eslintrc.json` to be more lenient:
```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "react/no-unescaped-entities": "warn"
  }
}
```

**Option B - Disable ESLint During Build (Not Recommended):**
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
```

**Option C - Fix the Code (Best Practice):**
Remove unused imports from the files mentioned in the errors.

#### 2. "can be escaped with &apos;, &lsquo;, etc." (react/no-unescaped-entities)
**What it means:** Special characters in JSX text need to be escaped.

**Quick Fix:** Change the rule to warning instead of error (see Option A above)

---

## Building for Production

### Step 1: Create Production Build
```bash
npm run build
```

**What this does:**
- Compiles and optimizes your application
- Creates a `.next` folder with production-ready files
- May fail if there are critical errors (not warnings)

**If build fails due to ESLint:**
- Use Option B above (disable ESLint during builds) temporarily
- Or fix the code issues mentioned in the errors

### Step 2: Test Production Build Locally
```bash
npm run start
```

**What this does:**
- Runs the production build locally
- Opens on `http://localhost:3000`
- This is what will run on your server

---

## Deploying to Server

### Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best performance.

1. **Create Vercel Account:**
   - Visit: https://vercel.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy:**
   - Click "New Project"
   - Import your Git repository or upload the folder
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Custom Domain:**
   - Add your custom domain in Vercel dashboard
   - Follow DNS configuration instructions

### Option 2: Deploy to Traditional Server (VPS, AWS, etc.)

#### Prerequisites on Server:
```bash
# Install Node.js on server
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### Deployment Steps:

1. **Upload files to server:**
   ```bash
   # Using SCP
   scp -r MuchGlow-Landing-Page user@your-server:/var/www/

   # Or use SFTP, FTP, or Git
   ```

2. **On the server, navigate to project:**
   ```bash
   cd /var/www/MuchGlow-Landing-Page
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Start the application:**
   ```bash
   # Option A: Direct start (stops when terminal closes)
   npm run start

   # Option B: Using PM2 (keeps running)
   npm install -g pm2
   pm2 start npm --name "muchglow" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx (Reverse Proxy):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 3: Deploy to Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. Follow Netlify's Next.js deployment guide

---

## Environment Variables (If Needed)

If your project requires environment variables (API keys, etc.):

1. **Create `.env.local` file:**
   ```bash
   NEXT_PUBLIC_API_URL=https://api.example.com
   DATABASE_URL=your-database-url
   ```

2. **Never commit `.env.local` to Git!**

3. **On Server:** Create the same `.env.local` file with production values

---

## Troubleshooting Common Issues

### Issue 1: "Cannot find module" errors
**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue 2: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

### Issue 3: Build fails with ESLint errors
**Solution:**
- Follow the ESLint configuration steps above
- Or temporarily disable ESLint in `next.config.js`

### Issue 4: "Sharp" module errors (Image optimization)
**Solution:**
```bash
npm install sharp
```

### Issue 5: Changes not reflecting
**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

---

## Project Structure

```
MuchGlow-Landing-Page/
├── public/                 # Static files (images, fonts)
│   └── muchglow.png       # Logo file
├── src/
│   └── app/
│       ├── component/     # Reusable components
│       │   ├── NavbarSection.tsx
│       │   ├── NavbarSectionAr.tsx
│       │   └── ...
│       ├── en/           # English pages
│       ├── ar/           # Arabic pages
│       ├── page.tsx      # Home page
│       └── layout.tsx    # Root layout
├── .next/                # Build output (auto-generated)
├── node_modules/         # Dependencies (auto-generated)
├── package.json          # Project dependencies
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── .eslintrc.json       # ESLint configuration
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint checker |

---

## Important Notes

1. **Never delete `package.json` or `package-lock.json`**
2. **Always run `npm install` after cloning or pulling new code**
3. **The `node_modules` folder is huge (200MB+) - don't commit it to Git**
4. **Test the build locally before deploying to production**
5. **Keep Node.js and npm updated**

---

## Support & Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **React Documentation:** https://react.dev
- **Bootstrap Documentation:** https://getbootstrap.com/docs
- **Framer Motion:** https://www.framer.com/motion

---

## Quick Start Checklist

- [ ] Install Node.js (v18 or v20)
- [ ] Navigate to project directory
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] Test both English and Arabic versions
- [ ] Run `npm run build` to test production build
- [ ] Deploy to server or Vercel

---

**Last Updated:** November 2025
**Minimum Node.js Version:** 18.17.0
**Recommended Node.js Version:** 20.5.0+
