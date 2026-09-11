
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeView from './components/ResumeView';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewResume = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigateTo('/resume');
  };

  const handleNavigateHome = () => {
    navigateTo('/');
  };

  if (currentPath === '/resume' || window.location.hash === '#resume') {
    return <ResumeView onNavigateHome={handleNavigateHome} />;
  }

  return (
    <div className="min-h-screen font-sans">
      <Header onNavigateResume={handleViewResume} />
      <main>
        <Hero onViewResume={handleViewResume} />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
