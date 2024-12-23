// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import ProjectsSection from './components/ProjectsSection';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <ProjectsSection />
      <CTA />
      <Contact />
    </div>
  );
}

export default App;
