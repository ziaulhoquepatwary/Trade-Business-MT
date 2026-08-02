"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldCheck, Clock, Layers, ArrowRight, CheckCircle2, Sparkles, Trophy } from "lucide-react";

export default function WhyChooseUs() {
    const keyAdvantages = [
        {
            icon: Zap,
            title: "Ultra-Fast Execution",
            description: "High-performance architecture ensuring lightning-fast load times and seamless operations.",
        },
        {
            icon: ShieldCheck,
            title: "Enterprise-Grade Security",
            description: "Bank-grade encryption, PCI-DSS compliance, and end-to-end data privacy protections.",
        },
        {
            icon: Clock,
            title: "24/7 Dedicated Support",
            description: "Around-the-clock technical monitoring and direct chat assistance whenever you need it.",
        },
        {
            icon: Layers,
            title: "Scalable Infrastructure",
            description: "Future-proof MERN & Next.js systems engineered to grow effortlessly with your business.",
        },
    ];

    const quickStats = [
        { value: "99.9%", label: "Uptime Guaranteed" },
        { value: "250+", label: "Projects Delivered" },
        { value: "100%", label: "Client Satisfaction" },
    ];

    return (
        <section className="relative w-full py-24 bg-[#EDE8F5] dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#3D52A0]/10 dark:bg-[#3D52A0]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3D52A0]/15 dark:bg-[#3D52A0]/25 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image Showcase with Floating Glassmorphism Badges */}
                    <div className="lg:col-span-6 relative group">

                        {/* Decorative Background Frame */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#3D52A0]/30 to-[#3D52A0]/10 dark:from-[#3D52A0]/40 dark:to-slate-800 rounded-3xl blur-xl transition duration-500 group-hover:blur-2xl opacity-70" />

                        <div className="relative rounded-2xl overflow-hidden border border-[#3D52A0]/20 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 shadow-2xl">
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src="/why-choose-us.jpg"
                                    alt="Why Choose Us Showcase"
                                    fill
                                    priority
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            </div>

                            {/* Floating Glassmorphism Card 2 (Bottom Left) */}
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-auto bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border border-[#3D52A0]/20 dark:border-slate-800 p-4 rounded-xl shadow-xl flex items-center justify-between sm:justify-start gap-4">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-[#3D52A0] text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-slate-900">A</div>
                                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-slate-900">B</div>
                                    <div className="w-8 h-8 rounded-full bg-[#3D52A0]/80 text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-slate-900">+</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Sparkles size={14} className="text-[#3D52A0] dark:text-slate-300" />
                                        <span className="text-xs font-bold text-slate-900 dark:text-white">Trusted Partner</span>
                                    </div>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400">For 100+ Businesses</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats Grid Under Image */}
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            {quickStats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="p-3.5 rounded-xl bg-white/60 dark:bg-slate-950/60 border border-[#3D52A0]/15 dark:border-slate-800 text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <h4 className="text-lg sm:text-xl font-bold text-[#3D52A0] dark:text-white">{stat.value}</h4>
                                    <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Action CTA Button */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Link
                                href="/pricing"
                                className="relative z-10 inline-flex items-center justify-center overflow-hidden rounded-xl p-[2px] font-semibold text-sm active:scale-[0.98] transition-all duration-300 group shadow-lg shadow-[#3D52A0]/25 hover:shadow-[0_4px_20px_rgba(61,82,160,0.35)] cursor-pointer"
                            >
                                {/* Animated Dual Gradient Layer */}
                                <span className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] via-[#7088D6] to-[#3D52A0] bg-[length:200%_100%] bg-left transition-all duration-500 ease-out group-hover:bg-right" />

                                {/* Button Inner Content */}
                                <span className="relative flex items-center gap-3 px-7 py-3 rounded-[10px] bg-[#3D52A0] text-white transition-all duration-300 dark:bg-slate-900 dark:text-white w-full h-full">
                                    <span>Explore Our Packages & Pricing</span>
                                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>

                            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium relative z-10">
                                Transparent Pricing · No Hidden Fees
                            </span>
                        </div>

                    </div>

                    {/* Right Column: Text & Advantages */}
                    <div className="lg:col-span-6 flex flex-col justify-center">

                        {/* Section Tag */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#3D52A0] dark:text-slate-300 bg-[#3D52A0]/10 dark:bg-slate-900/80 border border-[#3D52A0]/20 dark:border-slate-800 uppercase tracking-widest mb-4 w-fit backdrop-blur-md">
                            <CheckCircle2 size={14} /> Unmatched Value
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3D52A0] dark:text-white leading-tight">
                            Why Choose Us <br className="hidden sm:inline" />
                            <span className="text-slate-700 dark:text-slate-400">Over Other Agencies?</span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
                            We don’t just build software—we craft tailored digital experiences that drive real business revenue. Combining enterprise reliability with modern innovation to keep you ahead of the competition.
                        </p>

                        {/* Interactive Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {keyAdvantages.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group p-4 rounded-xl bg-white/70 dark:bg-slate-950/80 border border-[#3D52A0]/15 dark:border-slate-800 hover:border-[#3D52A0] dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300 backdrop-blur-md"
                                    >
                                        <div className="p-2.5 rounded-lg bg-[#3D52A0]/10 text-[#3D52A0] group-hover:bg-[#3D52A0] group-hover:text-white dark:bg-slate-900 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-900 w-fit transition-colors duration-300 mb-3">
                                            <Icon size={20} />
                                        </div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}