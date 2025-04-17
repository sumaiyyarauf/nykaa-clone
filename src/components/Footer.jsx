import { Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* About Nykaa */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Nykaa</h3>
          <p className="text-sm text-gray-300">
            Your one-stop destination for beauty and wellness products. Explore the best in skincare, makeup, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-black text-sm outline-none"
            />
            <button className="bg-pink-600 px-4 py-2 rounded-r-md text-sm hover:bg-pink-700">
              <Mail size={16} />
            </button>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-pink-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nykaa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
