export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  discount: number;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Massage Gun - Deep Tissue",
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 98,
    image: "/images/massage_gun.jpg",
    images: [
      "/images/massage_gun.jpg",
      "/images/massage_gun_side.jpg",
      "/images/massage_gun_close.jpg"
    ],
    discount: 29,
    description: "Experience professional-grade muscle recovery with our premium deep tissue massage gun. Designed to relieve muscle stiffness, soreness, and improve blood circulation. Features a powerful brushless motor that delivers up to 3200 percussions per minute.",
    features: [
      "6 interchangeable massage heads",
      "30 adjustable speed levels",
      "Ultra-quiet operation (< 45dB)",
      "Long-lasting 2500mAh lithium battery",
      "LCD touch screen display",
      "Ergonomic anti-slip silicone grip"
    ]
  },
  {
    id: "2",
    name: "46 Pcs Socket Set Professional",
    price: 1999,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 124,
    image: "/images/socket_set.jpg",
    images: [
      "/images/socket_set.jpg",
      "/images/socket_set_open.jpg",
      "/images/socket_set_close.jpg"
    ],
    discount: 33,
    description: "A comprehensive 46-piece socket set crafted from high-quality chrome vanadium steel. Ideal for automotive repairs, mechanical tasks, and DIY projects. The heavy-duty blow-molded case keeps all tools organized and secure during transport.",
    features: [
      "Forged from durable Chrome Vanadium Steel",
      "Rust and corrosion resistant finish",
      "72-tooth quick release ratchet",
      "Includes extension bars and universal joint",
      "Metric sockets ranging from 4mm to 14mm",
      "Sturdy blow-molded storage case"
    ]
  },
  {
    id: "3",
    name: "Stainless Steel Vacuum Bottle",
    price: 799,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 76,
    image: "/images/vacuum_bottle.jpg",
    images: [
      "/images/vacuum_bottle.jpg",
      "/images/vacuum_bottle_open.jpg",
      "/images/vacuum_bottle_side.jpg"
    ],
    discount: 33,
    description: "Keep your beverages at the perfect temperature all day long. Our double-walled, vacuum-insulated stainless steel bottle keeps drinks ice-cold for 24 hours or piping hot for 12 hours. The sleek, condensation-free design is perfect for the gym, office, or outdoor adventures.",
    features: [
      "Double-wall vacuum insulation",
      "Premium 18/8 food-grade stainless steel",
      "BPA-free and non-toxic materials",
      "Sweat-proof and leak-proof design",
      "Keeps cold for 24h, hot for 12h",
      "500ml capacity"
    ]
  },
  {
    id: "4",
    name: "Portable Blender 6 Blades",
    price: 1499,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 64,
    image: "/images/portable_blender.jpg",
    images: [
      "/images/portable_blender.jpg",
      "/images/portable_blender_action.jpg",
      "/images/portable_blender_top.jpg"
    ],
    discount: 25,
    description: "Make fresh smoothies, shakes, and juices wherever you go. This powerful portable blender features a 6-blade stainless steel assembly and a high-speed motor that effortlessly crushes ice and frozen fruits. USB rechargeable for ultimate convenience.",
    features: [
      "6 ultra-sharp stainless steel blades",
      "Powerful 20,000 RPM motor",
      "USB Type-C fast charging",
      "Food-grade PCTG material, BPA-free",
      "Built-in safety lock feature",
      "Easy one-button operation and self-cleaning"
    ]
  }
];
