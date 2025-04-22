
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  context: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, context }) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-lavender-100 shadow-sm h-full hover:shadow-md transition-all duration-300">
      <CardContent className="pt-6">
        <div className="text-lavender-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
            <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3Z"/>
            <path d="M21 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3Z"/>
            <path d="M10 18H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3Z"/>
            <path d="M21 18h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3Z"/>
          </svg>
        </div>
        <p className="text-foreground/90 italic mb-6 leading-relaxed">{quote}</p>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mindfulness-300 to-mindfulness-400"></div>
          <div className="ml-3">
            <p className="text-mindfulness-800 font-medium">{author}</p>
            <p className="text-sm text-foreground/60">{context}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Die Gespräche mit Frau Dr. Schmidt haben mir geholfen, meinen Stress zu bewältigen und wieder Freude am Alltag zu finden. Ihre einfühlsame und professionelle Art hat mich von Anfang an überzeugt.",
      author: "Julia K.",
      context: "38, Marketing-Managerin"
    },
    {
      quote: "Nach monatelanger Erschöpfung dachte ich, nie wieder Energie zu haben. Die Beratung hat mir konkrete Werkzeuge gegeben, um meine Work-Life-Balance neu zu gestalten. Ich bin sehr dankbar für diese Unterstützung.",
      author: "Michael T.",
      context: "45, Unternehmer"
    },
    {
      quote: "Der achtsame Ansatz und die praktischen Übungen haben mir geholfen, mich selbst besser zu verstehen. Jetzt kann ich mit Herausforderungen viel gelassener umgehen.",
      author: "Sarah M.",
      context: "32, Lehrerin"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-lavender-50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-mindfulness-900 mb-4">Erfahrungen</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Was Klienten über ihre Beratungserfahrung berichten
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              context={testimonial.context}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
