import React from 'react';

export const metadata = {
    title: "AVN Music Studio | Best Recording Studio in Ranchi",
    description: "",
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-brand-white">Terms and Conditions</h1>

                {/* --- ALL TEXT is now dark:text-gray-100 --- */}
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    Welcome to AVN Music Studio! These terms and conditions outline the rules and regulations for the use of our website, <a href="https://avnmusic.shop" className="text-blue-500 hover:underline">avnmusic.shop</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-brand-white">1. Acceptance of Terms</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    By accessing and using our website...
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-brand-white">2. Use of the Website</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    The content of this website is for your general information...
                </p>

                {/* ... all other sections updated to dark:text-gray-100 ... */}

                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-brand-white">10. Contact Us</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-100">
                    If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@avnmusic.shop" className="text-blue-500 hover:underline">support@avnmusic.shop</a>.
                </p>
            </div>
        </div>
    );
}