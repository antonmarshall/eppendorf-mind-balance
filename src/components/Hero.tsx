
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="start" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-mindfulness-50 to-secondary-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute right-0 bottom-0 -mb-48 -mr-48 w-96 h-96 rounded-full bg-serenity-200 blur-3xl" />
        <div className="absolute left-20 top-32 w-72 h-72 rounded-full bg-lavender-200 blur-3xl" />
        <div className="absolute left-1/2 bottom-1/4 w-64 h-64 rounded-full bg-mindfulness-200 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-mindfulness-900 hero-shadow mb-4">
              In guten Händen – <br className="hidden sm:inline" />
              <span className="text-mindfulness-700">Psychologische Beratung in Hamburg</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mt-4 mb-8 leading-relaxed">
              Professionelle Unterstützung bei Stress, Burnout und Lebenskrisen. 
              Finden Sie zurück zu innerer Balance und neuer Lebensfreude.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-mindfulness-600 hover:bg-mindfulness-700 text-white px-8 py-6 text-lg shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => scrollToSection('termin')}
              >
                Erstgespräch vereinbaren
              </Button>
              <Button 
                variant="outline" 
                className="border-mindfulness-300 hover:bg-mindfulness-50 text-mindfulness-700 px-8 py-6 text-lg"
                onClick={() => scrollToSection('angebot')}
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="glass-card rounded-2xl p-6 w-5/6 mx-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3"
                alt="Sonnenlicht durch Baumkronen"
                className="w-full h-full object-cover rounded-xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
