'use client'

import { useEffect, useRef } from 'react'

const SLATE = '163,173,186'
const AMBER = '240,182,74'
const LINK = 130 // px within which two points connect
const REACH = 260 // px within which the pointer warms the field
const GLOW = 640 // px radius of the spotlight
const MAX_POINTS = 140 // ponytail: links are O(n²); the cap keeps a 4K screen flat

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  m: number
}

/**
 * The page's one motion moment: a sparse field of points drifting behind
 * everything, linked when close, warmed to amber near the pointer, with a
 * soft spotlight that trails the cursor. Fixed to the viewport, no
 * dependencies, still under prefers-reduced-motion.
 */
export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: 0, y: 0, in: false }
    // The cursor trails the pointer; heat fades the glow in and out in place.
    const cursor = { x: 0, y: 0, heat: 0 }
    let pts: Point[] = []
    let w = 0
    let h = 0
    let raf = 0
    let last = 0

    const hash = (a: number, b: number) => {
      const n = Math.sin(a * 127.1 + b * 311.7) * 43758.5453
      return n - Math.floor(n)
    }

    const seed = () => {
      const n = Math.min(MAX_POINTS, Math.round((w * h) / 22000))
      return Array.from({ length: n }, (_, i) => ({
        x: hash(i, 5) * w,
        y: hash(6, i) * h,
        vx: (hash(i, 7) - 0.5) * 8,
        vy: (hash(8, i) - 0.5) * 8,
        m: 0.3 + hash(i, 9) * 0.7,
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const prevW = w
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // ponytail: a height-only resize (the iOS URL bar) keeps the field where it is
      if (w !== prevW) pts = seed()
    }

    const draw = (dt: number) => {
      const k = 1 - Math.exp(-8 * dt)
      cursor.x += (pointer.x - cursor.x) * k
      cursor.y += (pointer.y - cursor.y) * k
      cursor.heat += ((pointer.in ? 1 : 0) - cursor.heat) * k

      ctx.clearRect(0, 0, w, h)

      if (cursor.heat > 0.01) {
        const g = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, GLOW)
        g.addColorStop(0, `rgba(${AMBER},${0.1 * cursor.heat})`)
        g.addColorStop(0.7, `rgba(${AMBER},0)`)
        ctx.fillStyle = g
        ctx.fillRect(cursor.x - GLOW, cursor.y - GLOW, GLOW * 2, GLOW * 2)
      }

      for (const p of pts) {
        p.x += p.vx * dt
        p.y += p.vy * dt
        if (p.x < 0) {
          p.x = 0
          p.vx = Math.abs(p.vx)
        } else if (p.x > w) {
          p.x = w
          p.vx = -Math.abs(p.vx)
        }
        if (p.y < 0) {
          p.y = 0
          p.vy = Math.abs(p.vy)
        } else if (p.y > h) {
          p.y = h
          p.vy = -Math.abs(p.vy)
        }
      }

      const warm = (x: number, y: number) =>
        Math.max(0, 1 - Math.hypot(x - cursor.x, y - cursor.y) / REACH) * cursor.heat

      ctx.lineWidth = 1
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]
          const b = pts[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d > LINK) continue
          const near = warm((a.x + b.x) / 2, (a.y + b.y) / 2)
          ctx.strokeStyle =
            near > 0
              ? `rgba(${AMBER},${0.08 + near * 0.4})`
              : `rgba(${SLATE},${0.1 * (1 - d / LINK)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
      for (const p of pts) {
        const near = warm(p.x, p.y)
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1 + p.m * 1.2 + near, 0, Math.PI * 2)
        ctx.fillStyle =
          near > 0
            ? `rgba(${AMBER},${0.35 + near * 0.6})`
            : `rgba(${SLATE},${0.28 + p.m * 0.3})`
        ctx.fill()
      }
    }

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0)
      last = now
      draw(dt)
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (raf || reduced) return
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }

    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      pointer.x = e.clientX
      pointer.y = e.clientY
      if (!pointer.in) {
        // Snap on entry so the glow does not streak in from wherever it last was.
        pointer.in = true
        cursor.x = e.clientX
        cursor.y = e.clientY
      }
    }

    const onLeave = () => {
      pointer.in = false
    }

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    resize()
    draw(0)
    canvas.dataset.ready = ''
    start()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='constellation pointer-events-none fixed inset-0 z-0 h-full w-full'
    />
  )
}
