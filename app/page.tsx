'use client';

import About from "./about-section/About";
import Contact from "./contact-section/Contact";
import Cursor from "./components/cursor";
import Hero from "./hero-section/Hero";
import Navbar from "./navbar/Navbar";
import Testimonial from "./testimonials-section/Testimonial";
import Works from "./works-section/Works";

export default function Home() {


  return (
    <>
      <Cursor />
      {/* <PreLoader /> */}
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Testimonial />
      <Contact />
    </>
  );
}
