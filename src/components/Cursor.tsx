import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [big, setBig] = useState(false);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current.mx = e.clientX; pos.current.my = e.clientY; };
    document.addEventListener('mousemove', onMove);
    let raf: number;
    const loop = () => {
      const { mx, my } = pos.current;
      let { rx, ry } = pos.current;
      if (dotRef.current) { dotRef.current.style.left = mx + 'px'; dotRef.current.style.top = my + 'px'; }
      rx += (mx - rx) * .1; ry += (my - ry) * .1;
      pos.current.rx = rx; pos.current.ry = ry;
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
      raf = requestAnimationFrame(loop);
    };
    loop();
    const enter = () => setBig(true);
    const leave = () => setBig(false);
    const addListeners = () => {
      document.querySelectorAll('a,button,.hex-wrap').forEach(el => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    addListeners();
    const mo = new MutationObserver(addListeners);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); mo.disconnect(); };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot  ${big ? 'cursor-big' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${big ? 'cursor-big' : ''}`} />
    </>
  );
}
