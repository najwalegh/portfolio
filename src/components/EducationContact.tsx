import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EDUCATION } from '../data';

const cardV = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: .55, delay: i * .15, ease: [.4,0,.2,1] } }),
};

export function Education() {
  const { ref, inView } = useInView({ threshold: .15, triggerOnce: true });
  return (
    <section id="education" className="section alt">
      <div className="s-label">Formation</div>
      <h2 className="s-title">Parcours <em>Académique</em></h2>
      <div className="edu-grid" ref={ref}>
        {EDUCATION.map((e, i) => (
          <motion.div key={e.school} className="edu-card" variants={cardV} custom={i} initial="hidden" animate={inView ? 'show' : 'hidden'}
            whileHover={{ y: -6, boxShadow: '0 20px 60px var(--shadow)' }} transition={{ duration: .3 }}>
            <div className="edu-flag">{e.flag}</div>
            <div className="edu-year">{e.year}</div>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const { ref, inView } = useInView({ threshold: .2, triggerOnce: true });
  return (
    <section id="contact" className="section">
      <motion.div className="contact-inner" ref={ref}
        initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .6, ease: [.4,0,.2,1] }}>
        <div className="avail-badge"><span className="avail-dot" />Disponible immédiatement</div>
        <div className="s-label" style={{ justifyContent: 'center' }}>Contact</div>
        <h2 className="s-title">Travaillons <em>Ensemble</em></h2>
        <p className="contact-desc">
          Je recherche activement un poste en développement web ou en analyse IT.
          N'hésitez pas à me contacter pour discuter d'une opportunité !
        </p>
        <div className="contact-links">
          <motion.a href="mailto:n.leghris2@gmail.com" className="c-link main" whileHover={{ y: -3 }} whileTap={{ scale: .97 }}>✉️ n.leghris2@gmail.com</motion.a>
          <motion.a href="https://www.linkedin.com/in/najwa-leghris/" target="_blank" rel="noreferrer" className="c-link sec" whileHover={{ y: -3 }} whileTap={{ scale: .97 }}>💼 LinkedIn</motion.a>
          <motion.a href="https://github.com/najwalegh" target="_blank" rel="noreferrer" className="c-link sec" whileHover={{ y: -3 }} whileTap={{ scale: .97 }}>⚡ GitHub</motion.a>
        </div>
      </motion.div>
    </section>
  );
}
