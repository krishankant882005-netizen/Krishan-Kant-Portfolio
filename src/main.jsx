import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  X,
  Smartphone,
  Terminal,
  Trophy,
  Award,
  Sparkles,
  Download
} from "lucide-react";

import "./styles.css";

/* =========================================================
   PROFILE
========================================================= */

const profile = {
  name: "Krishan Kant",
  role: "CSE (AI & ML) Student",
  headline: "Aspiring AI/ML Engineer & Software Developer",
  email: "krishankant882005@gmail.com",
  github: "https://github.com/krishankant882005-netizen",
  linkedin:
    "https://www.linkedin.com/in/krishan-kant-9b8618379"
};

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "Python",
    type: "Programming",
    icon: Code2
  },
  {
    name: "C / C++",
    type: "Programming",
    icon: Terminal
  },
  {
    name: "Basic DSA",
    type: "Problem Solving",
    icon: BrainCircuit
  },
  {
    name: "SQL",
    type: "Database",
    icon: Database
  },
  {
    name: "Git & GitHub",
    type: "Tools",
    icon: Github
  },
  {
    name: "Flutter",
    type: "Development",
    icon: Smartphone
  },
  {
    name: "Web Development",
    type: "Development",
    icon: Code2
  },
  {
    name: "AI / Machine Learning",
    type: "Artificial Intelligence",
    icon: BrainCircuit
  }
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Campus Circle",
    category: "Student Community Platform",
    description:
      "A campus-focused application concept connecting students through marketplace listings, rentals, rides, study partners, food splitting, fitness partners and community activities.",
    tags: ["Flutter", "App Development", "UI/UX"],
    link: "https://github.com/krishankant882005-netizen"
  },
  {
    number: "02",
    title: "Machine Learning with Python",
    category: "AI / Machine Learning",
    description:
      "A learning-focused machine learning project exploring Python-based data processing, model development and practical machine learning workflows.",
    tags: ["Python", "Machine Learning", "AI"],
    link: "https://github.com/krishankant882005-netizen"
  },
  {
    number: "03",
    title: "Expression Evaluator",
    category: "Algorithms & Data Structures",
    description:
      "A C++ programming project focused on parsing and evaluating expressions while strengthening algorithmic thinking, logic and data-structure fundamentals.",
    tags: ["C++", "DSA", "Algorithms"],
    link: "https://github.com/krishankant882005-netizen"
  },
  {
    number: "04",
    title: "Attendance Management System",
    category: "Software Engineering",
    description:
      "A structured software solution focused on attendance management, system design, requirements analysis and software engineering practices.",
    tags: ["Software Engineering", "System Design", "UML"],
    link: "https://github.com/krishankant882005-netizen"
  }
];

/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    year: "2025 — 2029",
    title: "B.Tech — CSE (AI & ML)",
    place: "Lovely Professional University (LPU)",
    text:
      "Currently pursuing a Bachelor of Technology with a focus on computer science, artificial intelligence and machine learning."
  },
  {
    year: "12th",
    title: "Senior Secondary Education",
    place:
      "LADY A SINGHANIA EDNL ACADEMY JHALAWAR RAJ (10427)",
    text:
      "Completed senior secondary education before beginning undergraduate studies."
  },
  {
    year: "10th",
    title: "Secondary Education",
    place:
      "TINY TOTS ENG MEDIUM SCHOOL TUNDLA FIROZABAD UP (60378)",
    text:
      "Completed secondary education and built the academic foundation for further studies."
  }
];

/* =========================================================
   CERTIFICATES

   DISPLAY ORDER:

   01 -> Certificate1 (1).jpeg
   02 -> Certificate1 (17).jpeg
   03 -> Certificate1 (16).jpeg
   04 -> Certificate1 (6).jpeg
   05 -> Certificate1 (2).jpeg
   06 -> Certificate1 (15).jpeg
   07 -> Certificate1 (3).jpeg
   08 -> Certificate1 (4).jpeg
   09 -> Certificate1 (5).jpeg
   10 -> Certificate1 (7).jpeg
   11 -> Certificate1 (8).jpeg
   12 -> Certificate1 (9).jpeg
   13 -> Certificate1 (10).jpeg
   14 -> Certificate1 (11).jpeg
   15 -> Certificate1 (12).jpeg
   16 -> Certificate1 (13).jpeg
   17 -> Certificate1 (14).jpeg

   IMPORTANT:
   These filenames exactly match your current
   public/certificates folder.
========================================================= */

