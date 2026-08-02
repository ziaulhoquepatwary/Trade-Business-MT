import React from 'react';
import { Smartphone, Apple, Android, Layers, ArrowRight, CheckCircle2, Zap, ShieldCheck, RefreshCw } from 'lucide-react';
import { BsAndroid } from 'react-icons/bs';

export default function MobileAppSection() {
    const appTypes = [
        {
            title: "iOS & Android Apps",
            desc: "Cross-platform and native mobile applications tailored for performance, scalability, and seamless UX.",
            icon: Smartphone
        },
        {
            title: "Cross-Platform Development",
            desc: "Single codebase solutions powered by modern frameworks, saving time and development costs.",
            icon: RefreshCw
        },
        {
            title: "Enterprise Mobile Solutions",
            desc: "Secure, high-efficiency business tools designed to integrate smoothly with internal systems.",
            icon: ShieldCheck
        },
        {
            title: "App Maintenance & Upgrades",
            desc: "Regular updates, performance optimizations, and security patches to keep apps running flawlessly.",
            icon: Zap
        }
    ];

    return (
        <section className="w-full py-10 px-4 sm:px-8 lg:px-16 transition-colors duration-300 bg-[#EDE8F5] dark:bg-[#000000] text-gray-800 dark:text-gray-100">
            {/* Full-width container */}
            <div className="w-full space-y-16">

                {/* Header & Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Main Info */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#3D52A0]/10 text-[#3D52A0] dark:bg-[#3D52A0]/20 dark:text-blue-400 border border-[#3D52A0]/20">
                            <Smartphone className="w-4 h-4" />
                            Mobile Engineering & Applications
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                            High-Performance <span className="text-[#3D52A0] dark:text-blue-400">Mobile App</span> Development
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            We build intuitive, robust, and feature-rich mobile applications for iOS and Android. Whether you need a consumer-facing app or a complex enterprise tool, we ensure smooth performance, native-like user experience, and scalable backend integrations.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#portfolio"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-medium bg-[#3D52A0] hover:bg-[#3D52A0]/90 dark:bg-[#3D52A0] dark:hover:bg-[#3D52A0]/80 transition-all duration-200 shadow-lg shadow-[#3D52A0]/25 hover:shadow-xl group"
                            >
                                <span>See Our Portfolio</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Key Capabilities Card */}
                    <div className="lg:col-span-5">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-[#09090b] border border-gray-200 dark:border-gray-800 shadow-xl backdrop-blur-sm space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-[#3D52A0] dark:text-blue-400" /> Mobile Capabilities
                                </span>
                                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                                    <Apple className="w-4 h-4" />
                                    <BsAndroid className="w-4 h-4" />
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Smooth 60 FPS UI Animations & User Experience",
                                    "Offline Mode Support & Local Data Caching",
                                    "Biometric Authentication & Encrypted Storage",
                                    "Push Notifications & Real-Time Data Sync"
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

                {/* Mobile App Services Grid */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Solutions We Offer
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            End-to-end mobile development services built around your target audience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {appTypes.map((item, index) => {
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

            </div>
        </section>
    );
}