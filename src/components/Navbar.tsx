
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'start', label: 'Startseite' },
    { id: 'angebot', label: 'Angebot' },
    { id: 'ueber-mich', label: 'Über mich' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-semibold text-mindfulness-800">Mind Balance</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-1 py-2 text-base font-medium transition-colors hover:text-mindfulness-700",
                  activeSection === item.id ? "text-mindfulness-700" : "text-foreground"
                )}
              >
                {item.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-transform duration-300 ease-out", 
                    activeSection === item.id ? "bg-mindfulness-400 scale-x-100" : "bg-mindfulness-300 scale-x-0 hover:scale-x-100"
                  )} 
                />
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-mindfulness-600 hover:bg-mindfulness-700 text-white shadow-sm"
              onClick={() => scrollToSection('termin')}>
              Erstgespräch vereinbaren
            </Button>
            <Button variant="outline" className="md:hidden" size="icon" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
