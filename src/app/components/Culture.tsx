"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const allImages = Array.from({ length: 14 }, (_, i) => `home-img${i + 1}.jpg`);

export default function Culture() {
  return (
    <section className="w-full px-6 md:px-16 py-24 bg-white text-center space-y-12">
      {/* Typing Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-gray-900"
      >
        Let’s uphold African{" "}
        <span className="text-black">
          <Typewriter
            words={["heritage.", "pride.", "elegance.", "identity."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </motion.h2>

      {/* Story paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
      >
        African fashion isn’t just style — it’s identity, a powerful expression
        of tradition and future. From handwoven textures to bold prints, every
        piece tells a story passed through generations.
      </motion.p>

      {/* Full Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allImages.map((img, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={`/${img}`}
              alt={`Fabric ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
