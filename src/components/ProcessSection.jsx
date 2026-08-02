"use client";

import { Search, Code2, TestTube2, Rocket, ArrowRight, Sparkles } from "lucide-react";

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Discovery & Planning",
            description: "We analyze your project goals, user needs, and business requirements to craft a clear technical roadmap.",
            badge: "Phase 1"
        },
        {
            number: "02",
            icon: Code2,
            title: "Agile Development",
            description: "Building scalable, clean, and modern web applications using cutting-edge technologies like React & Next.js.",
            badge: "Phase 2"
        },
        {
            number: "03",
            icon: TestTube2,
            title: "Testing & QA",
            description: "Rigorous testing across multiple browsers and mobile devices to ensure peak performance and security.",
            badge: "Phase 3"
        },
        {
            number: "04",
            icon: Rocket,
            title: "Launch & Support",
            description: "Seamless deployment to production servers accompanied by 24/7 continuous monitoring and support.",
            badge: "Phase 4"
        }
    ];

    return (
        <section className="relative w-full py-10 bg-[#EDE8F5] dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
            {/* Ambient Lighting FX */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3D52A0]/10 dark:bg-[#3D52A0]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative mx-auto px-5 sm:px-8 lg:px-12">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#3D52A0] dark:text-slate-300 bg-[#3D52A0]/10 dark:bg-slate-900/80 border border-[#3D52A0]/20 dark:border-slate-800 uppercase tracking-widest mb-4 backdrop-blur-md">
                        <Sparkles size={14} /> How We Work
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3D52A0] dark:text-white leading-tight">
                        Our Proven <span className="text-slate-700 dark:text-slate-400">Development Process</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                        A structured, step-by-step approach designed to turn your idea into a high-performing digital product efficiently.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Connecting Line for Large Screens */}
                    <div className="hidden lg:block absolute top-[28%] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#3D52A0]/30 dark:via-slate-800 to-transparent z-0 pointer-events-none" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="group relative z-10 flex flex-col items-start p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-950/80 border border-[#3D52A0]/15 dark:border-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#3D52A0]/40 dark:hover:border-slate-700"
                            >
                                {/* Step Header & Badges */}
                                <div className="w-full flex items-center justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-[#3D52A0] text-white dark:bg-white dark:text-slate-900 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={22} />
                                    </div>
                                    <span className="text-2xl font-black font-mono text-[#3D52A0]/25 dark:text-slate-700 group-hover:text-[#3D52A0] dark:group-hover:text-slate-400 transition-colors">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <span className="inline-block text-[11px] font-mono font-medium text-[#3D52A0] dark:text-slate-400 uppercase tracking-wider">
                                        {step.badge}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Interactive Hover Indicator */}
                                <div className="mt-6 pt-4 border-t border-[#3D52A0]/10 dark:border-slate-800/80 w-full flex items-center justify-between text-xs font-semibold text-[#3D52A0] dark:text-slate-300 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <span>Learn more</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}