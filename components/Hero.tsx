"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-105"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-fallback.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1
            className="text-white text-5xl md:text-8xl font-bold tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Lumava
          </h1>
          <h2
            className="text-white text-4xl md:text-7xl font-semibold tracking-wide mt-1"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Studio
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-white/80 text-lg md:text-2xl mt-6 max-w-xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Crafting cinematic visuals & immersive experiences for brands and creators.
        </motion.p>

        {/* Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 120 }}
          className="mt-8"
        >
          <Link
            href="/#portfolio"
            className="
              inline-block
              bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
              text-white font-bold px-8 py-4 rounded-3xl
              shadow-lg shadow-purple-600/40
              transform transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-pink-400/50
              active:scale-95
            "
          >
            Explore Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
