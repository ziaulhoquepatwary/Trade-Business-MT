import React from 'react';
import { Code2, Globe, ShoppingCart, Layout, Cpu, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WebDevelopmentSection() {
    const websiteTypes = [
        {
            title: "Corporate & Business Sites",
            desc: "Fast, secure, and professional web presence tailored for your corporate brand identity.",
            icon: Globe
        },
        {
            title: "Custom Web Applications",
            desc: "Tailored SaaS products, complex business logic, and scalable admin dashboards.",
            icon: Cpu
        },
        {
            title: "E-Commerce Platforms",
            desc: "Full-featured online stores with secure payment gateways and inventory management.",
            icon: ShoppingCart
        },
        {
            title: "Portfolio & Blog Sites",
            desc: "Engaging, content-driven layouts designed for personal branding and publishing.",
            icon: Layout
        }
    ];

    return (
        <section className="w-full min-h-screen py-10 px-4 sm:px-8 lg:px-16 transition-colors duration-300 bg-[#EDE8F5] dark:bg-[#000000] text-gray-800 dark:text-gray-100">
            <div className="mx-auto space-y-16">

                {/* Header & Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Main Info */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#3D52A0]/10 text-[#3D52A0] dark:bg-[#3D52A0]/20 dark:text-blue-400 border border-[#3D52A0]/20">
                            <Code2 className="w-4 h-4" />
                            Web Engineering & Solutions
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                            Modern & Scalable <span className="text-[#3D52A0] dark:text-blue-400">Web Development</span> Solutions
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            We build high-performance, secure, and reliable web applications tailored to your business goals. Utilizing cutting-edge technologies, we ensure rapid loading speeds, top-tier security, and seamless responsiveness across all devices.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-medium bg-[#3D52A0] hover:bg-[#3D52A0]/90 dark:bg-[#3D52A0] dark:hover:bg-[#3D52A0]/80 transition-all duration-200 shadow-lg shadow-[#3D52A0]/25 hover:shadow-xl group"
                            >
                                <span>See Our Portfolio</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Key Features Card */}
                    <div className="lg:col-span-5">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-[#09090b] border border-gray-200 dark:border-gray-800 shadow-xl backdrop-blur-sm space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-[#3D52A0] dark:text-blue-400" /> Key Features
                                </span>
                                <span className="flex gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block"></span>
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "100% Mobile & Tablet Responsive Layouts",
                                    "SEO Friendly Architecture & Fast Load Speed",
                                    "High-level Data Security & Protection",
                                    "Easily Scalable & Maintainable Codebase"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#3D52A0] dark:text-blue-400 shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Website Services Grid */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            What We Build
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Customized web solutions designed to meet your specific requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {websiteTypes.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-6 rounded-2xl bg-white dark:bg-[#09090b] border border-gray-200/80 dark:border-gray-800 hover:border-[#3D52A0]/50 dark:hover:border-[#3D52A0]/50 transition-all duration-200 shadow-sm hover:shadow-md group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#3D52A0]/10 dark:bg-[#3D52A0]/20 flex items-center justify-center mb-5 text-[#3D52A0] dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Stack Grid */}
                {/* <div className="p-8 sm:p-10 rounded-2xl bg-white/60 dark:bg-[#09090b] border border-gray-200/80 dark:border-gray-800 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Tech Stack & Tools</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">Technologies we leverage to deliver high-performance applications.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
                        {techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="p-4 rounded-xl bg-white dark:bg-[#000000] border border-gray-200 dark:border-gray-800 text-center space-y-1 hover:border-[#3D52A0] dark:hover:border-blue-500 transition-colors"
                            >
                                <div className="text-sm font-bold text-gray-900 dark:text-gray-100">{tech.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </div> */}

            </div>
        </section >
    );
}