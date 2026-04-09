import Link from "next/link"
import { ArrowRight, TrendingUp, Zap, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Zap className="w-4 h-4" />
              Platform Konten Digital Terpercaya
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Temukan Informasi
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Teknologi </span>
              Terkini
            </h1>
            
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Portal terlengkap untuk artikel teknologi, tutorial programming, tips bisnis digital, dan insight industri IT yang akan membantu Anda berkembang di era digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Jelajahi Artikel
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/tutorial"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-input rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Lihat Tutorial
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                  <TrendingUp className="w-6 h-6" />
                  500+
                </div>
                <p className="text-sm text-muted-foreground mt-1">Artikel Berkualitas</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                  <Award className="w-6 h-6" />
                  50K+
                </div>
                <p className="text-sm text-muted-foreground mt-1">Pembaca Aktif</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                  <Zap className="w-6 h-6" />
                  100+
                </div>
                <p className="text-sm text-muted-foreground mt-1">Tutorial Lengkap</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 p-8">
              <img 
                src="https://placehold.co/600x600?text=Modern+workspace+with+laptop+coding+and+technology+gadgets+on+minimalist+desk" 
                alt="Modern workspace with laptop coding and technology gadgets on minimalist desk"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border shadow-lg rounded-lg p-4 max-w-xs">
              <p className="text-sm font-medium">Update Terbaru</p>
              <p className="text-xs text-muted-foreground mt-1">Panduan Lengkap Next.js 15 untuk Pemula</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
