import {  Hexagon, MessageCircle} from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071E17] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid md:grid-cols-5 gap-10">

          {/* Left Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2F8F83] rounded-lg flex items-center justify-center">
                <MessageCircle/>
              </div>
              <h2 className="text-xl font-bold">Ayu
                <span className="text-[#2F8F83]">Chat</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              India's leading WhatsApp Business API platform for growing businesses.
              <br />
              Official Meta Partner.
            </p>

            {/* Social Icons (Custom Images) */}
            <div className="flex gap-3 mt-6">

              {/* Twitter */}
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg hover:bg-white/10 transition cursor-pointer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxcZnWojUniS3M-HhVeLG8jXF1rnHt-_sDw&s"
                  alt="Twitter"
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* LinkedIn */}
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg hover:bg-white/10 transition cursor-pointer">
                <img
                  src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png"
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* Instagram */}
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-lg hover:bg-white/10 transition cursor-pointer">
                <img
                  src="https://img.freepik.com/premium-psd/instagram-logo_971166-164438.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Instagram"
                  className="w-5 h-5 object-contain rounded"
                />
              </div>

            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4 uppercase">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Industries</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Book a Demo</li>
              <li className="hover:text-white cursor-pointer">Become a Business Partner</li>
              <li className="hover:text-white cursor-pointer">WhatsApp Marketing</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4 uppercase">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">About AyuChat</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4 uppercase">Free Tools</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">WhatsApp Link Generator</li>
              <li className="hover:text-white cursor-pointer">WhatsApp Button</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4 uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            Product Copyrights by Agnistoka Technology | © 2026 | Made For ❤️ Bharat
          </p>

          <div className="px-4 py-2 border border-green-600 text-green-400 rounded-full text-xs flex items-center gap-2">
            <Hexagon size={14} strokeWidth={3} className="text-green-600"/>
            Meta Official WhatsApp Business API Partner
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;