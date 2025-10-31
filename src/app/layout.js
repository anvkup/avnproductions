// src/app/layout.js

"use client"; 

// --- FONT IMPORTS (New Selection) ---
import { Inter, Montserrat, Lato, Roboto_Condensed, Titillium_Web } from "next/font/google"; 
import Script from "next/script";
import "./globals.css";
// --- FRAMEWORK IMPORTS ---
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"; 

// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";


// --- FONT CONFIGURATION ---
// Base Font (Inter)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'] 
});

// Animation Fonts (Must be included for the animation to work)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', 
  weight: '700',
  display: 'swap'
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato', 
  weight: '400', 
  display: 'swap'
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed', 
  weight: '700',
  display: 'swap'
});

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-titillium-web', 
  weight: '900', // Added required weight
  display: 'swap'
});


// --- The Layout Component ---
export default function RootLayout({ children }) {
  // Hook required for Framer Motion to track route changes
  const pathname = usePathname(); 

  // Defines the smooth fade-in/fade-out movement
  const fadeVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  return (
    <html lang="en" className="dark">
      {/* <body> Tag: Sets global styling and background */}
      <body
        className={`${inter.variable} ${montserrat.variable} ${lato.variable} ${robotoCondensed.variable} ${titilliumWeb.variable} antialiased text-gray-900 dark:text-brand-white bg-white dark:bg-brand-deep-space relative`}
      >
        {/* --- GOOGLE TAG MANAGER (GTM) NOSCRIPT SNIPPET (First in body) --- */}
        <noscript>
          <iframe
            src="https://googletagmanager.com/ns.html?id=GTM-M7PGTCHS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {/* Particle Animation (z-0: Renders in the absolute background) */}
        <ParticleBackground />

        {/* --- Main Content Wrapper (relative z-10 for stacking Navbar/Footer) --- */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Framer Motion Page Transition */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={pathname} // KEY is essential to trigger the animation on route change
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              // Fixes blinking by delaying the entry animation slightly
              transition={{ duration: 0.25, type: "tween", delay: 0.1 }} 
            >
              {children}
            </motion.main>
          </AnimatePresence>

          <Footer />
        </div>

        {/* --- SCRIPTS (Placed at end of body for performance) --- */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7PGTCHS');
          `}
        </Script>
        <Script
          src="httpsM://www.googletagmanager.com/gtag/js?id=AW-17202428540"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17202428540');
          `}
        </Script>
        
      </body>
    </html>
  );
}