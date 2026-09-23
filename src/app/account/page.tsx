import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PlaceholderPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="text-center max-w-lg px-4">
          <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Coming Soon</h1>
          <p className="text-gray-500 mb-8">This feature is currently under development. In the meantime, you can manage your orders and account through our dedicated WhatsApp support.</p>
          <a href="https://wa.me/917034260515" target="_blank" rel="noopener noreferrer" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Contact Support
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
