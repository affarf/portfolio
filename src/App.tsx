
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Now from './components/Now';
import Honors from './components/Honors';
import FieldHockeyGame from './pages/FieldHockeyGame';

import KnowledgeBaseCaseStudy from './pages/KnowledgeBaseCaseStudy';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#f5f1ea]">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <Hero />
                  <About />
                  <Honors />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
              </>
            }
          />

          <Route path="/now" element={<Now />} />

          <Route
            path="/projects/knowledgebase"
            element={
              <>
                <main>
                  <KnowledgeBaseCaseStudy />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/game"
            element={
              <>
                <FieldHockeyGame />
                <Footer />
              </>
            }
          />

        </Routes>
      </div>
    </HashRouter>
  );
}
