
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-mindfulness-900 mb-4">Kontakt</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Ich freue mich auf Ihre Nachricht.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-mindfulness-100">
            <h3 className="text-xl font-semibold text-mindfulness-800 mb-6">Schreiben Sie mir</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Ihr Name" className="border-mindfulness-200 focus:border-mindfulness-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="Ihre E-Mail-Adresse" className="border-mindfulness-200 focus:border-mindfulness-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Input id="subject" placeholder="Betreff Ihrer Nachricht" className="border-mindfulness-200 focus:border-mindfulness-400" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Wie kann ich Ihnen helfen?"
                  className="min-h-32 border-mindfulness-200 focus:border-mindfulness-400"
                />
              </div>
              
              <Button type="submit" className="w-full bg-mindfulness-600 hover:bg-mindfulness-700 text-white">
                Nachricht senden
              </Button>
            </form>
          </div>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-mindfulness-800 mb-4">Kontaktinformationen</h3>
              
              <dl className="space-y-4">
                <div className="flex items-start">
                  <dt className="text-mindfulness-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </dt>
                  <dd>
                    <p className="font-medium text-foreground">Praxis für psychologische Beratung</p>
                    <p className="text-foreground/80">Eppendorfer Weg 123<br/>20253 Hamburg</p>
                  </dd>
                </div>
                
                <div className="flex items-start">
                  <dt className="text-mindfulness-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>
                      <path d="M15 7a2 2 0 0 1 2 2"/>
                      <path d="M15 3a6 6 0 0 1 6 6"/>
                    </svg>
                  </dt>
                  <dd>
                    <p className="font-medium text-foreground">Telefon</p>
                    <p className="text-foreground/80">+49 (0) 40 123 456 78</p>
                  </dd>
                </div>
                
                <div className="flex items-start">
                  <dt className="text-mindfulness-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </dt>
                  <dd>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <p className="text-foreground/80">info@mindbalance-hamburg.de</p>
                  </dd>
                </div>
              </dl>
            </div>
            
            <div id="termin">
              <h3 className="text-xl font-semibold text-mindfulness-800 mb-4">Termin vereinbaren</h3>
              <p className="text-foreground/80 mb-6">
                Sie können direkt online einen Termin für ein Erstgespräch buchen. Alternativ stehe ich Ihnen gerne telefonisch oder per E-Mail zur Verfügung.
              </p>
              
              <Button className="w-full bg-serenity-600 hover:bg-serenity-700 text-white">
                Termin online buchen
              </Button>
              
              <div className="mt-6 text-center text-sm text-foreground/60">
                <p>Durch Klicken auf den Button öffnet sich mein Calendly-Terminkalender</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-mindfulness-800 mb-4">Praxisstandort</h3>
              <div className="aspect-video bg-mindfulness-100 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4721.5901648147!2d9.96934!3d53.5796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f4d1cceec3d%3A0x4263df27bd63aa0!2sHamburg-Eppendorf%2C%20Hamburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1650293101000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  className="border-0" 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
