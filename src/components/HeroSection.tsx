import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#f4f4f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[260px] lg:h-[400px]">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 py-10 flex flex-col justify-center z-10">
            <div className="">
              <h2 className="font-display text-[12px] tracking-[4px] text-accent font-bold uppercase m-0 mb-2">
                Season Sale
              </h2>
              <h1 className="font-display text-[60px] lg:text-[80px] font-extrabold text-ink leading-[0.9] tracking-[-2px] uppercase m-0 mb-4">
                MEN'S <br />
                FASHION
              </h1>
              <p className="text-ink opacity-60 font-medium mb-6 text-[15px]">
                Min. 35–70% Off on selected autumn collections.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="bg-ink hover:opacity-80 text-white px-6 py-3 text-[12px] font-bold uppercase cursor-pointer border-none transition-opacity">
                  SHOP NOW
                </button>
                <button className="bg-transparent border border-ink text-ink hover:bg-ink hover:text-white px-6 py-3 text-[12px] font-bold uppercase cursor-pointer transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-full flex justify-end">
             <div className="absolute inset-0 w-full h-full overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop" 
                 alt="Men's Fashion Model" 
                 className="w-full h-full object-cover object-top"
                 referrerPolicy="no-referrer"
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
