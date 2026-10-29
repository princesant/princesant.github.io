import Nav from "../components/Nav";
import Photo from "../components/Photo";
import NetworkBg from "../components/NetworkBg";
import Typer from "../components/Typer";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import {
  profile, about, stats, experience, projects, skills, education, certifications, leadership,
} from "../content";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Section({ id, n, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title reveal">
          <span className="accent">0{n}.</span> {title}
          <span className="rule" />
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <Nav />
      <Reveal />
      <main id="top">
        {/* Hero */}
        <section className="hero">
          <NetworkBg />
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="kicker">
                <span className="dot" /> system.online · {profile.location}
              </p>
              <h1 className="glitch" data-text={profile.name}>{profile.name}</h1>
              <p className="hero-role">
                <span className="accent">&gt;</span> <Typer words={profile.roles} />
              </p>
              <p className="lead">{profile.tagline}</p>
              <div className="actions">
                <a className="btn btn-primary" href={base + profile.cv} download>
                  ./download_cv.pdf
                </a>
                <a className="btn" href="#contact">ping --me</a>
              </div>
              <ul className="hero-links">
                <li><a href={profile.linkedin} target="_blank" rel="noreferrer">[ linkedin ]</a></li>
                <li><a href={profile.ceew} target="_blank" rel="noreferrer">[ ceew ]</a></li>
              </ul>
            </div>
            <div className="hud">
              <span className="hud-corner tl" /><span className="hud-corner tr" />
              <span className="hud-corner bl" /><span className="hud-corner br" />
              <Photo src={base + profile.photo} name={profile.name} />
              <div className="scanline" aria-hidden="true" />
              <div className="hud-label">
                <span>ID: P.SANT</span><span className="accent">● ACTIVE</span>
              </div>
            </div>
          </div>
          <a href="#about" className="scroll-hint" aria-label="Scroll down">scroll ↓</a>
        </section>

        <Section id="about" n={1} title="about">
          <div className="about-grid">
            <div className="prose reveal">
              {about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="terminal reveal">
              <div className="terminal-bar">
                <i /><i /><i /><span>profile.py</span>
              </div>
              <pre>
<span className="c-key">class</span> <span className="c-fn">DataScientist</span>:{"\n"}
{"    "}name = <span className="c-str">&quot;Prince Sant&quot;</span>{"\n"}
{"    "}org = <span className="c-str">&quot;CEEW · Clean Air&quot;</span>{"\n"}
{"    "}stack = [<span className="c-str">&quot;python&quot;</span>, <span className="c-str">&quot;xgboost&quot;</span>,{"\n"}
{"             "}<span className="c-str">&quot;gee&quot;</span>, <span className="c-str">&quot;qgis&quot;</span>, <span className="c-str">&quot;power_bi&quot;</span>]{"\n"}
{"    "}focus = {"{"}<span className="c-str">&quot;air_quality&quot;</span>, <span className="c-str">&quot;climate&quot;</span>, <span className="c-str">&quot;esg&quot;</span>{"}"}{"\n"}
{"\n"}
{"    "}<span className="c-key">def</span> <span className="c-fn">motto</span>(self):{"\n"}
{"        "}<span className="c-key">return</span> <span className="c-str">&quot;Be water, my friend.&quot;</span>
              </pre>
            </div>
          </div>
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label} className="reveal">
                <Counter value={s.value} />
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" n={2} title="experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.title + job.date} className="reveal">
                <div className="timeline-head">
                  <h3>{job.title} <span className="accent">@ {job.org}</span></h3>
                  <span className="date">{job.date}</span>
                </div>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" n={3} title="projects">
          <div className="cards">
            {projects.map((p, i) => (
              <article className="card reveal" key={p.title}>
                <div className="card-top">
                  <span className="card-id">PRJ_0{i + 1}</span>
                  <span className="date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="tag">#{p.tag.toLowerCase().replace(/\s+/g, "_")}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" n={4} title="tech stack">
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group} className="skill-group reveal">
                <h3><span className="accent">$</span> {g.group}</h3>
                <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" n={5} title="education">
          <div className="edu">
            {education.map((e) => (
              <div className="edu-item reveal" key={e.degree}>
                <span className="date">{e.date}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <p className="metric">{e.detail}</p>
              </div>
            ))}
          </div>
          <div className="two-col">
            <div className="reveal">
              <h3 className="sub"><span className="accent">//</span> certifications</h3>
              <ul className="list">
                {certifications.map((c) => (
                  <li key={c.name}><strong>{c.name}</strong><span>{c.by} · {c.year}</span></li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h3 className="sub"><span className="accent">//</span> leadership &amp; wins</h3>
              <ul className="list bullets">
                {leadership.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <section id="contact" className="section contact">
          <div className="container">
            <h2 className="section-title reveal">
              <span className="accent">06.</span> contact<span className="rule" />
            </h2>
            <p className="big reveal">Let&apos;s build something <span className="accent">data-driven.</span></p>
            <p className="lead reveal">Open to roles and collaborations in data science, ML, geospatial analytics, air quality and climate.</p>
            <div className="contact-grid">
              <a className="reveal" href={`mailto:${profile.email}`}><span>email</span>{profile.email}</a>
              <a className="reveal" href={`tel:${profile.phone.replace(/\s/g, "")}`}><span>phone</span>{profile.phone}</a>
              <a className="reveal" href={profile.linkedin} target="_blank" rel="noreferrer"><span>linkedin</span>prince-sant</a>
              <a className="reveal" href={base + profile.cv} download><span>cv</span>download.pdf</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="accent">built with next.js · deployed on github pages</span>
        </div>
      </footer>
    </>
  );
}
