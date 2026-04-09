@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cls

echo =========================================
echo   Deploy Script untuk Rivaldi.id
echo =========================================
echo.
echo   Tekan CTRL+C untuk membatalkan kapan saja
echo.
timeout /t 2 /nobreak >nul

REM ─────────────────────────────────────────
REM [CEK] Git terinstall
REM ─────────────────────────────────────────
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [GAGAL] Git belum terinstall.
    echo         Download dari: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo [OK] Git terdeteksi
echo.

REM ─────────────────────────────────────────
REM [CEK] Apakah folder ini adalah git repo
REM ─────────────────────────────────────────
git rev-parse --is-inside-work-tree >nul 2>&1
if !ERRORLEVEL! NEQ 0 (
    echo [INFO] Folder ini belum menjadi git repository.
    set /p init_repo="Inisialisasi git repo di sini? (y/n): "
    if /i "!init_repo!" NEQ "y" (
        echo Dibatalkan.
        pause
        exit /b 1
    )
    git init
    if !ERRORLEVEL! NEQ 0 (
        echo [GAGAL] Tidak bisa menginisialisasi git repo.
        pause
        exit /b 1
    )
    echo [OK] Git repo berhasil diinisialisasi.
    echo.
) else (
    echo [OK] Git repository terdeteksi.
    echo.
)

REM ─────────────────────────────────────────
REM [CEK] Git user config (nama & email)
REM ─────────────────────────────────────────
set "git_user="
set "git_email="
for /f "delims=" %%i in ('git config user.name 2^>nul') do set "git_user=%%i"
for /f "delims=" %%i in ('git config user.email 2^>nul') do set "git_email=%%i"

if "!git_user!"=="" (
    echo [PERINGATAN] Git user.name belum dikonfigurasi.
    set /p git_user="Masukkan nama Anda: "
    git config user.name "!git_user!"
)
if "!git_email!"=="" (
    echo [PERINGATAN] Git user.email belum dikonfigurasi.
    set /p git_email="Masukkan email GitHub Anda: "
    git config user.email "!git_email!"
)
echo [OK] Git user: !git_user! ^(^!git_email!^)
echo.

REM ─────────────────────────────────────────
REM [CEK] Remote origin
REM ─────────────────────────────────────────
set "current_url="
for /f "delims=" %%i in ('git remote get-url origin 2^>nul') do set "current_url=%%i"

if not "!current_url!"=="" (
    echo [INFO] Remote origin sudah ada:
    echo        !current_url!
    echo.
    set /p change_remote="Ganti remote URL? (y/n): "
    if /i "!change_remote!"=="y" (
        set /p repo_url="Masukkan URL repository GitHub baru: "
        if "!repo_url!"=="" (
            echo [GAGAL] URL tidak boleh kosong.
            pause
            exit /b 1
        )
        git remote set-url origin "!repo_url!"
        if !ERRORLEVEL! NEQ 0 (
            echo [GAGAL] Tidak bisa mengubah remote URL.
            pause
            exit /b 1
        )
        echo [OK] Remote URL berhasil diubah ke: !repo_url!
    )
) else (
    echo [INFO] Remote origin belum dikonfigurasi.
    set /p repo_url="Masukkan URL repository GitHub: "
    echo        Contoh: https://github.com/username/rivaldi.id.git
    if "!repo_url!"=="" (
        echo [GAGAL] URL tidak boleh kosong.
        pause
        exit /b 1
    )
    git remote add origin "!repo_url!"
    if !ERRORLEVEL! NEQ 0 (
        echo [GAGAL] Tidak bisa menambahkan remote origin.
        pause
        exit /b 1
    )
    echo [OK] Remote origin berhasil ditambahkan.
)
echo.

REM ─────────────────────────────────────────
REM Tampilkan status sebelum deploy
REM ─────────────────────────────────────────
echo ─────────────────────────────────────────
echo   Status Repository Saat Ini:
echo ─────────────────────────────────────────
git status --short
echo.

REM ─────────────────────────────────────────
REM [1/3] Git Add
REM ─────────────────────────────────────────
echo [1/3] Menambahkan semua file...
git add .
if !ERRORLEVEL! NEQ 0 (
    echo [GAGAL] Tidak bisa menambahkan file.
    pause
    exit /b 1
)
echo [OK] Semua file berhasil ditambahkan.
echo.

REM ─────────────────────────────────────────
REM [2/3] Git Commit
REM ─────────────────────────────────────────

REM Buat timestamp yang aman (tidak bergantung locale)
set "mydate=%date%"
set "mytime=%time%"
REM Ambil jam:menit saja, hilangkan karakter aneh
set "mytime=!mytime:~0,5!"
set "mytime=!mytime: =0!"

set /p commit_message="[2/3] Pesan commit (Enter = pakai default): "
if "!commit_message!"=="" (
    set "commit_message=Update website - !mydate! !mytime!"
)

REM Cek apakah ada yang perlu di-commit
git diff --cached --quiet >nul 2>&1
if !ERRORLEVEL! EQU 0 (
    echo [INFO] Tidak ada perubahan baru untuk di-commit. Melanjutkan ke push...
) else (
    git commit -m "!commit_message!"
    if !ERRORLEVEL! NEQ 0 (
        echo [GAGAL] Commit gagal. Periksa konfigurasi git Anda.
        pause
        exit /b 1
    )
    echo [OK] Commit berhasil: "!commit_message!"
)
echo.

REM ─────────────────────────────────────────
REM [3/3] Git Push
REM ─────────────────────────────────────────
echo [3/3] Push ke GitHub...
echo.

REM Pastikan branch bernama main
git branch -M main
if !ERRORLEVEL! NEQ 0 (
    echo [PERINGATAN] Tidak bisa rename branch ke main. Melanjutkan...
)

:PUSH_ATTEMPT
git push -u origin main
set "push_result=!ERRORLEVEL!"

if !push_result! EQU 0 (
    echo.
    echo =========================================
    echo   DEPLOY BERHASIL!
    echo =========================================
    echo.
    echo   Langkah selanjutnya:
    echo   1. Buka repository Anda di GitHub
    echo   2. Pergi ke Settings ^> Pages
    echo   3. Pilih Source: GitHub Actions
    echo   4. Tunggu beberapa menit
    echo   5. Website live di GitHub Pages!
    echo.
    for /f "delims=" %%i in ('git remote get-url origin 2^>nul') do set "final_url=%%i"
    echo   Repository: !final_url!
    echo =========================================
) else (
    echo.
    echo =========================================
    echo   PUSH GAGAL!
    echo =========================================
    echo.
    echo   Kemungkinan penyebab:
    echo   1. Belum login ke GitHub
    echo   2. URL repository salah
    echo   3. Tidak punya akses write ke repository
    echo   4. Koneksi internet bermasalah
    echo.
    echo   SOLUSI - Personal Access Token:
    echo   1. Buka https://github.com/settings/tokens
    echo   2. Klik "Generate new token (classic)"
    echo   3. Centang scope: repo
    echo   4. Copy token
    echo   5. Saat diminta password, paste token tersebut
    echo.
    echo ─────────────────────────────────────────
    set /p retry_push="Coba push lagi? (y/n): "
    if /i "!retry_push!"=="y" goto PUSH_ATTEMPT
    echo.
    echo   Push dibatalkan. Anda bisa jalankan script ini lagi nanti.
    echo =========================================
)

echo.
echo Tekan tombol apa saja untuk menutup...
pause >nul
endlocal