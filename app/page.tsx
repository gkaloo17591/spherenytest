"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "/team" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: "🔐",
    title: "Information Security",
    desc: "From Security Awareness Training to keynotes and protective products — we train your team to defend your entire digital life.",
    items: ["Security Awareness Training", "Keynote Presentations", "Threat Assessment", "Digital Protection"],
    dot: "bg-cyan-400",
  },
  {
    icon: "⚖️",
    title: "Risk Management",
    desc: "Enterprise Risk Management specializing in construction organizations — covering Insurance, Claims Advocacy, and risk frameworks.",
    items: ["Enterprise Risk Management", "Insurance & Claims", "Operational Risk", "Contractual Frameworks"],
    dot: "bg-blue-400",
  },
  {
    icon: "💻",
    title: "Technology Services",
    desc: "Hosted Solutions, SaaS management, Helpdesk Services, Construction-Specific Software, and building technology integrations.",
    items: ["Hosted Solutions & SaaS", "Helpdesk Services", "Construction Software", "Building Technology"],
    dot: "bg-cyan-300",
  },
  {
    icon: "📊",
    title: "Consulting",
    desc: "Estimating, Pre-Construction, Corporate Management, and Strategic Planning — transforming companies and driving measurable growth.",
    items: ["Estimating & Pre-Construction", "Corporate Management", "Strategic Planning", "Process Transformation"],
    dot: "bg-blue-300",
  },
];

