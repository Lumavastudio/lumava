"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Portfolio", href: "/#portfolio" },
    { title: "Services", href: "/#services" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold font-cinzel"
        >
          Lumava
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-white font-light hover:text-white/70 transition-colors duration-300 font-cinzel"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 w-full text-center py-6 space-y-4"
          >
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-white text-xl font-light block font-cinzel"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
