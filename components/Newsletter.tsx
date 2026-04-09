"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <div className="inline-flex p-4 bg-white/20 rounded-full mb-6">
          <Mail className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Dapatkan Update Terbaru
        </h2>
        
        <p className="text-lg text-white/90 mb-8 text-pretty">
          Subscribe newsletter kami dan dapatkan artikel, tutorial, dan tips teknologi terbaru langsung ke inbox Anda setiap minggu.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              required
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          {isSubmitted && (
            <p className="mt-3 text-sm text-white/90">
              Terima kasih! Anda telah berhasil subscribe.
            </p>
          )}
        </form>
        
        <p className="text-sm text-white/70 mt-4">
          Gratis. Berhenti berlangganan kapan saja.
        </p>
      </div>
    </section>
  )
}
