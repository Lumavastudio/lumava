"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.7, delay } },
});

export default function Persona() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex justify-center items-start py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl w-full px-6 flex flex-col md:flex-row gap-12"
      >
        {/* Left: Image */}
        <motion.div variants={fadeUp(0)} className="md:w-1/3 w-full flex justify-center items-start">
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-xl overflow-hidden">
            <Image
              src="/images/about1.jpg"
              alt="Reza Rayen"
              fill
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div variants={fadeUp(0.2)} className="md:w-2/3 w-full flex flex-col gap-10">
          {/* Story */}
          <div>
            <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>My Story</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              I’m a multidisciplinary Iranian-Canadian artist, blending visual arts, motion design, photography, and music. 
              Through Lumava Studio, I craft cinematic visual experiences that evoke emotion, memory, and identity.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Skills & Expertise</h2>
            <ul className="list-disc list-inside text-lg text-white/90 space-y-2">
              <li>Photography & Videography</li>
              <li>Motion Graphics & Animation</li>
              <li>Brand Visual Identity & Creative Direction</li>
              <li>Music Production & Sound Design</li>
              <li>Content Creation for Social Media</li>
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Philosophy</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              My approach is human-centered, calm, and intentional. I focus on atmosphere, detail, and subtle moments that define a brand’s presence. 
              Every project blends technical precision and artistic intuition, creating refined, emotionally resonant experiences.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
