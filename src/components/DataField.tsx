import { Component, useEffect, useMemo, useRef, type ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 1100

function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const gauss = (rnd: () => number) => (rnd() + rnd() + rnd()) / 3 - 0.5

type Vec3 = [number, number, number]

const P = (n: number) => new Float32Array(n * 3)

function makeFormations(): Float32Array[] {
  const rnd = mulberry32(1337)

  // 1 · raw scattered cloud
  const scatter = P(COUNT)
  for (let i = 0; i < COUNT; i++) {
    const r = 1.4 + rnd() * 5.4
    const th = rnd() * Math.PI * 2
    const ph = Math.acos(2 * rnd() - 1)
    scatter[i * 3] = r * Math.sin(ph) * Math.cos(th)
    scatter[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.78
    scatter[i * 3 + 2] = r * Math.cos(ph) * 0.5
  }

  // 2 · ascenders — the trend line
  const trend = P(COUNT)
  for (let i = 0; i < COUNT; i++) {
    const t = i / (COUNT - 1)
    trend[i * 3] = -7 + 14 * t
    trend[i * 3 + 1] = -2.8 + 5.8 * t + gauss(rnd) * 0.55
    trend[i * 3 + 2] = gauss(rnd) * 1.3
  }

  // 3 · structured grid
  const grid = P(COUNT)
  const cols = 26
  const rows = Math.ceil(COUNT / cols)
  for (let i = 0; i < COUNT; i++) {
    const c = i % cols
    const r = Math.floor(i / cols)
    grid[i * 3] = -6.5 + (13 * c) / (cols - 1)
    grid[i * 3 + 2] = -3.5 + (7 * r) / (rows - 1)
    grid[i * 3 + 1] = -1.8 + gauss(rnd) * 0.1
  }

  // 4 · bar chart — headline project metrics
  const bars = P(COUNT)
  const hs = [0.94, 0.5, 0.28, 1.0, 0.62, 0.35, 0.8, 0.45, 0.7, 0.3, 0.9, 0.55, 0.24, 0.42, 0.66, 0.75, 0.35, 0.53]
  const per = Math.max(1, Math.floor(COUNT / hs.length))
  for (let i = 0; i < COUNT; i++) {
    const bi = Math.min(hs.length - 1, Math.floor(i / per))
    const h = 0.35 + hs[bi] * 4.4
    bars[i * 3] = -6.75 + bi * 0.79 + gauss(rnd) * 0.07
    bars[i * 3 + 1] = -4.6 + (i % per) * (h / per)
    bars[i * 3 + 2] = gauss(rnd) * 0.35
  }

  // 5 · orbiting rings — the data network
  const rings = P(COUNT)
  const ringCount = 5
  const perRing = Math.max(1, Math.floor(COUNT / ringCount))
  for (let i = 0; i < COUNT; i++) {
    const k = Math.min(ringCount - 1, Math.floor(i / perRing))
    const ang = ((i % perRing) / Math.max(1, perRing - 1)) * Math.PI * 2
    const r = 2.2 + k * 1.05
    rings[i * 3] = Math.cos(ang) * r
    rings[i * 3 + 2] = Math.sin(ang) * r * 0.62
    rings[i * 3 + 1] = -2.4 + k * 1.35
  }

  // 6 · coalesced point
  const point = P(COUNT)
  for (let i = 0; i < COUNT; i++) {
    point[i * 3] = gauss(rnd) * 0.42
    point[i * 3 + 1] = gauss(rnd) * 0.42
    point[i * 3 + 2] = gauss(rnd) * 0.42
  }

  return [scatter, trend, grid, bars, rings, point]
}

const SEGS = [
  { in: 0.0, full: 0.05, out: 0.22, fade: 0.28 },
  { in: 0.22, full: 0.28, out: 0.4, fade: 0.46 },
  { in: 0.4, full: 0.46, out: 0.56, fade: 0.62 },
  { in: 0.56, full: 0.62, out: 0.7, fade: 0.76 },
  { in: 0.7, full: 0.76, out: 0.82, fade: 0.88 },
  { in: 0.82, full: 0.88, out: 1.01, fade: 1.01 },
]

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x)
const smooth = (x: number) => x * x * (3 - 2 * x)

function Field() {
  const points = useRef<THREE.Points>(null)
  const group = useRef<THREE.Group>(null)
  const pointer = useThree((s) => s.pointer)
  const scrollRef = useRef(0)

  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement
      const max = Math.max(doc.scrollHeight - window.innerHeight, 1)
      scrollRef.current = window.scrollY / max
    }
    measure()
    window.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [])

  const formations = useMemo(makeFormations, [])

  const geo = useMemo(() => {
    const rnd = mulberry32(777)
    const colors = new Float32Array(COUNT * 3)
    const palette: Vec3[] = [
      [0.96, 0.95, 1.0],
      [0.91, 0.47, 0.98],
      [0.65, 0.44, 0.99],
      [0.51, 0.55, 0.97],
    ]
    for (let i = 0; i < COUNT; i++) {
      const p = palette[Math.floor(rnd() * palette.length)]
      colors[i * 3] = p[0]
      colors[i * 3 + 1] = p[1]
      colors[i * 3 + 2] = p[2]
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(formations[0].slice(), 3))
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return g
  }, [formations])

  const target = useMemo(() => new Float32Array(COUNT * 3), [])
  const weights = useMemo(() => new Float32Array(SEGS.length), [])
  const mouse = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const p = scrollRef.current
    let wsum = 0
    for (let s = 0; s < SEGS.length; s++) {
      const seg = SEGS[s]
      const rise = clamp01((p - seg.in) / Math.max(1e-4, seg.full - seg.in))
      const fall = 1 - clamp01((p - seg.out) / Math.max(1e-4, seg.fade - seg.out))
      weights[s] = smooth(rise) * smooth(fall)
      wsum += weights[s]
    }
    if (wsum < 1e-4) wsum = 1e-4

    for (let i = 0; i < COUNT; i++) {
      let x = 0
      let y = 0
      let z = 0
      for (let s = 0; s < SEGS.length; s++) {
        const w = weights[s] / wsum
        const f = formations[s]
        x += f[i * 3] * w
        y += f[i * 3 + 1] * w
        z += f[i * 3 + 2] * w
      }
      target[i * 3] = x
      target[i * 3 + 1] = y
      target[i * 3 + 2] = z
    }

    const pos = geo.attributes.position.array as Float32Array
    const k = 1 - Math.exp(-2.2 * delta)
    for (let i = 0; i < COUNT * 3; i++) pos[i] += (target[i] - pos[i]) * k

    const t = state.clock.elapsedTime
    const d = delta * 60
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] += Math.sin(t * 0.35 + i) * 0.0018 * d
      pos[i * 3 + 1] += Math.cos(t * 0.3 + i * 1.7) * 0.0018 * d
    }
    geo.attributes.position.needsUpdate = true

    mouse.current.x += (pointer.x - mouse.current.x) * 0.05
    mouse.current.y += (pointer.y - mouse.current.y) * 0.05
    if (group.current) {
      group.current.rotation.y = mouse.current.x * 0.12
      group.current.rotation.x = -mouse.current.y * 0.08
    }

    const mat = points.current?.material as THREE.PointsMaterial | undefined
    if (mat) {
      const fade = smooth(clamp01((p - 0.94) / 0.06))
      mat.opacity = 0.9 - fade * 0.85
    }
  })

  return (
    <group ref={group}>
      <points ref={points} geometry={geo} frustumCulled={false}>
        <pointsMaterial
          size={0.042}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.9}
        />
      </points>
    </group>
  )
}

class GLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

export default function DataField() {
  return (
    <GLBoundary>
      <div className="fixed inset-0 z-0" aria-hidden>
        <Canvas
          dpr={[0.6, 1.5]}
          camera={{ position: [0, 0, 9], fov: 55 }}
          gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
        >
          <Field />
        </Canvas>
      </div>
    </GLBoundary>
  )
}
