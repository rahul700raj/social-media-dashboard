# 🚀 Deployment Guide

This guide covers deploying the Social Media Dashboard to various platforms.

**Developer:** Rahul Mishra  
**Contact:** rm2778643@gmail.com | +91 9693243217

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Easiest deployment option with automatic CI/CD**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### 2. Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or use Netlify's GitHub integration:
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### 3. GitHub Pages

```bash
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/social-media-dashboard/',
  // ... rest of config
});
```

### 4. AWS S3 + CloudFront

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 5. Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t social-dashboard .
docker run -p 80:80 social-dashboard
```

## 🔧 Environment Variables

Create `.env.production`:
```
VITE_API_URL=https://your-api.com
VITE_APP_NAME=Social Media Dashboard
```

## ⚙️ Configuration

### Vite Config for Production

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
        },
      },
    },
  },
});
```

## 🔒 Security Checklist

- [ ] Remove console.logs
- [ ] Set up HTTPS
- [ ] Configure CORS properly
- [ ] Add security headers
- [ ] Enable rate limiting
- [ ] Use environment variables for secrets
- [ ] Set up monitoring and logging

## 📊 Performance Optimization

- Enable gzip/brotli compression
- Set up CDN for static assets
- Configure caching headers
- Enable HTTP/2
- Optimize images
- Use lazy loading

## 🔍 Monitoring

Recommended tools:
- **Vercel Analytics** - Built-in analytics
- **Google Analytics** - User tracking
- **Sentry** - Error tracking
- **LogRocket** - Session replay

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh)
Add `_redirects` file for Netlify:
```
/*    /index.html   200
```

Or `vercel.json` for Vercel:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## 📞 Support

For deployment issues or questions:
- Email: rm2778643@gmail.com
- Phone: +91 9693243217

## 🎯 Post-Deployment

1. Test all features in production
2. Check mobile responsiveness
3. Verify API connections
4. Test authentication flow
5. Monitor error logs
6. Set up analytics
7. Configure backup strategy

---

**Deployed by:** Rahul Mishra  
**Contact:** rm2778643@gmail.com | +91 9693243217
