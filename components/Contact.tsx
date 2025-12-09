"use client";

import { motion, Variants, easeOut } from "framer-motion";
import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa"; // آیکون‌ها

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay: i * 0.15,
    },
  }),
};

export default function Contact() {
  const email = "lumavastudio" + "@gmail.com";

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
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* TITLE */}
        <motion.h4
          variants={fadeUp}
          custom={0}
          className="text-sm tracking-widest text-white/50 font-light"
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

        {/* CONTACT METHODS */}
        <div className="space-y-6">

          {/* EMAIL BUTTON */}
          <motion.button
            variants={fadeUp}
            custom={3}
            onClick={() => (window.location.href = "mailto:" + email)}
            className="inline-block px-12 py-4 border border-white/30 rounded-xl 
                       hover:bg-white hover:text-black transition-all duration-300 
                       text-lg tracking-wide font-medium"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Email Us
          </motion.button>

          {/* INSTAGRAM BUTTON */}
          <motion.a
            variants={fadeUp}
            custom={4}
            href="https://instagram.com/lumavastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 border border-white/30 rounded-xl 
                       hover:bg-white hover:text-black transition-all duration-300 
                       text-lg tracking-wide font-medium"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Instagram DM
          </motion.a>

          {/* FORM CONTACT */}
          <motion.form
            variants={fadeUp}
            custom={5}
            action="https://formsubmit.co/lumavastudio@gmail.com"
            method="POST"
            className="space-y-4 max-w-md mx-auto"
          >
            {/* formsubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white outline-none"
            />

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full px-12 py-4 border border-white/30 rounded-xl 
                         hover:bg-white hover:text-black transition-all duration-300 
                         text-lg tracking-wide font-medium"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Send Message
            </button>
          </motion.form>

          {/* SOCIAL LINKS */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="flex justify-center gap-8 mt-8"
          >
            <a
              href="https://www.linkedin.com/in/reza-hajibagheran/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl hover:text-white/70 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@Lumava.Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl hover:text-white/70 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/lumava.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl hover:text-white/70 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* SUBTLE BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
