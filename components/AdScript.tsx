"use client"

import { useEffect } from "react"

interface AdScriptProps {
  adKey: string
  format?: "banner" | "rectangle" | "skyscraper"
}

export function AdScript({ adKey, format = "banner" }: AdScriptProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Set dimensions based on format
    const dimensions = {
      banner: { height: 60, width: 468 },
      rectangle: { height: 250, width: 300 },
      skyscraper: { height: 600, width: 160 }
    }

    const { height, width } = dimensions[format]

    // Create and inject ad configuration
    const configScript = document.createElement('script')
    configScript.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `
    document.head.appendChild(configScript)

    // Create and inject ad invoke script
    const invokeScript = document.createElement('script')
    invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`
    invokeScript.async = true
    document.head.appendChild(invokeScript)

    // Cleanup
    return () => {
      document.head.removeChild(configScript)
      document.head.removeChild(invokeScript)
    }
  }, [adKey, format])

  return null
}
