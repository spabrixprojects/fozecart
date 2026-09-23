"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "919061780845";
  const whatsappMessage = encodeURIComponent(`Hi, I would like to order the ${product.name}.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {product.discount}% OFF
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-orange-500 hover:bg-gray-50 transition-colors z-10">
          <Heart size={18} />
        </button>
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      
      <div className="p-3 sm:p-5 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm sm:text-lg text-gray-900 mb-1 truncate hover:text-orange-500 transition-colors">{product.name}</h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2 sm:mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[10px] sm:text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-end gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
          <span className="text-base sm:text-2xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-[10px] sm:text-sm text-gray-400 line-through mb-0.5 sm:mb-1">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-base py-2 sm:py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1 sm:gap-2"
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">Order</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
