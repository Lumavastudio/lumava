"use client";

import { motion } from "framer-motion";
import { Film, Camera, Palette, Layers } from "lucide-react";
import { Variants, Easing } from "framer-motion";


const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], // <- این معادل easeInOut
      delay: i * 0.1,
    },
  }),
};



export default function Services() {
  return (
    <section className="w-full py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="text-center mb-16"
        >
          <motion.h4
            variants={fade}
            custom={0}
            className="text-sm tracking-widest text-white/50 font-light mb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            SERVICES
          </motion.h4>

          <motion.h2
            variants={fade}
            custom={1}
            className="text-3xl md:text-5xl font-light tracking-tight leading-tight"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Visual Craft for
            <br />
            Modern Brands
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Item 1 */}
          <motion.div
            variants={fade}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 
            backdrop-blur-xl transition-all duration-600
            hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Layers className="w-12 h-12 mb-6 opacity-85 group-hover:opacity-100 transition" />
            <h3
              className="text-xl font-normal mb-3 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Motion & Composition
            </h3>
            <p className="text-white/70 leading-relaxed text-[15.5px] font-light">
              A cinematic approach to crafting frames, sequences, and motion worlds that feel intentional.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 
            backdrop-blur-xl transition-all duration-600
            hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Palette className="w-12 h-12 mb-6 opacity-85 group-hover:opacity-100 transition" />
            <h3
              className="text-xl font-normal mb-3 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Visual Identity
            </h3>
            <p className="text-white/70 leading-relaxed text-[15.5px] font-light">
              Minimal yet expressive brand visuals designed with precision, tone and balance.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            variants={fade}
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 
            backdrop-blur-xl transition-all duration-600
            hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Camera className="w-12 h-12 mb-6 opacity-85 group-hover:opacity-100 transition" />
            <h3
              className="text-xl font-normal mb-3 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Creative Direction
            </h3>
            <p className="text-white/70 leading-relaxed text-[15.5px] font-light">
              Building visual worlds through mood, narrative and high-end creative leadership.
            </p>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            variants={fade}
            custom={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 
            backdrop-blur-xl transition-all duration-600
            hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Film className="w-12 h-12 mb-6 opacity-85 group-hover:opacity-100 transition" />
            <h3
              className="text-xl font-normal mb-3 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Cinematic Branding
            </h3>
            <p className="text-white/70 leading-relaxed text-[15.5px] font-light">
              Premium brand storytelling shaped through film-inspired aesthetics and emotion-driven design.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
