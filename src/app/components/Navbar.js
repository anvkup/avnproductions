"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react'; 

// --- Navigation Links ---
// We define our links in one place to keep our code DRY (Don't Repeat Yourself)
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Sticky position and z-index for frosted glass effect
    <nav className="sticky top-0 w-full relative z-50 bg-white/80 dark:bg-brand-midnight/80 backdrop-blur-sm border-b border-gray-200 dark:border-brand-teal">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={"/image/a.png"}  width={30} height={30} alt='Logo'/>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-brand-white">AVN Music Studio</span>
        </Link>

        {/* --- 1. DESKTOP NAV (WITH FADE ANIMATION) --- */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Button 
              key={link.href} 
              variant="link" 
              asChild
              // --- FIX APPLIED HERE ---
              // Default opacity is 70%, hover makes it 100% with a 200ms transition
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Link href={link.href} className="text-gray-900 dark:text-brand-white text-sm font-medium">
                {link.label}
              </Link>
            </Button>
          ))}
          {/* Desktop "Call Us" Button */}
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-brand-white">
            <a href="tel:090607 93927">Call Us</a>
          </Button>
        </div>

        {/* --- 2. MOBILE NAV (SIDE-DRAWER) --- */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            
            {/* The content of the side-drawer */}
            <SheetContent side="right" className="bg-white dark:bg-brand-deep-space border-l dark:border-brand-teal">
              <SheetHeader>
                <SheetTitle className="text-gray-900 dark:text-brand-white">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    // --- FIX APPLIED HERE (Mobile Links) ---
                    className="text-xl font-medium opacity-70 hover:opacity-100 transition-opacity duration-200 text-gray-900 dark:text-brand-white"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Mobile "Call Us" Button */}
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-brand-white mt-6">
                  <a href="tel:090607 93927">Call Us</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;