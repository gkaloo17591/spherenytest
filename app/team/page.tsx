"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CYAN = "#00c3e3";
const BLUE = "#1a7abf";
const BLUE_DARK = "#0f5fa0";

const NAV_LINKS = [
    { label: "Services", href: "/" },
    { label: "Team", href: "/team" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

const SECTIONS = [
    {
        label: "Leadership",
        members: [
            { slug: "john", name: "John", title: "President", photo: null },
            { slug: "sean", name: "Sean", title: "Chief Information Officer", photo: null },
            { slug: "donna", name: "Donna", title: "Controller", photo: null },
        ],
    },
    {
        label: "App Dev & Support",
        members: [
            { slug: "rama", name: "Rama", title: "VP of App Dev & Support", photo: null },
            { slug: "linda", name: "Linda", title: "Senior App Dev Support", photo: null },
            { slug: "june", name: "June", title: "Help Desk Specialist 2", photo: null },
            { slug: "kate", name: "Kate", title: "Help Desk Specialist", photo: null },
            { slug: "gabriel", name: "Gabriel", title: "Help Desk Specialist", photo: null },
        ],
    },
    {
        label: "Infrastructure & Cybersecurity",
        members: [
            { slug: "danny", name: "Danny", title: "VP of Infrastructure & Cybersecurity", photo: null },
            { slug: "johnny", name: "Johnny", title: "System Administrator", photo: null },
        ],
    },
    {
        label: "Risk Management",
        members: [
            { slug: "shane", name: "Shane", title: "VP of Claims & Risk", photo: null },
            { slug: "marissa", name: "Marissa", title: "Claims Associate", photo: null },
        ],
    },
];

function MemberCard({ slug, name, title, photo }: { slug: string; name: string; title: string; photo: string | null }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={`/team/${slug}`} style={{ textDecoration: "none" }}>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col cursor-pointer"
                style={{ width: 200 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div
                    className="relative overflow-hidden mb-4"
                    style={{
                        width: 200, height: 240, borderRadius: 16,
                        background: hovered ? "rgba(26,122,191,0.15)" : "rgba(26,122,191,0.07)",
                        border: hovered ? `1px solid rgba(0,195,227,0.5)` : "1px solid rgba(26,122,191,0.2)",
                        transition: "all 0.3s ease",
                        boxShadow: hovered ? `0 0 30px rgba(26,122,191,0.25), 0 8px 32px rgba(0,0,0,0.3)` : "0 4px 16px rgba(0,0,0,0.2)",
                        transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    }}
                >
                    {photo ? (
                        <img src={photo} alt={name} className="w-full h-full object-cover object-top"
                             style={{ transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.4s ease" }} />
                    ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, position: "relative" }}>
                            <div style={{ position: "absolute", width: 80, height: 80, borderRadius: "50%", border: `1px solid rgba(0,195,227,${hovered ? 0.2 : 0})`, transition: "all 0.3s", top: "50%", left: "50%", transform: "translate(-50%, -60%)" }} />
                            <div style={{ position: "absolute", width: 104, height: 104, borderRadius: "50%", border: `1px solid rgba(0,195,227,${hovered ? 0.1 : 0})`, transition: "all 0.3s", top: "50%", left: "50%", transform: "translate(-50%, -60%)" }} />
                            <div style={{ width: 56, height: 56, borderRadius: "50%", background: hovered ? "rgba(26,122,191,0.2)" : "rgba(26,122,191,0.1)", border: hovered ? `1px solid rgba(0,195,227,0.4)` : "1px solid rgba(26,122,191,0.2)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", boxShadow: hovered ? `0 0 16px rgba(0,195,227,0.2)` : "none", position: "relative", zIndex: 1 }}>
                                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" style={{ color: hovered ? CYAN : `${CYAN}60`, transition: "color 0.3s" }}>
                                    <circle cx="18" cy="13" r="6" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: hovered ? CYAN : `${CYAN}50`, transition: "color 0.3s", position: "relative", zIndex: 1 }}>
                Add Photo
              </span>
                        </div>
                    )}
                    <div className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                         style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})`, opacity: hovered ? 1 : 0 }} />
                    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none transition-opacity duration-300"
                         style={{ background: `linear-gradient(to top, rgba(26,122,191,0.15), transparent)`, opacity: hovered ? 1 : 0 }} />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-4 transition-opacity duration-300"
                         style={{ opacity: hovered ? 1 : 0 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: CYAN }}>
              View Profile →
            </span>
                    </div>
                </div>

                <div style={{ transition: "transform 0.3s ease", transform: hovered ? "translateY(-2px)" : "translateY(0)" }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: hovered ? "#f0f4f8" : "#e8edf3", marginBottom: 4, letterSpacing: "-0.01em", transition: "color 0.3s" }}>
                        {name}
                    </div>
                    <div style={{ fontSize: 12, color: hovered ? "rgba(232,237,243,0.65)" : "rgba(232,237,243,0.4)", lineHeight: 1.5, transition: "color 0.3s" }}>
                        {title}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export default function Team() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navHovered, setNavHovered] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const navCompact = scrolled && !navHovered;

    return (
        <main className="min-h-screen text-[#e8edf3] overflow-x-hidden" style={{ background: "#060d1a", fontFamily: "'Inter', sans-serif" }}>

            {/* BG orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,122,191,0.2) 0%, transparent 70%)", top: -200, right: -150, filter: "blur(70px)" }} />
                <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,195,227,0.1) 0%, transparent 70%)", bottom: -150, left: -150, filter: "blur(70px)" }} />
            </div>

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

                {/* Desktop links — hidden when compact */}
                <div
                    className="hidden md:flex items-center gap-1 transition-all duration-300"
                    style={{ opacity: navCompact ? 0 : 1, pointerEvents: navCompact ? "none" : "auto", width: navCompact ? 0 : "auto", overflow: "hidden" }}
                >
                    {NAV_LINKS.map(l => (
                        <a key={l.href} href={l.href} className="px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap"
                           style={{ color: l.href === "/team" ? CYAN : "rgba(232,237,243,0.45)", textDecoration: "none" }}
                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e8edf3"; (e.currentTarget as HTMLElement).style.background = "rgba(26,122,191,0.08)"; }}
                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = l.href === "/team" ? CYAN : "rgba(232,237,243,0.45)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >{l.label}</a>
                    ))}
                </div>

                {/* Phone button — hidden when compact */}
                <div
                    className="transition-all duration-300"
                    style={{ opacity: navCompact ? 0 : 1, pointerEvents: navCompact ? "none" : "auto", width: navCompact ? 0 : "auto", overflow: "hidden" }}
                >
                    <a href="tel:2128352311" className="hidden md:inline-flex px-5 py-2.5 text-sm font-bold text-white whitespace-nowrap"
                       style={{ background: `linear-gradient(135deg,${BLUE},${BLUE_DARK})`, boxShadow: `0 0 16px rgba(26,122,191,0.35)`, borderRadius: 12 }}>
                        212-835-2311
                    </a>
                </div>

                {/* Compact mode hint */}
                {navCompact && (
                    <p className="text-xs hidden md:block" style={{ color: "rgba(232,237,243,0.3)", whiteSpace: "nowrap" }}>
                        Hover to expand
                    </p>
                )}

                {/* Mobile toggle */}
                <button className="md:hidden" style={{ color: "rgba(232,237,243,0.6)" }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        {menuOpen
                            ? <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
                            : <><line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>
                        }
                    </svg>
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="fixed inset-x-4 top-20 z-40 p-4"
                     style={{ background: "rgba(6,13,26,0.97)", border: "1px solid rgba(26,122,191,0.2)", backdropFilter: "blur(20px)", borderRadius: 16 }}>
                    {NAV_LINKS.map(l => (
                        <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                           className="block px-4 py-3 text-sm" style={{ color: "rgba(232,237,243,0.6)", textDecoration: "none" }}>
                            {l.label}
                        </a>
                    ))}
                    <a href="tel:2128352311" className="block mt-2 px-4 py-3 text-sm font-semibold text-white text-center"
                       style={{ background: `linear-gradient(135deg,${BLUE},${BLUE_DARK})`, borderRadius: 12 }}>
                        212-835-2311
                    </a>
                </div>
            )}

            {/* HERO */}
            <section className="relative z-10 pt-36 pb-16 px-8 md:px-16">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold mb-6"
                         style={{ background: "rgba(0,195,227,0.08)", border: "1px solid rgba(0,195,227,0.25)", color: CYAN, borderRadius: 100 }}>
                        Our People
                    </div>
                    <h1 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.03em" }}>
                        Meet the <span style={{ color: "rgba(232,237,243,0.2)" }}>Team</span>
                    </h1>
                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(232,237,243,0.4)" }}>
                        The seasoned professionals behind SphereNY. Click any profile to learn more.
                    </p>
                </motion.div>
            </section>

            {/* TEAM SECTIONS */}
            <div className="relative z-10 px-8 md:px-16 pb-28 space-y-24">
                {SECTIONS.map((section, si) => (
                    <section key={si}>
                        <div className="flex items-center gap-6 mb-12">
                            <h2 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: CYAN, whiteSpace: "nowrap" }}>
                                {section.label}
                            </h2>
                            <div style={{ flex: 1, height: 1, background: "rgba(26,122,191,0.2)" }} />
                        </div>
                        <div className="flex flex-wrap gap-10">
                            {section.members.map((member, mi) => (
                                <MemberCard key={mi} {...member} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* FOOTER */}
            <footer className="relative z-10 px-8 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
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
                           onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(232,237,243,0.2)"}
                        >{l.label}</a>
                    ))}
                </div>
            </footer>
        </main>
    );
}