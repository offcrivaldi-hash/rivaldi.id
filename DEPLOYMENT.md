# Panduan Deploy Website Rivaldi.id ke GitHub Pages

## Prasyarat
- Akun GitHub
- Git sudah terinstall di komputer
- Domain rivaldi.id sudah diarahkan ke GitHub Pages

## Langkah 1: Persiapan Repository GitHub

### 1.1 Buat Repository Baru
1. Buka https://github.com
2. Login ke akun Anda
3. Klik tombol **"New"** atau **"+"** di pojok kanan atas
4. Buat repository baru dengan nama: **rivaldi.id** (atau sesuai keinginan)
5. **JANGAN** centang "Add README" atau file apapun
6. Klik **"Create repository"**

### 1.2 Catat URL Repository
Setelah repository dibuat, Anda akan melihat URL seperti:
```
https://github.com/username/rivaldi.id.git
```
Salin URL ini, akan digunakan nanti.

---

## Langkah 2: Upload Code ke GitHub

### 2.1 Buka Terminal/Command Prompt
- **Windows**: Tekan `Win + R`, ketik `cmd`, Enter
- **Mac/Linux**: Buka Terminal

### 2.2 Masuk ke Folder Project
```bash
cd /path/ke/folder/project/rivaldi.id
```

### 2.3 Inisialisasi Git
```bash
git init
```

### 2.4 Tambahkan Semua File
```bash
git add .
```

### 2.5 Buat Commit Pertama
```bash
git commit -m "Initial commit - Website Rivaldi.id dengan ads"
```

### 2.6 Hubungkan ke GitHub Repository
Ganti `username` dengan username GitHub Anda:
```bash
git remote add origin https://github.com/username/rivaldi.id.git
```

### 2.7 Ubah Branch ke Main
```bash
git branch -M main
```

### 2.8 Push ke GitHub
```bash
git push -u origin main
```

**Catatan**: Jika diminta username dan password:
- Username: username GitHub Anda
- Password: Gunakan **Personal Access Token** (bukan password biasa)

#### Cara Membuat Personal Access Token:
1. Buka https://github.com/settings/tokens
2. Klik **"Generate new token"** → **"Generate new token (classic)"**
3. Beri nama: "Deploy Rivaldi.id"
4. Centang checkbox: **"repo"** (full control)
5. Klik **"Generate token"**
6. **SALIN TOKEN** dan simpan (tidak akan ditampilkan lagi!)
7. Gunakan token ini sebagai password saat push

---

## Langkah 3: Aktifkan GitHub Pages

### 3.1 Buka Repository Settings
1. Buka repository Anda di GitHub: `https://github.com/username/rivaldi.id`
2. Klik tab **"Settings"** (ikon gear)

### 3.2 Konfigurasi Pages
1. Scroll ke bawah dan klik menu **"Pages"** di sidebar kiri
2. Di bagian **"Source"**, pilih **"GitHub Actions"**
3. Klik **"Save"**

### 3.3 Setup Domain Custom (Opsional)
Jika Anda ingin menggunakan domain rivaldi.id:
1. Masih di halaman Pages
2. Di bagian **"Custom domain"**, masukkan: `rivaldi.id`
3. Klik **"Save"**
4. Tunggu DNS check selesai (bisa 5-10 menit)

**Catatan**: Pastikan DNS domain rivaldi.id sudah diarahkan ke:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## Langkah 4: Trigger Deployment Pertama

### 4.1 Otomatis Deploy
Setelah push, GitHub Actions akan otomatis menjalankan deployment:
1. Buka tab **"Actions"** di repository
2. Anda akan melihat workflow **"Deploy to GitHub Pages"** sedang berjalan
3. Tunggu hingga selesai (status berubah menjadi hijau/checkmark)

### 4.2 Cek Website
Setelah deployment selesai:
- Jika tanpa custom domain: `https://username.github.io/rivaldi.id/`
- Jika dengan custom domain: `https://rivaldi.id`

---

## Langkah 5: Update Website (Untuk Kedepannya)

Setiap kali ingin update website:

### 5.1 Edit File Sesuai Kebutuhan
Edit file-file yang ingin diubah

### 5.2 Commit dan Push
```bash
# Tambahkan perubahan
git add .

# Buat commit dengan pesan yang jelas
git commit -m "Update konten artikel dan iklan"

# Push ke GitHub
git push origin main
```

### 5.3 Otomatis Deploy
GitHub Actions akan otomatis build dan deploy website baru Anda!

---

## Troubleshooting

### Problem: "Permission denied (publickey)"
**Solusi**: Gunakan HTTPS URL bukan SSH, atau setup SSH key

### Problem: Website tidak muncul setelah deploy
**Solusi**: 
1. Cek tab Actions, pastikan workflow berhasil
2. Clear browser cache (Ctrl + F5)
3. Tunggu 5-10 menit untuk DNS propagation

### Problem: Iklan tidak muncul
**Solusi**:
1. Pastikan script iklan sudah benar di `app/layout.tsx`
2. Cek browser console untuk error
3. Iklan mungkin di-block oleh AdBlocker

### Problem: Build gagal di GitHub Actions
**Solusi**:
1. Cek error log di tab Actions
2. Pastikan semua dependencies terinstall
3. Test build lokal: `npm run build`

---

## Struktur File Penting

```
rivaldi.id/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions config
├── app/
│   ├── layout.tsx             # Layout dengan script iklan
│   ├── page.tsx               # Homepage
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AdBanner.tsx           # Komponen iklan
│   └── ...
├── public/
│   └── CNAME                  # Domain custom
├── package.json
└── next.config.js
```

---

## Tips Tambahan

### 1. Test Lokal Sebelum Push
```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka browser: http://localhost:3000
```

### 2. Build Production Lokal
```bash
npm run build
```
Jika berhasil di lokal, akan berhasil di GitHub Pages.

### 3. Monitoring Traffic
Gunakan Google Analytics atau Vercel Analytics untuk monitoring traffic website.

### 4. Backup Kode
Selalu backup kode sebelum melakukan perubahan besar:
```bash
git branch backup-before-major-changes
```

---

## Kontak & Support

Jika ada pertanyaan atau masalah:
1. Cek GitHub Actions log untuk error detail
2. Cek browser console (F12) untuk error JavaScript
3. Pastikan semua file sudah ter-commit dan ter-push

**Selamat! Website Rivaldi.id Anda sekarang sudah live!** 🚀
