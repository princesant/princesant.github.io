import Nav from "../components/Nav";
import Photo from "../components/Photo";
import {
  profile, about, stats, experience, projects, skills, education, certifications, leadership,
} from "../content";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav name={profile.name} />
      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{profile.role} · CEEW</p>
              <h1>{profile.name}</h1>
              <p className="lead">{profile.tagline}</p>
              <div className="actions">
                <a className="btn btn-primary" href={base + profile.cv} download>Download CV</a>
                <a className="btn" href="#contact">Get in touch</a>
              </div>
              <ul className="hero-links">
                <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
                <li><a href={profile.ceew} target="_blank" rel="noreferrer">CEEW profile ↗</a></li>
              </ul>
            </div>
            <Photo src={base + profile.photo} name={profile.name} />
          </div>
        </section>

        <Section id="about" label="About" title="Data for cleaner air and a resilient climate">
          <div className="about-grid">
            <div className="prose">
              {about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <ul className="stats">
              {stats.map((s) => (
                <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="experience" label="Experience" title="Where I've worked">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.title + job.date}>
                <div className="timeline-head">
                  <h3>{job.title}</h3>
                  <span className="date">{job.date}</span>
                </div>
                <p className="org">{job.org}</p>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" label="Projects" title="Things I've built">
          <div className="cards">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <div className="card-top">
                  <span className="tag">{p.tag}</span>
                  <span className="date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" label="Skills" title="What I work with">
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" label="Education" title="Learning">
          <div className="edu">
            {education.map((e) => (
              <div className="edu-item" key={e.degree}>
                <span className="date">{e.date}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <p className="muted">{e.detail}</p>
              </div>
            ))}
          </div>
          <div className="two-col">
            <div>
              <h3 className="sub">Certifications</h3>
              <ul className="list">
                {certifications.map((c) => (
                  <li key={c.name}><strong>{c.name}</strong><span>{c.by}, {c.year}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="sub">Leadership & achievements</h3>
              <ul className="list bullets">
                {leadership.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <section id="contact" className="section contact">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s talk</h2>
            <p className="lead">Open to conversations on air quality, climate resilience, ESG and data-driven sustainability work.</p>
            <div className="contact-grid">
              <a href={`mailto:${profile.email}`}><span>Email</span>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><span>Phone</span>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>prince-sant</a>
              <a href={base + profile.cv} download><span>CV</span>Download PDF</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {profile.name} · {profile.location}</div>
      </footer>
    </>
  );
}
