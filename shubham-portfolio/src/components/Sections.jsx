import { useState } from 'react'
import { SectionLabel, Divider, SkillBar } from './UI'
import { SKILLS, PROJECTS, EXPERIENCE, CONTACT_INFO } from '../data'

/* ── ABOUT ── */
export function About() {
  return (
    <section id="about" style={{ padding: '100px 5vw', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel text="About Me" />
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 12, lineHeight: 1.15 }}>
          Results-Driven<br />
          <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Data Analyst</span>
        </h2>
        <Divider />
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5vw', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: 20 }}>
              I'm <strong style={{ color: 'var(--text)' }}>Shubham Naralkar</strong>, a Data Analyst at{' '}
              <strong style={{ color: 'var(--accent)' }}>ICE Mortgage Technology Pvt. Ltd., Pune</strong> with 3+ years of hands-on experience in the US Mortgage domain.
              I specialize in building Python-driven ETL pipelines, interactive BI dashboards, and transforming raw data into clear, actionable business insights.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: 28 }}>
              My core strengths are automation, data quality, and visual storytelling — from ingesting XML/JSON sources to deploying Tableau and Power BI dashboards that operational teams rely on daily.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 2.5rem', marginBottom: 28 }}>
              {[
                { k: 'Full Name', v: 'Shubham Naralkar' },
                { k: 'Role', v: 'Data Analyst' },
                { k: 'Company', v: 'ICE Mortgage Technology' },
                { k: 'Location', v: 'Hadapsar, Pune (MH)' },
                { k: 'Experience', v: '3+ Years' },
                { k: 'Education', v: 'B.Sc. CS — NMU, 2019' },
                { k: 'Domain', v: 'US Mortgage' },
                { k: 'Certification', v: 'Data Science — Borgward 2021' },
              ].map(d => (
                <div key={d.k} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
                  <div style={{ fontSize: '0.66rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 4 }}>{d.k}</div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 500, color: 'var(--text)' }}>{d.v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="mailto:naralkarshubham04@gmail.com" style={{
                padding: '0.75rem 1.8rem', background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
                color: '#fff', borderRadius: 8, fontFamily: 'Syne', fontWeight: 700, fontSize: '0.82rem',
                letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-block',
                boxShadow: '0 4px 18px rgba(124,106,247,0.35)', transition: 'transform 0.15s',
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Email Me
              </a>
              <a href="/Shubham_Naralkar_Resume.pdf" download style={{
                padding: '0.75rem 1.8rem', background: 'transparent', color: 'var(--teal)',
                border: '1px solid var(--teal)', borderRadius: 8, fontFamily: 'Syne',
                fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.06em',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
                transition: 'background 0.15s, transform 0.15s',
              }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(0,207,168,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
                ↓ Download Resume
              </a>
            </div>
          </div>

          {/* Key highlights */}
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: 16, fontWeight: 700 }}>Key Strengths</div>
            {[
              { icon: '⚡', text: 'Proficient in Python with strong experience in automation and ETL' },
              { icon: '📊', text: 'Skilled in Tableau and Power BI for insightful data visualization' },
              { icon: '🗂️', text: 'Hands-on with structured/unstructured data — XML, JSON, Excel, CSV' },
              { icon: '🔍', text: 'Advanced SQL for data extraction, transformation, and reporting' },
              { icon: '☁️', text: 'Cloud experience with Snowflake, Azure, and AWS' },
              { icon: '💡', text: 'Simplifies complex data into actionable business insights' },
            ].map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'var(--bg3)', borderRadius: 8, padding: '0.65rem 0.9rem', border: '1px solid var(--border)', marginBottom: 10 }}>
                <span style={{ fontSize: '1rem', flexShrink: 0 }}>{h.icon}</span>
                <span style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.65 }}>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── SKILLS ── */
export function Skills() {
  const extras = ['Watchdog (Python)', 'JSON / XML Parsing', 'Hypothesis Testing', 'Regression Analysis', 'Clustering', 'Databricks', 'Flask', 'ETL Design', 'Data Auditing', 'EDA']
  return (
    <section id="skills" style={{ padding: '100px 5vw' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel text="Skills" />
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 12 }}>
          My{' '}
          <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Technical Toolkit</span>
        </h2>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(265px,1fr))', gap: '1.5rem' }}>
          {SKILLS.map(sk => (
            <div key={sk.cat} style={{
              background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem',
              transition: 'transform 0.2s,border-color 0.2s,box-shadow 0.2s',
            }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = sk.color + '50'; e.currentTarget.style.boxShadow = `0 18px 50px ${sk.color}18` }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: sk.color + '18', border: `1px solid ${sk.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>{sk.icon}</div>
                <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '0.98rem', color: sk.color }}>{sk.cat}</span>
              </div>
              {sk.items.map(item => <SkillBar key={item.name} {...item} color={sk.color} />)}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 52, textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 18 }}>Also experienced with</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {extras.map(t => (
              <span key={t} style={{ padding: '0.35rem 0.9rem', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 20, fontSize: '0.77rem', color: 'var(--muted)', cursor: 'default', transition: 'all 0.2s' }}
                onMouseOver={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--text)' }}
                onMouseOut={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PROJECTS ── */
function ProjectCard({ p }) {
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', transition: 'transform 0.2s,box-shadow 0.2s' }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 24px 60px ${p.color}20` }}
      onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
      <div style={{ background: `linear-gradient(135deg,${p.color}22,${p.color}06)`, borderBottom: `1px solid ${p.color}25`, padding: '1.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'inline-block', fontSize: '0.67rem', letterSpacing: '0.12em', color: p.color, fontWeight: 700, marginBottom: 8, background: `${p.color}18`, padding: '3px 10px', borderRadius: 5, textTransform: 'uppercase' }}>{p.tag}</div>
          <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.12rem', lineHeight: 1.3 }}>{p.title}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--teal)', marginTop: 5, fontWeight: 500 }}>{p.company}</div>
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0, marginLeft: 12 }}>📊</div>
      </div>
      <div style={{ padding: '1.5rem' }}>
        <p style={{ fontSize: '0.86rem', lineHeight: 1.78, color: 'var(--muted)', marginBottom: 14 }}>{p.desc}</p>
        <ul style={{ listStyle: 'none', marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {p.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: p.color, fontSize: '0.65rem', marginTop: 4, flexShrink: 0 }}>▶</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: '0.7rem', marginBottom: 16, flexWrap: 'wrap' }}>
          {p.metrics.map(m => (
            <div key={m.label} style={{ background: 'var(--bg3)', borderRadius: 8, padding: '0.45rem 0.8rem', textAlign: 'center', border: `1px solid ${p.color}20`, flex: 1, minWidth: 80 }}>
              <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', color: p.color }}>{m.val}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {p.stack.map(s => <span key={s} style={{ padding: '0.22rem 0.7rem', background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color, fontSize: '0.72rem', borderRadius: 5, fontWeight: 500 }}>{s}</span>)}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 5vw', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel text="Projects" />
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 12 }}>
          Real-World{' '}
          <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work</span>
        </h2>
        <Divider />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '1.75rem' }}>
          {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}

