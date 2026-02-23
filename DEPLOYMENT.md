# Deployment Guide

Complete guide for deploying the EliTech CreaTives website to production.

---

## 🚀 Quick Deploy (Choose One)

### Option 1: Vercel (Recommended - 2 minutes)
```bash
npm i -g vercel
vercel
```
✅ Free tier, excellent performance, automatic deployments

### Option 2: Netlify (2 minutes)
```bash
npm i -g netlify-cli
netlify deploy
```
✅ Free tier, intuitive dashboard, form handling built-in

### Option 3: GitHub Pages (5 minutes)
Push to GitHub, enable Pages in Settings  
✅ Free, integrates with Git workflow

---

## 📋 Pre-Deployment Checklist

- [ ] All Formspree form endpoints updated with real IDs
- [ ] Environment variables configured (if needed)
- [ ] Images optimized and in assets folder
- [ ] All internal links tested
- [ ] Mobile responsiveness verified
- [ ] No console errors or warnings
- [ ] Robots.txt created (optional)
- [ ] Sitemap.xml created (optional)
- [ ] SEO meta tags verified
- [ ] Analytics tracking code added (optional)

---

## 🔧 Deployment Platforms

### 1. Vercel (Recommended)

**Pros:**
- ✅ Fastest deployment
- ✅ Excellent performance
- ✅ Free SSL/HTTPS
- ✅ Auto-deployments from Git
- ✅ Analytics included
- ✅ Form support via Formspree

**Setup:**

#### Via Web Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Leave default settings
6. Click Deploy

#### Via CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /path/to/elitech
vercel

# For production
vercel --prod
```

**Configure Environment:**
```bash
# If using environment variables
vercel env add VITE_FORMSPREE_CAREERS https://formspree.io/f/your_id
vercel env add VITE_FORMSPREE_NEWSLETTER https://formspree.io/f/your_id
```

**Domain Setup:**
1. Vercel Dashboard → Settings → Domains
2. Add custom domain
3. Update DNS records as per Vercel instructions

---

### 2. Netlify

**Pros:**
- ✅ Visual CMS available
- ✅ Serverless functions
- ✅ Form handling built-in
- ✅ Analytics included
- ✅ Environment variables

**Setup:**

#### Via Web Dashboard:
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select "GitHub" and authorize
5. Choose your repository
6. Leave build settings as default
7. Click Deploy

#### Via CLI:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
cd /path/to/elitech
netlify deploy

# For production
netlify deploy --prod
```

**Environment Variables:**
1. Netlify Dashboard → Site Settings → Build & Deploy → Environment
2. Add environment variables:
   ```
   VITE_FORMSPREE_CAREERS=https://formspree.io/f/your_id
   VITE_FORMSPREE_NEWSLETTER=https://formspree.io/f/your_id
   ```

**Custom Domain:**
1. Netlify Dashboard → Domains
2. Add domain
3. Update DNS settings

---

### 3. GitHub Pages

**Pros:**
- ✅ Free forever
- ✅ Uses GitHub Actions
- ✅ Simple setup
- ✅ Version control built-in

**Setup:**

#### Method A: From Main Branch
1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Click Save
7. Site available at `https://username.github.io/elitech-creatives`

#### Method B: Using GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

### 4. AWS S3 + CloudFront

**Pros:**
- ✅ Highly scalable
- ✅ Professional CDN
- ✅ Pay-as-you-go
- ✅ Advanced analytics

**Setup:**

```bash
# Create S3 bucket
aws s3 mb s3://elitech-creatives

# Upload files
aws s3 sync . s3://elitech-creatives --exclude ".git/*"

# Make public (if needed)
aws s3 website s3://elitech-creatives --index-document index.html

# Enable CloudFront CDN
# Via AWS Console: Create distribution pointing to S3 bucket
```

---

### 5. Traditional Hosting (cPanel, Shared Hosting)

**Setup:**

1. Upload via FTP:
   ```bash
   ftp your-hosting-provider.com
   cd public_html
   put index.html
   put styles.css
   put -r assets/
   ```

2. Or via SSH:
   ```bash
   scp -r . user@hosting.com:/public_html/
   ```

