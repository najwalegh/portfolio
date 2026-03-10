import { useState, useEffect, useRef } from 'react';

interface Line {
  type: 'cmd' | 'out';
  text: string;
  cls?: string;
}

interface RenderedLine {
  type: 'cmd' | 'out';
  text: string;
  cls?: string;
  done: boolean;
}

export function useTypewriter(lines: Line[], startDelay = 800) {
  const [rendered, setRendered] = useState<RenderedLine[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let li = 0;
    let ci = 0;
    let currentLines: RenderedLine[] = [];

    const tick = () => {
      if (li >= lines.length) { setShowCursor(true); return; }
      const line = lines[li];

      if (ci === 0) {
        currentLines = [...currentLines, { ...line, text: '', done: false }];
        setRendered([...currentLines]);
      }

      if (ci < line.text.length) {
        currentLines[currentLines.length - 1] = {
          ...currentLines[currentLines.length - 1],
          text: line.text.slice(0, ci + 1),
        };
        setRendered([...currentLines]);
        ci++;
        timerRef.current = setTimeout(tick, line.type === 'cmd' ? 48 : 15);
      } else {
        currentLines[currentLines.length - 1] = {
          ...currentLines[currentLines.length - 1],
          done: true,
        };
        setRendered([...currentLines]);
        li++; ci = 0;
        timerRef.current = setTimeout(tick, line.type === 'cmd' ? 260 : 60);
      }
    };

    timerRef.current = setTimeout(tick, startDelay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return { rendered, showCursor };
}
