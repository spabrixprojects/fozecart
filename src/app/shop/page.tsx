import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export const metadata = {
  title: "Shop | FOZE CART"
};

export default function Shop() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 md:pt-32">
        <div className="bg-white pb-12 mb-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">All Products</h1>
            <p className="text-gray-500 max-w-xl mx-auto">Browse our premium selection of top-quality products designed for your everyday needs.</p>
          </div>
        </div>

        <section className="pb-20">
          <div className="w-full">
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-8 md:overflow-visible md:pb-0 md:px-4 lg:px-8 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {products.map(product => (
                <div key={product.id} className="w-[85vw] sm:w-[350px] shrink-0 snap-center md:w-auto md:shrink pl-4 md:pl-0 last:pr-4 md:last:pr-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
