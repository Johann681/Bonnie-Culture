"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] pt-24 px-6 md:px-16 pb-12 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Section */}
      <div className="max-w-xl space-y-5 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Unleash Your Culture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg"
        >
          Discover timeless African fabrics and modern styles that celebrate
          heritage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/shop"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md h-[400px] relative"
      >
        {" "}
        <Image
          src="/home-img1.jpg"
          alt="Main Hero"
          fill
          className="object-cover rounded-xl shadow-md"
          priority
        />
      </motion.div>
    </section>
  );
}
