# 🚀 DEPLOYMENT GUIDE - rivaldi.id

Complete step-by-step guide untuk deploy website cerita Anda.

---

## 📋 **CHECKLIST DEPLOYMENT**

- [ ] Step 1: Enable GitHub Pages
- [ ] Step 2: Configure DNS (Cloudflare)
- [ ] Step 3: Deploy Backend (Railway/Heroku)
- [ ] Step 4: Update Production URLs
- [ ] Step 5: Test Everything
- [ ] Step 6: Monitor & Maintain

---

## 🎯 **ARCHITECTURE**

```
┌─────────────────────────────────────────────────────┐
│                    rivaldi.id                       │
│               (Cloudflare DNS Router)               │
├──────────────────┬──────────────────────────────┤
│                  │                              │
│        Frontend            │         Backend API      │
│   (GitHub Pages)          │      (Railway/Heroku)      │
│ - index.html          │  - Node.js Server     │
│ - admin.html          │  - SQLite Database    │
│ - stories             │  - REST API Endpoints │
│ - CSS/JS              │                        │
└──────────────────┴──────────────────────────────┘
```

---

# 🔧 **STEP 1: Enable GitHub Pages**

### GitHub Pages untuk Frontend (Static HTML)

1. **Buka Repository**
   ```
   https://github.com/offcrivaldi-hash/rivaldi.id
   ```

2. **Click Settings** (tab atas kanan)

3. **Click Pages** (sidebar kiri)

4. **Build and deployment**
   - Source: **GitHub Actions** (pilih ini)
   - Status: Should show "✓ Your site is live at..."

5. **Custom domain**
   - Domain: rivaldi.id
   - Enforce HTTPS: ✓ Check this

6. **Save**

### Expected Result
```
✓ Pages deployed successfully
✓ Site live at: https://offcrivaldi-hash.github.io/rivaldi.id
✓ Branch gh-pages created automatically
✓ CNAME file configured
```

---

# 🌐 **STEP 2: Configure DNS (Cloudflare)**

### Update at Registrar/Cloudflare Dashboard

**OPTION A: Using CNAME (Recommended)**
```
Type:    CNAME
Name:    @ (root domain)
Value:   offcrivaldi-hash.github.io
TTL:     Auto
Proxy:   DNS Only (orange cloud)
Status:  Active
```

**OPTION B: Using A Records (Alternative)**
```
Type:  A     | Name: @ | Value: 185.199.108.153  | TTL: Auto
Type:  A     | Name: @ | Value: 185.199.109.153  | TTL: Auto
Type:  A     | Name: @ | Value: 185.199.110.153  | TTL: Auto
Type:  A     | Name: @ | Value: 185.199.111.153  | TTL: Auto
```

### DNS Propagation Check
```bash
# Check DNS status
nslookup rivaldi.id
# atau
dig rivaldi.id
```

⏱️ **Wait 15-30 minutes** untuk DNS propagate

✅ **Test**: https://rivaldi.id should show your website

---

# ⚙️ **STEP 3: Deploy Backend**

### Choose ONE of these options:

## **Option A: Railway.app (EASIEST - Recommended) ⭐**

1. **Visit Railway**
   - https://railway.app
   - Click "Login with GitHub"
   - Authorize Railway

2. **Create New Project**
   - Click "New Project"
   - Select "GitHub Repo"
   - Find "rivaldi.id" repository
   - Click "Deploy"

3. **Railway will automatically:**
   - ✓ Detect Node.js project
   - ✓ Read Procfile
   - ✓ Install dependencies
   - ✓ Start server on random port
   - ✓ Create public URL

4. **Get Your Backend URL**
   - Railway Dashboard → Deployments
   - Copy the URL (looks like: `your-project-name.up.railway.app`)
   - This is your `BACKEND_URL`

5. **Add Environment Variables** (Optional but recommended)
   ```
   Railway Dashboard → Variables
   
   NODE_ENV = production
   PORT = 5000
   ```

### ✅ Expected Result
```
Deployment successful
Railway URL: https://rivaldi-api.up.railway.app
API Health check: https://rivaldi-api.up.railway.app/api/health
Status: "ok"
```

---

## **Option B: Heroku**

### Prerequisites
```bash
# 1. Install Heroku CLI
# Windows: https://devcenter.heroku.com/articles/heroku-cli#download-and-install

# 2. Login
heroku login
```

### Deploy
```bash
# 1. Navigate to project
cd "c:\Users\Val\Desktop\RIVALDI PROJECT\PROJECT WEB RIVALDI.ID"

# 2. Create Heroku app
heroku create rivaldi-api

# 3. Deploy
git push heroku main

# 4. View logs
heroku logs --tail
```

### Get URL
```bash
heroku open
# or check: https://rivaldi-api.herokuapp.com
```

