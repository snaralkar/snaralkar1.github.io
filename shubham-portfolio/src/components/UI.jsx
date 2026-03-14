import { useState, useEffect, useRef } from 'react'

export function SectionLabel({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', boxShadow: '0 0 10px var(--accent)' }} />
      <span style={{ fontSize: '0.7rem', letterSpacing: '0.16em', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>{text}</span>
    </div>
  )
}

export function Divider() {
  return <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg,var(--accent),var(--teal))', marginBottom: 48, borderRadius: 2 }} />
}

export function SkillBar({ name, pct, color }) {
  const ref = useRef()
  const [w, setW] = useState(0)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setW(pct), 120) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.81rem', marginBottom: 7 }}>
        <span style={{ color: 'var(--text)', fontWeight: 500 }}>{name}</span>
        <span style={{ color, fontWeight: 700, fontFamily: 'Syne' }}>{pct}%</span>
      </div>
      <div style={{ height: 5, background: 'var(--bg3)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 3, width: `${w}%`, background: `linear-gradient(90deg,${color}55,${color})`, transition: 'width 1.3s cubic-bezier(.4,0,.2,1)' }} />
      </div>
    </div>
  )
}

export function ScrollTop() {
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const h = () => setVis(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!vis) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
      position: 'fixed', bottom: 32, right: 32, zIndex: 999,
      width: 46, height: 46, borderRadius: 12,
      background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
      color: '#fff', border: 'none', cursor: 'pointer', fontSize: '1.1rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 6px 24px rgba(124,106,247,0.4)', transition: 'transform 0.2s'
    }}
      onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>↑</button>
  )
}
