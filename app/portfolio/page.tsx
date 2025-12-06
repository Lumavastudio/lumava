"use client";

import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const categories = [
    {
      title: "Photography",
      slug: "photography",
      cover: "/portfolio/covers/photography.jpg",
    },
    {
      title: "Videography",
      slug: "videography",
      cover: "/portfolio/covers/videography.jpg",
    },
    {
      title: "Motion Design",
      slug: "motion-design",
      cover: "/portfolio/covers/motion-design.jpg",
    },
    {
      title: "Brand & Music",
      slug: "brand-and-music",
      cover: "/portfolio/covers/brand-and-music.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/portfolio/${cat.slug}`}
            className="group relative block rounded-xl overflow-hidden shadow-lg"
          >
            <div className="w-full h-64 relative">
              <Image
                src={cat.cover}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

            <h2 className="absolute bottom-5 left-6 text-2xl font-semibold tracking-wide">
              {cat.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
