
import React from 'react';

interface HeroProps {
  onViewResume?: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onViewResume }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Jeevan Jiji
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Integrated MCA Graduate | Full-Stack & Game Developer
        </p>
        <p className="mt-6 text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
          I build experiences through code – from full-stack web apps to 3D game projects.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 text-center"
          >
            View Projects
          </a>
          <a
            href="/resume"
            onClick={onViewResume}
            className="w-full sm:w-auto bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-100 hover:border-indigo-300 transition-all duration-300 transform hover:scale-105 text-center"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
