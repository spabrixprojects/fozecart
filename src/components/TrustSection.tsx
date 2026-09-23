import { Truck, ShieldCheck, RefreshCw, HeadphonesIcon } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-black" />,
      title: "Free Shipping",
      desc: "All Over India"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: "Secure Payment",
      desc: "100% Safe & Secure"
    },

    {
      icon: <HeadphonesIcon className="w-8 h-8 text-black" />,
      title: "Dedicated Support",
      desc: "Always Here to Help"
    }
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 justify-center md:justify-start lg:justify-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
