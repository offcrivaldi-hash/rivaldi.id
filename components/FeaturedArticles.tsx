import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "Panduan Lengkap Belajar React untuk Pemula di 2024",
    excerpt: "Pelajari React dari dasar hingga mahir dengan panduan step-by-step yang mudah dipahami. Termasuk hooks, state management, dan best practices.",
    category: "Tutorial",
    author: "Rivaldi",
    readTime: "12 min",
    image: "https://placehold.co/800x500?text=React+tutorial+code+editor+with+colorful+syntax+highlighting+and+component+architecture+diagram",
    slug: "panduan-belajar-react-2024"
  },
  {
    id: 2,
    title: "10 Tool AI Terbaik untuk Meningkatkan Produktivitas Developer",
    excerpt: "Temukan tool AI yang dapat membantu Anda coding lebih cepat, debugging lebih mudah, dan mengotomasi tugas repetitif dalam development.",
    category: "Teknologi",
    author: "Rivaldi",
    readTime: "8 min",
    image: "https://placehold.co/800x500?text=AI+productivity+tools+dashboard+with+futuristic+interface+and+automation+icons",
    slug: "tool-ai-produktivitas-developer"
  },
  {
    id: 3,
    title: "Strategi Monetisasi Website: Dari Iklan Hingga Subscription",
    excerpt: "Panduan komprehensif tentang berbagai cara menghasilkan uang dari website Anda, termasuk tips optimasi dan studi kasus sukses.",
    category: "Bisnis",
    author: "Rivaldi",
    readTime: "15 min",
    image: "https://placehold.co/800x500?text=Website+monetization+strategy+infographic+with+revenue+charts+and+growth+graphs",
    slug: "strategi-monetisasi-website"
  }
]

export function FeaturedArticles() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Artikel Pilihan</h2>
          <p className="text-muted-foreground mt-2">Konten terbaik yang wajib Anda baca</p>
        </div>
        <Link 
          href="/blog" 
          className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all"
        >
          Lihat Semua
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredArticles.map((article) => (
          <Link 
            key={article.id}
            href={`/artikel/${article.slug}`}
            className="group"
          >
            <article className="h-full bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-balance">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
