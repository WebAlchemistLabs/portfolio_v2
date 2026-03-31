'use client'

import { useEffect, useRef } from 'react'

const TRAIL = 14

export default function CursorDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    window.addEventListener('resize', () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    })

    const mouse = { x: W / 2, y: H / 2 }
    const trail: { x: number; y: number }[] = Array.from({ length: TRAIL }, () => ({ ...mouse }))

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    const COLORS = ['rgba(201,169,110,', 'rgba(180,140,255,', 'rgba(100,160,255,']
    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      trail.unshift({ x: mouse.x, y: mouse.y })
      if (trail.length > TRAIL) trail.pop()
      trail.forEach((p, i) => {
        const alpha = (1 - i / TRAIL) * 0.75
        const size = Math.max(1.2, 6.5 - i * 0.4)
        const color = COLORS[i % COLORS.length]
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `${color}${alpha})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9997]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}