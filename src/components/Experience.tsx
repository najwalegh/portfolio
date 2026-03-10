import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCES } from '../data';

const cardV = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: .55, delay: i * .15, ease: [.4, 0, .2, 1] } }),
};

function ExpCard({ exp, index }: { exp: typeof EXPERIENCES[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: .15, triggerOnce: true });

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current!;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 16;
    const y = ((e.clientY - r.top)  / r.height - .5) * -16;
    el.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };
  const onLeave = () => { if (cardRef.current) cardRef.current.style.transform = ''; };

  return (
    <motion.div
      ref={(el) => { (ref as React.RefCallback<HTMLDivElement>)(el); (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = el; }}
      className="exp-card"
      variants={cardV}
      custom={index}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="exp-num">{exp.num}</div>
      <div className="exp-period">{exp.period}</div>
      <div className="exp-company">{exp.company}</div>
      <div className="exp-role">{exp.role}</div>
      <div className="exp-divider" />
      <p className="exp-desc">{exp.desc}</p>
      <div className="exp-tags">
        {exp.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="s-label">Parcours Professionnel</div>
      <h2 className="s-title">Mes <em>Expériences</em></h2>
      <div className="exp-grid">
        {EXPERIENCES.map((e, i) => <ExpCard key={e.num} exp={e} index={i} />)}
      </div>
    </section>
  );
}
