"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Orders", href: "/orders" },
    { name: "About", href: "/about" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full px-4 md:px-10 py-2 md:py-3 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm z-50"
    >
      {/* Logo */}
      <Link href="/" className="text-lg md:text-xl font-semibold text-gray-900">
        Bonnie Culture
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-black transition duration-200 ${
                pathname === link.href
                  ? "text-black underline underline-offset-4"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="relative">
          <Link href="/cart" className="text-xl">
            🛒
          </Link>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
        </li>
        <li>
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 transition"
          >
            {isLoggedIn ? "Sign Out" : "Login"}
          </button>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl text-gray-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-black transition ${
                  pathname === link.href
                    ? "text-black font-semibold underline underline-offset-4"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-xl"
            >
              🛒 Cart <span className="ml-1 text-sm text-red-600">(2)</span>
            </Link>

            <button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
                setMenuOpen(false);
              }}
              className="border px-4 py-2 rounded-md"
            >
              {isLoggedIn ? "Sign Out" : "Login"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
