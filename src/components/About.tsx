
import React from 'react';

const About = () => {
  return (
    <section id="ueber-mich" className="py-20 bg-gradient-to-b from-serenity-50 to-lavender-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-mindfulness-900 mb-6">Über mich</h2>
            
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-4">
                Herzlich willkommen! Ich bin Dr. Johanna Schmidt, approbierte Psychologin mit langjähriger Erfahrung in der Beratung und im Coaching von Menschen in herausfordernden Lebenssituationen.
              </p>
              
              <p className="mb-4">
                In meiner Arbeit verbinde ich fundiertes psychologisches Fachwissen mit einem ganzheitlichen Ansatz. Dabei ist mir besonders wichtig, Sie als einzigartigen Menschen mit individuellen Bedürfnissen und Ressourcen wahrzunehmen.
              </p>
              
              <h3 className="text-xl text-mindfulness-800 font-medium mt-6 mb-3">Mein Ansatz</h3>
              <p className="mb-4">
                Ich arbeite ressourcenorientiert und lösungsfokussiert. Das bedeutet, dass wir gemeinsam Ihre Stärken aktivieren und konkrete Wege zur Bewältigung aktueller Herausforderungen entwickeln. Dabei fließen Elemente aus der kognitiven Verhaltenstherapie, Achtsamkeitspraxis und positiven Psychologie in meine Arbeit ein.
              </p>
              
              <h3 className="text-xl text-mindfulness-800 font-medium mt-6 mb-3">Qualifikationen</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Promotion in Klinischer Psychologie (Universität Hamburg)</li>
                <li>Approbation als Psychologische Psychotherapeutin</li>
                <li>Zertifizierte Trainerin für Stressbewältigung</li>
                <li>Ausbildung in systemischem Coaching</li>
                <li>Regelmäßige Fortbildungen in den neuesten evidenzbasierten Ansätzen</li>
              </ul>
              
              <p>
                Ich freue mich darauf, Sie ein Stück auf Ihrem Weg zu begleiten und Sie dabei zu unterstützen, mehr Klarheit, Balance und Zufriedenheit in Ihrem Leben zu finden.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-mindfulness-200 to-lavender-200 blur opacity-50"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
                  alt="Dr. Johanna Schmidt - Psychologin in Hamburg"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover ring-4 ring-white shadow-lg"
                />
              </div>
              <div className="absolute right-0 -bottom-6 transform rotate-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-mindfulness-100 animate-pulse-soft">
                <span className="text-mindfulness-800 font-medium">Mit Herz & Verstand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
