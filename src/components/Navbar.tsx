import { Search, Heart, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-display font-black text-2xl tracking-tighter uppercase text-ink">
              PressMart
            </span>
          </div>

          {/* Center Navigation Menu */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'Shop', 'Pages', 'Blog', 'Elements'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] font-semibold uppercase text-ink hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 text-ink text-[14px]">
            <button className="flex items-center font-medium hover:text-accent transition-colors">
              <span className="hidden sm:block mr-2 uppercase text-[12px] font-bold">Search</span>
              <Search className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button className="flex items-center font-medium hover:text-accent transition-colors">
              <span className="hidden sm:block mr-2 uppercase text-[12px] font-bold">Account</span>
              <User className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button className="flex items-center font-medium hover:text-accent transition-colors">
              <span className="hidden sm:block mr-2 uppercase text-[12px] font-bold">Wishlist</span>
              <Heart className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button className="flex items-center font-medium hover:text-accent transition-colors">
              <span className="hidden sm:block mr-2 uppercase text-[12px] font-bold">Cart (0)</span>
              <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
