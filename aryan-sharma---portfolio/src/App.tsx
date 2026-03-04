/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Splash from './components/Splash';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-emerald-500/30">
      <AnimatePresence mode="wait">
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Education />
          </main>
          
          <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
            <p>© {new Date().getFullYear()} Aryan Sharma. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}
