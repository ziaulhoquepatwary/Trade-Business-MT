"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, User, LogOut, Search, Globe, Phone, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "@/components/ThemeToggle";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const showDashboard = user?.role === "admin";
    const dashboardHref = `/dashboard/${user?.role}`;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Solutions", href: "/solutions" },
        { name: "Services", href: "/services" },
        { name: "Tracking", href: "/tracking" },
        { name: "Network", href: "/network" },
    ];

    const whatsappUrl = "https://wa.me/13163617579";
    const telegramUrl = "https://t.me/Mtradersla_bot";
    const emailAddress = "hello@mtraderslastllc.com";

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Utility Strip - Desktop */}
            <div className="hidden lg:block h-9 fixed top-0 left-0 right-0 z-50 bg-[#0A0C10] border-b border-white/6">
                <div className="hidden lg:flex items-center justify-between h-8 px-6 sm:px-8 lg:px-16 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white/80 border-b border-white/10 backdrop-blur-xl text-[11px] tracking-widest uppercase font-medium">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone size={12} className="text-white/50" />
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-50">
                                +1 (316) 361-7579
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={12} className="text-white/50" />
                            <a href={`mailto:${emailAddress}`} className="text-gray-400 hover:text-gray-50">
                                {emailAddress}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                            <Globe size={12} />
                            <span>Global</span>
                        </button>
                        <span className="text-white/90">·</span>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            Careers
                        </Link>
                        <span className="text-white/90">·</span>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            Newsroom
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <nav
                className={`w-full fixed left-0 z-50 top-0 lg:top-9 h-19 transition-all duration-300 ${scrolled
                    ? "bg-transparent dark:bg-[#0B0D11]/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
                    : "bg-transparent"
                    } border-b border-slate-200/60 dark:border-white/[0.06]`}
            >
                <div className="w-full h-full flex items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-14">

                    {/* Logo / Brand */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="group">
                            <div className="flex items-center gap-2.5">
                                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 flex items-center justify-center shadow-md">
                                    <span className="text-xl font-black text-white dark:text-slate-900 tracking-tighter">
                                        ⚓
                                    </span>
                                </div>
                                <div className="hidden sm:flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                                        TradeChain
                                    </span>
                                    <span className="text-[10px] text-slate-700 dark:text-slate-400 font-medium uppercase tracking-widest">
                                        Global Logistics
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right-clustered control group */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        {/* Nav Links - segmented control with explicit Active/Hover styles */}
                        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.06] mr-1">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`relative px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${active
                                            ? "bg-slate-900 text-white dark:bg-[#04cccc] dark:text-slate-950 shadow-md scale-100"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <span className="hidden lg:block h-6 w-px bg-slate-200 dark:bg-white/10 mx-1" />

                        {/* Search */}
                        <div className="hidden sm:flex">
                            {searchOpen ? (
                                <div className="relative flex items-center">
                                    <Search size={14} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        autoFocus
                                        onBlur={() => setSearchOpen(false)}
                                        className="pl-9 pr-3 py-2 rounded-full text-[13px] bg-slate-100 dark:bg-white/[0.05] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 w-48 transition-all duration-200"
                                    />
                                </div>
                            ) : (
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    className="p-2.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 dark:focus-visible:ring-white/30"
                                    aria-label="Open search"
                                >
                                    <Search size={17} strokeWidth={2} />
                                </button>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Auth Section */}
                        {isPending ? (
                            <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-white/[0.06] animate-pulse" />
                        ) : user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setAvatarMenuOpen((prev) => !prev)}
                                    className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 dark:focus-visible:ring-white/30"
                                >
                                    <img
                                        src={user?.image || "/user.png"}
                                        alt={user?.name}
                                        className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-white/10"
                                    />
                                    <div className="hidden lg:flex flex-col text-left leading-none gap-1">
                                        <span className="text-[13px] font-semibold text-slate-900 dark:text-white">
                                            {user?.name?.split(" ")[0]}
                                        </span>
                                        <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 tracking-wide">
                                            {user?.role}
                                        </span>
                                    </div>
                                </button>

                                {/* User Dropdown */}
                                {avatarMenuOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setAvatarMenuOpen(false)}
                                        />
                                        <div className="absolute right-0 top-16 w-72 bg-white dark:bg-[#12151A] rounded-2xl border border-slate-200/60 dark:border-white/[0.08] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.25)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">

                                            {/* Profile Header */}
                                            <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 dark:from-[#0A0C10] dark:to-[#181C22] px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={user?.image || "/user.png"}
                                                        alt={user?.name}
                                                        className="w-[52px] h-[52px] rounded-xl object-cover border border-white/15"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[14px] font-semibold text-white truncate">
                                                            {user?.name}
                                                        </p>
                                                        <p className="text-[12px] text-slate-400 truncate">
                                                            {user?.email}
                                                        </p>
                                                        {user?.role && (
                                                            <div className="mt-1.5 inline-block px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wide text-[#04cccc] bg-[#04cccc]/10 border border-[#04cccc]/20 rounded-md">
                                                                {user.role.toUpperCase()}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="p-2 space-y-0.5">
                                                {showDashboard && (
                                                    <Link
                                                        href={dashboardHref}
                                                        onClick={() => setAvatarMenuOpen(false)}
                                                        className="flex items-center gap-3 px-4 py-3 text-[13px] text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-colors font-medium"
                                                    >
                                                        <LayoutDashboard size={17} className="text-slate-400" />
                                                        <span>Dashboard</span>
                                                    </Link>
                                                )}

                                                <Link
                                                    href="/my-profile"
                                                    onClick={() => setAvatarMenuOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-3 text-[13px] text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-colors font-medium"
                                                >
                                                    <User size={17} className="text-slate-400" />
                                                    <span>Profile Settings</span>
                                                </Link>
                                            </div>

                                            {/* Logout */}
                                            <div className="px-2 py-2 border-t border-slate-200/60 dark:border-white/[0.06]">
                                                <button
                                                    onClick={() => {
                                                        setAvatarMenuOpen(false);
                                                        authClient.signOut({
                                                            fetchOptions: {
                                                                onSuccess: () => {
                                                                    window.location.href = "/";
                                                                },
                                                            },
                                                        });
                                                    }}
                                                    className="flex items-center gap-3 w-full px-4 py-3 text-[13px] text-red-500 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors font-medium"
                                                >
                                                    <LogOut size={17} />
                                                    <span>Sign Out</span>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="hidden sm:inline-flex items-center gap-1.5 pl-5 pr-4 py-2.5 text-[13px] font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.25)] transition-all duration-200 active:scale-95"
                            >
                                <span>Sign In</span>
                                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 dark:focus-visible:ring-white/30"
                            aria-expanded={isOpen}
                        >
                            {!isOpen ? <Menu size={20} /> : <X size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu - full screen overlay */}
            <div
                className={`lg:hidden fixed inset-0 top-[76px] z-40 bg-white dark:bg-[#0B0D11] transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <div className="h-full overflow-y-auto px-6 py-8 flex flex-col">
                    <div className="space-y-1.5">
                        {navLinks.map((link, idx) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ transitionDelay: isOpen ? `${idx * 40}ms` : "0ms" }}
                                    className={`flex items-center justify-between px-5 py-4 rounded-2xl text-[17px] font-semibold transition-all duration-200 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                                        } ${active
                                            ? "bg-slate-900 text-white dark:bg-white/10 dark:text-[#04cccc] border-l-4 border-[#04cccc]"
                                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:text-slate-900 dark:hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {active && <span className="w-2 h-2 rounded-full bg-[#04cccc]" />}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Divider */}
                    <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-white/[0.06]">
                        {isPending ? (
                            <div className="w-full h-14 rounded-2xl bg-slate-200 dark:bg-white/[0.06] animate-pulse" />
                        ) : user ? (
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04]">
                                    <img
                                        src={user?.image || "/user.png"}
                                        alt={user?.name}
                                        className="w-11 h-11 rounded-xl object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[14px] font-semibold text-slate-900 dark:text-white">
                                            {user?.name}
                                        </p>
                                        <p className="text-[12px] text-slate-500 dark:text-slate-400 truncate">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>

                                {showDashboard && (
                                    <Link
                                        href={dashboardHref}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-5 py-4 rounded-2xl text-[15px] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors font-medium"
                                    >
                                        <LayoutDashboard size={18} />
                                        <span>Dashboard</span>
                                    </Link>
                                )}

                                <Link
                                    href="/my-profile"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-5 py-4 rounded-2xl text-[15px] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors font-medium"
                                >
                                    <User size={18} />
                                    <span>Profile</span>
                                </Link>

                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        authClient.signOut({
                                            fetchOptions: {
                                                onSuccess: () => {
                                                    window.location.href = "/";
                                                },
                                            },
                                        });
                                    }}
                                    className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl text-[15px] text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors font-medium"
                                >
                                    <LogOut size={18} />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center w-full px-5 py-4 text-[15px] font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-2xl hover:shadow-lg transition-all duration-200"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;