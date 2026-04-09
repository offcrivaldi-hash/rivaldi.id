import Link from "next/link"
import { Code, Lightbulb, TrendingUp, Smartphone, Globe, Cpu } from "lucide-react"

const categories = [
  {
    name: "Programming",
    description: "Tutorial dan tips coding terbaru",
    icon: Code,
    count: 150,
    color: "from-blue-500 to-cyan-500",
    slug: "programming"
  },
  {
    name: "Bisnis Digital",
    description: "Strategi dan tips berbisnis online",
    icon: TrendingUp,
    count: 85,
    color: "from-green-500 to-emerald-500",
    slug: "bisnis-digital"
  },
  {
    name: "AI & Machine Learning",
    description: "Perkembangan kecerdasan buatan",
    icon: Cpu,
    count: 62,
    color: "from-purple-500 to-pink-500",
    slug: "ai-machine-learning"
  },
  {
    name: "Mobile Development",
    description: "Pengembangan aplikasi mobile",
    icon: Smartphone,
    count: 73,
    color: "from-orange-500 to-red-500",
    slug: "mobile-development"
  },
  {
    name: "Web Development",
    description: "Framework dan teknologi web",
    icon: Globe,
    count: 120,
    color: "from-indigo-500 to-blue-500",
    slug: "web-development"
  },
  {
    name: "Tips & Trik",
    description: "Produktivitas dan life hacks",
    icon: Lightbulb,
    count: 95,
    color: "from-yellow-500 to-amber-500",
    slug: "tips-trik"
  }
]

export function Categories() {
  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Jelajahi Kategori</h2>
        <p className="text-muted-foreground mt-2">Temukan topik yang Anda minati</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="group"
            >
              <div className="h-full bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 text-pretty">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-muted-foreground">
                    {category.count} artikel
                  </span>
                  <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Lihat →
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
