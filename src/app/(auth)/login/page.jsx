"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Anchor, Globe, MoveLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

function LoginContent() {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const getRedirectUrl = () => {
        const redirect =
            searchParams.get("redirect") || searchParams.get("callbackUrl");
        return redirect || "/";
    };

    const onLoginSubmit = async (userData) => {
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        });

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Authentication Failed",
                text: "Invalid credentials. Please check your details and try again.",
                confirmButtonColor: "#000000",
            });
            reset();
        } else {
            router.push(getRedirectUrl());
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: `${window.location.origin}${getRedirectUrl()}`,
        });
    };

    return (
        <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center transition-colors duration-300 relative font-sans">
            {/* Background Subtle Grid Accent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Back to Home Navigation */}
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-xs font-mono uppercase tracking-widest z-20"
            >
                <MoveLeft size={14} />
                <span>Back to TradeChain</span>
            </Link>

            {/* Main Login Card */}
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-black border-2 border-black dark:border-white p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative z-10">

                {/* Header Section */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-black dark:border-white pb-4">
                        <div className="flex items-center gap-2">
                            <Anchor className="w-6 h-6 text-black dark:text-white" />
                            <span className="font-mono text-sm font-bold tracking-wider uppercase">
                                TradeChain
                            </span>
                        </div>
                        <Globe className="w-5 h-5 text-zinc-400 dark:text-zinc-600 animate-spin-slow" />
                    </div>

                    <div className="pt-2">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white">
                            Logistics Portal
                        </h2>
                        <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1">
                            Sign in to manage global shipments, track cargo, and access trade documents.
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-5">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block">
                            Work Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 dark:text-zinc-400">
                                <Mail size={16} />
                            </span>
                            <input
                                type="email"
                                placeholder="logistics@company.com"
                                {...register("email", {
                                    required: "Email address is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address format",
                                    },
                                })}
                                className={`w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border text-sm font-mono focus:outline-none transition-all text-black dark:text-white placeholder:text-zinc-400
                                ${errors.email
                                        ? "border-red-600 focus:ring-1 focus:ring-red-600"
                                        : "border-black dark:border-white focus:bg-white dark:focus:bg-black"
                                    }`}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-[11px] font-mono text-red-600 mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block">
                            Access Code / Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 dark:text-zinc-400">
                                <Lock size={16} />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••••••"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                                className={`w-full pl-10 pr-12 py-3 bg-zinc-50 dark:bg-zinc-950 border text-sm font-mono focus:outline-none transition-all text-black dark:text-white placeholder:text-zinc-400
                                ${errors.password
                                        ? "border-red-600 focus:ring-1 focus:ring-red-600"
                                        : "border-black dark:border-white focus:bg-white dark:focus:bg-black"
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-[11px] font-mono text-red-600 mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-mono font-bold text-xs uppercase tracking-widest py-3.5 transition-all duration-200 group cursor-pointer border border-black dark:border-white"
                    >
                        <span>Access Portal</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center py-2">
                    <div className="grow border-t border-black dark:border-white" />
                    <span className="shrink mx-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Enterprise SSO
                    </span>
                    <div className="grow border-t border-black dark:border-white" />
                </div>

                {/* Social Auth */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white dark:bg-black border border-black dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-900 text-black dark:text-white font-mono text-xs uppercase tracking-wider py-3 transition-all duration-200 cursor-pointer"
                >
                    <FcGoogle size={18} />
                    <span>Continue with Google</span>
                </button>

                {/* Footer Link */}
                <div className="text-center pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        Need a cargo account?{" "}
                        <Link
                            href="/register"
                            className="font-bold text-black dark:text-white underline hover:no-underline uppercase tracking-wide ml-1"
                        >
                            Register Organization
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function Login() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-xs font-mono uppercase tracking-widest text-black dark:text-white">
                Loading Portal...
            </div>
        }>
            <LoginContent />
        </Suspense>
    );
}