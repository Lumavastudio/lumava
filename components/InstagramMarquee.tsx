"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [items] = useState(() => [...posts, ...posts]);

  const positionsRef = useRef<number[]>([]);
  const widthsRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const SPEED = 100;
  const GAP = 28;

  useEffect(() => {
    if (!containerRef.current) return;

    itemRefs.current = Array.from(
      containerRef.current.querySelectorAll("[data-marquee-item]")
    ) as HTMLDivElement[];

    widthsRef.current = itemRefs.current.map(
      (el) => el.getBoundingClientRect().width
    );

    let x = 0;
    positionsRef.current = widthsRef.current.map((w) => {
      const cur = x;
      x += w + GAP;
      return cur;
    });

    lastTimeRef.current = null;

    const step = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const shift = SPEED * dt;

      for (let i = 0; i < positionsRef.current.length; i++) {
        positionsRef.current[i] -= shift;
      }

      let rightmost = -Infinity;
      for (let i = 0; i < positionsRef.current.length; i++) {
        const right = positionsRef.current[i] + widthsRef.current[i] + GAP;
        if (right > rightmost) rightmost = right;
      }

      for (let i = 0; i < positionsRef.current.length; i++) {
        if (positionsRef.current[i] + widthsRef.current[i] < 0) {
          positionsRef.current[i] = rightmost;
          rightmost =
            positionsRef.current[i] + widthsRef.current[i] + GAP;
        }
      }

      for (let i = 0; i < itemRefs.current.length; i++) {
        const el = itemRefs.current[i];
        if (el)
          el.style.transform = `translateX(${positionsRef.current[i]}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-black text-white pt-20 pb-28 overflow-hidden">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-4 px-6">
        <h2
          className="text-3xl md:text-4xl font-light"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Instagram Highlights
        </h2>
      </div>

      {/* Marquee */}
      <div
        ref={containerRef}
        className="relative w-full h-[420px] md:h-[560px] overflow-hidden"
      >
        {items.map((post, idx) => (
          <div
            key={idx}
            data-marquee-item
            ref={(el) => {
              if (el) itemRefs.current[idx] = el;
            }}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: 0, willChange: "transform" }}
          >
            <a
              href={post.url}
              target="_blank"
              className="
                group
                block
                relative
                w-[170px] md:w-[240px]
                aspect-[9/16]
                rounded-xl
                overflow-hidden
                transition-transform duration-300
                hover:scale-105
              "
            >
              <Image
                src={post.src}
                alt="instagram"
                fill
                className="object-cover"
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/60 via-black/10 to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* Hover Ring */}
              <div
                className="
                  absolute inset-0
                  rounded-xl
                  ring-0 ring-white/40
                  group-hover:ring-2
                  transition-all duration-300
                "
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
