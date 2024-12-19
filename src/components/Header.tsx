import React from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white text-2xl font-bold">Ashwin.</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/ashwinvemula9" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/in/ashwin-vemula" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://x.com/ashwin_vem" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 py-6">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/ashwinvemula9" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                </a>
                <a href="https://linkedin.com/in/ashwin-vemula" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                </a>
                <a href="https://x.com/ashwin_vem" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;