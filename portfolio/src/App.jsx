import { useEffect, useState } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const projects = [
  { name: 'AgriNova', sub: 'Decision support for smallholder farmers', stack: ['Python', 'Flask', 'SQLite', 'JavaScript'], points: [
    'Built for TetraTHON 2026 (AgriTech track) as team leader and backend developer of team FirstCommit (4 members). Selected among the top 40 of 170+ teams in the screening round, then built the project in the 32-hour offline round at Navrachana University.',
    'Mobile-first web app for smallholder farmers with language selection, a farm-details form (crop, district, soil type, sowing date) and a 7-day crop advisory view. Designed it around rule-based, explainable advice, so each recommendation shows the reason behind it.',
    'Prepared a cleaned mandi price dataset (Agmarknet, data.gov.in) in SQLite for a sell, store or transport comparison planner. Deployed the app on Vercel.' ] },
  { name: 'NUV-Nest', sub: 'Smart campus platform', stack: ['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML/CSS'], points: [
    'Built a web platform for Navrachana University that brings student support, canteen pre-booking, digital payments and attendance tracking into one portal.',
    'Integrated an AI chatbot for student queries using the OpenAI API, and Razorpay for online canteen payments.',
    'Implemented student registration and login, a dashboard, canteen cart and pre-ordering with order history, and a subject-wise attendance tracker with safe, warning and critical status against an 80% threshold.' ] },
]
const timeline = [
  ['Treasurer', 'ACM Student Chapter, Navrachana University', 'September 2026 – Present'],
  ['Top 40 of 170+ teams', 'AgriTech track, TetraTHON 2026 (screening round), as team leader', '2026'],
  ['B.Tech, Computer Science and Engineering', 'Navrachana University, 2nd year','9.08 CGPA', '2025 – 2029'],
]
const skills = [
  ['Languages', 'Python, JavaScript, HTML, CSS, SQL'],
  ['Frameworks and tools', 'Flask, SQLite, Git and GitHub, Vercel'],
  ['APIs', 'OpenAI API, Razorpay'],
]

const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <a href="#top" className="wordmark">Meet Buddhdev</a>
        <nav><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a></nav>
        <a href="#contact" className="login btn sm primary">Contact</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
        <ShaderGradientCanvas className="gradient" lazyLoad={false} pointerEvents="none" pixelDensity={1} fov={45}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
          <ShaderGradient
            animate={reduceMotion ? 'off' : 'on'} axesHelper="off" bgColor1="#000000" bgColor2="#000000" brightness={0.8}
            cAzimuthAngle={270} cDistance={0.5} cPolarAngle={180} cameraZoom={15.09}
            color1="#d0bce1" color2="#6C6C6C" color3="#000000" destination="onCanvas"
            embedMode="off" envPreset="city" format="gif" fov={45} frameRate={10}
            gizmoHelper="hide" grain="on" lightType="env" pixelDensity={1}
            positionX={-0.1} positionY={0} positionZ={0} range="disabled" rangeEnd={40}
            rangeStart={0} reflection={0.4} rotationX={0} rotationY={130} rotationZ={70}
            shader="defaults" type="sphere" uAmplitude={3.2} uDensity={0.8} uFrequency={5.5}
            uSpeed={0.3} uStrength={0.3} uTime={0} wireframe={false}
          />
        </ShaderGradientCanvas>
          <div className="band-content">
            <h1 className="display">Meet Buddhdev</h1>
            <p className="sub">Computer Science student building Flask apps with AI and payment APIs.</p>
            <div className="actions center"><a className="btn primary" href="#work">View projects</a><a className="btn" href="#contact">Contact</a></div>
          </div>
        </div>
      </section>

      <main className="wrap">
        <section id="about" className="feature">
          <div><h2 className="h-section">About</h2></div>
          <div>
            <p className="lead">Second-year Computer Science student who builds full-stack web applications with Flask and integrates AI and payment APIs.</p>
            <p className="body">Led a team through a 32-hour offline hackathon after being selected among the top 40 of 170+. Treasurer of the ACM Student Chapter.</p>
          </div>
        </section>

        <section id="work">
          <h2 className="h-section">Selected work</h2>
          <div className="projects">
            {projects.map(p => (
              <article className="window" key={p.name}>
                <div className="chrome"><i /><i /><i /><span className="mono">{p.name.toLowerCase()}.md</span></div>
                <div className="win-body">
                  <div className="win-head">
                    <h3 className="h-card">{p.name}</h3>
                    <p className="muted">{p.sub}</p>
                    <div className="badges">{p.stack.map(s => <span className="badge" key={s}>{s}</span>)}</div>
                  </div>
                  <ul>{p.points.map(t => <li key={t}>{t}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature">
          <div><h2 className="h-section">Experience</h2></div>
          <div className="table">
            <div className="trow thead"><span>Role</span><span>Period</span></div>
            {timeline.map(([a, b, c], i) => (
              <div className={'trow' + (i % 2 ? ' alt' : '')} key={a}><span><b>{a}</b><br /><em>{b}</em></span><span className="muted">{c}</span></div>
            ))}
          </div>
        </section>

        <section id="skills" className="feature">
          <div><h2 className="h-section">Skills</h2></div>
          <div className="table">
            <div className="trow thead"><span>Area</span><span>Stack</span></div>
            {skills.map(([a, b], i) => (
              <div className={'trow' + (i % 2 ? ' alt' : '')} key={a}><span><b>{a}</b></span><span>{b}</span></div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="wrap foot">
          <h2 className="h-section">Get in touch</h2>
          <div className="actions">
            <a className="btn primary" href="mailto:meet.m.buddhdev@gmail.com">Email</a>
            <a className="btn" href="https://www.linkedin.com/in/meet-buddhdev-960454384/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="https://github.com/explorer-2006/" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="legal">9016206631 · meet.m.buddhdev@gmail.com · Navrachana University</p>
        </div>
      </footer>
    </>
  )
}
