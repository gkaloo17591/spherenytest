"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const CYAN = "#00c3e3";
const BLUE = "#1a7abf";
const BLUE_DARK = "#0f5fa0";

// ── EDIT ALL PROFILES HERE ──
const PROFILES: Record<string, {
    name: string;
    title: string;
    department: string;
    photo: string | null;
    bio: string;
    education?: { institution: string; degree: string }[];
    affiliations?: string[];
    expertise?: string[];
}> = {
    john: {
        name: "John",
        title: "President",
        department: "Leadership",
        photo: null, // e.g. "/photos/john.jpg"
        bio: "Add John's biography here. Describe his background, experience, and leadership role at SphereNY.",
        education: [
            { institution: "Add University", degree: "Add Degree" },
        ],
        affiliations: [
            "Add affiliation here",
            "Add affiliation here",
        ],
        expertise: ["Leadership", "Strategy", "Business Development"],
    },
    sean: {
        name: "Sean",
        title: "Chief Information Officer",
        department: "Leadership",
        photo: null,
        bio: "Add Sean's biography here. Describe his technical background and leadership of the IT division at SphereNY.",
        education: [
            { institution: "Add University", degree: "Add Degree" },
        ],
        affiliations: [],
        expertise: ["IT Strategy", "Cybersecurity", "Infrastructure", "App Development"],
    },
    donna: {
        name: "Donna",
        title: "Controller",
        department: "Leadership",
        photo: null,
        bio: "Add Donna's biography here. Describe her financial background and role managing operations at SphereNY.",
        education: [],
        affiliations: [],
        expertise: ["Financial Management", "Operations", "Compliance"],
    },
    rama: {
        name: "Rama",
        title: "VP of App Dev & Support",
        department: "App Dev & Support",
        photo: null,
        bio: "Add Rama's biography here. Describe her experience leading application development and support teams.",
        education: [],
        affiliations: [],
        expertise: ["App Development", "Team Leadership", "Technical Support"],
    },
    linda: {
        name: "Linda",
        title: "Senior App Dev Support",
        department: "App Dev & Support",
        photo: null,
        bio: "Add Linda's biography here.",
        education: [],
        affiliations: [],
        expertise: ["Application Support", "Development", "Troubleshooting"],
    },
    june: {
        name: "June",
        title: "Help Desk Specialist 2",
        department: "App Dev & Support",
        photo: null,
        bio: "Add June's biography here.",
        education: [],
        affiliations: [],
        expertise: ["Help Desk", "Technical Support", "User Support"],
    },
    kate: {
        name: "Kate",
        title: "Help Desk Specialist",
        department: "App Dev & Support",
        photo: null,
        bio: "Add Kate's biography here.",
        education: [],
        affiliations: [],
        expertise: ["Help Desk", "Technical Support", "Customer Service"],
    },
    gabriel: {
        name: "Gabriel",
        title: "Help Desk Specialist",
        department: "App Dev & Support",
        photo: null,
        bio: "Add Gabriel's biography here.",
        education: [],
        affiliations: [],
        expertise: ["Help Desk", "IT Support", "Cybersecurity"],
    },
    danny: {
        name: "Danny",
        title: "VP of Infrastructure & Cybersecurity",
        department: "Infrastructure & Cybersecurity",
        photo: null,
        bio: "Add Danny's biography here. Describe his experience leading infrastructure and cybersecurity initiatives.",
        education: [],
        affiliations: [],
        expertise: ["Infrastructure", "Cybersecurity", "Network Security", "Systems Architecture"],
    },
    johnny: {
        name: "Johnny",
        title: "System Administrator",
        department: "Infrastructure & Cybersecurity",
        photo: null,
        bio: "Add Johnny's biography here.",
        education: [],
        affiliations: [],
        expertise: ["System Administration", "Network Management", "Server Infrastructure"],
    },
    shane: {
        name: "Shane",
        title: "VP of Claims & Risk",
        department: "Risk Management",
        photo: null,
        bio: "Add Shane's biography here. Describe his background in risk management and claims advocacy.",
        education: [],
        affiliations: [],
        expertise: ["Risk Management", "Claims Advocacy", "Insurance", "Construction Risk"],
    },
    marissa: {
        name: "Marissa",
        title: "Claims Associate",
        department: "Risk Management",
        photo: null,
        bio: "Add Marissa's biography here.",
        education: [],
        affiliations: [],
        expertise: ["Claims Processing", "Risk Analysis", "Insurance"],
    },
};

