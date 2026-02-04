"use client";

import { useState } from "react";
import FadeInUp from "@/components/FadeInUp";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: "callm-research",
        title: "Supervised vs Narrative Fine-Tuning for Cultural Alignment in Large Language Models: A Case Study on Nigerian Cultural Data",
        field: "AI Research + Capstone",
        summary: "CaLLM (Culturally Adept LLMs) measures and reduces 'Western-default' cultural bias in LLMs by benchmarking and fine-tuning them to reflect Nigerian values.",
        details: "Most LLMs inherit Western cultural priors, causing systematic drift away from local norms in non-Western contexts. CaLLM tackles this as an empirical problem: defining a culture-linked evaluation target (World Values Survey for Nigeria) and testing adaptation strategies. We curated the 'ArchiviNG News' dataset from 15,000+ digitized Nigerian newspapers. Results show that Supervised Fine-Tuning (SFT) improves alignment with minimal capability damage, while narrative-only pretraining can degrade instruction-following.",
        methodology: "Established a Cultural Alignment Score (CAS) using WVS responses. Curated 15,000 scanned newspapers using VLM-based OCR to JSON. Conducted LoRA-based interventions (SFT vs cPT vs Mixed) on Llama 3.1-8B, evaluating against benchmarks like GSM8K, HellaSwag, and MMLU.",
        tags: ["Llama 3", "LoRA", "Fine-Tuning", "WVS", "LLM Evaluation", "Cultural Alignment"],
    },
    {
        id: "meal-estimation",
        title: "AI Lab: Meal Portion Estimation System",
        field: "CV + Deep Learning",
        summary: "An AI-powered food portion estimation system that uses computer vision and a credit card reference to accurately measure meal portions and nutritional content from a single photograph.",
        details: "This full-stack application combines state-of-the-art deep learning models to solve the challenging problem of automated dietary assessment. The system employs a multi-level detection pipeline: a fine-tuned YOLOv8 model identifies credit card corners for precise scale calibration, a DeepLabV3+ segmentation model isolates individual food items, and MiDaS depth estimation calculates 3D volume from 2D images. When the primary YOLO detector fails, an intelligent classical computer vision fallback (adaptive Canny edge detection with line fitting) ensures robust performance across varying conditions.",
        methodology: "Backend: Python, FastAPI, PyTorch, OpenCV. Frontend: React, Vite, TailwindCSS, Axios. ML Models: YOLOv8 (custom fine-tuned), DeepLabV3+ (ResNet50), MiDaS. Features: Corner extrapolation with ISO card dimensions, HEIC support, real-time volume calculation from 2D images.",
        tags: ["Computer Vision", "Deep Learning", "YOLOv8", "PyTorch", "FastAPI", "React", "Nutrition Tech", "Healthcare AI"],
    },
    {
        id: "reinscribe",
        title: "ReInscribe",
        field: "Startup + Engineering",
        summary: "ReInscribe is an AI-augmented decision workspace that transforms collaborative documents into executable data by embedding intelligent agents directly within the writing process.",
        details: "As a founding engineer, I helped architect this platform to bridge the gap between unstructured brainstorming and structured implementation. It moves beyond static prose by allowing AI to live directly inside the editor through custom-engineered interactive components, such as context-aware chat blocks and 'Fillable Chips'. It automatically synthesizes fragmented discussions into distinct 'Schools of Thought'.",
        methodology: "Built with Next.js (App Router), Tiptap v3 (ProseMirror), Supabase, and TypeScript. Implemented a resilient synchronization layer and AI-native features for real-time document summarization and decision categorization.",
        tags: ["Next.js", "ProseMirror", "Supabase", "AI Agents", "State Management", "Founding Engineer"],
        link: "https://www.reinscribe.ai"
    },
    {
        id: "newsflash",
        title: "NewsFlash",
        field: "Backend + Infrastructure",
        summary: "Hypothesis: Highly managed news networks require robust CI/CD and containerization to maintain 99.9% uptime for critical information sharing.",
        details: "Designed a backend-heavy web app to allow users to share and discuss news posts within a tightly managed network. Focused on API scalability and database reliability under high concurrent discussion loads.",
        methodology: "Utilized Flask, PostgreSQL, and Docker. Implemented comprehensive CI/CD pipelines with over 200 unit tests to ensure architectural stability.",
        tags: ["Flask", "PostgreSQL", "Docker", "CI/CD", "Backend Engineering"],
    },
    {
        id: "chargetrails",
        title: "ChargeTrails",
        field: "Full-Stack + Fintech",
        summary: "Hypothesis: Decentralized budget tracking can be optimized by building localized buyer networks to access crowdsourced price data.",
        details: "Developed a web application that builds a network of buyers, enabling users to auto-track budgets from receipts while sharing and accessing best prices for items across cities. The system utilizes RAG pipelines to categorize expenses and provide real-time financial insights.",
        methodology: "Implemented with React, FastAPI, Firebase, and DynamoDB. Leveraged HuggingFace for transaction categorization and source-based financial reasoning.",
        tags: ["React", "FastAPI", "Firebase", "DynamoDB", "HuggingFace", "Fintech"],
    },
];

