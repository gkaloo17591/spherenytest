"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
            { name: "John", title: "President", photo: null },
            { name: "Sean", title: "Chief Information Officer", photo: null },
            { name: "Donna", title: "Controller", photo: null },
        ],
    },
    {
        label: "App Dev & Support",
        members: [
            { name: "Rama", title: "VP of App Dev & Support", photo: null },
            { name: "Linda", title: "Senior App Dev Support", photo: null },
            { name: "June", title: "Help Desk Specialist 2", photo: null },
            { name: "Kate", title: "Help Desk Specialist", photo: null },
            { name: "Gabriel", title: "Help Desk Specialist", photo: null },
        ],
    },
    {
        label: "Infrastructure & Cybersecurity",
        members: [
            { name: "Danny", title: "VP of Infrastructure & Cybersecurity", photo: null },
            { name: "Johnny", title: "System Administrator", photo: null },
        ],
    },
    {
        label: "Risk Management",
        members: [
            { name: "Shane", title: "VP of Claims & Risk", photo: null },
            { name: "Marissa", title: "Claims Associate", photo: null },
        ],
    },
];

function MemberCard({ name, title, photo }: { name: string; title: string; photo: string | null }) {
    const [hovered, setHovered] = useState(false);

    return (
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
            {/* Photo box */}
            <div
                className="relative overflow-hidden mb-4"
                style={{
                    width: 200,
                    height: 240,
                    borderRadius: 16,
                    background: hovered
                        ? "rgba(26,122,191,0.15)"
                        : "rgba(26,122,191,0.07)",
                    border: hovered
                        ? `1px solid rgba(0,195,227,0.5)`
                        : "1px solid rgba(26,122,191,0.2)",
                    transition: "all 0.3s ease",
                    boxShadow: hovered
                        ? `0 0 30px rgba(26,122,191,0.25), 0 8px 32px rgba(0,0,0,0.3)`
                        : "0 4px 16px rgba(0,0,0,0.2)",
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                }}
            >
                {photo ? (
                    <img src={photo} alt={name} className="w-full h-full object-cover object-top"
                         style={{ transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.4s ease" }} />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                        {/* Animated rings on hover */}
                        {hovered && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div style={{ width: 80, height: 80, borderRadius: "50%", border: `1px solid rgba(0,195,227,0.2)`, position: "absolute" }} />
                                <div style={{ width: 100, height: 100, borderRadius: "50%", border: `1px solid rgba(0,195,227,0.1)`, position: "absolute" }} />
                            </motion.div>
                        )}
                        <div style={{
                            width: 56, height: 56, borderRadius: "50%",
                            background: hovered ? `rgba(26,122,191,0.2)` : "rgba(26,122,191,0.1)",
                            border: hovered ? `1px solid rgba(0,195,227,0.4)` : "1px solid rgba(26,122,191,0.2)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.3s ease",
                            boxShadow: hovered ? `0 0 16px rgba(0,195,227,0.2)` : "none",
                        }}>
                            <svg width="24" height="24" viewBox="0 0 36 36" fill="none" style={{ color: hovered ? CYAN : `${CYAN}60`, transition: "color 0.3s" }}>
                                <circle cx="18" cy="13" r="6" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span style={{
                            fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                            color: hovered ? CYAN : `${CYAN}50`,
                            transition: "color 0.3s",
                        }}>
              Add Photo
            </span>
                    </div>
                )}

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                     style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})`, opacity: hovered ? 1 : 0 }} />

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-16 transition-opacity duration-300 pointer-events-none"
                     style={{ background: `linear-gradient(to top, rgba(26,122,191,0.15), transparent)`, opacity: hovered ? 1 : 0 }} />
            </div>

            {/* Name + title */}
            <div style={{ transition: "transform 0.3s ease", transform: hovered ? "translateY(-2px)" : "translateY(0)" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: hovered ? "#f0f4f8" : "#e8edf3", marginBottom: 4, letterSpacing: "-0.01em", transition: "color 0.3s" }}>
                    {name}
                </div>
                <div style={{ fontSize: 12, color: hovered ? "rgba(232,237,243,0.65)" : "rgba(232,237,243,0.4)", lineHeight: 1.5, transition: "color 0.3s" }}>
                    {title}
                </div>
            </div>
        </motion.div>
    );
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
                        <a key={l.href} href={l.href} className="px-4 py-2 text-sm rounded-lg transition-all"
                           style={{ color: l.href === "/team" ? CYAN : "rgba(232,237,243,0.45)", textDecoration: "none" }}
                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e8edf3"; (e.currentTarget as HTMLElement).style.background = "rgba(26,122,191,0.08)"; }}
                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = l.href === "/team" ? CYAN : "rgba(232,237,243,0.45)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >{l.label}</a>
                    ))}
                </div>
                <a href="tel:2128352311" className="hidden md:inline-flex px-5 py-2.5 text-sm font-bold text-white shrink-0"
                   style={{ background: `linear-gradient(135deg,${BLUE},${BLUE_DARK})`, boxShadow: `0 0 16px rgba(26,122,191,0.35)`, borderRadius: 12 }}>
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
                        The seasoned professionals behind SphereNY — spanning Leadership, App Dev & Support, Infrastructure, and Risk Management.
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