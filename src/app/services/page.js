import React from 'react';
import Image from 'next/image';

// Your service data
const serviceCards = [
  {
    title: 'Music Production',
    description: 'From the initial idea to a fully produced track. We handle arrangement, instrumentation, and sound design to bring your musical vision to life.',
    image: '/image/music-production.jpg',
  },
  {
    title: 'Mixing & Mastering',
    description: 'Get a professional, polished, and radio-ready sound. We balance every element and master your track for clarity, punch, and loudness.',
    image: '/image/audio-mixing.jpg',
  },
  {
    title: 'Recording & Dubbing',
    description: 'Capture crystal-clear vocals and instruments in our acoustically treated booth. We also provide high-quality dubbing services for film and media.',
    image: '/image/songwriting.jpg', 
  },
  {
    title: 'Commercial Audio & Jingles',
    description: 'Need a catchy jingle for your brand or clean audio for your ad? We create memorable sound branding that makes your message stick.',
    image: '/image/ads.jpg',
  },
];

export default function Services() {
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2">
                
                {serviceCards.map((service, index) => (
                    
                    <div 
                        key={index} 
                        className="relative overflow-hidden min-h-[50vh] group"
                    >
                        {/* The Background Image */}
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="z-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />

                        {/* --- 1. (FIX) STRONGER GRADIENT --- */}
                        {/* This is now a stronger 90% black gradient from the bottom, fading to 20% at the top */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                        
                        <div className="relative z-20 flex h-full flex-col justify-center items-center text-center p-8 md:p-12">
                            
                            {/* --- 2. (FIX) ELEVATED TEXT --- */}
                            {/* We made the title larger (text-4xl) and added a text-shadow */}
                            <h2 
                                className="text-4xl font-bold text-brand-white"
                                // This is a Tailwind CSS text-shadow:
                                style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
                            >
                                {service.title}
                            </h2>
                            
                            {/* --- 3. (FIX) ELEVATED DESCRIPTION --- */}
                            {/* We made the description brighter (text-gray-100) and added a text-shadow */}
                            <p 
                                className="text-gray-100 mt-2 text-lg max-w-md"
                                style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
                            >
                                {service.description}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}