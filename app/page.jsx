"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Twitter,
  Linkedin,
  Mail,
  Github,
  ArrowUpRight,
  Code2,
  Database,
  Globe,
  Smartphone,
  Layers,
  Zap,
} from "lucide-react";

// ─── GLOBAL STYLES (injected once) ───────────────────────────────────────────
const GlobalStyles = () => {
  useEffect(() => {
    const id = "portfolio-global-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

      :root {
        --bg:      #0a0a0f;
        --bg2:     #111118;
        --bg3:     #1a1a24;
        --accent:  #6c63ff;
        --accent2: #a78bfa;
        --text:    #f0eeff;
        --muted:   #7c7a9a;
        --border:  rgba(108,99,255,0.2);
        --card:    rgba(26,26,36,0.85);
        --glow:    rgba(108,99,255,0.15);
        --hero-title-start: #ffffff;
        --hero-title-end: #a78bfa;
        --hero-title-shadow: 0 10px 28px rgba(108,99,255,0.22);
        --hero-title-stroke: transparent;
        --nav-bg: rgba(10,10,15,0.35);
        --nav-bg-scrolled: rgba(10,10,15,0.88);
        --nav-border-scrolled: rgba(108,99,255,0.22);
      }

      :root[data-theme="light"] {
        --bg:      #f4f6ff;
        --bg2:     #ebefff;
        --bg3:     #ffffff;
        --accent:  #4f46e5;
        --accent2: #7c3aed;
        --text:    #171a2a;
        --muted:   #353d5d;
        --border:  rgba(79,70,229,0.22);
        --card:    rgba(255,255,255,0.88);
        --glow:    rgba(124,58,237,0.14);
        --hero-title-start: #0f1528;
        --hero-title-end: #5b36d6;
        --hero-title-shadow: 0 10px 22px rgba(79,70,229,0.22);
        --hero-title-stroke: rgba(17,24,39,0.18);
        --nav-bg: rgba(244,246,255,0.75);
        --nav-bg-scrolled: rgba(244,246,255,0.95);
        --nav-border-scrolled: rgba(79,70,229,0.24);
      }

      *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
      html  { scroll-behavior: smooth; }
      body  {
        font-family: 'DM Sans', sans-serif;
        background: var(--bg);
        color: var(--text);
        overflow-x: hidden;
      }

      @keyframes blink    { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
      @keyframes floatOrb { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-28px) } }
      @keyframes scrollBar{
        0%   { transform:scaleY(0); transform-origin:top; }
        50%  { transform:scaleY(1); transform-origin:top; }
        50.1%{ transform:scaleY(1); transform-origin:bottom; }
        100% { transform:scaleY(0); transform-origin:bottom; }
      }

      /* scroll-reveal helper */
      .sr, .sr-l, .sr-r {
        opacity: 1;
        transform: none;
        transition: opacity .45s ease, transform .45s ease;
      }
      .sr.visible, .sr-l.visible, .sr-r.visible {
        opacity: 1;
        transform: none;
      }

      /* top progress bar */
      #__progress {
        position:fixed; top:0; left:0; height:2px; width:0%;
        background: linear-gradient(90deg, var(--accent), var(--accent2));
        z-index:9999; transition:width .1s linear;
      }

      /* form focus */
      .pf-input:focus {
        outline:none;
        border-color: var(--accent) !important;
        box-shadow: 0 0 0 4px rgba(108,99,255,0.12);
      }

      /* skill bar animation */
      .skill-fill { width:0%; transition: width 1.2s cubic-bezier(.4,0,.2,1); }

      /* hide scrollbar on carousel */
      .no-scroll { scrollbar-width:none; }
      .no-scroll::-webkit-scrollbar { display:none; }

      .section-pad {
        padding: 110px 48px;
      }

      .about-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1.45fr;
        gap: 88px;
        align-items: center;
      }

      .about-media-card {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 26px;
        background: linear-gradient(160deg, rgba(39, 37, 65, 0.9), rgba(25, 24, 42, 0.92));
        border: 1px solid var(--border);
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .about-media-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 76% 14%, rgba(167, 139, 250, 0.26), transparent 48%),
          linear-gradient(145deg, rgba(108, 99, 255, 0.2), transparent 62%);
        pointer-events: none;
      }

      .about-photo {
        width: min(72%, 370px);
        height: auto;
        object-fit: contain;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 20px 48px rgba(7, 8, 18, 0.7));
      }

      .about-badge {
        position: absolute;
        bottom: -18px;
        right: -18px;
        background: linear-gradient(135deg, var(--accent), var(--accent2));
        color: #fff;
        padding: 11px 20px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 700;
        font-family: "Syne", sans-serif;
        letter-spacing: 0.35px;
        box-shadow: 0 16px 34px rgba(108, 99, 255, 0.38);
      }

      .about-title {
        font-family: "Syne", sans-serif;
        font-size: clamp(34px, 4.3vw, 58px);
        font-weight: 800;
        letter-spacing: -2px;
        line-height: 1.03;
        margin-bottom: 24px;
      }

      .about-stats {
        display: flex;
        gap: 44px;
      }

      @media (max-width: 1000px) {
        .section-pad {
          padding: 92px 30px;
        }
        .about-grid {
          grid-template-columns: 1fr;
          gap: 44px;
        }
        .about-media-wrap {
          max-width: 620px;
          margin: 0 auto;
        }
        .about-title {
          font-size: clamp(31px, 8vw, 50px);
        }
        .about-stats {
          gap: 24px;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      }

      @media (max-width: 640px) {
        .section-pad {
          padding: 76px 18px;
        }
        .about-badge {
          right: 10px;
          bottom: 10px;
          font-size: 11px;
          padding: 9px 14px;
        }
        .about-photo {
          width: min(80%, 290px);
        }
        .about-title {
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .about-stats {
          gap: 16px;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
};

// ─── SCROLL REVEAL HOOK ───────────────────────────────────────────────────────
const useScrollReveal = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".sr,.sr-l,.sr-r");
    const isNearViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= vh * 0.92 && rect.bottom >= vh * 0.08;
    };

    items.forEach((el) => {
      if (isNearViewport(el)) el.classList.add("visible");
    });

    const obs = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }),
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ─── PARTICLES CANVAS ─────────────────────────────────────────────────────────
const ParticlesCanvas = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const ptRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particleColor = darkMode ? "168,162,255" : "79,70,229";
    const baseOpacity = darkMode ? 0.2 : 0.36;
    const randomOpacity = darkMode ? 0.5 : 0.52;
    const linkOpacity = darkMode ? 0.22 : 0.42;
    const pushStrength = darkMode ? 2.2 : 2.7;

    ptRef.current = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1,
      op: Math.random() * randomOpacity + baseOpacity,
    }));

    const LINK = 130;
    const MOUSE = 160;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = ptRef.current;
      const mouse = mouseRef.current;

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        if (mouse.x !== null) {
          const dx = p.x - mouse.x,
            dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE) {
            const f = (MOUSE - d) / MOUSE;
            p.x += (dx / d) * f * pushStrength;
            p.y += (dy / d) * f * pushStrength;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor},${p.op})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${particleColor},${(1 - d / LINK) * linkOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };
    tick();

    const mv = (e) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const ml = () => {
      mouseRef.current = { x: null, y: null };
    };
    canvas.addEventListener("mousemove", mv);
    canvas.addEventListener("mouseleave", ml);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", mv);
      canvas.removeEventListener("mouseleave", ml);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
      }}
    />
  );
};