const STATS = [
  { value: "20+", label: "Years Avg. Experience" },
  { value: "4+", label: "Service Areas" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Client Focused" },
];

const TICKER = [
  "Security", "Consulting", "Risk Management", "Information Technology",
  "Helpdesk Services", "SaaS Solutions", "Security Awareness", "Construction Technology",
];

function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

export default function SphereNY() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const mouse = useMousePosition();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navCompact = scrolled && !navHovered;

  const CYAN = "#00c3e3";
  const BLUE = "#1a7abf";
  const BLUE_DARK = "#0f5fa0";

  return (
      <main className="min-h-screen text-[#f0f4f8] overflow-x-hidden" style={{ background: "#060d1a" }}>

        {/* BG orbs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,122,191,0.22) 0%, transparent 70%)", top: -250, right: -150, filter: "blur(60px)" }} />
          <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,195,227,0.12) 0%, transparent 70%)", bottom: -150, left: -150, filter: "blur(60px)" }} />
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,122,191,0.08) 0%, transparent 70%)", top: "50%", left: "40%", filter: "blur(80px)" }} />
        </div>

        {/* Cursor */}
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
            style={{ background: CYAN }}
            animate={{ x: mouse.x - 4, y: mouse.y - 4 }}
            transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.1 }}
        />

        {/* ── NAV ── */}
        <nav
            className="fixed top-4 z-50 flex items-center justify-between transition-all duration-300"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              width: navCompact ? "320px" : "calc(100% - 80px)",
              maxWidth: 1100,
              background: "rgba(6,13,26,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(26,122,191,0.2)",
              borderRadius: 16,
              padding: navCompact ? "8px 20px" : "12px 28px",
            }}
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
        >
          <a href="/" className="flex items-center shrink-0">
            <img
                src="/sphereny-logo-light.png"
                alt="SphereNY"
                style={{
                  height: navCompact ? "32px" : "48px",
                  width: "auto",
                  transition: "height 0.3s ease",
                }}
            />
          </a>

          {/* Desktop links */}
          <div
              className="hidden md:flex items-center gap-1 transition-all duration-300"
              style={{ opacity: navCompact ? 0 : 1, pointerEvents: navCompact ? "none" : "auto", width: navCompact ? 0 : "auto", overflow: "hidden" }}
          >
            {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap"
                   style={{ color: "rgba(240,244,248,0.5)", textDecoration: "none" }}
                   onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#f0f4f8"; (e.currentTarget as HTMLElement).style.background = "rgba(26,122,191,0.08)"; }}
                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(240,244,248,0.5)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >{link.label}</a>
            ))}
          </div>

          {/* Phone button */}
          <div
              className="transition-all duration-300"
              style={{ opacity: navCompact ? 0 : 1, pointerEvents: navCompact ? "none" : "auto", width: navCompact ? 0 : "auto", overflow: "hidden" }}
          >
            <a href="tel:2128352311"
               className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] whitespace-nowrap"
               style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 0 20px rgba(26,122,191,0.4)`, borderRadius: 12 }}>
              212-835-2311
            </a>
          </div>

          {/* Compact hint */}
          {navCompact && (
              <p className="text-xs hidden md:block" style={{ color: "rgba(240,244,248,0.3)", whiteSpace: "nowrap" }}>
                Hover to expand
              </p>
          )}

          <button
              className="md:hidden hover:text-white"
              style={{ color: "rgba(240,244,248,0.6)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen
                  ? <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
                  : <><line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
              }
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                          className="fixed inset-x-4 top-20 z-40 p-4"
                          style={{ background: "rgba(6,13,26,0.97)", border: "1px solid rgba(26,122,191,0.2)", backdropFilter: "blur(20px)", borderRadius: 16 }}>
                {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                       className="block px-4 py-3 text-sm rounded-xl transition-all"
                       style={{ color: "rgba(240,244,248,0.6)", textDecoration: "none" }}
                       onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#f0f4f8"}
                       onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,248,0.6)"}
                    >{link.label}</a>
                ))}
                <a href="tel:2128352311" className="block mt-2 px-4 py-3 text-sm font-semibold text-white text-center"
                   style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, borderRadius: 12 }}>
                  212-835-2311
                </a>
              </motion.div>
          )}
        </AnimatePresence>

        {/* ── HERO ── */}
        <section className="relative z-10 pt-40 pb-28 px-6 md:px-12 text-center overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold mb-8"
                 style={{ background: "rgba(0,195,227,0.08)", border: "1px solid rgba(0,195,227,0.25)", color: CYAN, borderRadius: 100 }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: CYAN }} />
              Seasoned Professionals · 20+ Years Experience
            </div>
            <h1 className="font-black leading-[1.05] tracking-tight mb-6 mx-auto"
                style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", maxWidth: "900px" }}>
               {" "}
              <span style={{ background: `linear-gradient(135deg, ${CYAN}, ${BLUE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Increase Revenues.
            </span>{" "}
              <span style={{ color: "rgba(240,244,248,0.2)" }}>Decrease Expenses.</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "rgba(240,244,248,0.45)" }}>
              SphereNY delivers expert Security, Consulting, Risk Management, and Information Technology services — from large multinationals to growing startups, and everything in between.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#services" className="px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:opacity-90"
                 style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 0 30px rgba(26,122,191,0.45)`, borderRadius: 12 }}>
                Explore Services →
              </a>
              <a href="/team" className="px-8 py-3.5 text-sm font-medium transition-all"
                 style={{ background: "rgba(26,122,191,0.08)", border: `1px solid rgba(26,122,191,0.2)`, color: "rgba(240,244,248,0.6)", borderRadius: 12 }}
                 onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#f0f4f8"}
                 onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,248,0.6)"}>
                Meet the Team
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((s, i) => (
                <div key={i} className="px-4 py-5 text-center relative overflow-hidden"
                     style={{ background: "rgba(26,122,191,0.06)", border: "1px solid rgba(26,122,191,0.18)", borderRadius: 16 }}>
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${BLUE}, transparent)` }} />
                  <div className="text-2xl font-black mb-1"
                       style={{ background: `linear-gradient(135deg, ${CYAN}, ${BLUE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(240,244,248,0.35)" }}>{s.label}</div>
                </div>
            ))}
          </motion.div>
        </section>

        {/* ── TICKER ── */}
        <div className="overflow-hidden py-4" style={{ borderTop: "1px solid rgba(26,122,191,0.12)", borderBottom: "1px solid rgba(26,122,191,0.12)", background: "rgba(26,122,191,0.04)" }}>
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="flex gap-10 whitespace-nowrap w-max">
            {[...TICKER, ...TICKER].map((item, i) => (
                <span key={i} className="text-xs font-semibold tracking-[0.2em] uppercase shrink-0"
                      style={{ color: i % 4 === 0 ? CYAN : "rgba(240,244,248,0.15)" }}>
              ✦ {item}
            </span>
            ))}
          </motion.div>
        </div>

        {/* ── SERVICES ── */}
        <section id="services" className="relative z-10 px-6 md:px-12 py-28 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: CYAN }}>What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-[#f0f4f8]">
              Our <span style={{ color: "rgba(240,244,248,0.2)" }}>Services</span>
            </h2>
            <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: "rgba(240,244,248,0.4)" }}>
              Comprehensive solutions built for organizations that demand security, efficiency, and results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                            className="relative p-7 overflow-hidden cursor-pointer group transition-all hover:scale-[1.01]"
                            style={{ background: "rgba(6,13,26,0.6)", border: "1px solid rgba(26,122,191,0.18)", backdropFilter: "blur(12px)", borderRadius: 20 }}
                            onClick={() => setActiveService(activeService === i ? null : i)}>
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(26,122,191,0.08) 0%, transparent 60%)", borderRadius: 20 }} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${service.dot}`} />
                        <span className="text-xs uppercase tracking-wider" style={{ color: "rgba(240,244,248,0.35)" }}>{service.title}</span>
                      </div>
                      <span className="text-lg transition-all duration-300"
                            style={{ color: activeService === i ? CYAN : "rgba(240,244,248,0.2)", display: "inline-block", transform: activeService === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease, color 0.2s" }}>
                    +
                  </span>
                    </div>
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-[#f0f4f8]">{service.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,248,0.4)" }}>{service.desc}</p>
                    <AnimatePresence>
                      {activeService === i && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3, ease: "easeOut" }} className="overflow-hidden">
                            <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(26,122,191,0.2)" }}>
                              <ul className="space-y-2">
                                {service.items.map((item, j) => (
                                    <motion.li key={j} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                                               transition={{ duration: 0.25, delay: j * 0.05 }}
                                               className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(240,244,248,0.5)" }}>
                                      <span style={{ color: CYAN }}>→</span>{item}
                                    </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>

        {/* ── TEAM TEASER ── */}
        <section className="relative z-10 px-6 md:px-12 py-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                      className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                      style={{ background: "rgba(6,13,26,0.6)", border: "1px solid rgba(26,122,191,0.2)", backdropFilter: "blur(16px)", borderRadius: 24 }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN}, transparent)` }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(26,122,191,0.08) 0%, transparent 60%)" }} />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: CYAN }}>Our People</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3 text-[#f0f4f8]">
                Meet the <span style={{ color: "rgba(240,244,248,0.2)" }}>Team</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-md" style={{ color: "rgba(240,244,248,0.4)" }}>
                Seasoned professionals spanning Risk Management and Information Technology — see the full team and the people behind SphereNY.
              </p>
            </div>
            <a href="/team" className="relative shrink-0 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:opacity-90 whitespace-nowrap"
               style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 0 24px rgba(26,122,191,0.35)`, borderRadius: 12 }}>
              View Team →
            </a>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="relative z-10 px-6 md:px-12 py-28 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                      className="p-8 md:p-14 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden"
                      style={{ background: "rgba(6,13,26,0.6)", border: "1px solid rgba(26,122,191,0.18)", backdropFilter: "blur(16px)", borderRadius: 24 }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN}, transparent)` }} />
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: CYAN }}>Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5 text-[#f0f4f8]">
                Seasoned <span style={{ color: "rgba(240,244,248,0.2)" }}>Professionals</span>
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,244,248,0.45)" }}>
                With an average team experience of 20 years across respective disciplines, SphereNY brings depth, precision, and results to every engagement — from large multinational corporations to growing startups.
              </p>
              <ul className="space-y-3">
                {["Deep expertise across Security, IT, Risk & Consulting", "Proven track record with construction organizations", "Committed to protecting your full digital life", "Strategic planning that transforms companies"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(240,244,248,0.45)" }}>
                      <span style={{ color: CYAN, flexShrink: 0 }}>→</span>{item}
                    </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "📍 Location", value: "New York, NY" },
                { label: "🏗️ Specialization", value: "Construction Technology & Enterprise IT" },
                { label: "🔧 Services", value: "Security · Risk · IT · Consulting" },
                { label: "📞 Support", value: "212-835-2311" },
                { label: "⭐ Experience", value: "20+ Years Per Discipline" },
              ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5"
                       style={{ background: "rgba(26,122,191,0.06)", border: "1px solid rgba(26,122,191,0.15)", borderRadius: 12 }}>
                    <span className="text-xs font-semibold" style={{ color: "rgba(240,244,248,0.35)" }}>{row.label}</span>
                    <span className="text-xs text-right max-w-[55%]" style={{ color: "rgba(240,244,248,0.7)" }}>{row.value}</span>
                  </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="relative z-10 px-6 md:px-12 py-28 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at 50% 100%, rgba(26,122,191,0.18) 0%, transparent 65%)` }} />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                      className="relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold mb-6"
                 style={{ background: "rgba(0,195,227,0.08)", border: "1px solid rgba(0,195,227,0.25)", color: CYAN, borderRadius: 100 }}>
              Open to new clients
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-5 text-[#f0f4f8]">
              Find Out <span style={{ color: "rgba(240,244,248,0.2)" }}>How</span>
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(240,244,248,0.4)" }}>
              Ready to increase revenues, decrease expenses, and protect your organization? Reach out and a SphereNY professional will connect with you.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { label: "Phone", value: "212-835-2311" },
                { label: "Location", value: "New York, NY" },
                { label: "Services", value: "Security · IT · Risk · Consulting" },
                { label: "Hours", value: "24/7 Support" },
              ].map((card, i) => (
                  <div key={i} className="p-5 text-left relative overflow-hidden"
                       style={{ background: "rgba(6,13,26,0.6)", border: "1px solid rgba(26,122,191,0.18)", backdropFilter: "blur(12px)", borderRadius: 16 }}>
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${BLUE}, transparent)` }} />
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: CYAN }}>{card.label}</p>
                    <p className="text-sm font-semibold text-[#f0f4f8]">{card.value}</p>
                  </div>
              ))}
            </div>
            <a href="tel:2128352311" className="inline-flex px-10 py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:opacity-90"
               style={{ background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`, boxShadow: `0 0 32px rgba(26,122,191,0.45)`, borderRadius: 12 }}>
              Call Now → 212-835-2311
            </a>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                style={{ borderTop: "1px solid rgba(26,122,191,0.15)" }}>
          <div className="flex items-center gap-3">
            <img src="/sphereny-logo-light.png" alt="SphereNY" style={{ height: "32px", width: "auto" }} />
            <span className="text-xs" style={{ color: "rgba(240,244,248,0.2)" }}>© 2025 SphereNY. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-xs tracking-wide transition-colors"
                   style={{ color: "rgba(240,244,248,0.2)", textDecoration: "none" }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CYAN}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(240,244,248,0.2)"}>
                  {link.label}
                </a>
            ))}
          </div>
        </footer>
      </main>
  );
}