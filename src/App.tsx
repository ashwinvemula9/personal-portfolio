import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Work from './components/Work';
import CTASection from './components/sections/CTASection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Work />
        <CTASection />
        <Contact />
      </main>
      <footer className="bg-black text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;