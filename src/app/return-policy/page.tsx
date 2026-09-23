import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Return Policy | FOZE CART"
};

export default function ReturnPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Return & Refund Policy</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-orange">
          <h3>7-Day Return Window</h3>
          <p>You have 7 days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
          
          <h3>Refunds</h3>
          <p>Once we receive your item, we will inspect it and notify you. If your return is approved, we will initiate a refund to your original method of payment (or via bank transfer for COD orders). You will receive the credit within a certain amount of days.</p>
          
          <h3>Contact Us</h3>
          <p>If you have any questions on how to return your item to us, please contact us via WhatsApp.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
