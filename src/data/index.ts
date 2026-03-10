import type { SkillHex, Experience, Education, RadarPoint } from '../types';

export const SKILLS: SkillHex[] = [
  { icon: '⚛️', name: 'React.js',     cat: 'front-end',  tip: 'React 18 · Hooks · SPA' },
  { icon: '🌐', name: 'HTML/CSS',     cat: 'front-end',  tip: 'Responsive · Flexbox · Grid' },
  { icon: '⚡', name: 'JavaScript',   cat: 'front-end',  tip: 'ES6+ · DOM · Async/Await' },
  { icon: '☕', name: 'Java',         cat: 'back-end',   tip: 'OOP · Collections · Streams' },
  { icon: '🍃', name: 'Spring Boot',  cat: 'back-end',   tip: 'REST API · JPA · Security' },
  { icon: '🐍', name: 'Python',       cat: 'back-end',   tip: 'Scripting · Data · APIs' },
  { icon: '🌿', name: 'Django',       cat: 'framework',  tip: 'MVT · ORM · REST Framework' },
  { icon: '🔥', name: 'Flask',        cat: 'framework',  tip: 'Micro-framework · REST · JWT' },
  { icon: '🎨', name: 'Figma',        cat: 'design',     tip: 'Wireframes · Prototypes · UI' },
  { icon: '📐', name: 'UX/UI',        cat: 'design',     tip: 'User flows · Design system' },
  { icon: '🗃️', name: 'SQL/DB',       cat: 'database',   tip: 'MySQL · PostgreSQL · Queries' },
  { icon: '🐙', name: 'Git/GitHub',   cat: 'outils',     tip: 'Versioning · Pull Requests' },
  { icon: '📋', name: 'UML',          cat: 'analyse',    tip: 'Use Case · Sequence · Class' },
  { icon: '📝', name: 'Specs Fonct.', cat: 'analyse',    tip: 'Cahier des charges · Besoins' },
  { icon: '🔄', name: 'Agile/Scrum',  cat: 'methodo',    tip: 'Sprints · Backlog · Retro' },
];

export const EXPERIENCES: Experience[] = [
  {
    num: '01',
    period: 'PFE · 6 mois — Clermont Ferrand',
    company: 'LLSHS\nUniv. Clermont Ferrand',
    role: 'Développeuse Full Stack · IT Business Analyst',
    desc: 'Projet 100% autonome : analyse des besoins métier, rédaction des spécifications fonctionnelles, conception UML, design Figma, développement full stack et déploiement en production.',
    tags: ['Analyse besoins', 'Figma', 'Full Stack', 'Production', 'Autonomie'],
  },
  {
    num: '02',
    period: 'PFE · 6 mois',
    company: 'Tamtam\nInternational',
    role: 'Ingénieure Études & Développement',
    desc: 'Conception et développement d\'applications en environnement professionnel. Cycle complet de développement logiciel — de l\'étude fonctionnelle à la livraison.',
    tags: ['Java', 'Spring Boot', 'React.js'],
  },
  {
    num: '03',
    period: 'Stage · 2 mois',
    company: 'Adria Business\n& Technology',
    role: 'Stagiaire Développement Web',
    desc: 'Intégration dans une équipe technique professionnelle, développement de fonctionnalités web et bonnes pratiques en ingénierie logicielle.',
    tags: ['HTML/CSS/JS', 'Web Dev'],
  },
];

export const EDUCATION: Education[] = [
  {
    flag: '🇫🇷',
    year: '2023 – 2024 · Clermont Ferrand',
    degree: 'Master 2 — Génie Logiciel & Intégration d\'Applications',
    school: 'Université Clermont Ferrand',
  },
  {
    flag: '🇲🇦',
    year: 'Marrakech · Maroc',
    degree: 'Diplôme d\'Ingénieure — Réseaux & Systèmes d\'Information',
    school: 'Université Cadi Ayyad — FST Marrakech',
  },
];

export const RADAR_DATA: RadarPoint[] = [
  { label: 'Front-End',    value: 0.90 },
  { label: 'Back-End',     value: 0.83 },
  { label: 'Design/UX',   value: 0.88 },
  { label: 'Architecture', value: 0.78 },
  { label: 'Analyse',      value: 0.87 },
  { label: 'Methodo',      value: 0.85 },
];

export const LEARNING_SKILLS = [
  {
    icon: '🔷',
    name: 'TypeScript avancé',
    desc: 'Generics · Utility Types · Decorators · strict mode',
    progress: 60,
  },
  {
    icon: '⚙️',
    name: 'Automatisation n8n',
    desc: 'Workflows · API integrations · No-code automation',
    progress: 40,
  },
  {
    icon: '🔗',
    name: 'Make (Integromat)',
    desc: 'Scenarios · Webhooks · Multi-app automation',
    progress: 35,
  },
  {
    icon: '⚡',
    name: 'Zapier',
    desc: 'Zaps · Triggers · Actions · App connections',
    progress: 45,
  },
];

export const TERMINAL_LINES = [
  { type: 'cmd' as const, text: 'whoami' },
  { type: 'out' as const, text: 'najwa.leghris — Full Stack Dev · IT Business Analyst', cls: 'hi' },
  { type: 'cmd' as const, text: 'cat skills.json' },
  { type: 'out' as const, text: '{ "front":  ["React", "HTML/CSS", "JavaScript"],', cls: 'go' },
  { type: 'out' as const, text: '  "back":   ["Java", "Spring Boot", "Python/Django"],', cls: 'go' },
  { type: 'out' as const, text: '  "design": ["Figma", "UX/UI", "Wireframing"] }', cls: 'go' },
  { type: 'cmd' as const, text: 'git log --oneline' },
  { type: 'out' as const, text: '✓  LLSHS Clermont   — Full project ownership + prod deploy', cls: 'hi' },
  { type: 'out' as const, text: '✓  Tamtam Intl      — Ing. études & développement (6 mois)', cls: 'hi' },
  { type: 'out' as const, text: '✓  Adria B&T        — Web development (2 mois)', cls: 'hi' },
  { type: 'cmd' as const, text: 'echo $AVAILABILITY' },
  { type: 'out' as const, text: 'DISPONIBLE IMMÉDIATEMENT', cls: 'hi' },
];
