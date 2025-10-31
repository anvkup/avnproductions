"use client"; 

import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
// --- THIS IS THE FIX ---
// 1. Import usePathname from the correct library
import { usePathname } from "next/navigation"; 


// --- Components ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

// --- Font Setup ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600', '700', '900'] 
});

// NOTE: Remember to manage your metadata in a separate file or within individual pages.

// --- The Layout Component ---
export default function RootLayout({ children }) {
  // 2. The usePathname hook is now properly defined
  const pathname = usePathname(); 

  const fadeVariants = {
    initial: { opacity: 0, y: 5 },  // Start slightly below center
    animate: { opacity: 1, y: 0 },   // End at center
    exit: { opacity: 0, y: -5 },     // Fade out slightly above
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased text-gray-900 dark:text-brand-white bg-white dark:bg-brand-deep-space relative`}
      >
        <ParticleBackground />

        <div className="relative z-10">
          <Navbar />
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.main
              key={pathname} // KEY is essential: it tells AnimatePresence the content has changed
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, type: "tween" }} 
            >
              {children}
            </motion.main>
          </AnimatePresence>

          <Footer />
        </div>

        {/* --- Scripts (No Change) --- */}
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
        <noscript>
          <iframe
            src="https://googletagmanager.com/ns.html?id=GTM-M7PGTCHS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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