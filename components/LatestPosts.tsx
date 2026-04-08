import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const latestPosts = [
  {
    id: 1,
    title: "Mengenal TypeScript: Mengapa Developer Wajib Belajar di 2024",
    excerpt: "TypeScript semakin populer di kalangan developer. Pelajari keunggulan dan cara memulainya.",
    date: "15 Jan 2024",
    category: "Programming",
    slug: "mengenal-typescript-2024"
  },
  {
    id: 2,
    title: "Cara Optimasi SEO untuk Website Next.js",
    excerpt: "Panduan lengkap mengoptimalkan SEO di aplikasi Next.js untuk ranking lebih baik.",
    date: "14 Jan 2024",
    category: "Web Development",
    slug: "optimasi-seo-nextjs"
  },
  {
    id: 3,
    title: "5 Framework CSS Terbaik untuk Projek Modern",
    excerpt: "Perbandingan framework CSS populer: Tailwind, Bootstrap, dan alternatif lainnya.",
    date: "13 Jan 2024",
    category: "Web Development",
    slug: "framework-css-terbaik"
  },
  {
    id: 4,
    title: "Membangun Passive Income dari Blog di 2024",
    excerpt: "Strategi terbukti untuk menghasilkan uang dari blog melalui berbagai metode.",
    date: "12 Jan 2024",
    category: "Bisnis Digital",
    slug: "passive-income-blog-2024"
  },
  {
    id: 5,
    title: "Docker untuk Pemula: Setup Development Environment",
    excerpt: "Belajar Docker dari nol untuk mempermudah development workflow Anda.",
    date: "11 Jan 2024",
    category: "DevOps",
    slug: "docker-untuk-pemula"
  },
  {
    id: 6,
    title: "Tren AI di 2024: Yang Perlu Developer Ketahui",
    excerpt: "Perkembangan AI terbaru dan dampaknya terhadap industri software development.",
    date: "10 Jan 2024",
    category: "AI & ML",
    slug: "tren-ai-2024"
  }
]

export function LatestPosts() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Artikel Terbaru</h2>
          <p className="text-muted-foreground mt-2">Update konten setiap hari</p>
        </div>
        <Link 
          href="/blog" 
          className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all"
        >
          Lihat Semua
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/artikel/${post.slug}`}
            className="group"
          >
            <article className="flex gap-4 p-4 bg-card border rounded-lg hover:shadow-md transition-all duration-300">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{post.date}</span>
                  </div>
                </div>
                
                <h3 className="font-bold leading-tight group-hover:text-primary transition-colors text-balance">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg font-medium hover:bg-accent transition-colors"
        >
          Muat Lebih Banyak
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
