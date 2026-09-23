import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Return Policy | FOZE CART"
};

export default function ReturnPolicy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b border-gray-100 pb-8">Return & Refund Policy</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Damaged or Defective Items</h3>
              <p>We only replace items if they are severely defective or damaged during transit. We do not offer standard returns for "change of mind." If you receive a damaged product, you must report it to us within <strong>24 hours of delivery</strong>. To process a replacement claim, it is mandatory to provide a clear, uncut unboxing video of the package showing the defect immediately upon opening.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Processing a Replacement</h3>
              <p>Once we receive your unboxing video and verify the damage, we will initiate a free replacement. The damaged item may need to be handed back to our courier partner. Replacements will be shipped out within 2 business days after approval.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Refunds</h3>
              <p>Refunds are strictly provided only if we are unable to provide a replacement for a valid damaged/defective claim. Approved refunds will be processed to the original method of payment (or via bank transfer for COD orders) within 5-7 business days.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Contact Us</h3>
              <p>To initiate a damaged item claim or if you have any questions about this policy, please reach out to our support team instantly via WhatsApp at <strong>+91 9061780845</strong>.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
