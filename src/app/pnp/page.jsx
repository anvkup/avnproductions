// pages/privacy-policy.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div>
            <Navbar/>
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

                <p className="mb-4">
                    Welcome to AVN Music Studio! This privacy policy explains how we collect, use, and share your personal information when you visit our website <a href="https://avnmusic.site" className="text-blue-500 hover:underline">avnmusic.site</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="mb-4">
                    We collect the following types of information:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Personal information such as name, email address, and phone number (only if you provide it).</li>
                    <li>Browsing data such as IP address, browser type, and pages viewed.</li>
                    <li>Cookies to track your session and improve your experience.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Respond to your comments, questions, or requests.</li>
                    <li>Monitor and analyze trends, usage, and activities.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-3">3. Sharing Your Information</h2>
                <p className="mb-4">
                    We do not share your personal information with third parties, except:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>When required by law, regulation, or legal process.</li>
                    <li>With third-party service providers to operate our website (such as hosting services).</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
                <p className="mb-4">
                    We use cookies to improve your experience on our site. You can disable cookies through your browser settings, but this may affect your ability to use some features of the site.
                </p>

                <h2 className="text-2xl font-semibold mb-3">5. Data Retention</h2>
                <p className="mb-4">
                    We will retain your personal information for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law.
                </p>

                <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@avnmusic.site" className="text-blue-500 hover:underline">support@avnmusic.site</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this privacy policy from time to time. Any changes will be posted on this page, so please review it periodically.
                </p>

                <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:support@avnmusic.site" className="text-blue-500 hover:underline">support@avnmusic.site</a>.
                </p>
            </div>
            <Footer/>
        </div>
    );
}
