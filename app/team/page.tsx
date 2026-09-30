"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CYAN = "#00c3e3";
const BLUE = "#1a7abf";
const BLUE_DARK = "#0f5fa0";
const LINE = "rgba(26,122,191,0.4)";

const NAV_LINKS = [
    { label: "Services", href: "/" },
    { label: "Team", href: "/team" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

function Card({ name, title, photo, highlight = false }: { name: string; title: string; photo?: string | null; highlight?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center group"
            style={{ width: 120 }}
        >
            <div
                className="relative flex items-center justify-center mb-2 overflow-hidden transition-transform duration-300 group-hover:scale-105"
                style={{
                    width: 72, height: 72,
                    borderRadius: 16,
                    background: highlight ? `linear-gradient(135deg, ${BLUE}, ${CYAN})` : "rgba(26,122,191,0.12)",
                    border: highlight ? `2px solid ${CYAN}` : "1px solid rgba(26,122,191,0.3)",
                    boxShadow: highlight ? `0 0 20px rgba(0,195,227,0.3)` : "none",
                    flexShrink: 0,
                }}
            >
                {photo ? (
                    <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" style={{ color: highlight ? "rgba(255,255,255,0.7)" : `${CYAN}70` }}>
                        <circle cx="18" cy="13" r="6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                )}
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                     style={{ background: "rgba(0,0,0,0.6)", fontSize: 9, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Add Photo
                </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#e8edf3", lineHeight: 1.2, marginBottom: 3 }}>{name}</div>
            <div style={{ fontSize: 10, color: "rgba(232,237,243,0.45)", lineHeight: 1.4, maxWidth: 110 }}>{title}</div>
        </motion.div>
    );
}

function VLine({ h = 28, color = LINE }: { h?: number; color?: string }) {
    return <div style={{ width: 1, height: h, background: color, margin: "0 auto", flexShrink: 0 }} />;
}

export default function Team() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="min-h-screen text-[#e8edf3] overflow-x-hidden" style={{ background: "#060d1a", fontFamily: "'Inter', sans-serif" }}>
            {/* BG orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,122,191,0.2) 0%, transparent 70%)", top: -200, right: -150, filter: "blur(70px)" }} />
                <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,195,227,0.1) 0%, transparent 70%)", bottom: -150, left: -150, filter: "blur(70px)" }} />
            </div>

            {/* NAV */}
            <nav className="fixed top-4 z-50 flex items-center justify-between px-7 py-3"
                 style={{ left: "50%", transform: "translateX(-50%)", width: "calc(100% - 80px)", maxWidth: 1100, background: "rgba(6,13,26,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(26,122,191,0.2)", borderRadius: 16 }}>
                <a href="/" className="flex items-center shrink-0">
                    <img src="/sphereny-logo-light.png" alt="SphereNY" style={{ height: "48px", width: "auto" }} />
                </a>
                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(l => (
                        <a key={l.href} href={l.href}
                           className="px-4 py-2 text-sm rounded-lg transition-all"
                           style={{ color: l.href === "/team" ? CYAN : "rgba(232,237,243,0.45)", textDecoration: "none" }}
                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e8edf3"; (e.currentTarget as HTMLElement).style.background = "rgba(26,122,191,0.08)"; }}
                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = l.href === "/team" ? CYAN : "rgba(232,237,243,0.45)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >{l.label}</a>
                    ))}
                </div>
                <a href="tel:2128352311" className="hidden md:inline-flex px-5 py-2.5 rounded-xl text-sm font-bold text-white shrink-0"
                   style={{ background: `linear-gradient(135deg,${BLUE},${BLUE_DARK})`, boxShadow: `0 0 16px rgba(26,122,191,0.35)` }}>
                    212-835-2311
                </a>
                <button className="md:hidden" style={{ color: "rgba(232,237,243,0.6)" }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        {menuOpen
                            ? <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
                            : <><line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
                        }
                    </svg>
                </button>
            </nav>

            {/* HERO */}
            <section className="relative z-10 pt-36 pb-10 px-6 text-center">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                         style={{ background: "rgba(0,195,227,0.08)", border: "1px solid rgba(0,195,227,0.25)", color: CYAN }}>
                        Our People
                    </div>
                    <h1 className="font-black tracking-tight mb-3" style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
                        Meet the <span style={{ color: "rgba(232,237,243,0.2)" }}>Team</span>
                    </h1>
                    <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(232,237,243,0.4)" }}>
                        The seasoned professionals behind SphereNY — spanning Risk Management and Information Technology.
                    </p>
                </motion.div>
            </section>

            {/* ORG CHART */}
            <section className="relative z-10 pb-28 px-4" style={{ overflowX: "auto" }}>
                <div style={{ minWidth: 1000, maxWidth: 1300, margin: "0 auto", padding: "0 24px" }}>
                    <div className="flex flex-col items-center">

                        {/* JOHN */}
                        <Card name="John" title="President" highlight />
                        <VLine h={32} color={`rgba(0,195,227,0.5)`} />

                        {/* SEAN */}
                        <Card name="Sean" title="Chief Information Officer" highlight />
                        <VLine h={32} color={`rgba(26,122,191,0.5)`} />

                        {/* DONNA */}
                        <Card name="Donna" title="Controller" />
                        <VLine h={32} />

                        {/* RISK | IT SPLIT */}
                        <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                            {/* Top horizontal connector */}
                            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: LINE }} />

                            {/* ── RISK ── */}
                            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <VLine h={24} />
                                <div className="mb-5 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                                     style={{ background: "rgba(26,122,191,0.1)", border: "1px solid rgba(26,122,191,0.3)", color: CYAN }}>
                                    Risk
                                </div>
                                <Card name="Shane" title="VP of Claims & Risk" />
                                <VLine h={28} />
                                <Card name="Marissa" title="Claims Associate" />
                            </div>

                            {/* Center divider */}
                            <div style={{ width: 1, background: "rgba(26,122,191,0.12)", alignSelf: "stretch", margin: "0 16px" }} />

                            {/* ── IT ── */}
                            <div style={{ flex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <VLine h={24} />
                                <div className="mb-5 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                                     style={{ background: "rgba(0,195,227,0.08)", border: "1px solid rgba(0,195,227,0.25)", color: CYAN }}>
                                    Information Technology
                                </div>

                                {/* App Dev + Infra */}
                                <div style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "center", position: "relative" }}>
                                    <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: LINE }} />

                                    {/* APP DEV */}
                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <VLine h={24} />
                                        <div className="mb-4 text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(232,237,243,0.3)" }}>App Dev</div>
                                        <Card name="Rama" title="VP of App Dev & Support" />
                                        <VLine h={28} />

                                        {/* Linda + June */}
                                        <div style={{ width: "80%", position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                                            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: LINE }} />

                                            {/* LINDA */}
                                            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <VLine h={24} />
                                                <Card name="Linda" title="Senior App Dev Support" />
                                            </div>

                                            {/* JUNE + Kate + Gabriel */}
                                            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <VLine h={24} />
                                                <Card name="June" title="Help Desk Specialist 2" />
                                                <VLine h={28} />
                                                <div style={{ width: "100%", position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                                                    <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: LINE }} />
                                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                        <VLine h={24} />
                                                        <Card name="Kate" title="Help Desk Specialist" />
                                                    </div>
                                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                        <VLine h={24} />
                                                        <Card name="Gabriel" title="Help Desk Specialist" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* INFRASTRUCTURE */}
                                    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <VLine h={24} />
                                        <div className="mb-4 text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(232,237,243,0.3)" }}>Infrastructure</div>
                                        <Card name="Danny" title="VP of Infrastructure & Cybersecurity" />
                                        <VLine h={28} />
                                        <Card name="Johnny" title="System Administrator" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    style={{ borderTop: "1px solid rgba(26,122,191,0.15)" }}>
                <div className="flex items-center gap-3">
                    <img src="/sphereny-logo-light.png" alt="SphereNY" style={{ height: "32px", width: "auto" }} />
                    <span className="text-xs" style={{ color: "rgba(232,237,243,0.2)" }}>© 2025 SphereNY. All rights reserved.</span>
                </div>
                <div className="flex gap-8">
                    {NAV_LINKS.map(l => (
                        <a key={l.href} href={l.href} className="text-xs transition-colors"
                           style={{ color: "rgba(232,237,243,0.2)", textDecoration: "none" }}
                           onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CYAN}
                           onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(232,237,243,0.2)"}>
                            {l.label}
                        </a>
                    ))}
                </div>
            </footer>
        </main>
    );
}