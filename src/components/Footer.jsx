import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-700 gap-4">
        <div className="flex items-center gap-2">
          <MdEmail className="text-xl" />
          <p>Get special discount on your inbox</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-700 p-2 rounded-md text-sm"
          />
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm">SEND</button>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium">EXPERIENCE THE NYKAA MOBILE APP</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <img
             src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
             alt="Google Play"
             className="h-10 w-auto" />
            <img
             src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
             alt="App Store"
             className="h-10 w-auto" />
          </div>
        </div>

        <div className="text-sm">
          <div className="flex items-center gap-2">
            <span>FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444</span>
          </div>
          <p>(Mon to Sat, 8AM to 10PM and Sun, 10AM to 7PM)</p>
        </div>
      </div>

      <div className="bg-gray-700 grid grid-cols-2 md:grid-cols-5 gap-6 p-6 text-sm">
        <div>
          <h2 className="text-xl font-bold mb-2">NYKAA</h2>
          <ul className="space-y-1">
            <li>Who are we?</li>
            <li>Careers</li>
            <li>Authenticity</li>
            <li>Press</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Store Locator</li>
            <li>Cancellation & Return</li>
            <li>Shipping & Delivery</li>
            <li>Sell on Nykaa</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Inspire Me</h3>
          <ul className="space-y-1">
            <li>Beauty Book</li>
            <li>Games Board</li>
            <li>Buying Guides</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Offer Zone</li>
            <li>New Launches</li>
            <li>Nykaa Man</li>
            <li>Nykaa Fashion</li>
            <li>Nykaa Pro</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Top Categories</h3>
          <ul className="space-y-1">
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Bath & Body</li>
          </ul>
        </div>
      </div>

      {/* <div className="flex justify-end items-center p-4">
        <button className="bg-gray-600 p-3 rounded-full hover:bg-gray-500">
          <FaArrowUp className="text-white" />
        </button>
      </div> */}



<div className="bg-white text-gray-700 py-6 grid grid-cols-2 md:grid-cols-5 text-center gap-6 px-4">
   <div className="flex flex-col md:flex-row gap-2 items-center">
     <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="" />
    <div>
      <p className="font-bold">FREE SHIPPING</p>
      <p className="text-sm">On Orders Above ₹299</p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-2 items-center">
    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="" />
    <div>
      <p className="font-bold">EASY RETURNS</p>
      <p className="text-sm">15-Day Return Policy</p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-2 items-center">
    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="" />
    <div>
      <p className="font-bold">100% AUTHENTIC</p>
      <p className="text-sm">Products Sourced Directly</p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-2 items-center">
    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="" />
    <div>
       <p className="font-bold">1900+ BRANDS</p>
       <p className="text-sm">1.2 Lakh+ Products</p>
    </div>
  </div>

  <div className="bg-white py-4 flex flex-col  justify-between items-center px-4 font-bold">
  <p>Show us some love <span className="text-black font-bold">❤</span> on social media</p>
  <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
    <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="" className="hover:text-pink-600 cursor-pointer" />
    <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="" className="hover:text-pink-600 cursor-pointer" />
    <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="" className="hover:text-pink-600 cursor-pointer" />
    <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="" className="hover:text-pink-600 cursor-pointer" />
    <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="" className="hover:text-pink-600 cursor-pointer" />
  </div>
</div>

</div>

<div className="bg-pink-600 text-white text-center py-3 text-sm space-x-4">
  <span className="cursor-pointer hover:underline">Terms & Conditions</span>
  <span className="cursor-pointer hover:underline">Shipping Policy</span>
  <span className="cursor-pointer hover:underline">Cancellation Policy</span>
  <span className="cursor-pointer hover:underline">Privacy Policy</span>
  <p className="mt-2">© 2025 NYKAA E-RETAIL LIMITED All Rights Reserved.</p>
</div>

<div className="bg-gray-100 px-4 py-6 text-sm">
  <h4 className="font-semibold mb-2 text-gray-800">Popular Links</h4>
  <p className="text-gray-600">
    Lipstick, Highlighter, Hair Serum, Concealer, Face Mask, Biotique, Lip Gloss, Perfume For Women, Facial Kit, BB Cream, Victoria Secret, Love Beauty And Planet Shampoo, Eyeliner, Hair Mask, Face Wash For Oily Skin, Ordinary, Toner, Eyeshadow Palette, Cleanser, Chemist At Play, Mascara, Loreal Professional, Hair Extensions, Olay Cream, Fogg, Lip Tint, Under Eye Cream, Wax Strips, Shower Gel, Sunscreen For Face, Insight Cosmetics, Mac Foundation, Hair Removal Machine, Mac Foundation, Choker, Oud Perfume, Makeup Pouch, Olaplex, Body Mist, Wella Shampoo, Huda Beauty Foundation, Night Cream, Facewash, Nyx, Schwarzkopf Shampoo, Blue Heaven, Peel Off Mask, Best Lip Balm, Face Scrub, Cetaphil Face Wash, Mederma Cream, Multivitamins Tablet, Himalaya Face Wash, Garnier Face Wash, Hair Color For Women, Cetaphil Moisturizer, Hair Serum, Hair Wash, Streax Hair Serum, Nivea Body Lotions, Vaseline Body Lotions, Sugar Lipstick, Biotin Tablet, Aqualogica Sunscreen
  </p>
</div>
    </footer>
  );
};

export default Footer;
