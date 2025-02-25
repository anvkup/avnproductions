"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import EnquiryForm from '../components/EnquiryForm'
function contact() {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
                <p className="text-center mb-4">
                    We’d love to hear from you! Whether you have questions, feedback, or inquiries about our services, please feel free to reach out.
                </p>
                <div className="p-6 rounded-lg shadow-md">
                    <EnquiryForm/>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <p>
                        <strong>Email:</strong> <a href="mailto:contact@avnmusic.site" className="text-blue-500">info@avnmusic.site</a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +91-90607 93927
                    </p>
                    <p>
                        <strong>Address:</strong>
                        <br />
                        AVN Music
                        <br />
                        H-23, Adarsh Nagar, Dhurwa
                        <br />
                        Ranchi, 834004
                        <br />
                        India
                    </p>
                </div>

                <div className="mb-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <ul className="space-y-2 ">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=61566925568567" className="text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/avn.music1/" className="text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/avn-productions1" className="text-blue-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-2">
                        <p><strong>Q: What services do you offer?</strong><br />A: We provide music production, original compositions, covers, and audio engineering services tailored to your needs.</p>
                        <p><strong>Q: Can I collaborate with AVN Music?</strong><br />A: Absolutely! We are always open to collaborations. Please reach out to us through the contact form or email.</p>
                        <p><strong>Q: How can I book you for an event?</strong><br />A: You can inquire about bookings by contacting us via the form above or emailing us directly.</p>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p>Thank you for your interest in AVN Music! We look forward to connecting with you.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default contact