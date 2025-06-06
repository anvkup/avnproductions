import React from 'react'

function Hero() {
    return (

        <div>
            <section class=" bg-[url('/image/studiobg.webp')] bg-white bg-cover bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Want Recording, Music Production and Audio related Services in Ranchi? </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">At <strong>AVN Music Studio</strong>, we specialize in delivering high-quality <strong>music production</strong>, <strong>mixing</strong>, and <strong>recording services in ranchi</strong> in <strong>Ranchi</strong>. Whether you&apos;re an artist looking to create a hit single, or a band needing to record an entire album, our team of professionals is here to bring your vision to life.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="tel:090607 93927" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Call Us
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="/about" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            About Us
                        </a>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero