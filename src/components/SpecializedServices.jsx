"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function SpecializedServices() {
    const [activeTab, setActiveTab] = useState(0);

    const activeService = services[activeTab];

    return (
        <section className="relative w-full py-24 bg-white dark:bg-[#090A0C] text-zinc-900 dark:text-white transition-colors duration-300 overflow-hidden">
            {/* Background Image Layer (Subtle Overlay for both modes) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] dark:opacity-[0.05] grayscale pointer-events-none"
                style={{ backgroundImage: "url('/specializedServices.jpg')" }}
            />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 uppercase tracking-widest mb-4 transition-colors">
                        Custom Enterprise Solutions
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight transition-colors">
                        Specialized <span className="text-zinc-500 dark:text-zinc-400">B2B Services</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed transition-colors">
                        Integrated trade operations, regulatory precision, and temperature-controlled supply chains tailored for enterprise buyers.
                    </p>
                </div>

                {/* Tabbed Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Side Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-2.5">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`group w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 border ${isActive
                                        ? "bg-zinc-900 text-white border-zinc-900 shadow-md dark:bg-white/[0.08] dark:border-white/30 dark:text-white dark:shadow-none"
                                        : "bg-zinc-50 border-zinc-200/80 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300 hover:text-zinc-900 dark:bg-white/[0.02] dark:border-white/[0.06] dark:text-zinc-400 dark:hover:bg-white/[0.05] dark:hover:border-white/15 dark:hover:text-zinc-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div
                                            className={`p-2.5 rounded-lg transition-colors ${isActive
                                                ? "bg-white text-zinc-900 dark:bg-white dark:text-black"
                                                : "bg-zinc-200/60 text-zinc-600 group-hover:bg-zinc-200 group-hover:text-zinc-900 dark:bg-white/[0.05] dark:text-zinc-400 dark:group-hover:text-white dark:group-hover:bg-white/10"
                                                }`}
                                        >
                                            <Icon size={20} strokeWidth={1.8} />
                                        </div>
                                        <div className="truncate">
                                            <h4 className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-white dark:text-white" : "text-zinc-800 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white"
                                                }`}>
                                                {service.shortTitle}
                                            </h4>
                                            <p className={`text-[12px] truncate mt-0.5 transition-colors ${isActive ? "text-zinc-300 dark:text-zinc-400" : "text-zinc-500 dark:text-zinc-500"
                                                }`}>
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <ArrowRight
                                        size={16}
                                        className={`transition-all duration-200 flex-shrink-0 ${isActive
                                            ? "text-white translate-x-0 opacity-100 dark:text-white"
                                            : "-translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0 dark:group-hover:opacity-40"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Side Showcase Panel */}
                    <div className="lg:col-span-7 bg-zinc-50/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md relative transition-colors duration-300">

                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                            <div className="flex items-center gap-3.5">
                                <div className="p-3 rounded-xl bg-zinc-900 text-white dark:bg-white/10 dark:border dark:border-white/15 dark:text-white transition-colors">
                                    <activeService.icon size={26} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white transition-colors">
                                        {activeService.shortTitle}
                                    </h3>
                                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 transition-colors">
                                        {activeService.subtitle}
                                    </p>
                                </div>
                            </div>
                            <span className="inline-block px-3 py-1 text-[11px] font-mono font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-200/60 dark:bg-white/[0.05] border border-zinc-300/60 dark:border-white/10 rounded-md transition-colors">
                                {activeService.badge}
                            </span>
                        </div>

                        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed border-b border-zinc-200 dark:border-white/10 pb-6 mb-6 transition-colors">
                            {activeService.description}
                        </p>

                        {/* Feature Checklist */}
                        <div className="mb-8">
                            <h5 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4 transition-colors">
                                What's Included & Features
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {activeService.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5">
                                        <CheckCircle2 size={16} className="text-zinc-900 dark:text-zinc-200 flex-shrink-0 mt-0.5 transition-colors" />
                                        <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-snug transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags Footer */}
                        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-200 dark:border-white/10 transition-colors">
                            {activeService.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-200/50 dark:bg-white/[0.03] border border-zinc-300/50 dark:border-white/[0.08] rounded-md transition-colors"
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