"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const textItem = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.8, delay },
  },
});

const imageItem: Variants = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { ease: "easeOut", duration: 1 } },
};

export default function About() {
  return (
    <section className="w-full py-25 bg-black text-white flex justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl w-full px-6 flex flex-col gap-12"
      >
        {/* Title */}
        <motion.h2 variants={textItem(0)} className="text-center">
          <span className="block text-3xl font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
            About
          </span>
          <span className="block text-5xl md:text-6xl font-bold mt-2" style={{ fontFamily: "'Cinzel', serif" }}>
            Lumava Studio
          </span>
        </motion.h2>

        {/* Content: Two Columns */}
        <div className="flex flex-col md:flex-row gap-8 bg-gray-900/30 rounded-2xl shadow-xl overflow-hidden">
          {/* Left: Text */}
          <motion.div variants={textItem(0.3)} className="md:w-1/2 w-full flex flex-col justify-center p-8">
            <div className="flex flex-col justify-between h-full space-y-5">
              <p className="text-lg leading-relaxed text-white/90">
                Lumava Studio is a modern cinematic design house built on the belief that visual storytelling can shape emotion, memory, and identity.  
                Founded by <span className="font-bold text-white">Reza Rayen</span>, a multidisciplinary Iranian-Canadian artist with a background in animation, visual arts, photography, music, and motion design, Lumava blends minimal aesthetics with film-inspired direction to create refined, emotionally resonant experiences.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                <span className="font-bold text-white">Reza’s work</span> is shaped by a rare combination of technical precision and artistic intuition, a visual sensitivity developed through years of creating across mediums: portrait and commercial photography, content creation, music production, motion graphics, and collaborative brand projects. His approach is calm, intentional, and human-centered, focusing on atmosphere, detail, and subtle moments that define a brand’s presence.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                The studio is evolving toward a collaborative team, a collective of designers, filmmakers, and visual storytellers who share a commitment to depth, craft, and contemporary cinematic design. We collaborate with brands, studios, companies, and creators who value design, depth, and sophisticated cinematic presence.
              </p>
            </div>
          </motion.div>

          {/* Right: Image as Link */}
          <motion.div variants={imageItem} className="md:w-1/2 w-full flex justify-center items-center p-8">
            <Link href="/persona" className="w-full h-full cursor-auto"> {/* لینک بدون اثر hover */}
              <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
                <Image 
                  src="/images/about1.jpg" 
                  alt="Lumava Studio" 
                  fill 
                  className="object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent rounded-xl"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
