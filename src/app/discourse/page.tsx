"use client";

import FadeInUp from "@/components/FadeInUp";
import Link from "next/link";

const articles = [
    {
        title: "The Phenomenology of Distributed State",
        date: "Oct 2025",
        readTime: "8 min read",
        category: "Philosophy",
        slug: "phenomenology-distributed-state"
    },
    {
        title: "Against Efficiency: A Case for Redundant Systems",
        date: "Sep 2025",
        readTime: "12 min read",
        category: "Engineering",
        slug: "against-efficiency"
    },
    {
        title: "Digital Feudalism and the New Rentiers",
        date: "Aug 2025",
        readTime: "15 min read",
        category: "Political Economy",
        slug: "digital-feudalism"
    }
];

const verse = [
    {
        title: "Entropy/Return",
        date: "2025",
        category: "Verse"
    },
    {
        title: "Silicon Valley Pastoral",
        date: "2024",
        category: "Verse"
    }
];

export default function Discourse() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <FadeInUp>
                <h1 className="font-serif text-5xl md:text-6xl text-ink mb-16">Discourse</h1>
            </FadeInUp>

            <div className="space-y-24">
                <section>
                    <FadeInUp delay={0.2}>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-sage mb-8">Think Pieces</h2>
                    </FadeInUp>
                    <div className="space-y-12">
                        {articles.map((article, i) => (
                            <FadeInUp key={article.slug} delay={0.3 + i * 0.1}>
                                <Link href={`#`} className="group block">
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 justify-between border-b border-ink/10 pb-8 transition-colors group-hover:border-ink/30">
                                        <div className="flex-1">
                                            <h3 className="font-serif text-2xl md:text-3xl text-ink mb-2 group-hover:text-sage transition-colors">
                                                {article.title}
                                            </h3>
                                            <div className="flex gap-3 text-sm text-ink/50">
                                                <span>{article.category}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 text-sm text-ink/40 font-mono shrink-0">
                                            <span>{article.date}</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </FadeInUp>
                        ))}
                    </div>
                </section>

                <section>
                    <FadeInUp delay={0.6}>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-sage mb-8">Verse</h2>
                    </FadeInUp>
                    <div className="space-y-8">
                        {verse.map((poem, i) => (
                            <FadeInUp key={i} delay={0.7 + i * 0.1}>
                                <div className="flex items-baseline justify-between border-b border-ink/5 pb-4">
                                    <h3 className="font-serif text-xl text-ink/80 italic">{poem.title}</h3>
                                    <span className="text-sm text-ink/40 font-mono">{poem.date}</span>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
