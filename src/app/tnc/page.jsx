// pages/terms-and-conditions.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

                <p className="mb-4">
                    Welcome to AVN Productions! These terms and conditions outline the rules and regulations for the use of our website, <a href="https://avnmusic.site" className="text-blue-500 hover:underline">avnmusic.site</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use this website.
                </p>

                <h2 className="text-2xl font-semibold mb-3">2. Use of the Website</h2>
                <p className="mb-4">
                    The content of this website is for your general information and use only. It is subject to change without notice. You may not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
                </p>

                <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
                <p className="mb-4">
                    All content, including text, graphics, logos, and images, available on this site is owned by or licensed to AVN Productions. You are not permitted to copy, reproduce, or distribute any content from the site without prior written consent.
                </p>

                <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
                <p className="mb-4">
                    AVN Productions will not be liable for any direct, indirect, or consequential loss or damage arising from the use of this website. This includes, but is not limited to, any loss of profits, business, or data.
                </p>

                <h2 className="text-2xl font-semibold mb-3">5. Links to Third-Party Sites</h2>
                <p className="mb-4">
                    Our website may contain links to third-party websites. These links are provided for your convenience to provide further information. AVN Productions has no control over these websites and is not responsible for their content.
                </p>

                <h2 className="text-2xl font-semibold mb-3">6. User Conduct</h2>
                <p className="mb-4">
                    You agree to use the website only for lawful purposes. You must not use the website in any way that breaches any applicable local, national, or international law or regulation.
                </p>

                <h2 className="text-2xl font-semibold mb-3">7. Governing Law</h2>
                <p className="mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.
                </p>

                <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
                <p className="mb-4">
                    We reserve the right to terminate your access to our website if you breach any of these terms and conditions.
                </p>

                <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
                <p className="mb-4">
                    AVN Productions may revise these terms and conditions at any time. Any changes will be posted on this page, and it is your responsibility to review these terms regularly to ensure you are aware of any changes.
                </p>

                <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@avnmusic.site" className="text-blue-500 hover:underline">support@avnmusic.site</a>.
                </p>
            </div>
            <Footer />
        </div>
    );
}
