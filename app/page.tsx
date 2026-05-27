'use client';

import Cursor from "./components/effects/Cursor";
import Navbar from "./components/layout/Navbar";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Hero from "./sections/hero/Hero";
import Testimonial from "./sections/testimonials/Testimonial";
import Works from "./sections/works/Works";

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
