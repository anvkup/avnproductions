"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function about() {
    return (
        <div>
            <Navbar />
            <section class="bg-white dark:bg-gray-900 py-16">
                <div class="max-w-screen-xl mx-auto px-4">
                    <div class="max-w-3xl mx-auto text-center mb-12">
                        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Welcome to AVN Music Studio, your gateway to a world of creative sound and soul-stirring music.</h1>
                    </div>

                    <div class="space-y-12">
                        <div class="text-center">
                            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Our Story 📖</h2>
                            <p class="text-gray-600 dark:text-gray-300">
                                Founded with the vision of bringing fresh and unique sounds to the world, AVN Music Studio is the brainchild of a passionate music producer who believes in the transformative power of music. What started as a small passion project has grown into a full-fledged production house that creates music for a wide audience, blending different genres, styles, and emotions into each track.
                            </p>
                        </div>

                        <div class="text-center">
                            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">What We Do 🏢</h2>
                            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                <li>
                                    <strong>Original Compositions:</strong> Creating fresh, original music that reflects a wide range of emotions, from high-energy beats to soothing melodies.
                                </li>
                                <li>
                                    <strong>Cover Songs:</strong> Reimagining popular tracks with a unique twist, showcasing our ability to breathe new life into well-loved songs.
                                </li>
                                <li>
                                    <strong>Music Production Services:</strong> Providing professional-grade music production, mixing, and mastering services for artists, filmmakers, and other content creators.
                                </li>
                            </ul>
                        </div>

                        <div class="text-center">
                            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission 🔥</h2>
                            <p class="text-gray-600 dark:text-gray-300">
                                Our mission is simple: <strong>to create music that inspires and connects people.</strong> We believe that music is a universal language, and through our work, we aim to bridge cultural gaps and bring people closer together. Whether you`&apos;`re listening to one of our original tracks or a reworked cover, we strive to evoke emotion and create lasting memories with our audience.
                            </p>
                        </div>

                        <div class="text-center">
                            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose AVN Music Studio?</h2>
                            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                <li>
                                    <strong>Passion-Driven:</strong> Music is more than just a profession to us—it`&apos;`s our passion. Every piece we create is crafted with heart and soul.
                                </li>
                                <li>
                                    <strong>Innovative Approach:</strong> We blend traditional and modern elements, exploring new ways to engage listeners and make our sound stand out.
                                </li>
                                <li>
                                    <strong>High-Quality Sound:</strong> Our production quality is top-notch, ensuring each note is crisp, clear, and powerful, resonating with the listener.
                                </li>
                            </ul>
                        </div>

                        <div class="text-center">
                            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Meet the Artist 🎶</h2>
                            <p class="text-gray-600 dark:text-gray-300">
                                Behind the scenes of AVN Music Studio is a <strong>talented music producer</strong> who brings a deep understanding of sound, rhythm, and harmony. With a rich musical background and an unwavering dedication to the craft, the producer has worked tirelessly to create a brand that stands for creativity and quality. His journey is one of constant evolution, always seeking new ways to innovate and express through music.
                            </p>
                        </div>

                        <div class="text-center">
                            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Let`&apos;`s Create Together 🎤</h2>
                            <p class="text-gray-600 dark:text-gray-300">
                                Whether you`&apos;`re an artist looking for professional music production or a listener searching for something fresh and exciting, AVN Music Studio is here to deliver. Let`&apos;`s collaborate and create something extraordinary that leaves a lasting impact on the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default about