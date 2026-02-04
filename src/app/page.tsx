"use client";

import FadeInUp from "@/components/FadeInUp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const inquiries = [
    "Cultural Bias in Large Language Models",
    "Ethics & Philosophy of Artificial Intelligence",
    "Cognitive Science & Human-Centric AI",
    "Distributed Systems & Financial Infrastructure",
    "Socio-Economic Dynamics of Algorithm Design"
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center">
      <FadeInUp>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[1.1] tracking-tight mb-8">
          Software Engineer, Researcher <span className="text-sage italic">&</span> AI Lab.
        </h1>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <p className="text-xl md:text-2xl text-ink/70 max-w-3xl leading-relaxed mb-12">
          BSc. Computer Science & AI candidate at Minerva University. Deconstructing the intersection of logic, cognitive science, and socio-economic systems through code.
        </p>
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <div className="flex flex-wrap gap-4 mb-24">
          <Link href="/portfolio" className="group flex items-center gap-2 bg-ink text-parchment px-8 py-4 rounded-3xl font-medium transition-transform hover:scale-105">
            Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/about" className="group flex items-center gap-2 bg-white/20 hover:bg-white/40 border border-ink/10 backdrop-blur-sm px-8 py-4 rounded-3xl font-medium transition-all">
            Inquiry Depth
          </Link>
        </div>
      </FadeInUp>

      <FadeInUp delay={0.6}>
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-serif text-2xl mb-6 text-ink/80 tracking-tight">Active Inquiries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {inquiries.map((inquiry, i) => (
              <div key={i} className="flex items-center gap-3 text-ink/70 group cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-sage/60 group-hover:bg-sage transition-colors" />
                <span className="group-hover:text-ink transition-colors">{inquiry}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
