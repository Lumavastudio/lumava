"use client";

import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5 drop-shadow-md" />, href: "https://www.instagram.com/lumava.studio/" },
    { icon: <Youtube className="w-5 h-5 drop-shadow-md" />, href: "https://www.youtube.com/@Lumava.Studio" },
    { icon: <Linkedin className="w-5 h-5 drop-shadow-md" />, href: "https://www.linkedin.com/in/reza-rayen/" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold mb-4 md:mb-0"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Lumava
        </Link>

        {/* Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-white/70 transition-colors">About</Link>
          <Link href="#portfolio" className="hover:text-white/70 transition-colors">Portfolio</Link>
          <Link href="#services" className="hover:text-white/70 transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-white/70 transition-colors">Contact</Link>
        </div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 justify-center mt-4 md:mt-0"
        >
          {socialLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:text-white/90"
            >
              {link.icon}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Copy */}
      <div className="mt-10 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Lumava Studio. All rights reserved.
      </div>
    </footer>
  );
}
