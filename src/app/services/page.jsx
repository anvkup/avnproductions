// src/app/services/page.js

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function services() {
    const service = [
        {
            title: 'Music Production',
            description: 'We offer professional music production services to help bring your vision to life.',
            image: '/image/music-production.jpg', // Update with the correct image path
        },
        {
            title: 'Audio Mixing',
            description: 'Get your tracks mixed by experienced engineers for a polished sound.',
            image: '/image/audio-mixing.jpg', // Update with the correct image path
        },
        {
            title: 'Jingles and Advertisments',
            description: 'We provide jingle and advertisment services for brands and companies.',
            image: '/image/ads.jpg', // Update with the correct image path
        },
        {
            title: 'Songwriting',
            description: 'Collaborate with our talented songwriters to create memorable music.',
            image: '/image/songwriting.jpg', // Update with the correct image path
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                    {service.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <p className="mt-2 text-gray-600">{service.description}</p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default services