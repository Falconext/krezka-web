import { ContactTemplate } from '@/components/emails/ContactTemplate';
import * as React from 'react';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, company, phone, servicesSelect, message } = body;

        // Server-side validation
        if (!fullName || !email || !message) {
            return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
        }

        // Initialize Resend only when needed (not at module level)
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
            from: 'Falconext Web <soporte@falconext.pe>', // Updated to verified domain
            to: ['soporte@falconext.pe'], // Deliver to you
            replyTo: email,
            subject: `Nuevo Lead: ${fullName} - ${company || 'Sin empresa'}`,
            react: (
                <ContactTemplate
                    fullName={fullName}
                    email={email}
                    company={company}
                    phone={phone}
                    services={servicesSelect || []}
                    message={message}
                />
            ),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
