# 📚 Website Cerita untuk AdSense + Dashboard Admin

Website cerita modern dengan dashboard admin untuk upload **ribuan chapter** dan monetisasi AdSense.

## ✨ Fitur

- 📝 **Admin Dashboard** - Upload cerita ribuan chapter dengan mudah
- 🌐 **Website Publik** - Tampil cerita dengan optimasi AdSense
- 🗄️ **Database SQLite** - Menyimpan semua cerita dan chapter
- 🚀 **Auto Deploy** - GitHub Actions push otomatis ke GitHub Pages
- 📱 **Responsive Design** - Mobile-friendly interface
- 🔒 **Login System** - Author dapat manage cerita mereka sendiri

## 🏗️ Arsitektur

```
Frontend (Static HTML/CSS/JS)
├── index.html      → Homepage
├── admin.html      → Admin Dashboard Login & Management
└── story*.html     → Cerita sample

Backend (Express.js)
├── server.js       → REST API Server (Port 5000)
├── stories.db      → SQLite Database
└── api routes      → CRUD operations

Deployment
├── Frontend → GitHub Pages (rivaldi.id)
└── Backend → Railway/Heroku/Render
```

## 🚀 Quickstart

### **Local Development**

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Server**
   ```bash
   npm start
   ```
   - Website: http://localhost:3000
   - Admin Dashboard: http://localhost:5000/admin.html
   - API: http://localhost:5000/api

3. **Register & Login**
   - Buka http://localhost:5000/admin.html
   - Klik "Daftar"
   - Isi username, email, password
   - Login dan mulai upload cerita

### **Upload Cerita**

1. Login ke admin dashboard
2. Buat Series (kumpulan cerita)
   - Judul, deskripsi, kategori
3. Add Chapter (cerita per chapter)
   - Nomor chapter, judul, konten
   - **Bisa ribuan chapter!**
4. Lihat di website publik: http://localhost:3000

## 📤 Deployment

### **Frontend (GitHub Pages)**

Otomatis deploy saat push ke `main` branch:
```bash
git add .
git commit -m "Update cerita"
git push origin main
```

✅ Website langsung live di rivaldi.id

### **Backend (Production)**

Pilih salah satu:

#### **Option A: Railway.app (Recommended)**
1. Buka https://railway.app
2. New Project → Import dari GitHub
3. Pilih repository rivaldi.id
4. Railway otomatis deploy saat push
5. Copy URL API → Update di admin.html

#### **Option B: Heroku**
```bash
heroku login
heroku create rivaldi-api
git push heroku main
```

#### **Option C: Render.com**
1. Buka https://render.com
2. New Web Service
3. Connect GitHub repository
4. Deploy configuration otomatis

## ⚙️ Konfigurasi

### **AdSense Integration**

Ganti placeholder di file:
- `index.html` (line 9)
- `admin.html` (jika ada)

Dari:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
```

Ke kode AdSense Anda yang asli.

### **API URL Update**

Di `admin.html`, update API URL untuk production:

```javascript
// Cari baris ini:
const API_URL = isDevelopment ? 'http://localhost:5000/api' : 'https://your-backend-url.herokuapp.com/api';

// Update 'your-backend-url' ke URL backend production Anda
```

## 📊 Database Schema

```sql
-- Authors Table
CREATE TABLE authors (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE,
  password TEXT,
  email TEXT
);

-- Series Table (Kumpulan Cerita)
CREATE TABLE series (
  id INTEGER PRIMARY KEY,
  author_id INTEGER,
  title TEXT,
  description TEXT,
  category TEXT,
  status TEXT (ongoing/completed)
);

-- Chapters Table (Per Chapter)
CREATE TABLE chapters (
  id INTEGER PRIMARY KEY,
  series_id INTEGER,
  chapter_number INTEGER,
  title TEXT,
  content TEXT,
  views INTEGER
);
```

## 🔐 Security Notes

⚠️ **Untuk Production:**
- Gunakan hashed password (bcrypt)
- Implement proper authentication JWT
- Setup HTTPS
- Validasi input server-side
- Rate limiting pada API

## 📝 File Structure

```
.
├── index.html          → Homepage
├── admin.html          → Admin Dashboard
├── story*.html         → Story pages
├── style.css           → Styling
├── script.js           → Frontend JS
├── server.js           → Express backend
├── package.json        → Dependencies
├── stories.db          → SQLite DB
├── public/             → Static assets
├── uploads/            → User uploads (jika ada)
└── .github/
    └── workflows/
        └── deploy.yml  → GitHub Actions
```

## 🛠️ API Endpoints

### **Auth**
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### **Series**
- `POST /api/series` - Create series
- `GET /api/series/:author_id` - Get author's series
- `GET /api/series-detail/:id` - Get series detail

### **Chapters**
- `POST /api/chapters` - Create chapter
- `GET /api/chapters/:series_id` - Get series chapters
- `GET /api/chapter/:id` - Get chapter detail
- `PUT /api/chapters/:id` - Update chapter
- `DELETE /api/chapters/:id` - Delete chapter

### **Public**
- `GET /api/public/all-series` - All series (public)
- `GET /api/public/series/:id/chapters` - Series chapters (public)

## 💡 Tips

- Gunakan chapter number berurutan untuk navigasi
- Minimal 500 kata per chapter untuk AdSense
- Update konten secara berkala untuk SEO
- Monitor views di admin dashboard

## 📧 Support

Ada pertanyaan? Update di GitHub Issues atau contact developer.

## 📄 License

MIT License - Bebas digunakan untuk personal & komersial

---

**Happy Writing! 📖✨**

Website ini dibuat sebagai template dasar. Untuk produksi, pertimbangkan menggunakan framework seperti Next.js untuk performa yang lebih baik.