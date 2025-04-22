
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('start');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'angebot', 'ueber-mich', 'kontakt'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
          const sectionBottom = bottom + window.scrollY;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
