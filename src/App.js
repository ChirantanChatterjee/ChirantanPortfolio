import './App.css';
import profile from './assets/profile.jpg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="container">

      <div id="cursor" className="cursor-glow"></div>

      {/* NAV */}
      <nav className="nav">
        <div className="logo">Chirantan</div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Chirantan Chatterjee
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          QA Automation Lead building scalable frameworks for enterprise banking systems
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <button>View Work</button>
          <button className="ghost">Contact Me</button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <div className="image-ring"></div>
          <img src={profile} alt="Chirantan Chatterjee" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section title="About" id="about">
        <p>
          I'm a QA Automation Lead with 10+ years of experience in enterprise banking systems.
          I specialize in building scalable automation frameworks, improving release cycles,
          and ensuring high-quality software delivery.
        </p>
        <p>
          Currently leading automation for Bank of Ireland at BearingPoint, owning complete
          UI, API, and regression automation strategy.
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Enterprises Served</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Automation Coverage</p>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience" id="experience">
        <Exp
          year="2024 — Present"
          role="Automation Lead — BearingPoint"
          desc="Sole Automation Lead for Bank of Ireland project. Owning end-to-end automation strategy across UI, API and regression layers."
        />
        <Exp
          year="Feb 2024 — Nov 2024"
          role="QA Automation Engineer — iLoy Group"
          desc="Built automation frameworks and improved test coverage for financial systems. Focused on scalability and CI/CD integration."
        />
        <Exp
          year="2023 — Feb 2024"
          role="Senior QA Engineer — Fiserv"
          desc="Worked on financial microservices, CI/CD pipelines and automation workflows."
        />
        <Exp
          year="2022"
          role="Senior Test Analyst — Mindtree"
          desc="Handled automation strategy and regression stability for banking systems."
        />
        <Exp
          year="2016 — 2022"
          role="QA Engineer — Accenture"
          desc="Worked on GDPR compliance and payments systems. Received ACE award for outstanding contributions."
        />
      </Section>

      {/* PROJECTS */}
      <Section title="Projects" id="projects">
        <div className="projects-grid">
          <Project
            title="MedReg Automation Framework"
            desc="Built Playwright + Cucumber (Java) framework from scratch with scalable architecture."
            tags={["Playwright", "Cucumber", "Java"]}
          />
          <Project
            title="Banking Automation System"
            desc="Led complete automation ownership for enterprise banking application with 95% coverage."
            tags={["Selenium", "API Testing", "CI/CD"]}
          />
          <Project
            title="AI-assisted Automation"
            desc="Implemented MCP and Co-Pilot Chat to enhance automation workflows and reduce manual effort."
            tags={["AI", "MCP", "Automation"]}
          />
        </div>
      </Section>

      {/* CONTACT */}
      <Section title="Contact" id="contact">
        <div className="contact-content">
          <p>📧 <a href="mailto:official.chirantan@gmail.com">official.chirantan@gmail.com</a></p>
          <p>📱 +353 894 136 804</p>
          <p>💼 <a href="[github.com](https://github.com/ChirantanChatterjee)" target="_blank" rel="noreferrer">github.com/ChirantanChatterjee</a></p>
          <p>📍 Dublin, Ireland</p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Chirantan Chatterjee · Dublin, Ireland
      </footer>

    </div>
  );
}

/* Components */

function Section({ title, children, id }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </motion.section>
  );
}

function Exp({ year, role, desc }) {
  return (
    <motion.div
      className="exp"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h4>{year}</h4>
      <h3>{role}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

function Project({ title, desc, tags = [] }) {
  return (
    <motion.div
      className="project"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
      )}
    </motion.div>
  );
}
