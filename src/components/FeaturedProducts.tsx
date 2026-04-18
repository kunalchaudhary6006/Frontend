import { useState, useEffect } from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";

// Fallback dummy data if API fails (since we are creating the UI layer)
const fallbackProducts = [
  {
    id: 1,
    title: "Classic White Sneakers",
    price: 89.0,
    originalPrice: 120.0,
    rating: 5,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    badge: "-25%",
    category: "New Arrival",
  },
  {
    id: 2,
    title: "Leather Handbag Mini",
    price: 145.0,
    originalPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
    badge: "New",
    category: "New Arrival",
  },
  {
    id: 3,
    title: "Minimalist Watch Black",
    price: 199.0,
    originalPrice: 250.0,
    rating: 5,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    badge: "-20%",
    category: "Top Rated",
  },
  {
    id: 4,
    title: "Denim Jacket Vintage",
    price: 65.0,
    originalPrice: 95.0,
    rating: 4,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop",
    badge: "Sale",
    category: "Best Selling",
  },
  {
    id: 5,
    title: "Cotton Basic T-Shirt",
    price: 25.0,
    originalPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    badge: null,
    category: "Best Selling",
  },
  {
    id: 6,
    title: "Aviator Sunglasses",
    price: 110.0,
    originalPrice: 150.0,
    rating: 5,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop",
    badge: "-26%",
    category: "Top Rated",
  },
  {
    id: 7,
    title: "Casual Wool Sweater",
    price: 75.0,
    originalPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    badge: "New",
    category: "New Arrival",
  },
  {
    id: 8,
    title: "Sports Backpack",
    price: 55.0,
    originalPrice: 85.0,
    rating: 5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    badge: "-35%",
    category: "Best Selling",
  },
];

const TABS = ["New Arrival", "Best Selling", "Top Rated"];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [products, setProducts] = useState(fallbackProducts);

  // Example of how we'd hook this to an existing API 
  useEffect(() => {
    // async function fetchProducts() {
    //   try {
    //     const res = await fetch("/api/products");
    //     const data = await res.json();
    //     setProducts(data);
    //   } catch (e) {
    //     console.error("API failed, using fallback data");
    //     setProducts(fallbackProducts);
    //   }
    // }
    // fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === activeTab || !product.category 
  ).slice(0, 8); // Just show max 8 items

  return (
    <section className="py-20 bg-gray-50 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Trending Products</h2>
          
          {/* Tabs */}
          <div className="flex justify-center space-x-6 sm:space-x-12 border-b border-gray-200 pb-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-semibold tracking-wider transition-colors relative uppercase ${
                  activeTab === tab ? "text-orange-500" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-t-md"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                    {product.badge}
                  </div>
                )}
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-colors shadow-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-gray-900 text-white py-3 font-medium text-sm flex items-center justify-center hover:bg-orange-500 transition-colors rounded-xl shadow-lg">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col items-center text-center">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < product.rating ? "text-orange-400 fill-orange-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <h3 className="font-display font-medium text-gray-900 hover:text-orange-500 cursor-pointer transition-colors line-clamp-1 mb-1">
                  {product.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-900 text-lg">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
