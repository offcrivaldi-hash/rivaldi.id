# Story Website Auto-Deployment Setup

## ✅ GitHub Actions Configuration

File `.github/workflows/deploy.yml` sudah disiapkan untuk automatic deployment.

## 📝 Langkah Setup di GitHub:

### 1. **Push Project ke GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Story website with admin dashboard"
git branch -M main
git remote add origin https://github.com/offcrivaldi-hash/rivaldi.id.git
git push -u origin main
```

### 2. **Enable GitHub Pages** 
Di repository GitHub Anda:
- Buka Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Directory: / (root)
- Klik Save

### 3. **GitHub Actions akan otomatis trigger saat push**
- Setiap push ke branch `main` akan trigger workflow
- HTML files otomatis di-deploy ke GitHub Pages
- Website akan live di `https://rivaldi.id` (jika domain sudah dikonfigurasi)

## 🚀 Backend Deployment (Optional)

Jika ingin deploy backend server juga:

### Option A: Deploy ke Heroku (Free tier hangus tapi masih bisa)
1. Buat akun di heroku.com
2. Di GitHub Secrets, tambahkan:
   - `HEROKU_API_KEY` - API key dari Heroku
   - `HEROKU_APP_NAME` - Nama app di Heroku

### Option B: Deploy ke Railway/Render (Recommended)
1. Buat akun di railway.app atau render.com
2. Connect GitHub repository
3. Mereka akan auto-deploy saat ada push

## 📊 Frontend + Backend Architecture

```
Production Setup:
├── Frontend (Static HTML/CSS/JS)
│   ├── Hosted di: GitHub Pages (rivaldi.id)
│   ├── Route: http-server pada port 3000
│   └── Access: dari browser publik
│
├── Admin Dashboard
│   ├── File: admin.html
│   ├── Hosted: Sama dengan frontend
│   └── API calls ke: Backend Server
│
└── Backend (Node.js + SQLite)
    ├── Hosted di: Heroku/Railway/Render
    ├── Port: 5000
    ├── Database: SQLite (stories.db)
    └── API: REST endpoints
```

## 🔧 Next Steps

1. **Install Git** (jika belum):
   - Download dari https://git-scm.com/download/win
   - Install dengan default settings
   - Restart terminal

2. **Push ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/offcrivaldi-hash/rivaldi.id.git
   git push -u origin main
   ```

3. **Deploy Backend** (pilih salah satu):
   - Heroku: `heroku login` → `heroku create` → `git push heroku main`
   - Railway: Connect GitHub repo di dashboard
   - Render: Connect GitHub repo di dashboard

4. **Update admin.html** 
   Ganti `http://localhost:5000` dengan URL deploy backend Anda:
   ```javascript
   // Ubah dari:
   const API_URL = 'http://localhost:5000/api';
   
   // Menjadi:
   const API_URL = 'https://your-backend-url.herokuapp.com/api';
   ```

## 📞 Support

Butuh bantuan setup lebih lanjut? Tanyakan kepada saya!
