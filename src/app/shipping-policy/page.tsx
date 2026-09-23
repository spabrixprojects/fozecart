import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Shipping Policy | FOZE CART"
};

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b border-gray-100 pb-8">Shipping Policy</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Order Processing Times</h3>
              <p>All orders placed on FOZE CART are processed and dispatched within 1-2 business days. Orders are not shipped or delivered on Sundays or local public holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Shipping Rates & Delivery Estimates</h3>
              <p>We are proud to offer <strong>Free Standard Shipping</strong> across all locations in India. Estimated delivery time is typically 3-7 business days depending on your exact location and PIN code accessibility. Delivery delays can occasionally occur due to unforeseen circumstances (e.g., extreme weather or courier strikes).</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Shipment Confirmation & Order Tracking</h3>
              <p>You will receive a Shipment Confirmation message via WhatsApp and Email once your order has successfully shipped, which will contain your tracking number(s). The tracking link will become active within 24 hours of dispatch.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Damages During Transit</h3>
              <p>FOZE CART takes utmost care in packaging our premium products. However, if you receive a damaged order, please contact our support team on WhatsApp at +91 9061780845 immediately with an unboxing video to file a claim. Please save all packaging materials and damaged goods before filing a claim.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
