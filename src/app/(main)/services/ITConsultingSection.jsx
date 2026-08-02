import React from 'react';
import { Lightbulb, Target, TrendingUp, ShieldAlert, Compass, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import PortfolioButton from './PortfolioButton';

export default function ITConsultingSection() {
    const consultingServices = [
        {
            title: "Digital Transformation Strategy",
            desc: "Modernize legacy systems, optimize business workflows, and adopt modern tech stacks effectively.",
            icon: TrendingUp
        },
        {
            title: "Software Architecture & Tech Advisory",
            desc: "Expert guidance on choosing scalable frameworks, databases, and microservice architectures.",
            icon: Compass
        },
        {
            title: "Cybersecurity & Risk Management",
            desc: "Comprehensive security assessments, compliance readiness, and threat mitigation strategies.",
            icon: ShieldAlert
        },
        {
            title: "IT Project & Process Optimization",
            desc: "Streamline engineering workflows, adopt Agile practices, and maximize tech ROI.",
            icon: Target
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
                            <Lightbulb className="w-4 h-4" />
                            Strategic Technology Advisory
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                            Strategic <span className="text-[#3D52A0] dark:text-blue-400">IT Consulting</span> & Advisory Services
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Align your technical investments with your business goals. We deliver actionable insights, expert software architecture advice, and roadmap planning to minimize technical debt and accelerate your growth.
                        </p>

                        <div className="pt-2">
                            <PortfolioButton />
                        </div>
                    </div>

                    {/* Value Proposition Highlights Card */}
                    <div className="lg:col-span-5">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-[#09090b] border border-gray-200 dark:border-gray-800 shadow-xl backdrop-blur-sm space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-[#3D52A0] dark:text-blue-400" /> Advisory Highlights
                                </span>
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Tailored Technology Roadmaps & Growth Audits",
                                    "Cost & Resource Optimization Strategy",
                                    "Security, Risk Mitigation & Compliance Focus",
                                    "End-to-End System Integration Guidance"
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

                {/* Consulting Services Grid */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Consulting Expertise
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Data-backed strategies to overcome technology roadblocks and scale efficiently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {consultingServices.map((item, index) => {
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