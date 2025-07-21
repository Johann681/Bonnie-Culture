"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const fabricFilters = ["Adire", "Lace", "Ankara", "Kente"];
const wearFilters = ["Men", "Women", "Boys", "Girls"];
const accessoryFilters = ["Bags", "Headwraps", "Jewelry", "Shoes"];

// Build all image objects from public/home-img1.jpg to home-img14.jpg
const allImages = Array.from({ length: 14 }, (_, i) => ({
  src: `/home-img${i + 1}.jpg`,
  title: `Elegant Fabric ${i + 1}`,
}));

export default function ShopSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="w-full px-6 md:px-16 py-20 bg-[#fafafa]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Shop Our Collections
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Authentic African textures. Rooted in heritage. Styled for today.
        </p>
      </motion.div>

      {/* Dropdown Filters */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[
          { title: "Fabrics", options: fabricFilters },
          { title: "Ready to Wear", options: wearFilters },
          { title: "Accessories", options: accessoryFilters },
        ].map(({ title, options }) => (
          <div key={title} className="relative group">
            <button
              onClick={() => setOpen(open === title ? null : title)}
              className="px-5 py-2 bg-white rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition font-medium"
            >
              {title}
            </button>

            <AnimatePresence>
              {open === title && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg z-10 w-48 ring-1 ring-gray-200"
                >
                  <ul className="py-2">
                    {options.map((opt) => (
                      <li key={opt}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                          {opt}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {allImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-[300px] object-cover"
              onError={(e) => {
                e.currentTarget.src = "/fallback.jpg"; // Optional: Add fallback.jpg to public folder
              }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Available in multiple colors
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
