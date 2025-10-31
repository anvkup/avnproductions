"use client" 

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveRight, Star, Mic, Heart } from 'lucide-react'; 
// --- Import Separator ---
import { Separator } from "@/components/ui/separator";

export default function About() {
    const [activeTab, setActiveTab] = React.useState("services");
    
    const handleTabChange = (newValue) => {
        const currentIndex = ['services', 'why'].indexOf(activeTab);
        const newIndex = ['services', 'why'].indexOf(newValue);
        
        // Removed direction state logic since we reverted to simple fade
        setActiveTab(newValue); 
    };

    const fadeVariants = {
        initial: { opacity: 0 }, 
        animate: { opacity: 1 },   
        exit: { opacity: 0 },    
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-screen-xl mx-auto px-6 py-16">
                
                {/* Header Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-brand-white mb-4">
                        Welcome to AVN Music Studio
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
                        Your gateway to a world of creative sound and soul-stirring music.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    
                    {/* === LEFT COLUMN: Story & Mission === */}
                    <div className="lg:col-span-3 space-y-8">
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-brand-white flex items-center">
                                    <MoveRight className="w-6 h-6 mr-3 text-blue-500" />
                                    Our Story & Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-lg">
                                    Founded with the vision of bringing fresh and unique sounds to the world...
                                </p>
                                <p className="text-gray-600 dark:text-gray-100 leading-relaxed text-xl font-semibold text-blue-400">
                                    Our mission is simple: to create music that inspires and connects people.
                                </p>
                            </CardContent>
                        </Card>

                        {/* ADDED SEPARATOR HERE */}
                        <Separator className="dark:bg-brand-teal" /> 
                        
                        <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-brand-white flex items-center">
                                    <Mic className="w-5 h-5 mr-3 text-blue-500" />
                                    Meet the Artist
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-100 text-lg">
                                    Behind the scenes of AVN Music Studio is a talented music producer...
                                </p>
                            </CardContent>
                        </Card>

                        {/* ADDED SEPARATOR HERE */}
                        <Separator className="dark:bg-brand-teal" /> 

                        <div className="text-center mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-brand-white">Let&apos;s Create Together</h2>
                            <p className="mt-2 text-lg text-gray-600 dark:text-gray-100">
                                Whether you&apos;re an artist looking for professional music production or a listener searching for something fresh and exciting, AVN Music Studio is here to deliver.
                            </p>
                        </div>
                    </div>
                    
                    {/* === RIGHT COLUMN: Tabs with Simple Fade Animation === */}
                    <div className="lg:col-span-2">
                        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 dark:bg-brand-midnight border dark:border-brand-teal">
                                <TabsTrigger value="services" className="flex items-center text-gray-900 dark:text-gray-300">
                                    <Star className="w-4 h-4 mr-2" /> What We Offer
                                </TabsTrigger>
                                <TabsTrigger value="why" className="flex items-center text-gray-900 dark:text-gray-300">
                                    <Heart className="w-4 h-4 mr-2" /> Why Choose Us
                                </TabsTrigger>
                            </TabsList>

                            <AnimatePresence mode="wait" initial={false}>
                                
                                {activeTab === "services" && (
                                    <TabsContent value="services" asChild>
                                        <motion.div key="services" variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.25 }} className="mt-4">
                                            <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                                                <CardHeader>
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-brand-white">Our Core Services</h3>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 space-y-3 pl-4">
                                                        <li><h4 className="text-lg font-semibold text-blue-400">Original Compositions</h4><p className="text-sm">Creating fresh, original music...</p></li>
                                                        <li><h4 className="text-lg font-semibold text-blue-400">Cover Songs</h4><p className="text-sm">Reimagining popular tracks...</p></li>
                                                        <li><h4 className="text-lg font-semibold text-blue-400">Music Production</h4><p className="text-sm">Professional-grade production...</p></li>
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </TabsContent>
                                )}

                                {activeTab === "why" && (
                                    <TabsContent value="why" asChild>
                                        <motion.div key="why" variants={fadeVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.25 }} className="mt-4">
                                            <Card className="bg-white dark:bg-brand-midnight border-brand-teal p-0">
                                                <CardHeader>
                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-brand-white">Our Commitment to Quality</h3>
                                                </CardHeader>
                                                <CardContent>
                                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 space-y-3 pl-4">
                                                        <li><h4 className="text-lg font-semibold text-blue-400">Passion-Driven</h4><p className="text-sm">Music is our passion...</p></li>
                                                        <li><h4 className="text-lg font-semibold text-blue-400">Innovative Approach</h4><p className="text-sm">We blend traditional and modern elements...</p></li>
                                                        <li><h4 className="text-lg font-semibold text-blue-400">High-Quality Sound</h4><p className="text-sm">Our production quality is top-notch...</p></li>
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </TabsContent>
                                )}
                            </AnimatePresence>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}