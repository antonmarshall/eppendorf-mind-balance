
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-white border-serenity-100 shadow-sm hover:shadow transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 mb-4 rounded-full bg-serenity-100 flex items-center justify-center text-serenity-700">
          {icon}
        </div>
        <CardTitle className="text-xl text-mindfulness-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Stressmanagement",
      description: "Lernen Sie wirksame Techniken zur Bewältigung von Alltagsstress und beruflichen Belastungen. Entwickeln Sie gesunde Routinen und innere Widerstandskraft.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <circle cx="17.5" cy="17.5" r="3.5"/>
        </svg>
      )
    },
    {
      title: "Burnout-Prävention",
      description: "Erkennen Sie frühzeitig Warnsignale von Erschöpfung und chronischer Überlastung. Gemeinsam entwickeln wir Strategien, um einem Burnout vorzubeugen oder ihn zu überwinden.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a5 5 0 0 0-10 0v7h10V8Z"/>
          <path d="M4 21a2 2 0 0 0 2-2v-6c0-1.1.9-2 2-2"/>
          <path d="M14 21a2 2 0 0 0 2-2v-2a2 2 0 0 1 2-2h2"/>
          <path d="M19 7v1"/>
        </svg>
      )
    },
    {
      title: "Coaching & Persönliche Entwicklung",
      description: "Entdecken Sie Ihre Stärken und Potenziale. Im lösungsorientierten Coaching unterstütze ich Sie dabei, berufliche und persönliche Ziele zu erreichen und inneres Wachstum zu fördern.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 19a2.5 2.5 0 0 1-2.5-2.5c0-1.67 1.67-2.5 2.5-5 .83 2.5 2.5 3.33 2.5 5a2.5 2.5 0 0 1-2.5 2.5Z"/>
          <path d="M9.5 19a2.5 2.5 0 0 1-2.5-2.5c0-1.67 1.67-2.5 2.5-5 .83 2.5 2.5 3.33 2.5 5a2.5 2.5 0 0 1-2.5 2.5Z"/>
          <path d="M15 2.2a2.5 2.5 0 0 1-2.4 2.8c-1.3.1-2.4-.5-2.6-1.9-.2-1.4.6-2.6 2-3.1 1.2-.4 2.4.1 3 1.6Z"/>
          <path d="M21.2 8.9c0 1.3-1 2.3-2.2 2.1-1.3-.2-2.1-1.7-1.8-3 .3-1.2 1.5-1.8 2.7-1.6 1.3.4 1.3 1.7 1.3 2.5Z"/>
          <path d="M10 9.5a2.5 2.5 0 0 1-2.5 2.5c-1.67 0-2.5-1.67-5-2.5 2.5-.83 3.33-2.5 5-2.5a2.5 2.5 0 0 1 2.5 2.5Z"/>
        </svg>
      )
    },
    {
      title: "Achtsames Leben",
      description: "Erlernen Sie Achtsamkeitspraktiken für mehr Gelassenheit im Alltag. Durch bewusstes Wahrnehmen des gegenwärtigen Moments finden Sie innere Ruhe und emotionale Balance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
          <path d="M12 2v2"/>
          <path d="M12 20v2"/>
          <path d="m4.93 4.93 1.41 1.41"/>
          <path d="m17.66 17.66 1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="M20 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/>
          <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      )
    }
  ];

  return (
    <section id="angebot" className="py-20 bg-gradient-to-b from-background to-serenity-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-mindfulness-900 mb-4">Meine Angebote</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Professionelle Unterstützung für Ihre seelische Gesundheit und persönliche Entwicklung. 
            Maßgeschneiderte Begleitung auf Ihrem individuellen Weg zu mehr Balance und Wohlbefinden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
