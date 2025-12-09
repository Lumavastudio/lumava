// components/PortfolioGridGSAP.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const items = [
  {
    title: "Photography",
    image: "/images/portfolio/photography2.jpg",
    link: "/portfolio/photography",
    from: "left",
  },
  {
    title: "Videography",
    image: "/images/portfolio/videography3.jpg",
    link: "/portfolio/videography",
    from: "right",
  },
  {
    title: "Motion Design",
    image: "/images/portfolio/motion-design3.jpg",
    link: "/portfolio/motion-design",
    from: "left",
  },
  {
    title: "Brand & Music",
    image: "/images/portfolio/brand-music2.jpg",
    link: "/portfolio/brand-and-music",
    from: "right",
  },
];

export default function PortfolioGridGSAP() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll(".portfolio-card");
    const tl = gsap.timeline();

    children.forEach((child, idx) => {
      const fromDir = items[idx].from === "left" ? -100 : 100;
      tl.fromTo(
        child,
        { opacity: 0, x: fromDir, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        idx * 0.25 // stagger: 0.25s بین کارت‌ها
      );
    });
  }, []);

  return (
    <section className="w-full bg-black py-0 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h4
            className="text-sm tracking-widest text-white/50 font-light mb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            PORTFOLIO
          </h4>

          <h2
            className="text-3xl md:text-5xl font-light tracking-tight leading-snug text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Creative Projects
            <br />
            & Visual Stories
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {items.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="block portfolio-card group relative rounded-2xl overflow-hidden cursor-pointer 
                         bg-black/5 border border-black/10 hover:bg-black/10 
                         transition-all duration-500 hover:-translate-y-2 
                         shadow-lg hover:shadow-2xl"
            >
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 
                             group-hover:scale-110 brightness-[92%] contrast-[104%]"
                />

                {/* DARK GRADIENT */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                             opacity-80 group-hover:opacity-95 transition-opacity duration-500"
                />

                {/* TITLE */}
                <div
                  className="absolute bottom-4 left-4 text-white text-xl md:text-2xl 
                             tracking-wide drop-shadow-2xl font-light transition-all 
                             duration-500 group-hover:translate-y-[-6px]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
