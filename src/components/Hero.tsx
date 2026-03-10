import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Terminal from './Terminal';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: .15, delayChildren: .3 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: .65, ease: [.4, 0, .2, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y    = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opac = useTransform(scrollYProgress, [0, .7], [1, 0]);

  return (
    <section id="hero" className="hero" ref={ref}>
      <motion.div className="hero-grid" style={{ y, opacity: opac }}>
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero-tag">full_stack_developer.init()</motion.div>
          <motion.h1 variants={item} className="hero-name">
            Najwa<em>LEGHRIS</em>
          </motion.h1>
          <motion.div variants={item} className="hero-titles">
            <span className="title-chip"><span className="chip-dot" />Full Stack Developer</span>
            <span className="title-chip"><span className="chip-dot" />IT Business Analyst</span>
          </motion.div>
          <motion.p variants={item} className="hero-desc">
            Ingénieure en Réseaux &amp; Systèmes d'Information · Master 2 Génie Logiciel (Clermont Ferrand).
            Je conçois, développe et déploie des applications web complètes — du design Figma à la production.
          </motion.p>
          <motion.div variants={item} className="hero-cta">
            <a href="#contact" className="btn-gold">Me contacter →</a>
            <a href="#skills"  className="btn-ghost">Voir mes skills</a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .75, delay: .6, ease: [.4, 0, .2, 1] }}
        >
          <Terminal />
        </motion.div>
      </motion.div>
    </section>
  );
}
