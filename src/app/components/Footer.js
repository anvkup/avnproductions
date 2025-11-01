// src/app/components/Footer.js

// ... imports and function definition ...

function Footer() {
    return (
        <footer className="relative z-40 bg-white dark:bg-brand-midnight border-t border-gray-200 dark:border-brand-teal">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    {/* ... other footer content ... */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* ... Navigate To column ... */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-brand-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                                {/* THESE LINKS ARE REMOVED TEMPORARILY */}
                                {/*
                                <li className="mb-4">
                                    <Link href="/pnp" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/tnc" className="hover:underline">Terms & Conditions</Link>
                                </li>
                                */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ... rest of the footer ... */}
            </div>
        </footer>
    );
}

export default Footer;