"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content jump when fixed */}
      <div className="h-20 w-full bg-white hidden" style={{ display: isScrolled ? 'block' : 'none' }}></div>
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        isScrolled 
          ? 'px-4 mt-4 mx-4 md:mx-auto max-w-6xl rounded-full bg-white/85 backdrop-blur-lg shadow-lg border border-white/20'
          : 'bg-white border-b border-gray-100 shadow-sm w-full'
      }`}>
        <div className={`w-full ${isScrolled ? 'px-4 md:px-6' : 'container mx-auto px-4 md:px-6'}`}>
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className={`relative transition-all duration-300 rounded overflow-hidden ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                <Image src="/logo.png" alt="FOZE CART Logo" fill className="object-cover" priority />
              </div>
              <span className={`font-extrabold tracking-tighter text-black transition-all ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                FOZE<span className="text-orange-500">CART</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-900 font-medium hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/shop" className="text-gray-600 font-medium hover:text-orange-500 transition-colors">Shop</Link>
              <Link href="/about" className="text-gray-600 font-medium hover:text-orange-500 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 font-medium hover:text-orange-500 transition-colors">Contact</Link>
            </nav>


            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Side Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-extrabold tracking-tighter text-black text-xl">
                  FOZE<span className="text-orange-500">CART</span>
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 bg-gray-50 rounded-full hover:text-orange-500 hover:bg-orange-50 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2 p-6 flex-grow">
                <Link href="/" className="text-lg font-medium text-gray-900 py-3 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link href="/shop" className="text-lg font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
                <Link href="/about" className="text-lg font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/contact" className="text-lg font-medium text-gray-600 py-3 border-b border-gray-50 hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
