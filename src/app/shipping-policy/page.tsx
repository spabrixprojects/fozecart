import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Shipping Policy | FOZE CART"
};

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Shipping Policy</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-orange">
          <h3>Order Processing Times</h3>
          <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
          
          <h3>Shipping Rates & Delivery Estimates</h3>
          <p>We offer Free Shipping all over India. Estimated delivery time is 3-7 business days depending on your location.</p>
          
          <h3>Shipment Confirmation & Order Tracking</h3>
          <p>You will receive a Shipment Confirmation message via WhatsApp/Email once your order has shipped containing your tracking number(s).</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
