"use client";

import FadeInUp from "@/components/FadeInUp";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
            <FadeInUp>
                <h1 className="font-serif text-5xl md:text-7xl text-ink mb-8">Initiate Protocol.</h1>
                <p className="text-xl text-ink/60 max-w-2xl mb-16 leading-relaxed">
                    Always open to rigorous intellectual exchange, collaboration on complex systems, or a good recommendation for a phenomenology text.
                </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
                <div className="flex flex-col md:flex-row gap-6">
                    <a
                        href="mailto:hello@example.com"
                        className="group flex items-center justify-center gap-3 bg-ink text-parchment px-8 py-4 rounded-3xl font-medium transition-transform hover:scale-105 min-w-[200px]"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Email Me</span>
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-white/50 border border-ink/10 px-8 py-4 rounded-3xl font-medium transition-all hover:bg-white/80 min-w-[200px]"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    </a>

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-white/50 border border-ink/10 px-8 py-4 rounded-3xl font-medium transition-all hover:bg-white/80 min-w-[200px]"
                    >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    </a>
                </div>
            </FadeInUp>
        </div>
    );
}
