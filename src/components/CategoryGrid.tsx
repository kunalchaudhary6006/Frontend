import { ArrowRight } from "lucide-react";

export default function CategoryGrid() {
  return (
    <section className="py-6 bg-paper">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          
          {/* Main Large Category */}
          <div className="group relative h-[292px] lg:h-full overflow-hidden bg-[#eee] cursor-pointer rounded-[4px] flex items-end p-4">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
              alt="Women's Style"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="relative z-10 text-white">
              <h2 className="text-[18px] text-white uppercase font-extrabold m-0 tracking-tight">Women Style</h2>
            </div>
          </div>

          {/* Grid of smaller Categories */}
          <div className="grid grid-rows-2 gap-3 h-[292px] lg:h-[400px]">
             {/* Top Item */}
             <div className="group relative h-full overflow-hidden bg-[#eee] cursor-pointer rounded-[4px] flex items-end p-4">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" 
                alt="Handbags"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="relative z-10 text-white">
                  <h2 className="text-[18px] text-white uppercase font-extrabold m-0 tracking-tight">Handbag Collection</h2>
               </div>
             </div>

             {/* Bottom Two Items */}
             <div className="grid grid-cols-2 gap-3 h-full">
                <div className="group relative h-full overflow-hidden bg-[#eee] cursor-pointer rounded-[4px] flex items-end p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop" 
                    alt="Watches"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="relative z-10 text-white">
                    <h2 className="text-[18px] text-white uppercase font-extrabold m-0 tracking-tight">Watches</h2>
                  </div>
                </div>
                
                <div className="group relative h-full overflow-hidden bg-[#eee] cursor-pointer rounded-[4px] flex items-end p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop" 
                    alt="Backpacks"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="relative z-10 text-white">
                    <h2 className="text-[18px] text-white uppercase font-extrabold m-0 tracking-tight">Backpacks</h2>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
