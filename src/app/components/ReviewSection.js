// src/app/components/ReviewSection.js

"use client"; 

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

// --- 1. (FIX) CORRECT IMPORT PATH FOR JSON DATA ---
// We assume you have the JSON file named reviewData.json in src/lib/
import { staticReviews } from "@/lib/reviewData";// Shadcn Components
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle,
    CardFooter 
} from "@/components/ui/card";
// --- 2. (FIX) Import all necessary Carousel components ---
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// --- Custom Star Rating Component (No Change) ---
const RatingStars = ({ rating }) => {
// ...
};


export default function ReviewSection() {
    // Check if data is an array before attempting reduce
    const dataToUse = Array.isArray(staticReviews) ? staticReviews : [];

    // Calculate total rating (using dataToUse)
    const totalRating = dataToUse.length > 0 
        ? dataToUse.reduce((sum, review) => sum + review.rating, 0) / dataToUse.length
        : 0;
    const totalReviews = dataToUse.length;

    return (
        <section className="py-16 bg-white dark:bg-brand-deep-space">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* --- HEADER --- */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-brand-white mb-2">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Rated {totalRating.toFixed(1)} out of 5 stars based on {totalReviews} Reviews.
                    </p>
                </header>

                {/* --- CAROUSEL --- */}
                <Carousel className="w-full">
                    <CarouselContent>
                        {/* 3. Map over the now correctly imported data */}
                        {dataToUse.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-white dark:bg-brand-midnight border-brand-teal h-full flex flex-col justify-between">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <RatingStars rating={review.rating} />
                                            <MessageSquare className="h-4 w-4 text-brand-teal" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-gray-600 dark:text-gray-100 italic text-sm min-h-[80px]">
                                        <p>&ldquo;{review.text}&rdquo;</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <span className="font-semibold text-gray-900 dark:text-brand-white">{review.author}</span>
                                        </div>
                                        <span>{review.time}</span>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Carousel navigation controls (these should work now) */}
                    <CarouselPrevious className="dark:border-brand-teal dark:text-brand-white" />
                    <CarouselNext className="dark:border-brand-teal dark:text-brand-white" />
                </Carousel>
                
                <div className="text-center mt-8">
                    <Button asChild variant="link" className="text-blue-500 hover:underline">
                        <a href="https://search.google.com/local/writereview?placeid=ChIJ-_K5RmEh9TkRmsOnefwPe5I" target="_blank" rel="noopener noreferrer">
                            View All Reviews on Google
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}