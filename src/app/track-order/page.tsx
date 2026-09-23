import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PlaceholderPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="text-center max-w-lg px-4">
          <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-500 mb-8">Please message our support team on WhatsApp with your Order ID to get the latest tracking information.</p>
          <a href="https://wa.me/917034260515" target="_blank" rel="noopener noreferrer" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Track via WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
