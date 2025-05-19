import React from 'react';

function Card() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            About AVN Music Studio
                        </h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                            At AVN Music Studio, we are passionate about crafting music that resonates with the soul. Our goal is to inspire, innovate, and push the boundaries of sound, delivering music that is fresh, authentic, and moving.
                        </p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        {/* Card 1 */}
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-14 lg:w-14 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-primary-600 lg:w-7 lg:h-7 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Innovative Covers</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We bring a fresh twist to your favorite tracks. By blending genres and creating new interpretations, our covers are designed to engage, excite, and connect with diverse audiences.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-14 lg:w-14 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-primary-600 lg:w-7 lg:h-7 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Music Production Services</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our full-suite production services include composition, recording, mixing, and mastering. Whether you&apos;re an artist, filmmaker, or brand, we deliver professional quality sound tailored to your needs.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300">
                            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-14 lg:w-14 dark:bg-primary-900">
                                <svg className="w-6 h-6 text-primary-600 lg:w-7 lg:h-7 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Collaboration & Partnerships</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                We believe in the power of collaboration. Partner with us on exciting music projects and let&apos;s make something extraordinary together. From independent artists to brands, we&apos;re always open to new ideas and creative synergy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Card;
