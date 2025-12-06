"use client";

import { motion, Easing, Variants, easeOut } from "framer-motion";
import React from "react";


  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // ← استفاده از easing استاندارد Framer Motion
        delay: i * 0.15,
      },
    }),
  };

  export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-28 px-6 md:px-16 lg:px-28 relative overflow-hidden"
    >
      {/* GRADIENT LINE */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <motion.h4
          variants={fadeUp}
          custom={0}
          className="text-sm tracking-widest text-white/50 font-light mb-2"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          CONTACT
        </motion.h4>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl md:text-5xl font-light leading-snug"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Let’s Create <br /> Something Meaningful
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-white/70 md:text-lg leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          For collaborations, bookings, or creative projects, feel free to reach out.
          We aim to respond within 24 hours.
        </motion.p>

        <motion.a
          variants={fadeUp}
          custom={3}
          href="mailto:info@lumava.com"
          className="inline-block px-12 py-4 border border-white/30 rounded-xl 
                     hover:bg-white hover:text-black transition-all duration-300 
                     text-lg tracking-wide font-medium"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          info@lumava.com
        </motion.a>
      </motion.div>

      {/* SUBTLE BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
