import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: "About Us | FOZE CART"
};

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 md:pt-32">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At FOZE CART, our mission is simple: provide exceptional products that enhance your daily life. We carefully curate our collection to ensure every item meets our strict quality standards. From high-performance massage guns to durable tools and stylish everyday carry items, we've got you covered.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> Premium Quality Guarantee</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> Fast & Free Shipping Across India</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> Dedicated WhatsApp Support</li>
                <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> 100% Secure Payments</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/hero_banner.png" 
                alt="About FOZE CART" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  );
}
