import { EmailTemplate } from "@/app/components";
import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";

// This allows for visitors to my portfolio to send me emails directly
// It's a third-party service called Resend



export async function POST(req) {
    const Resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    // body of our request - to be sent from the Client-side in our form above
    const { message, email } = body;

    // Check if the required fields are present
    if (!message || !email) {
        return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
        );
    }
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Message from Portfolio',
            react: EmailTemplate({ email, message }),
        });
        
        if (error) { // Deals with errors from the api response
            return NextResponse.json({ error }, { status: 500 });
        }
        
        return NextResponse.json(data);
    } catch (error) { // Deals with run time errors
        return NextResponse.json({ error }, { status: 500 });
    }
    
}
