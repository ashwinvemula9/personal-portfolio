import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Calendar } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="space-y-8">
              <p className="text-gray-400 text-lg mb-8">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400">Mail me at</p>
                      <a href="mailto:ashwinvem9@gmail.com" className="text-lg hover:text-purple-400 transition-colors">
                        ashwinvem9@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400">Call me at</p>
                      <a href="tel:+917299420689" className="text-lg hover:text-purple-400 transition-colors">
                        +91 72994 20689
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-lg">Bangalore, India</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400">Schedule a Meeting</p>
                      <a 
                        href="https://calendly.com/ashwinvem9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-purple-400 transition-colors"
                      >
                        Book a time slot
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-400 mb-4">Connect with me</p>
                    <div className="flex items-center gap-4">
                      <a href="https://github.com/ashwinvemula9" target="_blank" rel="noopener noreferrer" 
                         className="p-3 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href="https://linkedin.com/in/ashwin-vemula" target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href="https://x.com/ashwin_vem" target="_blank" rel="noopener noreferrer"
                         className="p-3 bg-purple-500/20 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;