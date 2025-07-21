"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#fafafa] via-white to-[#f3f3f3] px-6 md:px-16 pt-[48px] pb-24">
      {/* Welcome Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[250px] md:h-[350px] mb-12"
      >
        <Image
          src="/home-img2.jpg"
          alt="Welcome"
          fill
          priority
          className="object-cover object-center grayscale hover:grayscale-0 transition duration-700 ease-in-out rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center py-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight">
          A Culture Refined.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Where heritage meets elegance — inspired by Africa, styled with
          intention.
        </p>
      </motion.div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-16 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-lg"
        >
          <Image
            src="/home-img4.jpg"
            alt="Vision"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-black">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bonnie Culture envisions a world where fashion isn’t just aesthetic,
            but deeply meaningful. We see garments as canvases that celebrate
            the soul of Africa — with each thread stitched in pride and legacy.
          </p>
        </motion.div>
      </div>

      {/* Goals Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-16 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 order-2 md:order-1"
        >
          <h2 className="text-3xl font-semibold text-black">Our Goals</h2>
          <ul className="text-lg text-gray-600 space-y-3 list-disc pl-5">
            <li>Preserve African heritage through modern design.</li>
            <li>Empower artisans and local creators.</li>
            <li>Promote sustainable, ethical fashion practices.</li>
            <li>Build a global community that honors cultural identity.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-lg order-1 md:order-2"
        >
          <Image
            src="/home-img5.jpg"
            alt="Goals"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </motion.div>
      </div>

      {/* Craft Meets Culture Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-16 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 order-2 md:order-1"
        >
          <h2 className="text-3xl font-semibold text-black">
            Craft Meets Culture
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our creative process honors generations of craftsmanship — from
            dyeing in ancient pits to weaving intricate patterns by hand. Every
            piece is a link to the past and a nod to modern African identity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-lg order-1 md:order-2"
        >
          <Image
            src="/home-img6.jpg"
            alt="Craft"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </motion.div>
      </div>

      {/* Founder Section - moved last */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center py-16 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-lg"
        >
          <Image
            src="/founder.jpg"
            alt="Founder"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-black">
            From the Founder
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            “Bonnie Culture began as a passion project rooted in love for my
            heritage. I wanted to craft something that not only looked
            beautiful, but felt personal — a tribute to our ancestors, a bridge
            to our future.”
          </p>
          <p className="text-gray-500 italic">– Olaonipekun Adebola, Founder</p>

          {/* Call to Action Button */}
          <button
            onClick={() => window.location.href = "/contact"}
            className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
