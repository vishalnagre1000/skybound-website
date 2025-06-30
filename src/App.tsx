import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor'; // ✅ Custom camera shutter cursor

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* ✅ Enable custom cursor
      <Cursor /> */}

      {/* ✅ Fixed navbar */}
      <Navbar />

      {/* ✅ Sections with scroll margin offset to avoid overlap with navbar */}
      <div id="home" className="scroll-mt-32">
        <Hero />
      </div>
      <div id="gallery" className="scroll-mt-32">
        <Gallery />
      </div>
      <div id="about" className="scroll-mt-32">
        <About />
      </div>
      <div id="testimonials" className="scroll-mt-32">
        <Testimonials />
      </div>
      <div id="contact" className="scroll-mt-32">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
