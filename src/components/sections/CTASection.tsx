import React from 'react';
import { Calendar, FileDown } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import GradientText from '../ui/GradientText';

const CTASection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto text-center p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <GradientText>Collaborate?</GradientText>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking to build something amazing or just want to chat about tech,
            I'm always excited to connect with fellow developers and innovators.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              href="/Ashwin_Vemula_Resume.pdf"
              download
              variant="primary"
              icon={FileDown}
            >
              Download Resume
            </Button>
            <Button
              href="https://calendly.com/ashwinvem9/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={Calendar}
            >
              Schedule a Call
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;