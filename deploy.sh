#!/bin/bash

# Script Deploy Cepat untuk Rivaldi.id
# Jalankan dengan: bash deploy.sh

echo "========================================="
echo "🚀 Deploy Script untuk Rivaldi.id"
echo "========================================="
echo ""

# Warna untuk output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Fungsi untuk print dengan warna
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Cek apakah git sudah terinstall
if ! command -v git &> /dev/null; then
    print_error "Git belum terinstall. Silakan install git terlebih dahulu."
    exit 1
fi

print_success "Git terdeteksi"

# Cek apakah sudah ada remote origin
if git remote | grep -q "origin"; then
    print_warning "Remote origin sudah ada"
    read -p "Apakah Anda ingin mengganti remote URL? (y/n): " change_remote
    if [ "$change_remote" = "y" ]; then
        read -p "Masukkan URL repository GitHub (contoh: https://github.com/username/rivaldi.id.git): " repo_url
        git remote set-url origin "$repo_url"
        print_success "Remote URL berhasil diubah"
    fi
else
    read -p "Masukkan URL repository GitHub (contoh: https://github.com/username/rivaldi.id.git): " repo_url
    git remote add origin "$repo_url"
    print_success "Remote origin berhasil ditambahkan"
fi

echo ""
echo "Memulai proses deploy..."
echo ""

# Add semua file
print_warning "Menambahkan semua file..."
git add .

if [ $? -eq 0 ]; then
    print_success "File berhasil ditambahkan"
else
    print_error "Gagal menambahkan file"
    exit 1
fi

# Commit
read -p "Masukkan pesan commit (atau tekan Enter untuk pesan default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update website $(date +'%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$commit_message"

if [ $? -eq 0 ]; then
    print_success "Commit berhasil dibuat"
else
    print_warning "Tidak ada perubahan untuk di-commit atau commit gagal"
fi

# Push ke GitHub
print_warning "Melakukan push ke GitHub..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    print_success "Push berhasil!"
    echo ""
    echo "========================================="
    echo "✨ Deploy Selesai!"
    echo "========================================="
    echo ""
    echo "Langkah selanjutnya:"
    echo "1. Buka repository Anda di GitHub"
    echo "2. Pergi ke Settings → Pages"
    echo "3. Pilih Source: GitHub Actions"
    echo "4. Tunggu beberapa menit untuk deployment"
    echo "5. Website akan live di GitHub Pages!"
    echo ""
else
    print_error "Push gagal!"
    echo ""
    echo "Kemungkinan penyebab:"
    echo "1. Belum login ke GitHub"
    echo "2. URL repository salah"
    echo "3. Tidak punya akses ke repository"
    echo ""
    echo "Solusi:"
    echo "- Gunakan Personal Access Token sebagai password"
    echo "- Cek URL repository Anda"
    echo "- Pastikan Anda punya akses write ke repository"
    exit 1
fi
