import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import { products } from '@/lib/data';
import { ShoppingCart, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) return { title: 'Product Not Found' };
  return { title: `${product.name} | FOZE CART` };
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const whatsappNumber = "917034260515";
  const whatsappMessage = encodeURIComponent(`Hi, I would like to order the ${product.name}.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-28">
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block bg-orange-100 text-orange-600 font-bold text-xs px-3 py-1 rounded-full mb-4">
                  {product.discount}% OFF SPECIAL DEAL
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">{product.rating} Rating</span>
                  <span className="text-sm text-gray-400">|</span>
                  <span className="text-sm font-medium text-gray-600">{product.reviews} Reviews</span>
                </div>

                <div className="flex items-end gap-3 mb-8 pb-8 border-b border-gray-100">
                  <span className="text-4xl font-extrabold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-xl text-gray-400 line-through mb-1">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                </div>

                <div className="mb-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 flex justify-center items-center gap-3 text-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShoppingCart size={24} />
                    Order Now on WhatsApp
                  </a>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <Truck className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 font-medium">Free Shipping</span>
                    </div>
                    <div className="text-center border-l border-gray-100">
                      <ShieldCheck className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 font-medium">Secure Checkout</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>



            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
