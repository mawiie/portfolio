"use client";

import FadeInUp from "@/components/FadeInUp";

export default function About() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
            <FadeInUp>
                <h1 className="font-serif text-5xl md:text-6xl text-ink mb-16">About</h1>
            </FadeInUp>

            <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="md:col-span-5 space-y-8">
                    <FadeInUp delay={0.2}>
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-4xl bg-sand/20 group shadow-2xl shadow-ink/10">
                            <img
                                src="/wisdomifode.jpg"
                                alt="Wisdom Ifode"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-ink/5 mix-blend-multiply" />
                        </div>
                    </FadeInUp>
                </div>

                <div className="md:col-span-7 space-y-8 text-lg text-ink/80 leading-relaxed font-light">
                    <FadeInUp delay={0.3}>
                        <p>
                            I inhabit the intersection of rigorous engineering and critical theory. My approach to software is not merely utilitarian but architectural—seeking elegance, robustness, and clarity in complex systems.
                        </p>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                        <p>
                            Currently a CS & AI student at Minerva University, my academic journey is underscored by a minor in Cognitive Science. I explore how the architecture of human thought can inform more resilient and culturally conscious machine learning systems.
                        </p>
                    </FadeInUp>
                    <FadeInUp delay={0.5}>
                        <p>
                            From filing patents at NVIDIA for novel AI architectures to developing RAG pipelines at Expatrio, I treat code as a medium for both technical optimization and social investigation.
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={0.6} className="pt-24">
                        <h2 className="font-serif text-3xl mb-12 text-ink">Previous Tenures</h2>
                        <div className="space-y-16">
                            {[
                                {
                                    role: "AI Software Applications Intern",
                                    company: "NVIDIA",
                                    period: "May 2024 – Aug 2025",
                                    location: "Santa Clara, CA",
                                    highlights: [
                                        "Filed a patent for novel AI architecture developed during internship",
                                        "Integrated a CV pipeline for traffic understanding using PyTorch + gRPC",
                                        "Prototyped sign language pipeline using MediaPipe + Three.js"
                                    ]
                                },
                                {
                                    role: "AI Software Intern",
                                    company: "Expatrio",
                                    period: "Jan 2024 – April 2024",
                                    location: "Berlin, Germany",
                                    highlights: [
                                        "Developed a RAG chatbot using Gradio, LangChain, and AstraDB",
                                        "Projected 50% improvement in student engagement"
                                    ]
                                },
                                {
                                    role: "Teaching Assistant (DSA)",
                                    company: "Minerva University",
                                    period: "April 2023 – Present",
                                    location: "San Francisco, CA",
                                    highlights: [
                                        "Taught 230+ students across 115+ sessions in Data Structures and Algorithms",
                                        "Guided student inquiries into Python, Numpy, and Pandas"
                                    ]
                                }
                            ].map((job, i) => (
                                <div key={i} className="relative pl-8 border-l border-ink/10 group">
                                    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-sage ring-4 ring-parchment" />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                        <h3 className="text-xl font-medium text-ink">{job.role}</h3>
                                        <span className="text-sm text-ink/40 font-mono italic">{job.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sage font-medium mb-4">
                                        <span>{job.company}</span>
                                        <span className="text-ink/20 text-xs">•</span>
                                        <span className="text-ink/40 text-sm font-light">{job.location}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {job.highlights.map((point, j) => (
                                            <li key={j} className="text-ink/60 text-base leading-relaxed flex items-start gap-3">
                                                <span className="text-sage mt-1.5 select-none text-[10px]">■</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.7} className="pt-24">
                        <div className="bg-sand/30 p-10 rounded-4xl backdrop-blur-sm border border-white/50">
                            <h2 className="font-serif text-2xl mb-8 text-ink tracking-tight">Technical & Intellectual Stack</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-sage mb-3">Languages</h3>
                                        <p className="text-ink/70 leading-relaxed">Python, C++, TypeScript, Rust</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-sage mb-3">AI / ML</h3>
                                        <p className="text-ink/70 leading-relaxed">PyTorch, LangChain, TensorFlow, Scikit-Learn</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-sage mb-3">Infrastructure</h3>
                                        <p className="text-ink/70 leading-relaxed">Docker, Kubernetes, gRPC, FastApi, PostgreSQL</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-sage mb-3">Philosophical Intersections</h3>
                                        <p className="text-ink/70 leading-relaxed">Epistemology, Cognitive Science, Ethics of Logic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </div>
    );
}
