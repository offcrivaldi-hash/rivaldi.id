import { Hero } from "@/components/Hero"
import { FeaturedArticles } from "@/components/FeaturedArticles"
import { Categories } from "@/components/Categories"
import { AdBanner } from "@/components/AdBanner"
import { Newsletter } from "@/components/Newsletter"
import { LatestPosts } from "@/components/LatestPosts"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Ad Banner - Top */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner 
          slot="top-banner" 
          format="horizontal"
          className="max-w-5xl mx-auto"
        />
      </div>

      <FeaturedArticles />
      
      {/* Ad Banner - Middle */}
      <div className="container mx-auto px-4 py-8">
        <AdBanner 
          slot="middle-banner" 
          format="rectangle"
          className="max-w-3xl mx-auto"
        />
      </div>

      <Categories />
      
      <LatestPosts />
      
      <Newsletter />
    </div>
  )
}
