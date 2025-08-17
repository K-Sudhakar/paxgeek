import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default App;
