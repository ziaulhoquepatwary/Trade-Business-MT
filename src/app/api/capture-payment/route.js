import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

        const response = await fetch(`${BACKEND_URL}/api/orders/capture-paypal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            cache: 'no-store'
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: data.message || "Payment capture failed" },
                { status: response.status }
            );
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error("Next.js Capture Payment Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}