import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Cursor from './components/Cursor';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { Education, Contact } from './components/EducationContact';

const pageV = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1, transition: { duration: .5 } },
  exit:     { opacity: 0, transition: { duration: .3 } },
};

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div key="portfolio" variants={pageV} initial="initial" animate="animate" exit="exit">
        <Cursor />
        <Particles />
        <Navbar theme={theme} onToggle={toggleTheme} />
        <main>
          <Hero />
          <Skills theme={theme} />
          <Experience />
          <Education />
          <Contact />
        </main>
        <footer>
          © 2024 Najwa LEGHRIS · Full Stack Developer &amp; IT Business Analyst · Disponible immédiatement
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
