import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// --- 1. New data for your 4 service cards ---
const serviceCards = [
  {
    title: 'Music Production',
    description: 'From the initial idea to a fully produced track. We handle arrangement, instrumentation, and sound design to bring your musical vision to life.',
    image: '/image/music-production.jpg', // Assumes this image is in your /public/image folder
  },
  {
    title: 'Mixing & Mastering',
    description: 'Get a professional, polished, and radio-ready sound. We balance every element and master your track for clarity, punch, and loudness.',
    image: '/image/audio-mixing.jpg', // Assumes this image is in your /public/image folder
  },
  {
    title: 'Recording & Dubbing',
    description: 'Capture crystal-clear vocals and instruments in our acoustically treated booth. We also provide high-quality dubbing services for film and media.',
    image: '/image/songwriting.jpg', // Using this image for recording
  },
  {
    title: 'Commercial Audio & Jingles',
    description: 'Need a catchy jingle for your brand or clean audio for your ad? We create memorable sound branding that makes your message stick.',
    image: '/image/ads.jpg', // Assumes this image is in your /public/image folder
  },
];


function CardSection() { 
    return (
        // This section "floats" on the particle background
        <section className="bg-white dark:bg-brand-deep-space py-16">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                
                {/* --- 2. New Heading for this section --- */}
                <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-brand-white">
                        What We Do
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-100">
                        We offer a complete suite of audio services to bring your projects from concept to completion.
                    </p>
                </div>
                
                {/* --- 3. Grid updated to 4 columns --- */}
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
                    
                    {/* --- 4. Mapping over your new service cards --- */}
                    {serviceCards.map((service) => (
                        <Card 
                            key={service.title} 
                            className="bg-white dark:bg-brand-midnight border-brand-teal flex flex-col justify-start overflow-hidden 
                                       transition-all duration-300 ease-in-out
                                       hover:shadow-2xl hover:dark:border-blue-500/50 hover:-translate-y-1"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle className="text-gray-900 dark:text-brand-white">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 dark:text-gray-100">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default CardSection;