import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms & Conditions | FOZE CART"
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms & Conditions</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-orange">
          <p>Welcome to FOZE CART. By accessing this website, we assume you accept these terms and conditions. Do not continue to use FOZE CART if you do not agree to take all of the terms and conditions stated on this page.</p>
          
          <h3>License</h3>
          <p>Unless otherwise stated, FOZE CART and/or its licensors own the intellectual property rights for all material on FOZE CART. All intellectual property rights are reserved.</p>
          
          <h3>User Responsibilities</h3>
          <p>Users are expected to use the platform in good faith and not to attempt any fraudulent transactions or activities that may harm the website's integrity.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