// ─── TYPEWRITER HOOK ──────────────────────────────────────────────────────────
const useTypewriter = (phrases) => {
  const [txt, setTxt] = useState("");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = phrases[pi];
    let t;
    if (!del) {
      if (ci < word.length) {
        t = setTimeout(() => setCi((c) => c + 1), 80);
      } else {
        t = setTimeout(() => setDel(true), 1800);
      }
    } else {
      if (ci > 0) {
        t = setTimeout(() => setCi((c) => c - 1), 40);
      } else {
        setDel(false);
        setPi((p) => (p + 1) % phrases.length);
      }
    }
    setTxt(word.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, pi, phrases]);

  return txt;
};

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
const Counter = ({ target, suffix = "+" }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let v = 0;
          const step = () => {
            v += Math.ceil(target / 28);
            if (v >= target) {
              setN(target);
              return;
            }
            setN(v);
            requestAnimationFrame(step);
          };
          step();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "'Syne',sans-serif",
        fontSize: 40,
        fontWeight: 800,
        color: "var(--accent2)",
      }}
    >
      {n}
      {suffix}
    </span>
  );
};

// ─── SKILL CARD ───────────────────────────────────────────────────────────────
const SkillCard = ({ name, level, Icon, delay = 0 }) => {
  const ref = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && barRef.current) {
          setTimeout(() => {
            barRef.current.style.width = `${level}%`;
          }, delay);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: false }}
      whileHover={{ y: -5, borderColor: "rgba(108,99,255,0.55)" }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "26px 18px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color .3s",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, var(--glow), transparent 70%)",
          opacity: 0,
          transition: "opacity .35s",
          pointerEvents: "none",
        }}
        className="skill-glow"
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Icon size={28} color="var(--accent)" style={{ marginBottom: 10 }} />
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 700,
            fontSize: 14,
            marginBottom: 14,
          }}
        >
          {name}
        </div>
        <div
          style={{
            height: 4,
            background: "var(--bg3)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            ref={barRef}
            className="skill-fill"
            style={{
              height: "100%",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent2))",
              borderRadius: 2,
            }}
          />
        </div>
        <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6 }}>
          {level}%
        </div>
      </div>
    </motion.div>
  );
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
const ProjectCard = ({ num, title, desc, tags, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay }}
    viewport={{ once: false }}
    whileHover={{ y: -7 }}
    style={{
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: 20,
      padding: 32,
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      backdropFilter: "blur(12px)",
      transition: "border-color .3s",
    }}
  >
    {/* animated top bar */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "linear-gradient(90deg,var(--accent),var(--accent2))",
        transformOrigin: "left",
      }}
    />
    <div
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 2,
        color: "var(--accent)",
        marginBottom: 18,
        fontFamily: "'Syne',sans-serif",
      }}
    >
      {num}
    </div>
    <div
      style={{
        position: "absolute",
        top: 22,
        right: 22,
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--muted)",
      }}
    >
      <ArrowUpRight size={15} />
    </div>
    <h3
      style={{
        fontFamily: "'Syne',sans-serif",
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 10,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        color: "var(--muted)",
        fontSize: 14,
        lineHeight: 1.75,
        marginBottom: 22,
      }}
    >
      {desc}
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {tags.map((t) => (
        <span
          key={t}
          style={{
            fontSize: 12,
            padding: "4px 12px",
            borderRadius: 20,
            background: "rgba(108,99,255,0.1)",
            color: "var(--accent2)",
            border: "1px solid rgba(108,99,255,0.2)",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["home", "about", "projects", "skills", "contact"];

const PROJECTS = [
  {
    num: "01",
    title: "School Management System",
    desc: "Full-featured web system for managing student records, grades, and faculty data with real-time dashboards.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
  },
  {
    num: "02",
    title: "E-Commerce Dashboard",
    desc: "Responsive product management dashboard with analytics, inventory tracking, and order management.",
    tags: ["React.js", "Tailwind CSS", "MySQL"],
  },
  {
    num: "03",
    title: "Portfolio Website",
    desc: "Personal portfolio with smooth animations, dark mode, particle effects, and a contact form.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    num: "04",
    title: "Inventory Tracker",
    desc: "Lightweight inventory system with barcode scanning, low-stock alerts, and exportable PDF reports.",
    tags: ["PHP", "JavaScript", "MySQL"],
  },
];

const SKILLS = [
  { name: "HTML / CSS", level: 92, Icon: Globe },
  { name: "JavaScript", level: 78, Icon: Zap },
  { name: "React.js", level: 72, Icon: Layers },
  { name: "UI / UX Design", level: 68, Icon: Smartphone },
  { name: "PHP", level: 80, Icon: Code2 },
  { name: "MySQL", level: 76, Icon: Database },
  { name: "Responsive Design", level: 88, Icon: Smartphone },
  { name: "API Integration", level: 70, Icon: Zap },
];

const MV = [
  {
    icon: "🎯",
    title: "Mission",
    body: "To innovate and revolutionize digital systems through cutting-edge websites and applications — creating seamless, efficient, and scalable solutions that empower businesses and individuals. Committed to pushing boundaries and delivering exceptional results.",
  },
  {
    icon: "🔭",
    title: "Vision",
    body: "To make everything easier and more accessible through secure, intelligent, and user-friendly digital solutions. I aim to transform how people interact with technology — making it more intuitive, efficient, and enjoyable — by staying ahead of industry trends.",
  },
];

// ─── INPUT STYLE HELPER ───────────────────────────────────────────────────────
const iStyle = {
  width: "100%",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "13px 18px",
  color: "var(--text)",
  fontFamily: "'DM Sans',sans-serif",
  fontSize: 15,
};

// ─────────────────────────────────────────────────────────────────────────────
//  DEFAULT EXPORT  ← this is the page
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  const typed = useTypewriter([
    "Front-End Developer",
    "Back-End Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(nextDarkMode);
  }, []);

  useEffect(() => {
    const nextTheme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }, [darkMode]);

  // scroll progress + stable active-section tracker
  useEffect(() => {
    const sectionIds = ["home", ...NAV_LINKS.filter((id) => id !== "home")];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let ticking = false;
    let rafId = null;

    const updateScrollUi = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const maxScrollable = Math.max(1, doc.scrollHeight - window.innerHeight);

      setScrolled(y > 20);

      const pct = (y / maxScrollable) * 100;
      const bar = document.getElementById("__progress");
      if (bar) bar.style.width = `${pct}%`;

      const marker = y + Math.max(160, window.innerHeight * 0.34);
      let current = "home";

      for (const section of sections) {
        if (section.offsetTop <= marker) current = section.id;
        else break;
      }

      const isAtBottom = window.innerHeight + y >= doc.scrollHeight - 2;
      if (isAtBottom && sections.length) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection((prev) => (prev === current ? prev : current));
      ticking = false;
      rafId = null;
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateScrollUi);
    };

    updateScrollUi();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // scroll reveal
  useScrollReveal();

  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  // ── shared section header ──────────────────────────────────────────────────
  const SectionHead = ({ label, title, accent }) => (
    <div className="sr" style={{ marginBottom: 56 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(34px,5vw,54px)",
          fontWeight: 800,
          letterSpacing: -2,
          lineHeight: 1.1,
        }}
      >
        {title} <span style={{ color: "var(--accent2)" }}>{accent}</span>
      </h2>
    </div>
  );

  // ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
  return (
    <>
      <GlobalStyles />

      {/* scroll progress bar */}
      <div id="__progress" />

      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: scrolled ? "12px 48px" : "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(22px)",
          background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          borderBottom: `1px solid ${scrolled ? "var(--nav-border-scrolled)" : "transparent"}`,
          transition: "padding .3s, background .3s, border-color .3s",
        }}
      >
        {/* logo */}
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: 20,
            background:
              "linear-gradient(135deg, var(--accent), var(--accent2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => navTo("home")}
        >
          JC
        </div>

        {/* links */}
        <div style={{ display: "flex", gap: 30 }}>
          {NAV_LINKS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                navTo(id);
              }}
              style={{
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.4px",
                textTransform: "capitalize",
                color: activeSection === id ? "var(--accent2)" : "var(--muted)",
                transition: "color .2s",
                position: "relative",
              }}
            >
              {id}
              {activeSection === id && (
                <motion.div
                  layoutId="nav-ul"
                  style={{
                    position: "absolute",
                    bottom: -5,
                    left: 0,
                    right: 0,
                    height: 1.5,
                    background: "var(--accent)",
                    borderRadius: 2,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* dark mode toggle */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => setDarkMode((d) => !d)}
          style={{
            padding: 8,
            borderRadius: "50%",
            cursor: "pointer",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid var(--border)",
            color: "var(--text)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </motion.button>
      </motion.nav>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <div
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        {/* particles */}
        <ParticlesCanvas darkMode={darkMode} />

        {/* ambient orbs */}
        {[
          {
            w: 520,
            h: 520,
            top: -110,
            left: -110,
            c: "rgba(108,99,255,0.22)",
            d: 0,
          },
          {
            w: 420,
            h: 420,
            bottom: -60,
            right: -60,
            c: "rgba(167,139,250,0.16)",
            d: -3,
          },
          {
            w: 300,
            h: 300,
            top: "38%",
            left: "44%",
            c: "rgba(99,179,255,0.11)",
            d: -1.5,
          },
        ].map((o, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -26, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: o.d,
            }}
            style={{
              position: "absolute",
              width: o.w,
              height: o.h,
              top: o.top,
              left: o.left,
              bottom: o.bottom,
              right: o.right,
              borderRadius: "50%",
              background: `radial-gradient(circle,${o.c},transparent 70%)`,
              filter: "blur(64px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: 840,
            padding: "0 24px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "var(--accent2)",
              border: "1px solid var(--border)",
              padding: "6px 20px",
              borderRadius: 20,
              marginBottom: 28,
            }}
          >
            Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(52px,9vw,102px)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -4,
              marginBottom: 22,
              color: "var(--hero-title-start)",
              background:
                "linear-gradient(135deg,var(--hero-title-start) 20%,var(--hero-title-end))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px var(--hero-title-stroke)",
              textShadow: "var(--hero-title-shadow)",
            }}
          >
            Joshua Calma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            style={{
              fontSize: "clamp(18px,2.5vw,24px)",
              color: "var(--muted)",
              fontWeight: 300,
              marginBottom: 46,
              minHeight: 38,
            }}
          >
            {typed}
            <span
              style={{ color: "var(--accent)", animation: "blink 1s infinite" }}
            >
              |
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -2,
                boxShadow: "0 12px 40px rgba(108,99,255,0.42)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                fontFamily: "'DM Sans',sans-serif",
              }}
              onClick={(e) => {
                e.preventDefault();
                navTo("projects");
              }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2, borderColor: "var(--accent2)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                fontFamily: "'DM Sans',sans-serif",
                transition: "border-color .2s",
              }}
              onClick={(e) => {
                e.preventDefault();
                navTo("contact");
              }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{
            position: "absolute",
            bottom: 38,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "var(--muted)",
            fontSize: 10,
            letterSpacing: "2px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: 1,
              height: 50,
              background:
                "linear-gradient(to bottom,var(--accent),transparent)",
              animation: "scrollBar 2s ease-in-out infinite",
            }}
          />
          SCROLL
        </motion.div>
      </div>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "110px 48px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.45fr",
            gap: 88,
            alignItems: "center",
          }}
        >
          {/* image */}
          <div className="sr-l" style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: 24,
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg,rgba(108,99,255,0.14),transparent)",
                }}
              />
              <img
                src="/assets/images/me.png"
                alt="Profile Picture"
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: 30,
                  position: "relative",
                  zIndex: 1,
                }}
              />{" "}
              {/* <div style={{
                fontFamily: "'Syne',sans-serif", fontSize: 110,
                fontWeight: 800, color: "rgba(108,99,255,0.14)", position: "relative", zIndex: 1,
              }}>JC</div> */}
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: false }}
              style={{
                position: "absolute",
                bottom: -18,
                right: -18,
                background: "var(--accent)",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 10,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'Syne',sans-serif",
              }}
            >
              BSIT Graduate
            </motion.div>
          </div>

          {/* text */}
          <div className="sr-r">
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 10,
              }}
            >
              About Me
            </div>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(30px,4vw,50px)",
                fontWeight: 800,
                letterSpacing: -2,
                lineHeight: 1.1,
                marginBottom: 22,
              }}
            >
              Building <span style={{ color: "var(--accent2)" }}>digital</span>{" "}
              experiences
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.82,
                marginBottom: 14,
                fontSize: 16,
              }}
            >
              I'm a graduating student with a Bachelor of Science in Information
              Technology. My passion lies in developing web-based systems that
              are both functional and visually engaging.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.82,
                marginBottom: 32,
                fontSize: 16,
              }}
            >
              I'm always eager to learn and improve my skills to create
              efficient and user-friendly applications. Let's build something
              great together!
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 9,
                marginBottom: 40,
              }}
            >
              {[
                "HTML/CSS",
                "Tailwind CSS",
                "React.js",
                "JavaScript",
                "PHP",
                "MySQL",
              ].map((t) => (
                <motion.span
                  key={t}
                  whileHover={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                  }}
                  style={{
                    padding: "5px 15px",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    fontSize: 13,
                    color: "var(--muted)",
                    cursor: "default",
                    transition: "all .2s",
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 48 }}>
              {[
                { n: 10, l: "Projects Built" },
                { n: 6, l: "Technologies" },
                { n: 2, l: "Years Learning" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <Counter target={s.n} />
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginTop: 4,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────────────── */}
      <section
        id="projects"
        style={{ background: "var(--bg2)", padding: "110px 0" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHead label="My Work" title="Selected" accent="Projects" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
              gap: 24,
            }}
          >
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.num} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────── */}
      <section id="skills" style={{ padding: "110px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead label="Expertise" title="My" accent="Skills" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(155px,1fr))",
              gap: 16,
            }}
          >
            {SKILLS.map((s, i) => (
              <SkillCard
                key={s.name}
                name={s.name}
                level={s.level}
                Icon={s.Icon}
                delay={i * 65}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ───────────────────────────────────────────── */}
      <section
        id="mission-vision"
        style={{ background: "var(--bg2)", padding: "110px 0" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHead label="Philosophy" title="Mission &" accent="Vision" />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          >
            {MV.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.14 }}
                viewport={{ once: false }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 22,
                  padding: "46px 38px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -55,
                    right: -55,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "var(--glow)",
                    filter: "blur(38px)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    marginBottom: 22,
                    fontSize: 22,
                    background:
                      "linear-gradient(135deg,var(--accent),var(--accent2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 26,
                    fontWeight: 800,
                    marginBottom: 14,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.82,
                    fontSize: 15,
                  }}
                >
                  {c.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "110px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHead label="Get In Touch" title="Let's" accent="Connect" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.25fr",
              gap: 88,
              alignItems: "start",
            }}
          >
            {/* left info */}
            <div className="sr-l">
              <h3
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 26,
                  fontWeight: 800,
                  marginBottom: 14,
                }}
              >
                Have a project in mind?
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.82,
                  marginBottom: 38,
                  fontSize: 16,
                }}
              >
                I'm currently open to new opportunities. Whether you have a
                project or just want to say hi, my inbox is always open.
              </p>
              {[
                {
                  icon: <Mail size={17} />,
                  label: "joshuacalma@email.com",
                  href: "mailto:joshuacalma@email.com",
                },
                {
                  icon: <Linkedin size={17} />,
                  label: "LinkedIn Profile",
                  href: "#",
                },
                {
                  icon: <Github size={17} />,
                  label: "GitHub Profile",
                  href: "#",
                },
              ].map((lk) => (
                <motion.a
                  key={lk.label}
                  href={lk.href}
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                    color: "var(--muted)",
                    textDecoration: "none",
                    marginBottom: 18,
                    fontSize: 15,
                    transition: "color .2s",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: "1px solid var(--border)",
                      borderRadius: 9,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {lk.icon}
                  </div>
                  {lk.label}
                </motion.a>
              ))}
            </div>

            {/* form */}
            <motion.form
              onSubmit={handleSend}
              className="sr-r"
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                }}
              >
                {[
                  { l: "Name", t: "text", ph: "Your name" },
                  { l: "Email", t: "email", ph: "your@email.com" },
                ].map((f) => (
                  <div key={f.l}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "var(--muted)",
                        letterSpacing: ".5px",
                        marginBottom: 7,
                        textTransform: "uppercase",
                      }}
                    >
                      {f.l}
                    </label>
                    <input
                      type={f.t}
                      placeholder={f.ph}
                      className="pf-input"
                      style={iStyle}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--muted)",
                    letterSpacing: ".5px",
                    marginBottom: 7,
                    textTransform: "uppercase",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="pf-input"
                  style={iStyle}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--muted)",
                    letterSpacing: ".5px",
                    marginBottom: 7,
                    textTransform: "uppercase",
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project…"
                  rows={5}
                  className="pf-input"
                  style={{ ...iStyle, resize: "vertical", minHeight: 126 }}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                  boxShadow: "0 12px 40px rgba(108,99,255,0.42)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: 15,
                  background: sent
                    ? "#10b981"
                    : "linear-gradient(135deg,var(--accent),var(--accent2))",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'DM Sans',sans-serif",
                  transition: "background .4s",
                }}
              >
                {sent ? "Message Sent! ✓" : "Send Message →"}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          padding: "40px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              marginBottom: 22,
            }}
          >
            {[
              <Twitter size={17} />,
              <Linkedin size={17} />,
              <Mail size={17} />,
              <Github size={17} />,
            ].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  y: -3,
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
                style={{
                  width: 42,
                  height: 42,
                  border: "1px solid var(--border)",
                  borderRadius: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "all .2s",
                }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: 17,
              marginBottom: 8,
              background:
                "linear-gradient(135deg,var(--accent),var(--accent2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Joshua Calma
          </div>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>
            © {new Date().getFullYear()} Joshua Calma. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
