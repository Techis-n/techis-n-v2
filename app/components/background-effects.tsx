"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "../context/ThemeContext";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const particleCount = 50; // Reduced particle count

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2.5,
        opacity: Math.random() * 0.6 + 0.3,
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const computedStyle = getComputedStyle(document.documentElement)
      const particleColorRgb = computedStyle.getPropertyValue("--particleColor").trim() || "136, 50, 205"
      const lineColorRgb = computedStyle.getPropertyValue("--lineColor").trim() || "93, 89, 175"

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.fillStyle = `rgba(${particleColorRgb}, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          const maxDistance = 140;
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(${lineColorRgb}, ${0.6 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 1.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10 w-full h-full max-w-full max-h-full overflow-hidden"
  style={{display:'block'}} />
}
