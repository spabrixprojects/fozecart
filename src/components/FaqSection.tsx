"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I place an order?",
      a: "You can place an order directly through WhatsApp by clicking the 'Order on WhatsApp' button on any product page. Our team will assist you with the rest."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept Cash on Delivery (COD), UPI (GPay, PhonePe, Paytm), and major Credit/Debit cards via secure payment links."
    },
    {
      q: "How long does shipping take?",
      a: "Orders are typically processed within 24 hours. Standard shipping takes 3-7 business days depending on your location in India."
    },
    {
      q: "What is your return policy?",
      a: "We offer a hassle-free 7-day return policy for unused items in their original packaging. Please contact our support team to initiate a return."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-colors hover:border-orange-500/50"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-gray-900 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown 
                  className={`text-orange-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
