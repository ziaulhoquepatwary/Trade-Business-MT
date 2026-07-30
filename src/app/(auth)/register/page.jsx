"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User, Image as ImageIcon, ArrowRight, Anchor, Globe, MoveLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { authClient } from "@/lib/auth-client";

function Register() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showPassword, setShowPassword] = useState(false);

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

    const handleRegister = async (userData) => {
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.imageUrl,
        });

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message || "Something went wrong during account setup. Please try again.",
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
        <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center p-4 transition-colors duration-300 relative font-sans py-12">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Navigation Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border border-black dark:border-white rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-xs font-mono uppercase tracking-widest z-20"
            >
                <MoveLeft size={14} />
                <span>Back to TradeChain</span>
            </Link>

            {/* Main Container */}
            <div className="max-w-md w-full space-y-6 bg-white dark:bg-black border-2 border-black dark:border-white p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative z-10 my-8">

                {/* Header */}
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

                    <div className="pt-1">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white">
                            Create Partner Account
                        </h2>
                        <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1">
                            Join our global logistics network to streamline cargo operations and cross-border trade.
                        </p>
                    </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

                    {/* Full Name / Company Name */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block">
                            Full Name / Representative
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 dark:text-zinc-400">
                                <User size={16} />
                            </span>
                            <input
                                type="text"
                                placeholder="Alex Morgan"
                                {...register("name", {
                                    required: "Full name is required",
                                })}
                                className={`w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border text-sm font-mono focus:outline-none transition-all text-black dark:text-white placeholder:text-zinc-400
                ${errors.name
                                        ? "border-red-600 focus:ring-1 focus:ring-red-600"
                                        : "border-black dark:border-white focus:bg-white dark:focus:bg-black"
                                    }`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-[11px] font-mono text-red-600 mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block">
                            Corporate Email
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 dark:text-zinc-400">
                                <Mail size={16} />
                            </span>
                            <input
                                type="email"
                                placeholder="operations@company.com"
                                {...register("email", {
                                    required: "Corporate email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email format",
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

                    {/* Password */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block">
                            Security Password
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
                                        message: "Minimum 6 characters required",
                                    },
                                    validate: {
                                        hasUpper: (value) =>
                                            /[A-Z]/.test(value) ||
                                            "Must contain at least one uppercase letter",
                                        hasLower: (value) =>
                                            /[a-z]/.test(value) ||
                                            "Must contain at least one lowercase letter",
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

                    {/* Avatar URL (Optional) */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white block">
                            Logo / Avatar URL{" "}
                            <span className="text-[10px] font-normal text-zinc-500 lowercase">
                                (optional)
                            </span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500 dark:text-zinc-400">
                                <ImageIcon size={16} />
                            </span>
                            <input
                                type="url"
                                placeholder="https://company.com/logo.png"
                                {...register("imageUrl")}
                                className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-black dark:border-white text-sm font-mono focus:outline-none focus:bg-white dark:focus:bg-black transition-all text-black dark:text-white placeholder:text-zinc-400"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-mono font-bold text-xs uppercase tracking-widest py-3.5 transition-all duration-200 group cursor-pointer border border-black dark:border-white"
                    >
                        <span>Complete Registration</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex items-center py-1">
                    <div className="grow border-t border-black dark:border-white" />
                    <span className="shrink mx-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        Fast Track Setup
                    </span>
                    <div className="grow border-t border-black dark:border-white" />
                </div>

                {/* Google SSO */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white dark:bg-black border border-black dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-900 text-black dark:text-white font-mono text-xs uppercase tracking-wider py-3 transition-all duration-200 cursor-pointer"
                >
                    <FcGoogle size={18} />
                    <span>Register with Google</span>
                </button>

                {/* Login Redirect */}
                <div className="text-center pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        Already registered?{" "}
                        <Link
                            href="/login"
                            className="font-bold text-black dark:text-white underline hover:no-underline uppercase tracking-wide ml-1"
                        >
                            Sign In to Portal
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Register;