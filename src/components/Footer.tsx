
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-mindfulness-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mind Balance</h3>
            <p className="text-mindfulness-100 mb-6">
              Professionelle psychologische Beratung und Coaching für mehr Ausgeglichenheit und Wohlbefinden im Leben.
            </p>
            <p className="text-mindfulness-200 text-sm">
              © {new Date().getFullYear()} Mind Balance. Alle Rechte vorbehalten.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('start')} 
                  className={cn(
                    "text-mindfulness-200 hover:text-white transition-colors"
                  )}
                >
                  Startseite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('angebot')} 
                  className={cn(
                    "text-mindfulness-200 hover:text-white transition-colors"
                  )}
                >
                  Angebot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ueber-mich')} 
                  className={cn(
                    "text-mindfulness-200 hover:text-white transition-colors"
                  )}
                >
                  Über mich
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')} 
                  className={cn(
                    "text-mindfulness-200 hover:text-white transition-colors"
                  )}
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="text-mindfulness-200 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-mindfulness-200 hover:text-white transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
