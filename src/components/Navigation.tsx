"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Discourse", path: "/discourse" },
    { name: "Contact", path: "/contact" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-full px-6">
            <nav className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/20 bg-white/30 backdrop-blur-md shadow-lg shadow-black/5 ring-1 ring-black/5 max-w-fit overflow-x-auto no-scrollbar">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="relative px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-colors whitespace-nowrap"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/50 rounded-full shadow-sm backdrop-blur-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className={isActive ? "text-ink relative z-10" : "text-ink/60 hover:text-ink relative z-10"}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
