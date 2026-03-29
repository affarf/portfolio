
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Now from './components/Now';
import Zine from './components/Zine';

export default function App() {


  return (
    <HashRouter>
      <div className="min-h-screen bg-zinc-950">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/now" element={<Now />} />
        </Routes>
      </div>
    </HashRouter>
  );
}