import Link from "next/link";
import { ArrowUpRight, Code2, Cloud, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
    const stats = [
        { value: "99.9%", label: "Uptime Guaranteed", icon: Cloud },
        { value: "100+", label: "Enterprise Projects", icon: Code2 },
        { value: "10x", label: "Performance Boost", icon: Zap },
        { value: "ISO 27001", label: "Certified Security", icon: ShieldCheck },
        { value: "AI-Ready", label: "Scalable Systems", icon: Cpu },
    ];

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-[#EDE8F5] dark:bg-black text-slate-900 dark:text-white">

            {/* Background Video with Left Overlay Mask for Text Clarity */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 opacity-60 dark:opacity-40 filter contrast-110"
                >
                    <source src="/benner4.mp4" type="video/mp4" />
                </video>

                {/* Left Side Light/Dark Backdrop Layer for Text Readability & Right Side Clear Video */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#EDE8F5] via-[#EDE8F5]/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent xl:w-2/3" />

                {/* Subtle Grid Pattern Layer */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3D52A00d_1px,transparent_1px),linear-gradient(to_bottom,#3D52A00d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="relative z-10 mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 pt-28 pb-16 w-full flex flex-col justify-between items-center xl:items-start text-center xl:text-left min-h-[85vh]">

                {/* Top Badge Tag */}
                <div className="flex items-center justify-center xl:justify-start gap-3 pt-4 w-full">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D52A0]/10 dark:bg-slate-900/80 border border-[#3D52A0]/20 dark:border-slate-800 text-xs font-mono uppercase tracking-widest text-[#3D52A0] dark:text-slate-200 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3D52A0] dark:bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3D52A0] dark:bg-white"></span>
                        </span>
                        Next-Gen Software & IT Solutions
                    </div>
                </div>

                {/* Main Headline & Description */}
                <div className="my-auto py-10 max-w-4xl space-y-6 flex flex-col items-center xl:items-start w-full">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#3D52A0] dark:text-white">
                        Engineering Digital. <br />
                        <span className="text-slate-700 dark:text-slate-400">
                            Powering Tomorrow.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 max-w-2xl font-normal dark:font-light leading-relaxed">
                        We build high-performance web applications, cloud architecture, AI-driven software systems, and enterprise IT infrastructures tailored to scale your global business.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 pt-4">
                        {/* Primary Button with Dual Gradient & Left-to-Right Hover */}
                        <Link
                            href="/services"
                            className="relative inline-flex items-center justify-center overflow-hidden rounded-xl p-[2px] font-semibold text-sm active:scale-95 transition-all duration-300 group shadow-md hover:shadow-[0_4px_20px_rgba(61,82,160,0.35)]"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] via-[#7088D6] to-[#3D52A0] bg-[length:200%_100%] bg-left transition-all duration-500 ease-out group-hover:bg-right" />
                            <span className="relative flex items-center gap-2.5 px-7 py-4 rounded-[10px] text-white transition-all duration-300">
                                Explore Services
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/70 dark:bg-slate-950/80 border border-[#3D52A0]/20 dark:border-slate-800 text-[#3D52A0] dark:text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:bg-[#3D52A0]/10 dark:hover:bg-slate-900 hover:border-[#3D52A0]/40 dark:hover:border-slate-700"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Bottom Metric Strip */}
                <div className="w-full pt-8 border-t border-[#3D52A0]/15 dark:border-slate-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-center">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="group flex flex-col sm:flex-row items-center justify-center gap-3 p-3 rounded-2xl transition-all duration-300 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300  dark:hover:bg-slate-900/60 hover:scale-105 border border-transparent hover:border-[#3D52A0]/20 dark:hover:border-slate-800"
                            >
                                <div className="p-3 rounded-xl bg-[#3D52A0]/10 dark:bg-slate-900/80 border border-[#3D52A0]/20 dark:border-slate-800 text-[#3D52A0] dark:text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                                    <Icon className="w-5 h-5 text-[#3D52A0] dark:text-slate-300 animate-pulse" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-xl lg:text-2xl font-bold font-mono text-[#3D52A0] dark:text-white tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}