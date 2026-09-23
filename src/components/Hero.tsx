"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-black min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_banner.png"
          alt="Premium Electronics and Gadgets"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Premium Quality</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              INNOVATION.<br />
              <span className="text-orange-500">ELEVATED.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Explore the future of tech. Premium Gadgets, Unbeatable Performance for your everyday life.
            </p>
            
            <Link href="/shop" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30 w-max">
              Shop The Collection
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
