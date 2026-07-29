import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Thermometer, Globe2, Clock, Activity } from "lucide-react";

export default function Hero() {
    const stats = [
        { value: "-25°C", label: "Cold Chain Precision", icon: Thermometer },
        { value: "100%", label: "HACCP & ISO Compliant", icon: ShieldCheck },
        { value: "120+", label: "Global Trade Routes", icon: Globe2 },
        { value: "99.8%", label: "On-Time Delivery Rate", icon: Clock },
        { value: "24/7", label: "Real-Time IoT Monitored", icon: Activity },
    ];

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 bg-white dark:bg-black text-slate-900 dark:text-white">

            {/* Background Video with Dual Theme Gradient Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 opacity-30 dark:opacity-40 filter contrast-125 grayscale"
                >
                    <source src="/benner4.mp4" type="video/mp4" />
                </video>

                {/* Grid Pattern Layer */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="relative z-10 mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 py-16 w-full flex flex-col justify-between items-center xl:items-start text-center xl:text-left min-h-[82vh]">

                {/* Top Badge Tag (xl-এ বামে, xl-এর নিচে সেন্টারে) */}
                <div className="flex items-center justify-center xl:justify-start gap-3 pt-4 w-full">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 text-xs font-mono uppercase tracking-widest text-slate-800 dark:text-slate-200 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 dark:bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900 dark:bg-white"></span>
                        </span>
                        TradeChain Logistics & Sourcing
                    </div>
                </div>

                {/* Main Headline & Description (xl-এ বামে এলাইন, নিচে সেন্টারে) */}
                <div className="my-auto py-10 max-w-4xl space-y-6 flex flex-col items-center xl:items-start w-full">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
                        Precision Cold Chain. <br />
                        <span className="text-slate-600 dark:text-slate-400">
                            Unbroken Global Supply.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 max-w-2xl font-normal dark:font-light leading-relaxed">
                        End-to-end IoT-monitored temperature control, CITES & HACCP compliant international procurement, and seamless customs clearance for global enterprise buyers.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 pt-4">
                        {/* Primary Button */}
                        <Link
                            href="/solutions"
                            className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5"
                        >
                            Explore Solutions
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/80 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-700"
                        >
                            Request B2B Quote
                        </Link>
                    </div>
                </div>

                {/* Bottom Metric Strip (দৃশ্যমান এনিমেশন সহ) */}
                <div className="w-full pt-8 border-t border-slate-200 dark:border-slate-900 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-center">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="group flex flex-col sm:flex-row items-center justify-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:bg-slate-100/60 dark:hover:bg-slate-900/60 hover:scale-105 border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                            >
                                {/* আইকনটিতে স্লো বাউন্স এনিমেশন যোগ করা হয়েছে যা সহজেই চোখে পড়বে */}
                                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                                    <Icon className="w-5 h-5 text-slate-700 dark:text-slate-300 animate-pulse" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-xl lg:text-2xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
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