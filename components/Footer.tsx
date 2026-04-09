import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Rivaldi.id
            </h3>
            <p className="text-sm text-muted-foreground">
              Platform konten digital terpercaya untuk informasi teknologi, bisnis, dan tutorial programming di Indonesia.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kategori/teknologi" className="text-muted-foreground hover:text-primary transition-colors">
                  Teknologi
                </Link>
              </li>
              <li>
                <Link href="/kategori/programming" className="text-muted-foreground hover:text-primary transition-colors">
                  Programming
                </Link>
              </li>
              <li>
                <Link href="/kategori/bisnis" className="text-muted-foreground hover:text-primary transition-colors">
                  Bisnis Digital
                </Link>
              </li>
              <li>
                <Link href="/kategori/tutorial" className="text-muted-foreground hover:text-primary transition-colors">
                  Tutorial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Halaman</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/iklan" className="text-muted-foreground hover:text-primary transition-colors">
                  Pasang Iklan
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="text-muted-foreground hover:text-primary transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@rivaldi.id</span>
              </li>
              <li className="text-muted-foreground">
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rivaldi.id. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
