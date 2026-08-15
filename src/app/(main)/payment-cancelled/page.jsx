'use client';
import Link from 'next/link';
import { XCircle } from 'lucide-react';

export default function PaymentCancelledPage() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#EDE8F5] dark:bg-[#000000] px-4">
            <div className="bg-white dark:bg-[#09090b] p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-gray-200 dark:border-gray-800">
                <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle size={50} />
                </div>
                <h2 className="text-3xl font-extrabold mb-3 text-gray-900 dark:text-white">Payment Cancelled</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    You have cancelled the payment process. No charges were made to your account.
                </p>
                <Link href="/pricing" className="bg-[#3D52A0] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#3D52A0]/30 hover:bg-[#2d3d7a] transition-all">
                    Return to Packages
                </Link>
            </div>
        </div>
    );
}