3. Configure domain DNS
4. Test at your domain

---

### 6. Docker + Heroku

**Dockerfile:**
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
```

**Deploy:**
```bash
heroku login
heroku create your-app-name
heroku container:push web
heroku container:release web
```

---

## 🔐 Security Configuration

### HTTPS/SSL
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ GitHub Pages: Automatic
- ✅ AWS: Via ACM + CloudFront
- ✅ Traditional: Via Let's Encrypt

### Environment Variables
Update form endpoints for production:

```javascript
// Don't do this (hardcoded):
const formEndpoint = "https://formspree.io/f/xxx";

// Do this (environment variable):
const formEndpoint = process.env.VITE_FORMSPREE_CAREERS;
```

### Content Security Policy
Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline' fonts.googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com;" 
/>
```

---

## 🎯 Production Configuration

### Update Form Endpoints
1. Create `.env.production`
2. Add Formspree IDs:
   ```
   VITE_FORMSPREE_CAREERS=https://formspree.io/f/YOUR_ID
   VITE_FORMSPREE_NEWSLETTER=https://formspree.io/f/YOUR_ID
   ```
3. Deploy environment variables to hosting platform

### Add Analytics
Include Google Analytics in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Setup Monitoring
- Vercel Analytics: Built-in
- Netlify Analytics: Dashboard → Analytics
- Google Search Console: Add domain and verify
- Sentry: Add for error tracking (optional)

---

## 📊 Post-Deployment

### Verify Deployment
1. Visit your live domain
2. Test all interactive elements
3. Check mobile responsiveness
4. Verify form submissions work
5. Test newsletter signup
6. Check all links

### Monitor Performance
- Vercel Analytics
- Netlify Analytics
- Google PageSpeed Insights
- GTmetrix

### SEO Optimization
1. Submit sitemap to Google Search Console
2. Verify domain ownership
3. Submit to Bing Webmaster Tools
4. Add local business schema (optional)

### Performance Tips
- [ ] Compress images
- [ ] Enable gzip compression
- [ ] Set cache headers
- [ ] Minify CSS/JS (optional)
- [ ] Use CDN for assets
- [ ] Monitor Core Web Vitals

---

## 🚨 Troubleshooting

### Forms Not Working After Deploy
**Solution:**
- Verify Formspree endpoints are updated
- Check environment variables are set
- Ensure HTTPS is enabled
- Check browser console for errors

### Website Looks Broken
**Solution:**
- Clear browser cache
- Verify all files uploaded
- Check file paths are correct
- Inspect assets folder exists
- Verify CSS/JS files are accessible

### Slow Performance
**Solution:**
- Optimize images
- Enable compression
- Use CDN
- Reduce JavaScript
- Implement caching

### SSL Certificate Issues
**Solution:**
- Vercel/Netlify: Wait 24 hours
- Traditional hosting: Use Let's Encrypt
- AWS: Use ACM certificate

---

## 📈 Performance Metrics

### Target Metrics:
- **Page Load**: < 3 seconds
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90

### Monitor With:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI

---

## 🔄 Continuous Deployment

### GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Vercel
        run: |
          npm install -g vercel
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

### Manual Deployment Script
Create `deploy.sh`:
```bash
#!/bin/bash
echo "Building..."
npm run build

echo "Deploying..."
vercel --prod

echo "Deployment complete!"
```

---

## 📞 Support

### Deployment Issues:
- **Vercel Support**: vercel.com/support
- **Netlify Support**: netlify.com/support
- **GitHub Support**: github.com/support
- **AWS Support**: aws.amazon.com/support

### Form Issues:
- **Formspree Docs**: formspree.io/docs
- **Formspree Support**: support@formspree.io

---

## 🎉 Success Checklist

After deployment:
- [ ] Domain working and redirecting
- [ ] HTTPS/SSL enabled
- [ ] All pages loading correctly
- [ ] Forms submitting successfully
- [ ] Images displaying properly
- [ ] Mobile responsive working
- [ ] Analytics tracking
- [ ] Monitoring configured
- [ ] Backups enabled
- [ ] Team notified

---

**Last Updated**: February 2026  
**Made with ❤️ by EliTech CreaTives**
