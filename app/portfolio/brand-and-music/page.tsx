"use client";

import React, { useState, useRef } from "react";
import Container from "../../../components/Container";
import Navbar from "../../../components/Navbar";
import { brandMusicProjects, BMProject } from "./_projects";

const globalStyles = `
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
  background: transparent !important;
}
`;
if (typeof document !== "undefined" && !document.getElementById("hide-scrollbar-style")) {
  const style = document.createElement("style");
  style.id = "hide-scrollbar-style";
  style.innerHTML = globalStyles;
  document.head.appendChild(style);
}

export default function BrandMusicPage() {
  const [lightboxProject, setLightboxProject] = useState<BMProject | null>(null);
  const [current, setCurrent] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const open = (project: BMProject) => {
    setLightboxProject(project);
    setCurrent(0);
    setReadMore(false);
  };

  const close = () => {
    setLightboxProject(null);
    setCurrent(0);
    setReadMore(false);
  };

  const next = () => {
    if (!lightboxProject?.media.length) return;
    setReadMore(false);
    setCurrent((p) => (p + 1) % lightboxProject.media.length);
  };

  const prev = () => {
    if (!lightboxProject?.media.length) return;
    setReadMore(false);
    setCurrent((p) => (p - 1 + lightboxProject.media.length) % lightboxProject.media.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current == null) return;
    const d = touchStartX.current - touchEndX.current;
    if (d > 50) next();
    if (d < -50) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col" style={{ fontFamily: "'Cinzel', serif" }}>
      <Navbar />

      <Container className="flex-1 py-28">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center tracking-tight">
          Brand & Music
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandMusicProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => open(p)}
              className="group relative cursor-pointer overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-50 bg-gradient-to-t from-white/10 via-transparent to-white/10 blur-xl transition-opacity duration-500" />
              {p.cover ? (
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl"
                />
              ) : (
                <div className="w-full h-64 bg-zinc-900 rounded-xl" />
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* FOOTER */}
      <footer className="w-full fixed bottom-0 z-40 bg-black/40 backdrop-blur-md flex justify-center md:justify-center gap-4 p-3 md:p-6">
        {/* دسکتاپ */}
        <div className="hidden md:flex gap-4">
          <a href="/portfolio/photography" className="px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700" style={{ fontFamily: "'Cinzel', serif" }}>Photography</a>
          <a href="/portfolio/motion-design" className="px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700" style={{ fontFamily: "'Cinzel', serif" }}>Motion Design</a>
          <a href="/portfolio/videography" className="px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-700" style={{ fontFamily: "'Cinzel', serif" }}>Videography</a>
        </div>

        {/* موبایل */}
        <div className="flex md:hidden w-full justify-around items-center">
          <a href="/portfolio/photography" className="flex flex-col items-center text-sm text-white/90 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 110 6 3 3 0 010-6zm8-3h-3l-1-2H8L7 6H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
            </svg>
            Photo
          </a>
          <a href="/portfolio/motion-design" className="flex flex-col items-center text-sm text-white/90 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.657-6.343l-2.12 2.12M7.464 16.536l-2.12 2.12m0-13.657l2.12 2.12m9.193 9.193l2.12 2.12" />
            </svg>
            Motion
          </a>
          <a href="/portfolio/videography" className="flex flex-col items-center text-sm text-white/90 hover:text-white">
            <span className="text-2xl">🎵</span>
            Brand
          </a>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-sm flex items-start justify-center pt-16 px-4 md:pt-24"
          onClick={close}
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-50 text-7xl md:text-8xl text-white p-2 hover:text-gray-300"
            >
              ×
            </button>

            <div className="w-full flex justify-center items-center relative overflow-hidden rounded-md flex-shrink-0">
              {lightboxProject.media.length ? (
                lightboxProject.media[current].type === "video" ? (
                  <video
                    src={lightboxProject.media[current].src}
                    className="w-full rounded-md max-h-[70vh] object-contain"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={lightboxProject.media[current].src}
                    alt=""
                    className="w-full rounded-md max-h-[70vh] object-contain select-none"
                  />
                )
              ) : (
                <div className="w-full h-64 bg-zinc-900 rounded-md flex items-center justify-center text-gray-400">
                  No media found
                </div>
              )}

              {lightboxProject.media.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 rounded-full hover:bg-white/40 transition-colors z-50"
                  >
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 rounded-full hover:bg-white/40 transition-colors z-50"
                  >
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="absolute bottom-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded z-50">
                    {current + 1} / {lightboxProject.media.length}
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 overflow-auto max-h-[25vh] px-2 md:px-0 hide-scrollbar">
              <div className="mx-auto max-w-3xl text-gray-200 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Open Sans', Open Sans" }}>
                <div className="mb-2 font-bold text-white text-xl">{lightboxProject.title}</div>
                <div className="mb-4">
                  {readMore || !lightboxProject.description
                    ? lightboxProject.description
                    : lightboxProject.description.slice(0, 400) + (lightboxProject.description.length > 400 ? "..." : "")}
                </div>
                {lightboxProject.description.length > 400 && (
                  <button
                    onClick={() => setReadMore((r) => !r)}
                    className="text-sm text-blue-300 underline"
                  >
                    {readMore ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
