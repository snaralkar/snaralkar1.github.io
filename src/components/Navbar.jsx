import { useState, useEffect } from 'react'
import { NAV } from '../data'

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(7,8,14,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border2)' : 'none',
        transition: 'all 0.35s ease', padding: '0 5vw',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }} onClick={() => go('home')}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: 'linear-gradient(135deg,var(--accent),var(--teal))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne', fontWeight: 800, fontSize: 15, color: '#fff',
              boxShadow: '0 4px 18px rgba(124,106,247,0.4)'
            }}>SN</div>
            <div>
              <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', lineHeight: 1.1 }}>Shubham Naralkar</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>Data Analyst</div>
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="desk-nav" style={{ display: 'flex', gap: 4, listStyle: 'none', alignItems: 'center' }}>
            {NAV.map(l => (
              <li key={l}>
                <button onClick={() => go(l.toLowerCase())} style={{
                  background: active === l ? 'rgba(124,106,247,0.14)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '0.5rem 1rem', borderRadius: 8,
                  fontFamily: 'Epilogue', fontSize: '0.85rem', fontWeight: 500,
                  color: active === l ? 'var(--text)' : 'var(--muted)',
                  transition: 'all 0.2s', position: 'relative',
                }}>
                  {l}
                  {active === l && <span style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', display: 'block' }} />}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {/* Resume Download Button */}
            <a
              href="/Shubham_Naralkar_Resume.pdf"
              download="Shubham_Naralkar_Resume.pdf"
              style={{
                padding: '0.5rem 1.2rem', textDecoration: 'none',
                background: 'transparent', color: 'var(--teal)',
                border: '1px solid var(--teal)', borderRadius: 8,
                fontFamily: 'Syne', fontWeight: 700, fontSize: '0.78rem',
                letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: 6,
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,207,168,0.1)' }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent' }}
            >
              ↓ Resume
            </a>
            <a
              href="mailto:naralkarshubham04@gmail.com"
              style={{
                padding: '0.5rem 1.4rem', textDecoration: 'none',
                background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
                color: '#fff', borderRadius: 8,
                fontFamily: 'Syne', fontWeight: 700, fontSize: '0.8rem',
                letterSpacing: '0.06em',
                boxShadow: '0 4px 18px rgba(124,106,247,0.35)',
                transition: 'transform 0.15s', display: 'inline-block',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Hire Me
            </a>
            <button onClick={() => setOpen(!open)} className="ham-btn" style={{
              background: 'none', border: '1px solid var(--border2)', borderRadius: 8,
              padding: '0.5rem 0.7rem', cursor: 'pointer', color: 'var(--text)', fontSize: '1.1rem', display: 'none'
            }}>☰</button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
          background: 'rgba(7,8,14,0.99)', borderBottom: '1px solid var(--border2)',
          padding: '1rem 5vw 1.5rem',
        }}>
          {NAV.map(l => (
            <button key={l} onClick={() => go(l.toLowerCase())} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.8rem 0', fontFamily: 'Syne', fontWeight: 600,
              fontSize: '1rem', color: active === l ? 'var(--accent)' : 'var(--text)',
              borderBottom: '1px solid var(--border)',
            }}>{l}</button>
          ))}
          <a href="/Shubham_Naralkar_Resume.pdf" download style={{
            display: 'block', marginTop: 12, padding: '0.75rem 0',
            color: 'var(--teal)', fontFamily: 'Syne', fontWeight: 700,
            fontSize: '0.9rem', textDecoration: 'none',
          }}>↓ Download Resume</a>
        </div>
      )}
    </>
  )
}
