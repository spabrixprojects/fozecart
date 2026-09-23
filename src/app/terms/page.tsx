import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms & Conditions | FOZE CART"
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b border-gray-100 pb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-lg font-medium text-gray-900">Welcome to FOZE CART. By accessing this website, we assume you accept these terms and conditions. Do not continue to use FOZE CART if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Intellectual Property Rights</h3>
              <p>Unless otherwise stated, FOZE CART and/or its licensors own the intellectual property rights for all material on FOZE CART. All intellectual property rights are reserved. You may access this from FOZE CART for your own personal use subjected to restrictions set in these terms and conditions.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. User Responsibilities</h3>
              <p>Users are expected to use the platform in good faith and not to attempt any fraudulent transactions, unauthorized access, or activities that may harm the website's integrity. Any abusive behavior towards our customer support via WhatsApp will result in immediate termination of service and blocking.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Products and Pricing</h3>
              <p>All products listed on the website are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of products.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Kerala, India.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
