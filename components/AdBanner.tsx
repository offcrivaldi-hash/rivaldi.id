"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface AdBannerProps {
  slot: string
  format?: "horizontal" | "rectangle" | "vertical"
  className?: string
}

export function AdBanner({ slot, format = "horizontal", className }: AdBannerProps) {
  useEffect(() => {
    try {
      // Initialize ad script
      if (typeof window !== 'undefined') {
        const script = document.createElement('script')
        script.innerHTML = `
          atOptions = {
            'key' : '2a91982b740d2880bd3d18948187864e',
            'format' : 'iframe',
            'height' : ${format === 'horizontal' ? 60 : format === 'rectangle' ? 250 : 600},
            'width' : ${format === 'horizontal' ? 468 : format === 'rectangle' ? 300 : 160},
            'params' : {}
          };
        `
        document.body.appendChild(script)
        
        const invokeScript = document.createElement('script')
        invokeScript.src = 'https://www.highperformanceformat.com/2a91982b740d2880bd3d18948187864e/invoke.js'
        invokeScript.async = true
        document.body.appendChild(invokeScript)
      }
    } catch (err) {
      console.error("Ad error:", err)
    }
  }, [format])

  const heights = {
    horizontal: "h-24 sm:h-32",
    rectangle: "h-64",
    vertical: "h-96"
  }

  return (
    <div className={cn("ad-container", heights[format], className)}>
      <div id={`ad-${slot}`} className="flex items-center justify-center w-full h-full">
        {/* Ad will be injected here by the script */}
      </div>
    </div>
  )
}