---

## **Option C: Render.com**

1. Visit https://render.com
2. Click "New +" → "Web Service"
3. Select "Deploy from GitHub"
4. Find "rivaldi.id" repository
5. Configure:
   - Name: rivaldi-api
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
6. Click "Create Web Service"

⏱️ Wait ~5 minutes for deployment

---

# 📝 **STEP 4: Update Production URLs**

### Update admin.html

File: `admin.html` (Line ~4-30)

```javascript
// Change from:
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api'
  : 'https://your-backend-url.com/api';

// To your actual backend URL (example Railway):
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api'
  : 'https://your-railway-app.up.railway.app/api';
```

### Update index.html (if needed)

If backend URL hardcoded somewhere:
```html
<!-- Before deployment, make sure to replace -->
<!-- any hardcoded localhost references -->
```

### Push Changes
```bash
git add .
git commit -m "Update API URLs for production"
git push origin main
```

This triggers GitHub Actions deployment!

---

# 🧪 **STEP 5: Test Everything**

### Test Frontend
```
https://rivaldi.id
Expected: See your story website
```

### Test Backend Health
```
https://your-backend-url/api/health
Expected: {"status":"ok","environment":"production","timestamp":"..."}
```

### Test Admin Dashboard
```
https://rivaldi.id/admin.html
1. Click "Daftar"
2. Create account (username: testuser)
3. Login
4. Create Series
5. Add Chapter
6. Should work without errors
```

### Check Browser Console
```
Press F12 → Console tab
Should have NO red errors
Only valid API responses
```

---

# 📊 **STEP 6: Monitor & Maintain**

### Daily Checks
- [ ] Website loads: https://rivaldi.id
- [ ] Admin works: https://rivaldi.id/admin.html
- [ ] API responds: https://backend-url/api/health

### Weekly Tasks
- [ ] Check backend logs (Railway/Heroku dashboard)
- [ ] Monitor database size (stories.db)
- [ ] Review error logs

### Monthly Tasks
- [ ] Database backup (download stories.db)
- [ ] Check traffic stats
- [ ] Update AdSense codes if needed

### Monitoring URLs

**Railway Dashboard**
https://railway.app/dashboard

**Heroku Dashboard**
https://dashboard.heroku.com/apps

**GitHub Actions Logs**
https://github.com/offcrivaldi-hash/rivaldi.id/actions

---

# 🔐 **SECURITY CHECKLIST**

- [ ] Update AdSense IDs in index.html
- [ ] Set strong database password (implement authentication)
- [ ] Enable HTTPS (automatic via GitHub Pages + Cloudflare)
- [ ] Set up rate limiting on API
- [ ] Backup database regularly
- [ ] Monitor for suspicious activity

### Security Improvements (Future)
```javascript
// Current: Plain text password
// Future: Use bcrypt hashing
// Future: Implement JWT tokens
// Future: Add email verification
// Future: Add rate limiting
```

---

# 🐛 **TROUBLESHOOTING**

### Website shows old version
```
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Wait 5 minutes (CDN cache)
4. Check: https://github.com/offcrivaldi-hash/rivaldi.id/actions
   - Should show successful deployment
```

### Admin dashboard shows blank
```
1. Check browser console (F12)
2. Check if API URL is correct
3. Verify backend is running
4. Test: https://backend-url/api/health
```

### API connection failed
```
1. Verify backend is deployed (check Railway/Heroku dashboard)
2. Check logs for errors
3. Verify API_URL is correct
4. Check CORS settings (should allow your domain)
```

### Database errors
```
1. Check server logs
2. Verify database file exists: stories.db
3. Restart server
4. Check disk space
```

---

# 📞 **QUICK REFERENCE**

| Component | Local | Production |
|-----------|-------|------------|
| Website | http://localhost:3000 | https://rivaldi.id |
| Admin | http://localhost:5000/admin.html | https://rivaldi.id/admin.html |
| API | http://localhost:5000/api | https://backend-url/api |
| Database | stories.db | stories.db (Railway) |
| Git Push | local → main | Triggers GitHub Actions |
| Deployment | npm start | Automatic (GitHub Pages + Railway) |

---

# 🎯 **NEXT STEPS AFTER DEPLOYMENT**

1. **Optimize AdSense**
   - Update ad codes
   - Test ad loading
   - Monitor RPM/earnings

2. **Content Strategy**
   - Create category pages
   - Add SEO meta tags
   - Enable responsive ads

3. **Growth**
   - Share on social media
   - Build backlinks
   - Optimize loading speed

4. **Analytics**
   - Setup Google Analytics
   - Monitor user behavior
   - Track earnings

---

**You're all set! 🎉**

Website is live and ready to earn with AdSense!

For more help: Check README.md or update this guide with your experiences.
