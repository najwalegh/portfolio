import { useEffect, useRef } from 'react';
import { RADAR_DATA } from '../data';
import type { Theme } from '../types';

interface Props { theme: Theme; }

export default function RadarChart({ theme }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const x = c.getContext('2d')!;
    x.clearRect(0, 0, 300, 300);
    const cx = 150, cy = 150, R = 110;
    const N = RADAR_DATA.length;
    const ang = (i: number) => i * 2 * Math.PI / N - Math.PI / 2;
    const isDark = theme === 'dark';
    const gridC  = isDark ? 'rgba(201,168,76,.12)' : 'rgba(201,168,76,.22)';
    const axisC  = isDark ? 'rgba(201,168,76,.15)' : 'rgba(201,168,76,.25)';
    const labelC = isDark ? 'rgba(240,244,255,.75)' : 'rgba(10,22,40,.75)';

    [.25, .5, .75, 1].forEach(r => {
      x.beginPath();
      for (let i = 0; i < N; i++) { const a = ang(i); i === 0 ? x.moveTo(cx + R*r*Math.cos(a), cy + R*r*Math.sin(a)) : x.lineTo(cx + R*r*Math.cos(a), cy + R*r*Math.sin(a)); }
      x.closePath(); x.strokeStyle = gridC; x.lineWidth = 1; x.stroke();
    });
    for (let i = 0; i < N; i++) { const a = ang(i); x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + R*Math.cos(a), cy + R*Math.sin(a)); x.strokeStyle = axisC; x.lineWidth = 1; x.stroke(); }

    x.beginPath();
    RADAR_DATA.forEach((d, i) => { const a = ang(i); i === 0 ? x.moveTo(cx + R*d.value*Math.cos(a), cy + R*d.value*Math.sin(a)) : x.lineTo(cx + R*d.value*Math.cos(a), cy + R*d.value*Math.sin(a)); });
    x.closePath(); x.fillStyle = 'rgba(201,168,76,.14)'; x.fill(); x.strokeStyle = 'rgba(201,168,76,.75)'; x.lineWidth = 2; x.stroke();

    RADAR_DATA.forEach((d, i) => { const a = ang(i); x.beginPath(); x.arc(cx + R*d.value*Math.cos(a), cy + R*d.value*Math.sin(a), 4, 0, Math.PI*2); x.fillStyle = '#C9A84C'; x.fill(); });

    x.font = '500 10.5px Outfit,sans-serif'; x.textAlign = 'center';
    RADAR_DATA.forEach((d, i) => { const a = ang(i); x.fillStyle = labelC; x.fillText(d.label, cx + (R+22)*Math.cos(a), cy + (R+22)*Math.sin(a) + 4); });
  }, [theme]);

  return (
    <div className="radar-wrap">
      <p className="hex-label" style={{ alignSelf: 'flex-start' }}>// Profil de compétences</p>
      <canvas ref={ref} width={300} height={300} />
      <div className="radar-legend">
        {RADAR_DATA.map(d => (
          <div key={d.label} className="legend-item">
            <div className="legend-dot" />
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
