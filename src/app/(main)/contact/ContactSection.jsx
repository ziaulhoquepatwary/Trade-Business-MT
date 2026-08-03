import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="relative w-full pt-32 py-10 bg-[#EDE8F5] dark:bg-[#000000] overflow-hidden transition-colors duration-500 flex items-center">

            {/* Extremely subtle ambient glow for a clean look */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#3D52A0]/5 dark:bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                {/* --- Left Column: Text & Info --- */}
                <div className="w-full lg:w-5/12 flex flex-col items-start text-left space-y-10">

                    <div>
                        <div className="inline-flex items-center space-x-3 mb-6">
                            <span className="h-[2px] w-8 bg-[#3D52A0]"></span>
                            <span className="text-[#3D52A0] dark:text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm">
                                Start A Project
                            </span>
                        </div>

                        {/* Text is strictly limited to 6xl max */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
                            Let's build something <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D52A0] to-indigo-500">
                                extraordinary.
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium dark:font-light leading-relaxed max-w-lg border-l-2 border-[#3D52A0]/20 pl-6">
                            Whether you need a cutting-edge web application, a scalable cloud architecture, or a complete digital transformation, our team of experts is ready to deliver.
                        </p>
                    </div>

                    {/* Clean Contact Info Cards */}
                    <div className="space-y-6 w-full max-w-lg">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#09090b] border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-[#3D52A0] dark:text-indigo-400 shadow-sm">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Direct Email</h4>
                                <a href="mailto:hello@mtraderslastllc.com" className="text-gray-600 dark:text-gray-400 font-medium hover:text-[#3D52A0] dark:hover:text-indigo-400 transition-colors">
                                    hello@mtraderslastllc.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#09090b] border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 text-[#3D52A0] dark:text-indigo-400 shadow-sm">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-gray-900 dark:text-white font-bold mb-1">Global Headquarters</h4>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">
                                    7901 4th St N Suite 6573, <br />
                                    St. Petersburg FL 33702
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- Right Column: The Form Component --- */}
                <div className="w-full lg:w-7/12 relative">
                    {/* Decorative element behind form */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#3D52A0]/10 to-transparent dark:from-white/5 rounded-[3rem] blur-xl -z-10"></div>

                    {/* Rendering the separated form component */}
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}