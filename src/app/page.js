"use client";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import Approach from "./components/Approach";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TapeSection from "./components/TapeSection";
import Testimonials from "./components/Testimonials";

const sections = ["Home", "Projects", "Tape", "Approach", "Testimonials", "About", "Contact"];

const Page = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, 
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header activeSection={activeSection} />
      <Hero />
      <ProjectsSection />
      <TapeSection />
      <Approach />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