const certificates = [
  {
    title: "Computer Programming",
    issuer: "Neo Colab",
    category: "Programming",
    image: "/certificates/Certificate1 (1).jpeg"
  },

  {
    title: "CCC (NCVET)",
    issuer: "NIELIT — NCVET",
    category: "Computer Concepts",
    image: "/certificates/Certificate1 (17).jpeg"
  },

  {
    title: "Hackathon-101 by ARC",
    issuer: "ARC",
    category: "Hackathon",
    image: "/certificates/Certificate1 (16).jpeg"
  },

  {
    title:
      "Rebuilt Your Coding Confidence with C++ and Data Structures",
    issuer: "Lovely Professional University",
    category: "C++ & DSA",
    image: "/certificates/Certificate1 (6).jpeg"
  },

  {
    title: "Localhost to Cloud",
    issuer: "AWS Cloud Clubs — LPU",
    category: "Cloud Computing",
    image: "/certificates/Certificate1 (2).jpeg"
  },

  {
    title: "Introduction to AI",
    issuer: "Chandigarh University",
    category: "Artificial Intelligence",
    image: "/certificates/Certificate1 (15).jpeg"
  },

  {
    title:
      "Skill Sink: Holistic Skill Development Course for Professional Excellence",
    issuer: "Lovely Professional University",
    category: "Professional Development",
    image: "/certificates/Certificate1 (3).jpeg"
  },

  {
    title: "Machine Learning Using Python",
    issuer: "Simplilearn SkillUp",
    category: "Machine Learning",
    image: "/certificates/Certificate1 (4).jpeg"
  },

  {
    title: "Google Gemini",
    issuer: "Google",
    category: "Generative AI",
    image: "/certificates/Certificate1 (5).jpeg"
  },

  {
    title: "Master Data Management by TCS",
    issuer: "TCS iON",
    category: "Data Management",
    image: "/certificates/Certificate1 (7).jpeg"
  },

  {
    title: "AWS Training & Certification",
    issuer: "AWS",
    category: "Cloud & Data Engineering",
    image: "/certificates/Certificate1 (8).jpeg"
  },

  {
    title: "C Programming by Coursera",
    issuer: "Packt / Coursera",
    category: "Programming",
    image: "/certificates/Certificate1 (9).jpeg"
  },

  {
    title: "Big Data by Infosys",
    issuer: "Infosys Springboard",
    category: "Big Data",
    image: "/certificates/Certificate1 (10).jpeg"
  },

  {
    title: "Data Science",
    issuer: "Infosys Springboard",
    category: "Data Science",
    image: "/certificates/Certificate1 (11).jpeg"
  },

  {
    title: "Operating System",
    issuer: "Saylor Academy",
    category: "Computer Science",
    image: "/certificates/Certificate1 (12).jpeg"
  },

  {
    title: "Master Gen AI & Gen AI tools",
    issuer: "Udemy",
    category: "Generative AI",
    image: "/certificates/Certificate1 (13).jpeg"
  },

  {
    title:
      "AI for future Workspace Program by Intel & CU",
    issuer:
      "Intel Digital Readiness & Chandigarh University",
    category: "Artificial Intelligence",
    image: "/certificates/Certificate1 (14).jpeg"
  }
];

/* =========================================================
   ACTIVITIES
========================================================= */

const activities = [
  "Participated in a university-level hackathon and collaborated on technology solutions under time constraints.",
  "Competed in coding competitions to strengthen problem-solving and algorithmic thinking.",
  "Completed a 30-hour Communication Skills Course with 2 offline Continuous Assessments.",
  "Actively improving DSA through competitive programming practice."
];

/* =========================================================
   SOFT SKILLS
========================================================= */

