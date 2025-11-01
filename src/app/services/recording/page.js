// src/app/services/recording/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Headset, Film, DollarSign, Mic } from 'lucide-react'; // Icons

// --- 1. SEO METADATA (FIXED) ---
export const metadata = {
    title: "Vocal Recording Studio Ranchi | Professional Instrument Tracking",
    description: "Book professional vocal recording, instrument tracking, and dialogue dubbing services in Ranchi. Capture clear audio at AVN Music Studio.",
};

export default function RecordingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER: Target Keyword Focus (FIXED) --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        High-Quality Vocal & Instrument Recording
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        Capture the perfect performance with pristine audio clarity in Ranchi.
                    </p>
                </header>

                {/* --- SECTION 1: CORE RECORDING --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Headset className="w-6 h-6 mr-3 text-blue-500" />
                            Pristine Studio Tracking
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                         <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Vocal & Instrument Capture</h3>
                            <p>Our acoustically engineered booth is perfect for capturing pristine vocals, voiceovers, and instrument tracks. We ensure minimal noise and maximal clarity for all musical performances.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Expert Engineering Support</h3>
                            <p>Dedicated engineering support is provided for every session, offering real-time guidance on performance and technical settings to guarantee a perfect foundation for your mix.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: DUBBING & POST-PRODUCTION (Retained) --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Film className="w-6 h-6 mr-3 text-blue-500" />
                            Post-Production & Dubbing (Media)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Dialogue Replacement (ADR)</h3>
                            <p>Seamlessly replace flawed location audio or re-record dialogue for foreign markets with perfect sync and acoustic matching for film and video projects.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Sound Effects & Foley</h3>
                            <p>We offer specialized Foley and custom sound effects recording to add realistic depth, texture, and immersion to your visual storytelling.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: CALL TO ACTION --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                        Book Your Studio Time
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Contact us today to discuss your project needs or book your vocal tracking session.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-brand-white transition-colors"
                    >
                        Book Studio Time
                    </a>
                </Card>
            </div>
        </div>
    );
}