import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Frequently Asked Questions | FOZE CART"
};

export default function FAQ() {
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
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Find answers to common questions about our products and services.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
