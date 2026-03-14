import { useState, useEffect, useRef } from 'react'

const WORDS = ['Data Analyst', 'ETL Pipeline Builder', 'Python Automation Expert', 'BI Dashboard Creator', 'SQL Reporting Specialist']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const wi = useRef(0), ci = useRef(0), del = useRef(false)

  useEffect(() => {
    let t
    const tick = () => {
      const w = WORDS[wi.current]
      if (!del.current) {
        setTyped(w.slice(0, ++ci.current))
        if (ci.current === w.length) { del.current = true; t = setTimeout(tick, 2200); return }
      } else {
        setTyped(w.slice(0, --ci.current))
        if (ci.current === 0) { del.current = false; wi.current = (wi.current + 1) % WORDS.length }
      }
      t = setTimeout(tick, del.current ? 55 : 95)
    }
    t = setTimeout(tick, 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 5vw 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Grid bg */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(124,106,247,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(124,106,247,0.035) 1px,transparent 1px)', backgroundSize: '65px 65px' }} />
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,106,247,0.09),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '2%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,207,168,0.07),transparent 70%)', pointerEvents: 'none' }} />

      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '4vw', alignItems: 'center' }}>

        {/* Left */}
        <div style={{ animation: 'fadeUp 0.8s ease both' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.77rem', letterSpacing: '0.14em', color: 'var(--teal)', fontWeight: 600, textTransform: 'uppercase' }}>Open to Opportunities · Pune, India 🇮🇳</span>
          </div>
          <h1 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2.4rem,5.2vw,4.6rem)', lineHeight: 1.05, marginBottom: 18 }}>
            Hi, I'm<br />
            <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Shubham<br />Naralkar
            </span>
          </h1>
          <div style={{ height: 42, display: 'flex', alignItems: 'center', marginBottom: 22 }}>
            <span style={{ fontFamily: 'Syne', fontSize: 'clamp(0.95rem,2vw,1.25rem)', color: 'var(--muted)', fontWeight: 600 }}>
              {typed}<span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent)' }}>|</span>
            </span>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: 1.88, color: 'var(--muted)', maxWidth: 510, marginBottom: 36 }}>
            Data Analyst with <strong style={{ color: 'var(--text)' }}>3+ years of experience</strong> in ETL pipeline development, SQL reporting, and dashboard automation at <strong style={{ color: 'var(--accent)' }}>ICE Mortgage Technology, Pune</strong>. I turn complex data into decisions.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} style={{
              padding: '0.9rem 2rem', background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
              color: '#fff', border: 'none', borderRadius: 8, fontFamily: 'Syne', fontWeight: 700,
              fontSize: '0.88rem', cursor: 'pointer', letterSpacing: '0.06em',
              boxShadow: '0 6px 24px rgba(124,106,247,0.4)', transition: 'transform 0.15s,box-shadow 0.2s'
            }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(124,106,247,0.55)' }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(124,106,247,0.4)' }}>
              View Projects →
            </button>
            <a href="/Shubham_Naralkar_Resume.pdf" download style={{
              padding: '0.9rem 2rem', background: 'transparent', color: 'var(--teal)',
              border: '1px solid var(--teal)', borderRadius: 8, fontFamily: 'Syne',
              fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.06em',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'background 0.2s, transform 0.15s'
            }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,207,168,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
              ↓ Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              { val: '3+', label: 'Years Exp.' },
              { val: '30%', label: 'Effort Saved' },
              { val: '50k+', label: 'Records / Day' },
              { val: '40%', label: 'Visibility ↑' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.9rem', background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.val}</div>
                <div style={{ fontSize: '0.66rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — code card */}
        <div style={{ display: 'flex', justifyContent: 'center', animation: 'fadeUp 0.8s ease 0.25s both' }}>
          <div style={{
            background: 'var(--card)', border: '1px solid var(--border2)',
            borderRadius: 20, overflow: 'hidden', width: '100%', maxWidth: 400,
            boxShadow: '0 32px 80px rgba(0,0,0,0.55)', animation: 'float 6s ease-in-out infinite'
          }}>
            <div style={{ background: '#0d0d1a', padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--border)' }}>
              {['#ff5f57', '#ffbd2e', '#28c840'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
              <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--muted)', fontFamily: 'monospace' }}>shubham_profile.py</span>
            </div>
            <div style={{ padding: '1.4rem', fontFamily: 'monospace', fontSize: '0.79rem', lineHeight: 2 }}>
              <div><span style={{ color: '#a259ff' }}>import</span> <span style={{ color: 'var(--teal)' }}>pandas</span> <span style={{ color: '#a259ff' }}>as</span> <span style={{ color: 'var(--teal)' }}>pd</span></div>
              <div><span style={{ color: '#a259ff' }}>from</span> <span style={{ color: 'var(--teal)' }}>snowflake</span> <span style={{ color: '#a259ff' }}>import</span> <span style={{ color: 'var(--teal)' }}>connector</span></div>
              <div style={{ marginTop: 6 }}><span style={{ color: 'var(--accent)' }}>analyst</span><span style={{ color: 'var(--muted)' }}> = {'{'}</span></div>
              {[
                ['"name"', '"Shubham Naralkar"', 'var(--gold)'],
                ['"role"', '"Data Analyst"', 'var(--gold)'],
                ['"company"', '"ICE Mortgage Tech"', 'var(--gold)'],
                ['"exp"', '"3+ years"', 'var(--teal)'],
                ['"tools"', '["Python","SQL","Tableau"]', 'var(--teal)'],
                ['"available"', 'True', '#a259ff'],
              ].map(([k, v, vc], i) => (
                <div key={i} style={{ paddingLeft: 18 }}>
                  <span style={{ color: 'var(--muted)' }}>{k}</span>
                  <span style={{ color: '#555' }}>: </span>
                  <span style={{ color: vc }}>{v}</span>
                  {i < 5 && <span style={{ color: '#555' }}>,</span>}
                </div>
              ))}
              <div><span style={{ color: 'var(--muted)' }}>{'}'}</span></div>
              <div style={{ marginTop: 8 }}><span style={{ color: '#444' }}># </span><span style={{ color: 'var(--teal)' }}>🚀 Turning data into decisions!</span></div>
            </div>
            {/* Mini bar chart */}
            <div style={{ padding: '0 1.4rem 1.4rem' }}>
              <div style={{ fontSize: '0.63rem', color: 'var(--muted)', marginBottom: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>ETL efficiency gains</div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 40 }}>
                {[20, 35, 28, 50, 42, 65, 58, 72, 62, 80, 75, 88].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(to top,var(--accent),var(--teal))`, borderRadius: '3px 3px 0 0', opacity: 0.55 + i * 0.035 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