export default function Portfolio() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
            <FadeInUp>
                <h1 className="font-serif text-5xl md:text-6xl text-ink mb-4">Deep Dives</h1>
                <p className="text-ink/60 text-lg mb-16 max-w-xl">A selection of rigorous technical and research undertakings. Click to expand and explore the methodology.</p>
            </FadeInUp>

            <div className="grid gap-8">
                {projects.map((project, index) => {
                    const isExpanded = expandedId === project.id;
                    return (
                        <FadeInUp key={project.id} delay={index * 0.1 + 0.2}>
                            <motion.div
                                layout
                                onClick={() => toggleExpand(project.id)}
                                className="group cursor-pointer bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/50 p-8 md:p-12 rounded-4xl transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-md"
                            >
                                <motion.div layout className="flex justify-between items-start mb-4">
                                    <div className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-bold tracking-wider uppercase">
                                        {project.field}
                                    </div>
                                    <div className="text-ink/30 group-hover:text-ink/60 transition-colors">
                                        {isExpanded ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                    </div>
                                </motion.div>

                                <motion.h2
                                    layout
                                    className="font-serif text-3xl md:text-4xl text-ink mb-4"
                                >
                                    {project.title}
                                </motion.h2>

                                <motion.p
                                    layout
                                    className="text-lg text-ink/70 max-w-3xl mb-8 leading-relaxed"
                                >
                                    {project.summary}
                                </motion.p>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-ink/5 pt-8 mt-4 grid md:grid-cols-2 gap-12">
                                                <div>
                                                    <h3 className="text-sm font-bold uppercase tracking-wider text-sage mb-4">Inquiry Depth</h3>
                                                    <p className="text-ink/80 leading-relaxed font-light">
                                                        {project.details}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-bold uppercase tracking-wider text-sage mb-4">Methodology</h3>
                                                    <p className="text-ink/80 leading-relaxed font-light mb-8">
                                                        {project.methodology}
                                                    </p>
                                                    <h3 className="text-sm font-bold uppercase tracking-wider text-sage mb-4">Expanded Stack</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map((tag: string) => (
                                                            <span key={tag} className="px-3 py-1 rounded-xl bg-sand/20 border border-ink/5 text-sm text-ink/70">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {(project as any).link && (
                                                        <div className="mt-8">
                                                            <a
                                                                href={(project as any).link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-parchment text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-black/10"
                                                            >
                                                                Visit Website <ArrowUpRight className="w-4 h-4" />
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {!isExpanded && (
                                    <motion.div layout className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-xl bg-parchment border border-ink/5 text-sm text-ink/60">
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-sm text-ink/40 py-1 px-1">
                                                +{project.tags.length - 3} more
                                            </span>
                                        )}
                                    </motion.div>
                                )}
                            </motion.div>
                        </FadeInUp>
                    );
                })}
            </div>
        </div>
    );
}
