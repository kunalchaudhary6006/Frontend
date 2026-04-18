import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          
          {/* Company Info */}
          <div>
            <span className="font-display font-bold text-2xl tracking-tight text-white mb-6 block">
              PressMart<span className="text-orange-500">.</span>
            </span>
            <p className="text-sm leading-relaxed mb-6">
              We provide modern, premium fashion items. Exploring new styles and keeping our commitment to quality.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>123 Fashion Street, Fifth Avenue, New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>+1 (800) 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>support@pressmart.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Information</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Returns'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                    <span className="h-1 w-1 bg-gray-500 rounded-full mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">My Account</h4>
            <ul className="space-y-3 text-sm">
              {['My Account', 'Order History', 'Wish List', 'Newsletter', 'Affiliate', 'Specials'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                    <span className="h-1 w-1 bg-gray-500 rounded-full mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-6">Newsletter Signup</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <form className="mb-6">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-800 border cursor-text border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-orange-500 transition-colors text-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 bg-orange-500 text-white px-4 font-semibold text-sm rounded-r-md hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} PressMart. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-2">
             {/* Payment Icons Fallback representation */}
             <div className="bg-gray-800 px-3 py-1 rounded text-xs font-bold font-display">VISA</div>
             <div className="bg-gray-800 px-3 py-1 rounded text-xs font-bold font-display">MASTERCARD</div>
             <div className="bg-gray-800 px-3 py-1 rounded text-xs font-bold font-display">PAYPAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
