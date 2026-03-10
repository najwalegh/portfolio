import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS, LEARNING_SKILLS } from '../data';
import RadarChart from './RadarChart';
import type { Theme } from '../types';

interface Props { theme: Theme; }

const containerV = { hidden: {}, show: { transition: { staggerChildren: .04 } } };
const hexV = { hidden: { opacity: 0, scale: .6 }, show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } } };

/* ── Learning card with animated progress arc ── */
function LearningCard({ skill, index }: { skill: typeof LEARNING_SKILLS[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: .2, triggerOnce: true });
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (skill.progress / 100) * circ;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: .5, delay: index * .1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px var(--shadow)' }}
      data-cursor
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--line)',
        borderRadius: 10,
        padding: '1.4rem 1.5rem',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        gap: '1.1rem',
        transition: 'background var(--trans), border-color .3s, box-shadow .3s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--gold), transparent)' }} />

      {/* SVG progress ring */}
      <div style={{ flexShrink: 0, position: 'relative', width: 64, height: 64 }}>
        <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
          {/* Track */}
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="3.5" />
          {/* Progress */}
          <motion.circle
            cx="32" cy="32" r={r}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - dash } : { strokeDashoffset: circ }}
            transition={{ duration: 1.2, delay: index * .1 + .3, ease: [.4, 0, .2, 1] }}
          />
        </svg>
        {/* Icon in center */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{skill.icon}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.5rem', color: 'var(--gold)', marginTop: 2 }}>
            {skill.progress}%
          </span>
        </div>
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.3rem' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '.88rem', fontWeight: 700, color: 'var(--fg)' }}>
            {skill.name}
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '.55rem', fontWeight: 700,
            color: 'var(--green)', background: 'rgba(74,222,128,0.1)',
            border: '1px solid rgba(74,222,128,0.3)',
            padding: '.1rem .45rem', borderRadius: 10,
            letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            En cours
          </span>
        </div>
        <p style={{ fontSize: '.75rem', color: 'var(--muted)', lineHeight: 1.6, fontFamily: 'var(--font-mono)' }}>
          {skill.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills({ theme }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: .15, triggerOnce: true });
  const { ref: learnRef, inView: learnInView } = useInView({ threshold: .1, triggerOnce: true });

  return (
    <section id="skills" className="section alt">
      <div className="s-label">Compétences</div>
      <h2 className="s-title">Stack <em>Technique</em></h2>

      <div className="skills-top" ref={ref}>
        {/* HEX GRID */}
        <div>
          <p className="hex-label">// Survole une technologie pour plus de détails</p>
          <motion.div
            className="hex-grid"
            variants={containerV}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.name}
                className="hex-wrap"
                variants={hexV}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  className="hexagon"
                  animate={hovered === i ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  style={{ boxShadow: hovered === i ? '0 12px 30px rgba(201,168,76,.2)' : 'none' }}
                >
                  <div className="hex-glow" style={{ opacity: hovered === i ? 1 : 0 }} />
                  <div className="hex-icon">{s.icon}</div>
                  <div className="hex-name">{s.name}</div>
                  <div className="hex-cat">{s.cat}</div>
                </motion.div>
                {hovered === i && (
                  <motion.div
                    className="hex-tooltip"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .15 }}
                  >
                    {s.tip}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RADAR */}
        {inView && <RadarChart theme={theme} />}
      </div>

      {/* ── EN COURS D'APPRENTISSAGE ── */}
      <motion.div
        ref={learnRef}
        initial={{ opacity: 0, y: 24 }}
        animate={learnInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .6 }}
        style={{ marginTop: '3.5rem' }}
      >
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.6rem' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '.68rem',
            color: 'var(--green)', letterSpacing: '.2em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '.6rem',
          }}>
            <span className="pulse-dot" />
            En cours d'apprentissage
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '.62rem',
            color: 'var(--muted)', fontStyle: 'italic',
          }}>
            // veille technologique active
          </span>
        </div>

        {/* Learning cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
        }}>
          {LEARNING_SKILLS.map((skill, i) => (
            <LearningCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
