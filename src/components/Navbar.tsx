import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Theme } from '../types';

interface Props { theme: Theme; onToggle: () => void; }
const LINKS = ['skills', 'experience', 'education', 'contact'];

export default function Navbar({ theme, onToggle }: Props) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const h = () => {
      let c = '';
      document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 160) c = s.id;
      });
      setActive(c);
    };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.nav className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6, ease: [.4, 0, .2, 1] }}>
      <div className="nav-left">
        <a className="nav-logo" href="#hero">NL<span>.</span></a>
        <span className="nav-badge"><span className="nav-badge-dot" />Disponible immédiatement</span>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l}><a href={`#${l}`} className={active === l ? 'active' : ''}>{l.charAt(0).toUpperCase() + l.slice(1)}</a></li>
          ))}
        </ul>
        <button className="theme-btn" onClick={onToggle} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </motion.nav>
  );
}
