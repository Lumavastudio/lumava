"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  { src: "/instagram/img1.webp", url: "https://www.instagram.com/reel/DROZvjcDBVC/" },
  { src: "/instagram/img2.webp", url: "https://www.instagram.com/reel/DM4Oo9Ys0KZ/" },
  { src: "/instagram/img3.webp", url: "https://www.instagram.com/reel/DQx8Yi4DCaF/" },
  { src: "/instagram/img4.webp", url: "https://www.instagram.com/reel/DPVayCZjIUD/" },
  { src: "/instagram/img5.webp", url: "https://www.instagram.com/reel/DNHsF90sdFE/" },
  { src: "/instagram/img6.webp", url: "https://www.instagram.com/reel/DMei-URMfS7/" },
  { src: "/instagram/img7.webp", url: "https://www.instagram.com/reel/DQnm3dCjEzC/" },
  { src: "/instagram/img8.webp", url: "https://www.instagram.com/reel/DNrFF9h3uII/" },
];

export default function InstagramMarquee() {
  return (
    <section className="w-full bg-black text-white py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12 px-6 md:px-16 lg:px-28">
        <h2
          className="text-3xl md:text-4xl font-light"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Instagram Highlights
        </h2>
      </div>

      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {[...posts, ...posts].map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[180px] md:w-[240px] flex-shrink-0 overflow-hidden rounded-xl aspect-[9/16] hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={post.src}
              alt="Instagram post"
              fill
              className="object-cover"
            />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
