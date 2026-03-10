import { useTypewriter } from '../hooks/useTypewriter';
import { TERMINAL_LINES } from '../data';

export default function Terminal() {
  const { rendered, showCursor } = useTypewriter(TERMINAL_LINES, 900);
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="t-dot r" /><div className="t-dot y" /><div className="t-dot g" />
        <span className="terminal-title">najwa@portfolio ~ bash</span>
      </div>
      <div className="terminal-body">
        {rendered.map((line, i) => (
          <div key={i} className="t-line">
            {line.type === 'cmd' ? (
              <><span className="t-prompt">›</span><span className="t-cmd-text">{line.text}</span></>
            ) : (
              <span className={`t-out ${line.cls || ''}`}>{line.text}</span>
            )}
          </div>
        ))}
        {showCursor && (
          <div className="t-line">
            <span className="t-prompt">›</span>
            <span className="t-cursor-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
