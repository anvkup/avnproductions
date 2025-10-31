"use client"; 

import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// 1. (FIX) Import Suspense instead of Framer Motion components
import React, { Suspense } from 'react'; 
import { usePathname } from "next/navigation"; 

// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// 2. We keep the ParticleBackground, but use it as a simple background.
import ParticleBackground from "./components/ParticleBackground"; 

// --- Font Setup ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600', '700', '900'] 
});

// 3. (NEW COMPONENT) The Loading Screen
// This will show a clean, solid color until the page content is ready.
const LoadingScreen = () => (
    // Sets the full screen height and uses your dark theme colors
    <div className="fixed inset-0 flex items-center justify-center bg-brand-deep-space z-50">
        <h1 className="text-2xl font-bold text-brand-white">Loading AVN Studio...</h1>
    </div>
);


// --- The Layout Component ---
export default function RootLayout({ children }) {
  // We no longer need the pathname or fadeVariants

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased text-gray-900 dark:text-brand-white bg-white dark:bg-brand-deep-space relative`}
      >
        {/* Particle Animation (z-0: Renders in the absolute background) */}
        <ParticleBackground />

        {/* --- Main Content Wrapper (relative z-10 for stacking) --- */}
        <div className="relative z-10">
          <Navbar />
          
          {/* 4. (FIX) Use Suspense to wrap the main content */}
          <Suspense fallback={<LoadingScreen />}>
            <main>
              {children}
            </main>
          </Suspense>

          <Footer />
        </div>

        {/* --- Scripts (No Change) --- */}
        <Script id="gtm-script" strategy="afterInteractive">
          {/* ... scripts ... */}
        </Script>
        <noscript>
          {/* ... noscript ... */}
        </noscript>
        <Script
          src="httpsM://www.googletagmanager.com/gtag/js?id=AW-17202428540"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {/* ... scripts ... */}
        </Script>
        
      </body>
    </html>
  );
}