/* ── EXPERIENCE ── */
export function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 5vw' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionLabel text="Experience" />
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 12 }}>
          Work{' '}
          <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>History</span>
        </h2>
        <Divider />
        {EXPERIENCE.map((item, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem', marginBottom: 4 }}>{item.role}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--teal)', fontWeight: 500, marginBottom: 3 }}>{item.company}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{item.location}</div>
              </div>
              <div style={{ display: 'inline-block', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em', background: 'rgba(124,106,247,0.12)', padding: '6px 14px', borderRadius: 6, fontWeight: 600, whiteSpace: 'nowrap' }}>{item.year}</div>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {item.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.65rem', marginTop: 4, flexShrink: 0 }}>▶</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CONTACT ── */
export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = () => {
    if (form.name && form.email && form.message) {
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }
  }

  return (
    <section id="contact" style={{ padding: '100px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,106,247,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(124,106,247,0.025) 1px,transparent 1px)', backgroundSize: '65px 65px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <SectionLabel text="Contact" />
        <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 12, lineHeight: 1.15 }}>
          Let's{' '}
          <span style={{ background: 'linear-gradient(135deg,var(--accent),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
        </h2>
        <Divider />
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5vw', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: 36 }}>
              Open to new opportunities, collaborations, or data projects. I respond within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {CONTACT_INFO.map(c => (
                <a key={c.label} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--bg3)', border: '1px solid var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, transition: 'border-color 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border2)'}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.67rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)' }}>{c.label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text)', marginTop: 3 }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* Resume download block */}
            <div style={{ background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 8 }}>Resume</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text)', marginBottom: 14 }}>Download my latest resume (PDF)</div>
              <a href="/Shubham_Naralkar_Resume.pdf" download style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '0.7rem 1.5rem', background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
                color: '#fff', borderRadius: 8, fontFamily: 'Syne', fontWeight: 700,
                fontSize: '0.82rem', letterSpacing: '0.06em', textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(124,106,247,0.35)', transition: 'transform 0.15s',
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                ↓ Download Resume
              </a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 20, padding: '2.25rem' }}>
            {sent && <div style={{ marginBottom: 20, padding: '1rem 1.25rem', background: 'rgba(0,207,168,0.1)', border: '1px solid rgba(0,207,168,0.35)', borderRadius: 10, color: 'var(--teal)', fontSize: '0.88rem', fontWeight: 500 }}>✓ Message sent! Shubham will get back to you within 24 hrs.</div>}
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              {[['name', 'Your Name', 'e.g. Priya Sharma'], ['email', 'Email', 'you@company.com']].map(([f, l, ph]) => (
                <div key={f}>
                  <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--muted)', display: 'block', marginBottom: 7 }}>{l}</label>
                  <input name={f} value={form[f]} onChange={handle} placeholder={ph} style={{ width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.8rem 1rem', color: 'var(--text)', fontFamily: 'Epilogue', fontSize: '0.88rem', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--muted)', display: 'block', marginBottom: 7 }}>Subject</label>
              <input name="subject" value={form.subject} onChange={handle} placeholder="Job opportunity / Data project / Collaboration" style={{ width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.8rem 1rem', color: 'var(--text)', fontFamily: 'Epilogue', fontSize: '0.88rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.09em', color: 'var(--muted)', display: 'block', marginBottom: 7 }}>Message</label>
              <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell me about your data challenge or opportunity..." style={{ width: '100%', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, padding: '0.8rem 1rem', color: 'var(--text)', fontFamily: 'Epilogue', fontSize: '0.88rem', outline: 'none', resize: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>
            <button onClick={submit} style={{ width: '100%', padding: '0.95rem', background: 'linear-gradient(135deg,var(--accent),var(--accent2))', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'Syne', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', letterSpacing: '0.07em', boxShadow: '0 6px 24px rgba(124,106,247,0.38)', transition: 'transform 0.15s,box-shadow 0.2s' }}
              onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 32px rgba(124,106,247,0.5)' }}
              onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 6px 24px rgba(124,106,247,0.38)' }}>
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
export function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '2.5rem 5vw' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg,var(--accent),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne', fontWeight: 800, fontSize: 14, color: '#fff' }}>SN</div>
          <div>
            <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '0.95rem' }}>Shubham Naralkar</div>
            <div style={{ fontSize: '0.63rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Data Analyst · Pune, India</div>
          </div>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>© 2026 Shubham Naralkar · Turning data into decisions 📊</div>
        <a href="/Shubham_Naralkar_Resume.pdf" download style={{ fontSize: '0.78rem', color: 'var(--teal)', textDecoration: 'none', fontFamily: 'Syne', fontWeight: 700 }}>↓ Resume</a>
      </div>
    </footer>
  )
}
