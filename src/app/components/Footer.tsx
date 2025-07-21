"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiOdnoklassniki } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 px-6 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <SiOdnoklassniki />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Store Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Store</h3>
          <ul className="space-y-2 text-sm">
            <li>Lagos, Nigeria</li>
            <li>Worldwide Shipping 🌍</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Submit Measurements</a>
            </li>
            <li>
              <a href="#">Become a Wholesaler</a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            About Bonnie Culture
          </h3>
          <p className="text-sm leading-relaxed">
            We’re redefining African fashion — bold, premium, and
            unapologetically rooted. From the streets of Lagos to the world.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © 2025 Bonnie Culture. All rights reserved.
      </div>
    </footer>
  );
}