const softSkills = [
  "Problem Solving & Critical Thinking",
  "Teamwork & Collaboration",
  "Quick Learner & Adaptable",
  "Leadership Skills",
  "Time Management"
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "education",
      "certificates",
      "contact"
    ];

    const onScroll = () => {
      const point = window.scrollY + 180;
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el && el.offsetTop <= point) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div className="site">

      <div className="noise" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-bg" />

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="nav-wrap">

        <nav className="navbar">

          <a
            href="#home"
            className="brand"
            onClick={close}
          >
            Krishan Kant
          </a>

          <div
            className={`nav-links ${
              menuOpen ? "show" : ""
            }`}
          >

            {[
              ["home", "Home"],
              ["about", "About"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["education", "Education"],
              ["certificates", "Certificates"],
              ["contact", "Contact"]
            ].map(([id, label]) => (

              <a
                key={id}
                className={
                  active === id ? "active" : ""
                }
                href={`#${id}`}
                onClick={close}
              >
                {label}
              </a>

            ))}

          </div>

          <a
            className="nav-cta"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-toggle"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </nav>

      </header>

      <main>

        {/* =================================================
            HOME
        ================================================= */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-left reveal">

            <div className="availability">
              <span />
              Open to learning & opportunities
            </div>

            <p className="mini-label">
              HELLO, I'M
            </p>

            <h1>
              Krishan
              <br />
              <em>Kant</em>
            </h1>

            <h2>
              {profile.headline}
            </h2>

            <p className="hero-description">
              B.Tech CSE (AI & ML) student passionate about
              building software, exploring artificial
              intelligence and strengthening problem-solving
              skills through practical projects.
            </p>

            <div className="hero-actions">

              <a
                className="button primary"
                href="#projects"
              >
                Explore my work
                <ArrowDown size={17} />
              </a>

              <a
                className="button ghost"
                href="/Krishan-Kant-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
                <Download size={17} />
              </a>

            </div>

            <div className="socials">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
              >
                <Mail />
              </a>

            </div>

          </div>

          <div className="hero-right reveal delay">

            <div className="profile-frame">

              <div className="frame-glow" />

              <div className="portrait-placeholder">

                <img
                  src="/krishan-kant-profile.jpeg"
                  alt="Krishan Kant"
                  className="profile-photo"
                />

              </div>

              <div className="floating-chip chip-one">
                <Code2 size={16} />
                Software
              </div>

              <div className="floating-chip chip-two">
                <BrainCircuit size={16} />
                AI / ML
              </div>

            </div>

          </div>

          <a
            className="scroll-cue"
            href="#about"
          >
            <span />
            Scroll to explore
          </a>

        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section"
        >

          <div className="section-title">

            <span>01</span>

            <div>

              <p>WHO I AM</p>

              <h2>
                Building toward
                <br />
                <em>AI & software.</em>
              </h2>

            </div>

          </div>

          <div className="about-layout">

            <div className="about-lead">

              <p>
                I'm a B.Tech CSE (AI & ML) student at
                Lovely Professional University, working
                toward a career as an AI/ML Engineer and
                Software Engineer.
              </p>

              <p className="muted">
                I enjoy learning by building practical
                applications and strengthening my
                foundations in programming, algorithms,
                software development, databases and
                artificial intelligence.
              </p>

              <p className="muted">
                My current focus is developing strong
                technical fundamentals while gradually
                moving toward real-world AI/ML and
                software engineering projects.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-title compact">

            <span>02</span>

            <div>

              <p>WHAT I WORK WITH</p>

              <h2>
                Skills & <em>tools.</em>
              </h2>

            </div>

          </div>

          <div className="skills-grid">

            {skills.map(
              ({ name, type, icon: Icon }) => (

                <div
                  className="skill-card"
                  key={name}
                >

                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <div>

                    <span>{type}</span>

                    <h3>
                      {name}
                    </h3>

                  </div>

                  <ArrowUpRight
                    className="skill-arrow"
                    size={18}
                  />

                </div>

              )
            )}

          </div>

          <div className="soft-wrap">

            <span className="soft-label">
              SOFT SKILLS
            </span>

            <div className="soft-list">

              {softSkills.map((s) => (

                <span key={s}>
                  {s}
                </span>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-title compact">

            <span>03</span>

            <div>

              <p>SELECTED WORK</p>

              <h2>
                Projects & <em>experiments.</em>
              </h2>

            </div>

          </div>

          <div className="project-list">

            {projects.map((p) => (

              <article
                className="project-row"
                key={p.title}
              >

                <div className="project-index">
                  {p.number}
                </div>

                <div className="project-main">

                  <span>
                    {p.category}
                  </span>

                  <h3>
                    {p.title}
                  </h3>

                  <p>
                    {p.description}
                  </p>

                  <div className="tags">

                    {p.tags.map((t) => (

                      <span key={t}>
                        {t}
                      </span>

                    ))}

                  </div>

                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <ExternalLink size={20} />
                </a>

              </article>

            ))}

          </div>

        </section>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <section
          id="education"
          className="section"
        >

          <div className="section-title compact">

            <span>04</span>

            <div>

              <p>MY JOURNEY</p>

              <h2>
                Education & <em>growth.</em>
              </h2>

            </div>

          </div>

          <div className="timeline">

            {education.map((item, i) => (

              <div
                className="timeline-item"
                key={item.title}
              >

                <div className="timeline-dot">

                  {i === 0 ? (
                    <GraduationCap size={17} />
                  ) : (
                    <CheckCircle2 size={17} />
                  )}

                </div>

                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-content">

                  <h3>
                    {item.title}
                  </h3>

                  <strong>
                    {item.place}
                  </strong>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="activity-box">

            <div className="activity-head">

              <Trophy size={22} />

              <div>

                <span>
                  ACHIEVEMENTS & ACTIVITIES
                </span>

                <h3>
                  Learning beyond the classroom.
                </h3>

              </div>

            </div>

            <div className="activity-grid">

              {activities.map((a, i) => (

                <div key={a}>

                  <b>
                    {String(i + 1).padStart(2, "0")}
                  </b>

                  <p>
                    {a}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            CERTIFICATES
        ================================================= */}

        <section
          id="certificates"
          className="section"
        >

          <div className="section-title compact">

            <span>05</span>

            <div>

              <p>CONTINUOUS LEARNING</p>

              <h2>
                Certificates & <em>courses.</em>
              </h2>

            </div>

          </div>

          <p
            className="muted"
            style={{
              maxWidth: "720px",
              marginBottom: "40px"
            }}
          >
            Selected certifications and learning
            achievements across artificial intelligence,
            machine learning, programming, data, cloud
            computing and professional development.
          </p>

          <div
            className="certificate-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px"
            }}
          >

            {certificates.map((cert, i) => (

              <article
                className="certificate-card"
                key={`${cert.title}-${i}`}
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                }}
              >

                {/* Certificate Image */}

                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    background: "#111"
                  }}
                >

                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      cursor: "pointer"
                    }}
                    onError={(e) => {
                      console.error(
                        "Certificate image not found:",
                        cert.image
                      );
                    }}
                  />

                </div>

                {/* Certificate Information */}

                <div
                  style={{
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1
                  }}
                >

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "14px"
                    }}
                  >

                    <span
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase"
                      }}
                    >
                      {cert.category}
                    </span>

                    <span
                      style={{
                        fontSize: "12px",
                        opacity: 0.5
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start"
                    }}
                  >

                    <div className="certificate-icon">
                      <Award size={19} />
                    </div>

                    <div>

                      <h3
                        style={{
                          margin: "0 0 7px"
                        }}
                      >
                        {cert.title}
                      </h3>

                      <p
                        style={{
                          margin: 0,
                          opacity: 0.65
                        }}
                      >
                        {cert.issuer}
                      </p>

                    </div>

                  </div>

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-view"
                    style={{
                      marginTop: "20px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px"
                    }}
                  >
                    View Certificate
                    <ExternalLink size={15} />
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-card">

            <div className="contact-kicker">

              <Sparkles size={15} />

              LET'S BUILD SOMETHING

            </div>

            <h2>
              Have an idea?
              <br />
              <em>Let's make it real.</em>
            </h2>

            <p>
              I'm open to learning, collaborating and
              working on interesting software and AI/ML
              projects.
            </p>

            <a
              className="button primary"
              href={`mailto:${profile.email}`}
            >
              Start a conversation
              <Mail size={17} />
            </a>

            <div className="contact-links">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                href={`mailto:${profile.email}`}
              >
                <Mail size={17} />
                Email
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div>

          <span className="brand small">
            Krishan Kant
          </span>

          <p>
            Designed & built by {profile.name}
          </p>

        </div>

        <p>
          © 2026 — Learning, building, growing.
        </p>

      </footer>

    </div>
  );
}

/* =========================================================
   RENDER
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);
