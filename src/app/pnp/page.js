import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-brand-white">Privacy Policy</h1>

                {/* --- ALL TEXT is now dark:text-gray-100 --- */}
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    Welcome to AVN Music Studio! This privacy policy explains how we collect, use, and share your personal information when you visit our website <a href="https://avnmusic.site" className="text-blue-500 hover:underline">avnmusic.site</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-brand-white">1. Information We Collect</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    We collect the following types of information:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-100">
                    <li>Personal information such as name...</li>
                    <li>Browsing data such as IP address...</li>
                    <li>Cookies to track your session...</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-brand-white">2. How We Use Your Information</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    We use the information we collect to:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-100">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Respond to your comments, questions, or requests.</li>
                    <li>Monitor and analyze trends, usage, and activities.</li>
                </ul>
                
                {/* ... all other sections updated to dark:text-gray-100 ... */}

                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-brand-white">8. Contact Us</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:support@avnmusic.site" className="text-blue-500 hover:underline">support@avnmusic.site</a>.
                </p>
            </div>
        </div>
    );
}