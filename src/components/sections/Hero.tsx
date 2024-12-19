import React from 'react';
import { ArrowRight } from 'lucide-react';
import GradientText from '../ui/GradientText';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl" />
          
          <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-4">
              <GradientText>Ashwin</GradientText>
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              <GradientText>Vemula</GradientText>
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-400 mb-6">Senior Frontend Developer</h3>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              5+ years of experience crafting exceptional web experiences with modern technologies.
              Specialized in React, TypeScript, and Node.js.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="#work"
                className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 border border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;