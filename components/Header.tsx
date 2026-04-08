"use client"

import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Rivaldi.id
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/tutorial" className="text-sm font-medium hover:text-primary transition-colors">
                Tutorial
              </Link>
              <Link href="/teknologi" className="text-sm font-medium hover:text-primary transition-colors">
                Teknologi
              </Link>
              <Link href="/tentang" className="text-sm font-medium hover:text-primary transition-colors">
                Tentang
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-accent transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-muted-foreground">Cari artikel...</span>
            </button>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/tutorial" className="text-sm font-medium hover:text-primary transition-colors">
                Tutorial
              </Link>
              <Link href="/teknologi" className="text-sm font-medium hover:text-primary transition-colors">
                Teknologi
              </Link>
              <Link href="/tentang" className="text-sm font-medium hover:text-primary transition-colors">
                Tentang
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
