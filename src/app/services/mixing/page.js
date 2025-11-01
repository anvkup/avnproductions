// src/app/services/mixing/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, DollarSign, Target, CheckCircle } from 'lucide-react'; // Icons

// --- 1. SEO METADATA ---
export const metadata = {
    title: "Professional Mixing & Mastering Services in Ranchi | Audio Engineers",
    description: "Achieve a radio-ready sound with professional mixing and mastering services in Ranchi. Get clarity, punch, and balance for your music projects.",
};

export default function MixingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER: Focus on Quality & Precision --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Precision Mixing & Mastering Services in Ranchi
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        The final polish that makes your track competitive on any platform.
                    </p>
                </header>

                {/* --- SECTION 1: CORE PROCESS & PHILOSOPHY --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <SlidersHorizontal className="w-6 h-6 mr-3 text-blue-500" />
                            The Mixing & Mastering Philosophy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Clarity & Separation</h3>
                            <p>We focus on surgical EQ and dynamic processing to ensure every element—from drums to vocals—has its own space without fighting the mix.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Commercial Loudness</h3>
                            <p>Mastering ensures your final track is optimized for all streaming services (Spotify, Apple Music) with correct LUFS levels, maximizing impact without distortion.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: DELIVERABLES & GUARANTEE --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Target className="w-6 h-6 mr-3 text-blue-500" />
                            What You Receive
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 dark:text-gray-100">
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>**High-Resolution Masters:** Final files delivered as 24-bit/48kHz WAV files.</li>
                            <li>**Streaming Ready Formats:** Metadata-embedded MP3 files optimized for Spotify and Apple Music.</li>
                            <li>**Timely Revisions:** Includes **two (2) rounds of revisions** based on client notes to perfect your sound.</li>
                            <li>**Guarantee:** We guarantee technical compliance with all major digital distributors.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: CALL TO ACTION --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                        Master Your Sound
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Ready for professional sound? Contact us for a precise quote on your mixing and mastering project.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-brand-white transition-colors"
                    >
                        Get a Mixing Quote
                    </a>
                </Card>
            </div>
        </div>
    );
}