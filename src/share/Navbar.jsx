"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Globe, Phone, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const whatsappUrl = "https://wa.me/13163617579";
    const emailAddress = "hello@mtraderslastllc.com";

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Utility Strip - Desktop */}
            <div className="hidden lg:block h-9 fixed top-0 left-0 right-0 z-50 bg-[#0A0C10] border-b border-white/6 transition-colors duration-500">
                <div className="hidden lg:flex items-center justify-between h-8 px-6 sm:px-8 lg:px-16 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white/80 border-b border-white/10 backdrop-blur-xl text-[11px] tracking-widest uppercase font-medium">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={12} className="text-white/50" />
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                                +1 (316) 361-7579
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={12} className="text-white/50" />
                            <a href={`mailto:${emailAddress}`} className="text-gray-400 hover:text-gray-50 transition-colors duration-300">
                                {emailAddress}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
                            <Globe size={12} />
                            <span>Global</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <nav
                className={`w-full fixed left-0 z-50 top-0 lg:top-9 h-19 transition-all duration-500 ease-in-out ${scrolled
                    ? "bg-[#EDE8F5]/60 dark:bg-[#0B0D11]/70 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(61,82,160,0.08)] dark:shadow-none border-b border-[#3D52A0]/15 dark:border-white/[0.06]"
                    : "bg-[#EDE8F5]/20 dark:bg-transparent backdrop-blur-sm border-b border-[#3D52A0]/10 dark:border-white/[0.04]"
                    }`}
            >
                <div className="w-full h-full flex items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-14">

                    {/* Logo / Brand */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="group">
                            <div className="flex items-center gap-2.5">
                                <div className="relative w-10 h-10 rounded-xl bg-[#3D52A0] dark:from-white dark:to-slate-200 flex items-center justify-center shadow-md transition-colors duration-300">
                                    <img
                                        src="/logo.png"
                                        alt="Logo"
                                        className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                                    />
                                </div>
                                <div className="hidden sm:flex flex-col">
                                    <span className="text-sm font-bold text-[#3D52A0] dark:text-white leading-none tracking-tight transition-colors duration-300">
                                        WEB DEV
                                    </span>
                                    <span className="text-[10px] text-[#3D52A0]/70 dark:text-slate-400 font-medium uppercase tracking-widest transition-colors duration-300">
                                        Next-Gen Software & IT Solutions
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right-clustered control group */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        {/* Nav Links - segmented control */}
                        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#3D52A0]/10 dark:bg-white/[0.04] border border-[#3D52A0]/15 dark:border-white/[0.06] mr-1 transition-colors duration-300">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative px-4 py-2 rounded-full text-[13px] text-gray-900 font-semibold transition-all duration-300 ${active
                                            ? "bg-[#3D52A0] text-white dark:bg-[#7688c9] dark:text-slate-950 shadow-md scale-100"
                                            : "text-[#3D52A0] dark:text-slate-400 hover:text-[#3D52A0] dark:hover:text-white hover:bg-[#3D52A0]/15 dark:hover:bg-white/10"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <span className="hidden lg:block h-6 w-px bg-[#3D52A0]/20 dark:bg-white/10 mx-1 transition-colors duration-300" />

                        {/* Search */}
                        <div className="hidden sm:flex">
                            {searchOpen ? (
                                <div className="relative flex items-center">
                                    <Search size={14} className="absolute left-3.5 text-[#3D52A0]/60 dark:text-slate-400 pointer-events-none transition-colors duration-300" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        autoFocus
                                        onBlur={() => setSearchOpen(false)}
                                        className="pl-9 pr-3 py-2 rounded-full text-[13px] bg-white/60 dark:bg-white/[0.05] text-[#3D52A0] dark:text-white placeholder-[#3D52A0]/50 dark:placeholder-slate-500 border border-[#3D52A0]/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#3D52A0]/30 dark:focus:ring-white/20 w-48 transition-all duration-300"
                                    />
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    className="p-2.5 rounded-full text-[#3D52A0] dark:text-slate-400 hover:text-[#3D52A0] dark:hover:text-white hover:bg-[#3D52A0]/10 dark:hover:bg-white/[0.06] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0]/30 dark:focus-visible:ring-white/30"
                                    aria-label="Open search"
                                >
                                    <Search size={17} strokeWidth={2} />
                                </button>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Get a Quote Button with Dual Gradient & Left-to-Right Hover Animation */}
                        <Link
                            href="/quote"
                            className="relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] font-semibold text-[13px] active:scale-95 transition-all duration-300 group shadow-md hover:shadow-[0_4px_20px_rgba(61,82,160,0.35)]"
                        >
                            {/* Animated Dual Gradient Layer */}
                            <span className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] via-[#7088D6] to-[#3D52A0] bg-[length:200%_100%] bg-left transition-all duration-500 ease-out group-hover:bg-right" />

                            {/* Button Inner Content */}
                            <span className="relative flex items-center gap-1.5 px-5 py-2 rounded-full text-white transition-all duration-300">
                                <span>Get a Quote</span>
                                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-[#3D52A0] dark:text-slate-400 hover:bg-[#3D52A0]/10 dark:hover:bg-white/[0.06] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0]/30 dark:focus-visible:ring-white/30"
                            aria-expanded={isOpen}
                        >
                            {!isOpen ? <Menu size={20} /> : <X size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu - full screen overlay */}
            <div
                className={`lg:hidden fixed inset-0 top-[76px] z-40 bg-[#EDE8F5]/95 dark:bg-[#0B0D11]/95 backdrop-blur-xl transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="h-full overflow-y-auto px-6 py-8 flex flex-col justify-between">
                    <div className="space-y-1.5">
                        {navLinks.map((link, idx) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ transitionDelay: isOpen ? `${idx * 40}ms` : "0ms" }}
                                    className={`flex items-center justify-between px-5 py-4 rounded-2xl text-[17px] font-semibold transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                                        } ${active
                                            ? "bg-[#3D52A0] text-white dark:bg-white/10 dark:text-[#04cccc] border-l-4 border-[#3D52A0] dark:border-[#04cccc]"
                                            : "text-[#3D52A0] dark:text-slate-300 hover:bg-[#3D52A0]/10 dark:hover:bg-white/[0.05] hover:text-[#3D52A0] dark:hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {active && <span className="w-2 h-2 rounded-full bg-white dark:bg-[#04cccc]" />}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Divider & Animated Get a Quote Button */}
                    <div className="pt-6 mt-6 border-t border-[#3D52A0]/15 dark:border-white/[0.06] transition-colors duration-300">
                        <Link
                            href="/quote"
                            onClick={() => setIsOpen(false)}
                            className="relative flex items-center justify-center w-full px-5 py-4 text-[15px] font-semibold text-white overflow-hidden rounded-2xl shadow-md transition-all duration-300 group"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#3D52A0] via-[#7088D6] to-[#3D52A0] bg-[length:200%_100%] bg-left transition-all duration-500 ease-out group-hover:bg-right" />
                            <span className="relative flex items-center gap-2">
                                Get a Quote
                                <ArrowUpRight size={16} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;