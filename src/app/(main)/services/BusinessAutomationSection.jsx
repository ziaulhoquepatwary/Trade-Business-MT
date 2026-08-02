import React from 'react';
import { Bot, Workflow, Zap, Database, BarChart3, ArrowRight, CheckCircle2, Settings } from 'lucide-react';
import PortfolioButton from './PortfolioButton';

export default function BusinessAutomationSection() {
    const automationServices = [
        {
            title: "Workflow & Process Automation",
            desc: "Eliminate repetitive tasks by automating end-to-end operational and departmental workflows.",
            icon: Workflow
        },
        {
            title: "Custom CRM & ERP Solutions",
            desc: "Centralize business operations, sales pipelines, and customer management into unified systems.",
            icon: Database
        },
        {
            title: "AI & Bot Integration",
            desc: "Deploy smart chatbots, automated data processing, and AI-driven customer support tools.",
            icon: Bot
        },
        {
            title: "Data Analytics & Reporting",
            desc: "Automate reporting pipelines with real-time dashboards to drive data-backed decisions.",
            icon: BarChart3
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
                            <Zap className="w-4 h-4" />
                            Process Efficiency & Automation
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                            Intelligent <span className="text-[#3D52A0] dark:text-blue-400">Business Automation</span> Solutions
                        </h2>

                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Scale your operations faster by eliminating manual bottlenecks. We build custom automation tools, integrate cross-platform systems, and streamline business processes so your team can focus on growth.
                        </p>

                        <div className="pt-2">
                            <PortfolioButton />
                        </div>
                    </div>

                    {/* Key Advantages Card */}
                    <div className="lg:col-span-5">
                        <div className="p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-[#09090b] border border-gray-200 dark:border-gray-800 shadow-xl backdrop-blur-sm space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                    <Settings className="w-4 h-4 text-[#3D52A0] dark:text-blue-400" /> Automation Benefits
                                </span>
                                <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3D52A0]"></span>
                                </span>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Up to 80% Reduction in Manual Tasks & Errors",
                                    "Seamless Third-Party API & Tool Integration",
                                    "24/7 Automated Customer & Lead Workflows",
                                    "Centralized Real-Time Operational Dashboards"
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

                {/* Automation Services Grid */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Automation Capabilities
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            End-to-end automation strategies tailored to optimize productivity and reduce operational costs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {automationServices.map((item, index) => {
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