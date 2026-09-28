import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export default function TourKitProvider() {
  const location = useLocation()
  const sdkReady = useRef(false)
  const currentPath = useRef(null)
  // Load SDK once
  useEffect(() => {
    const SCRIPT_ID = "tourkit-sdk"
    const SCRIPT_SRC = "https://cdn.jsdelivr.net/gh/webdev-raj/Tourkit-sdk@v5.0.0-sdk/sdk/dist/tourkit.min.js"

    // Already loaded
    if (document.getElementById(SCRIPT_ID)) {
      sdkReady.current = true
      return
    }

    const script = document.createElement("script")
    script.id = SCRIPT_ID
    script.src = SCRIPT_SRC
    script.setAttribute(
      "data-key",
      import.meta.env.VITE_TOURKIT_KEY ||
      "ed420a01-fee6-44e1-81ab-3f2418e3da2f"
    )
    script.setAttribute(
      "data-api",
      "https://tourkit-phi.vercel.app"
    )
    script.async = true

    script.onload = () => {
      console.log('[TourKit] SDK loaded')
      sdkReady.current = true
    }

    document.body.appendChild(script)

    // Cleanup: do NOT remove script on unmount
    // Removing it causes re-initialization issues
    return () => { }
  }, [])

  useEffect(() => {
    if (currentPath.current === location.pathname) return
    currentPath.current = location.pathname

    // Don't trigger tour on redirect paths
    // Only trigger on real app pages
    const skipPaths = ['/']
    if (skipPaths.includes(location.pathname)) return

    let attempts = 0
    const maxAttempts = 20

    const interval = setInterval(() => {
      attempts++

      if (window.TourKit) {
        clearInterval(interval)
        setTimeout(() => {
          console.log('[TourKit] startFor:', location.pathname)
          window.TourKit.startFor(location.pathname)
        }, 300)
        return
      }

      if (attempts >= maxAttempts) {
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [location.pathname])

  return null
}
