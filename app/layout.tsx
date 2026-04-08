import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Rivaldi.id - Platform Konten Digital & Teknologi Indonesia',
  description: 'Portal informasi terkini seputar teknologi, bisnis digital, tips produktivitas, dan tutorial programming untuk Indonesia',
  keywords: 'teknologi, programming, bisnis digital, tutorial, tips produktivitas, indonesia',
  authors: [{ name: 'Rivaldi' }],
  openGraph: {
    title: 'Rivaldi.id - Platform Konten Digital & Teknologi',
    description: 'Portal informasi terkini seputar teknologi, bisnis digital, dan tutorial programming',
    type: 'website',
    locale: 'id_ID',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {/* Ad Network Scripts */}
        <Script
          src="https://pl29092979.profitablecpmratenetwork.com/6c/83/67/6c8367f7a4cadc0c2d6dd3ab8940f99f.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://pl29092980.profitablecpmratenetwork.com/e7/ec/49/e7ec491fbe3a61711f3e3a03b7de9800.js"
          strategy="afterInteractive"
        />
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