export default function ProfilePage({ params }: { params: { slug: string } }) {
    const profile = PROFILES[params.slug];
    if (!profile) notFound();

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
                    {[
                        { label: "Services", href: "/" },
                        { label: "Team", href: "/team" },
                        { label: "About", href: "/#about" },
                        { label: "Contact", href: "/#contact" },
                    ].map(l => (
                        <a key={l.href} href={l.href} className="px-4 py-2 text-sm rounded-lg transition-all"
                           style={{ color: "rgba(232,237,243,0.45)", textDecoration: "none" }}
                           onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#e8edf3"; (e.currentTarget as HTMLElement).style.background = "rgba(26,122,191,0.08)"; }}
                           onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(232,237,243,0.45)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >{l.label}</a>
                    ))}
                </div>
                <a href="tel:2128352311" className="hidden md:inline-flex px-5 py-2.5 text-sm font-bold text-white shrink-0"
                   style={{ background: `linear-gradient(135deg,${BLUE},${BLUE_DARK})`, boxShadow: `0 0 16px rgba(26,122,191,0.35)`, borderRadius: 12 }}>
                    212-835-2311
                </a>
            </nav>

            {/* CONTENT */}
            <section className="relative z-10 pt-36 pb-28 px-8 md:px-16 max-w-5xl mx-auto">

                {/* Back link */}
                <motion.a href="/team" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
                          className="inline-flex items-center gap-2 mb-10 text-xs font-bold tracking-widest uppercase transition-colors"
                          style={{ color: CYAN, textDecoration: "none" }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >
                    ← Back to Our People
                </motion.a>

                {/* Name + title */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: CYAN }}>{profile.department}</div>
                    <h1 className="font-black uppercase mb-2" style={{ fontSize: "clamp(2.5rem,7vw,5.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                        {profile.name}
                    </h1>
                    <p className="text-lg mb-12" style={{ color: "rgba(232,237,243,0.4)" }}>{profile.title}</p>
                </motion.div>

                {/* Photo + bio grid */}
                <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">

                    {/* Photo */}
                    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <div style={{
                            width: "100%", aspectRatio: "3/4", borderRadius: 16,
                            background: "rgba(26,122,191,0.08)",
                            border: "1px solid rgba(26,122,191,0.2)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            overflow: "hidden", position: "relative",
                        }}>
                            {profile.photo ? (
                                <img src={profile.photo} alt={profile.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                            ) : (
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                                    <svg width="48" height="48" viewBox="0 0 36 36" fill="none" style={{ color: `${CYAN}40` }}>
                                        <circle cx="18" cy="13" r="6" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M4 32c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: `${CYAN}50` }}>Add Photo</span>
                                </div>
                            )}
                            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${BLUE}, ${CYAN})` }} />
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                                className="space-y-10">

                        {/* Bio */}
                        <div>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(232,237,243,0.55)", lineHeight: 1.9 }}>
                                {profile.bio}
                            </p>
                        </div>

                        {/* Expertise */}
                        {profile.expertise && profile.expertise.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: CYAN }}>Areas of Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profile.expertise.map((item, i) => (
                                        <span key={i} className="px-3 py-1.5 text-xs font-medium"
                                              style={{ background: "rgba(26,122,191,0.08)", border: "1px solid rgba(26,122,191,0.2)", borderRadius: 8, color: "rgba(232,237,243,0.6)" }}>
                      {item}
                    </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Education */}
                        {profile.education && profile.education.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: CYAN }}>Education</h3>
                                <div className="space-y-4">
                                    {profile.education.map((edu, i) => (
                                        <div key={i} className="pl-4" style={{ borderLeft: `2px solid rgba(26,122,191,0.3)` }}>
                                            <p style={{ fontSize: 14, color: "rgba(232,237,243,0.7)", marginBottom: 2 }}>{edu.institution}</p>
                                            <p style={{ fontSize: 13, color: "rgba(232,237,243,0.4)", fontStyle: "italic" }}>{edu.degree}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Affiliations */}
                        {profile.affiliations && profile.affiliations.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: CYAN }}>Affiliations</h3>
                                <ul className="space-y-2">
                                    {profile.affiliations.map((aff, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(232,237,243,0.5)" }}>
                                            <span style={{ color: CYAN, flexShrink: 0 }}>→</span>{aff}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 px-8 md:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    style={{ borderTop: "1px solid rgba(26,122,191,0.15)" }}>
                <div className="flex items-center gap-3">
                    <img src="/sphereny-logo-light.png" alt="SphereNY" style={{ height: "32px", width: "auto" }} />
                    <span className="text-xs" style={{ color: "rgba(232,237,243,0.2)" }}>© 2025 SphereNY. All rights reserved.</span>
                </div>
            </footer>
        </main>
    );
}