"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Imports ---
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Facebook, Instagram, Linkedin } from 'lucide-react'; // Added social icons

// --- Navigation Links ---
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

        {/* --- 1. DESKTOP NAV WRAPPER --- */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Desktop Nav Links */}
          {navLinks.map((link) => (
            <Button 
              key={link.href} 
              variant="link" 
              asChild
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Link href={link.href} className="text-gray-900 dark:text-brand-white text-sm font-medium">
                {link.label}
              </Link>
            </Button>
          ))}

          {/* 2. (NEW) SOCIAL ICONS (Shown on Desktop) */}
          <div className="flex space-x-2 border-l border-gray-200 dark:border-brand-teal pl-4">
            <Button variant="ghost" size="icon" asChild className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                <a href="https.www.facebook.com/profile.php?id=61566925568567" target="_blank" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                <a href="https.www.instagram.com/avn.music1/" target="_blank" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                <a href="https.www.linkedin.com/company/avn-productions1" target="_blank" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </Button>
          </div>
          
          {/* Desktop "Call Us" Button */}
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-brand-white">
            <a href="tel:090607 93927">Call Us</a>
          </Button>
        </div>

        {/* --- MOBILE NAV (SIDE-DRAWER) --- */}
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
                    className="text-xl font-medium opacity-70 hover:opacity-100 transition-opacity duration-200 text-gray-900 dark:text-brand-white"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* 3. (NEW) MOBILE SOCIAL ICONS (Placed below the links) */}
                <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-brand-teal">
                    <a href="https.www.facebook.com/profile.php?id=61566925568567" target="_blank" aria-label="Facebook"><Facebook className="h-6 w-6 text-blue-500" /></a>
                    <a href="https.www.instagram.com/avn.music1/" target="_blank" aria-label="Instagram"><Instagram className="h-6 w-6 text-blue-500" /></a>
                    <a href="https.www.linkedin.com/company/avn-productions1" target="_blank" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-blue-500" /></a>
                </div>

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