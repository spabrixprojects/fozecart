import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import TrustSection from '@/components/TrustSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

import { products } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustSection />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-12 px-4">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Featured Products</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">High quality products for a better everyday life. Experience premium shopping with unmatched support.</p>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8 md:overflow-visible md:pb-0 md:px-4 lg:px-8 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {products.map(product => (
              <div key={product.id} className="w-[85vw] sm:w-[350px] shrink-0 snap-center md:w-auto md:shrink pl-4 md:pl-0 last:pr-4 md:last:pr-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />



      <Footer />
    </main>
  );
}
