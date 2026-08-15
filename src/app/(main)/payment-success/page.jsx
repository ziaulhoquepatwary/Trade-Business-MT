'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

function SuccessContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const token = searchParams.get('token');
    const orderId = searchParams.get('orderId');

    const [status, setStatus] = useState('processing');
    const hasFetched = useRef(false);

    useEffect(() => {
        const verifyPayment = async () => {
            if (!token || !orderId) {
                setStatus('failed');
                return;
            }

            if (hasFetched.current) return;
            hasFetched.current = true;

            try {
                const response = await fetch('/api/capture-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token, orderId })
                });

                const result = await response.json();

                if (result.success || result.message === "Order not found or already paid") {
                    setStatus('success');
                } else {
                    setStatus('failed');
                }
            } catch (error) {
                console.error("Verification error:", error);
                setStatus('failed');
            }
        };

        verifyPayment();
    }, [token, orderId]);

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#EDE8F5] dark:bg-[#000000] px-4">
            <div className="bg-white dark:bg-[#09090b] p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-gray-200 dark:border-gray-800">

                {status === 'processing' && (
                    <div className="flex flex-col items-center">
                        <Loader2 size={60} className="text-[#3D52A0] animate-spin mb-6" />
                        <h2 className="text-2xl font-bold mb-2">Verifying Payment...</h2>
                        <p className="text-gray-500">Please do not close this window.</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={50} />
                        </div>
                        <h2 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">Payment Successful!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Thank you for your order. We have received your payment and our team will start working on it shortly.
                        </p>
                        <Link href="/dashboard" className="bg-[#3D52A0] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#3D52A0]/30 hover:bg-[#2d3d7a] transition-all">
                            Go to Dashboard
                        </Link>
                    </div>
                )}

                {status === 'failed' && (
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                            <XCircle size={50} />
                        </div>
                        <h2 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">Payment Failed</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            We couldn't verify your payment. If the amount was deducted, please contact support.
                        </p>
                        <button onClick={() => router.push('/pricing')} className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all">
                            Try Again
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}