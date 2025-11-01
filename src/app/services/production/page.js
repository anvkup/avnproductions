// src/app/production/page.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mic, Brain, DollarSign, Zap } from 'lucide-react'; // Icons

export const metadata = {
    title: "Full Music Production Services in Ranchi | Song Arrangement & Beats",
    description: "End-to-end music production, from composition and arrangement to final mixdown. Collaborate with expert producers at AVN Music Studio to create your next hit.",
};

export default function ProductionPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-brand-deep-space py-12">
            <div className="max-w-screen-lg mx-auto px-6 space-y-12">
                
                {/* --- HERO HEADER: Target Keyword Focus --- */}
                <header className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Full-Service Music Production: From Idea to Master
                    </h1>
                    <p className="text-xl text-blue-400 dark:text-blue-300">
                        We handle every creative and technical detail to realize your unique sound.
                    </p>
                </header>

                {/* --- SECTION 1: THE CREATIVE PROCESS --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Brain className="w-6 h-6 mr-3 text-blue-500" />
                            Creative Development & Arrangement
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-100">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Composition & Beat Making</h3>
                            <p>Need a track built from scratch? Our producers create original, genre-specific compositions—from synth-heavy beats to cinematic orchestral scores.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Structural Arrangement</h3>
                            <p>We consult on song structure, dynamics, and flow, ensuring your track builds tension and lands with maximum impact for commercial success.</p>
                        </div>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 2: TECHNICAL & DELIVERY --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold dark:text-brand-white flex items-center">
                            <Zap className="w-6 h-6 mr-3 text-blue-500" />
                            Seamless Technical Workflow
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-600 dark:text-gray-100">
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>**Full Supervision:** We manage the entire project, including recording, editing, mixing, and mastering phases.</li>
                            <li>**Instrumental Tracking:** Access to session musicians (if required) and in-house VST libraries for rich layering.</li>
                            <li>**Metadata & Distribution Prep:** Final files delivered optimized for major distributors and streaming platforms.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Separator className="dark:bg-brand-teal" />

                {/* --- SECTION 3: CALL TO ACTION --- */}
                <Card className="dark:bg-brand-midnight border-brand-teal text-center p-8">
                    <CardTitle className="text-2xl font-bold dark:text-brand-white mb-4 flex items-center justify-center">
                        <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                        Start Your Production Journey
                    </CardTitle>
                    <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
                        Contact us today for a free consultation on building your next project from the ground up.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-flex justify-center items-center py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-brand-white transition-colors"
                    >
                        Get a Production Quote
                    </a>
                </Card>
            </div>
        </div>
    );
}