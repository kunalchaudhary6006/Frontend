export default function PromoBanners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Banner 1: Men's Fashion */}
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl group cursor-pointer bg-gray-100 flex items-center">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1490578474895-699bc4e35154?q=80&w=1000&auto=format&fit=crop" 
                alt="Men's Fashion Promo" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent"></div>
            
            <div className="relative z-10 p-8 sm:p-12 text-white">
              <span className="text-sm font-semibold tracking-widest uppercase mb-3 block text-orange-400">
                Holiday Sale
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Men's Fashion
              </h2>
              <p className="text-lg font-medium mb-6">
                Flat <span className="font-bold text-orange-400">70% Off</span>
              </p>
              <button className="border-b-2 border-white pb-1 font-semibold text-sm hover:text-orange-400 hover:border-orange-400 transition-colors uppercase tracking-wider">
                Discover Now
              </button>
            </div>
          </div>

          {/* Banner 2: Women's Wear */}
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl group cursor-pointer bg-amber-50 flex items-center">
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" 
                alt="Women's Wear Promo" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/50 to-transparent"></div>
            
            <div className="relative z-10 p-8 sm:p-12 text-gray-900 ml-auto text-right md:-ml-8 md:text-right w-full sm:w-2/3">
              <span className="text-sm font-semibold tracking-widest uppercase mb-3 block text-orange-500">
                Season End Sale
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Women's Wear
              </h2>
              <p className="text-lg font-medium mb-6 text-gray-700">
                Min. <span className="font-bold text-gray-900">35–70% Off</span>
              </p>
              <button className="border-b-2 border-gray-900 pb-1 font-semibold text-sm hover:text-orange-500 hover:border-orange-500 transition-colors uppercase tracking-wider">
                Shop Collection
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
