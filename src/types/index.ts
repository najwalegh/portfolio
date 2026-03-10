export interface SkillHex {
  icon: string;
  name: string;
  cat: string;
  tip: string;
}

export interface Experience {
  num: string;
  period: string;
  company: string;
  role: string;
  desc: string;
  tags: string[];
}

export interface Education {
  flag: string;
  year: string;
  degree: string;
  school: string;
}

export interface RadarPoint {
  label: string;
  value: number;
}

export interface LearningSkill {
  icon: string;
  name: string;
  desc: string;
  progress: number; // 0–100
}

export type Theme = 'dark' | 'light';
