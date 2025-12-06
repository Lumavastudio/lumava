"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio">
        <PortfolioGrid />
      </section>

      {/* SERVICES SECTION */}
      <section id="services">
        <Services />
      </section>

      {/* CONTACT SECTION */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
