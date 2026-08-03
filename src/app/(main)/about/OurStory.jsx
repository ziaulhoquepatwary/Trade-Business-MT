import React from 'react';

export default function OurStory() {
    return (
        <section className="relative w-full bg-[#EDE8F5] dark:bg-[#000000] transition-colors duration-500 py-10 lg:py-0 overflow-hidden">

            {/* Full Width Container */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">

                {/* --- Left Column: Edge-to-Edge Image --- */}
                <div className="w-full lg:w-1/2 relative h-[550px] sm:h-[550px] group overflow-hidden lg:rounded-r-[4rem]">
                    {/* Main Story Image */}
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Our team collaborating"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />

                    {/* Gradient Overlay for subtle depth */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:rounded-r-[4rem] pointer-events-none"></div>

                    {/* Floating Experience Badge */}
                    <div className="absolute bottom-8 right-8 lg:bottom-16 lg:-right-8 z-10 bg-white/80 dark:bg-[#09090b]/90 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl rounded-3xl p-6 lg:p-8 flex items-center space-x-5 transition-transform duration-500 hover:-translate-y-2">
                        <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3D52A0] to-indigo-500">
                            12+
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">Years of</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Digital Excellence</span>
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Premium Text Content --- */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:pl-20 xl:pl-28 lg:pr-12 xl:pr-24 py-16 lg:py-24">

                    {/* Subheading / Section Label */}
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="h-[2px] w-12 bg-[#3D52A0]"></div>
                        <span className="text-[#3D52A0] dark:text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm">
                            Our Origin
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-8">
                        We didn't just adapt to the digital age. <br className="hidden xl:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D52A0] to-indigo-400 dark:to-indigo-500">
                            We shape it.
                        </span>
                    </h2>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 font-medium dark:font-light leading-relaxed">
                        <p>
                            Starting in a small collaborative workspace, our vision was simple: bridge the gap between complex engineering and beautiful, intuitive human experiences.
                        </p>
                        <p>
                            Today, we are a global collective of visionary thinkers, developers, and designers. We don't just build software; we engineer ecosystems that empower top-tier businesses to scale seamlessly and dominate their markets.
                        </p>
                    </div>

                    {/* Premium Checkmarks / Bullet Points */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "Award-Winning UI/UX",
                            "Enterprise-Grade Security",
                            "Agile Development",
                            "24/7 Global Support"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 group">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3D52A0]/10 dark:bg-white/5 flex items-center justify-center border border-[#3D52A0]/20 dark:border-white/10 transition-colors group-hover:bg-[#3D52A0] group-hover:border-[#3D52A0]">
                                    <svg className="w-4 h-4 text-[#3D52A0] dark:text-indigo-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-900 dark:text-gray-200 font-semibold text-base">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CEO / Founder Signature Area */}
                    <div className="mt-14 pt-8 border-t border-gray-300 dark:border-white/10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
                                <img src="https://i.ibb.co.com/679hzvrz/linkdin-profile-photo.jpg" alt="CEO" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 dark:text-white text-lg">Ziaul Hoque</div>
                                <div className="text-sm text-[#3D52A0] dark:text-indigo-400 font-medium">Founder & CEO</div>
                            </div>
                        </div>

                        {/* Minimal stylized signature image (using a cursive font placeholder or SVG) */}
                        <div className="hidden sm:block opacity-60 dark:opacity-40">
                            <svg width="120" height="40" viewBox="0 0 200 60" fill="none" stroke="currentColor" className="text-gray-800 dark:text-white">
                                <path d="M20,40 Q40,10 60,30 T100,20 T140,40 T180,20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M40,50 Q70,30 110,45" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}