"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function SpecializedServices() {
    const [activeTab, setActiveTab] = useState(0);

    const activeService = services[activeTab];

    return (
        <section className="relative w-full py-24 bg-[#EDE8F5] dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.09] dark:opacity-[0.20] grayscale pointer-events-none"
                style={{ backgroundImage: "url('/services-bg.jpg')" }}
            />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3D52A0]/10 dark:bg-[#3D52A0]/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#3D52A0] dark:text-slate-300 bg-[#3D52A0]/10 dark:bg-slate-900/80 border border-[#3D52A0]/20 dark:border-slate-800 uppercase tracking-widest mb-4 backdrop-blur-md transition-colors">
                        Enterprise IT Capability
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3D52A0] dark:text-white leading-tight transition-colors">
                        Specialized <span className="text-slate-700 dark:text-slate-400">IT & Software Services</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed transition-colors">
                        End-to-end software development, cloud infrastructure management, and intelligent digital transformation designed for modern enterprise growth.
                    </p>
                </div>

                {/* Tabbed Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Side Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={service.id || index}
                                    onClick={() => setActiveTab(index)}
                                    className={`group w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border ${isActive
                                        ? "bg-[#3D52A0] text-white border-[#3D52A0] shadow-lg shadow-[#3D52A0]/25 dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:shadow-none"
                                        : "bg-white/60 border-[#3D52A0]/15 text-slate-700 hover:bg-white hover:border-[#3D52A0]/30 dark:bg-slate-950/60 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900/80 dark:hover:border-slate-700 dark:hover:text-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div
                                            className={`p-2.5 rounded-lg transition-all duration-300 ${isActive
                                                ? "bg-white text-[#3D52A0] dark:bg-white dark:text-slate-900"
                                                : "bg-[#3D52A0]/10 text-[#3D52A0] group-hover:bg-[#3D52A0]/20 dark:bg-slate-900 dark:text-slate-300 dark:group-hover:text-white dark:group-hover:bg-slate-800"
                                                }`}
                                        >
                                            <Icon size={20} strokeWidth={1.8} />
                                        </div>
                                        <div className="truncate">
                                            <h4 className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-white dark:text-white" : "text-slate-900 dark:text-slate-200 group-hover:text-[#3D52A0] dark:group-hover:text-white"
                                                }`}>
                                                {service.shortTitle}
                                            </h4>
                                            <p className={`text-[12px] truncate mt-0.5 transition-colors ${isActive ? "text-slate-200 dark:text-slate-400" : "text-slate-600 dark:text-slate-400"
                                                }`}>
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className={`transition-all duration-300 flex-shrink-0 ${isActive
                                            ? "text-white translate-x-0 opacity-100"
                                            : "-translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0 dark:group-hover:opacity-40"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Side Showcase Panel */}
                    <div className="lg:col-span-7 bg-white/70 dark:bg-slate-950/80 border border-[#3D52A0]/15 dark:border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md relative transition-colors duration-300 shadow-sm">

                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                            <div className="flex items-center gap-3.5">
                                <div className="p-3 rounded-xl bg-[#3D52A0] text-white dark:bg-slate-900 dark:border dark:border-slate-800 dark:text-white transition-colors">
                                    <activeService.icon size={26} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                                        {activeService.shortTitle}
                                    </h3>
                                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-0.5 transition-colors">
                                        {activeService.subtitle}
                                    </p>
                                </div>
                            </div>
                            <span className="inline-block px-3 py-1 text-[11px] font-mono font-medium text-[#3D52A0] dark:text-slate-300 bg-[#3D52A0]/10 dark:bg-slate-900 border border-[#3D52A0]/20 dark:border-slate-800 rounded-md transition-colors">
                                {activeService.badge}
                            </span>
                        </div>

                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed border-b border-[#3D52A0]/15 dark:border-slate-800 pb-6 mb-6 transition-colors">
                            {activeService.description}
                        </p>

                        {/* Feature Checklist */}
                        <div className="mb-8">
                            <h5 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 transition-colors">
                                Key Deliverables & Features
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {activeService.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5">
                                        <CheckCircle2 size={16} className="text-[#3D52A0] dark:text-slate-200 flex-shrink-0 mt-0.5 transition-colors" />
                                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags Footer */}
                        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#3D52A0]/15 dark:border-slate-800 transition-colors">
                            {activeService.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-[11px] font-medium text-[#3D52A0] dark:text-slate-400 bg-[#3D52A0]/10 dark:bg-slate-900 border border-[#3D52A0]/15 dark:border-slate-800 rounded-md transition-colors"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}