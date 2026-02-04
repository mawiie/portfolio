"use client";

import { Mail, Linkedin, Github, FileText } from "lucide-react";

const socialLinks = [
    { icon: Mail, href: "mailto:wisdom@uni.minerva.edu", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/wisdomifode", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mawiie", label: "GitHub" },
];

export default function SocialLinks() {
    return (
        <div className="fixed top-6 right-6 md:right-12 z-50 flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-white/20 bg-white/30 backdrop-blur-md shadow-lg shadow-black/5 ring-1 ring-black/5">
                {socialLinks.map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-ink/60 hover:text-ink transition-colors"
                        aria-label={social.label}
                    >
                        <social.icon className="w-4 h-4" />
                    </a>
                ))}
            </div>

            <a
                href="/resume.pdf"
                className="flex items-center gap-2 bg-ink text-parchment px-5 py-2.5 rounded-full text-xs font-medium hover:scale-105 transition-transform shadow-lg shadow-black/10"
            >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
            </a>
        </div>
    );
}
