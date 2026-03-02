import { useState, useEffect, useLayoutEffect, useRef } from 'react';

export interface TerminalLine {
  cmd?: string;
  output?: string | string[];
  delay?: number;
}

export interface AnimatedTerminalProps {
  lines: TerminalLine[];
  title?: string;
}

export function AnimatedTerminal({ lines, title = 'terminal' }: AnimatedTerminalProps) {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure full content height on mount to prevent layout shift
  useLayoutEffect(() => {
    if (measureRef.current) {
      setContainerHeight(measureRef.current.scrollHeight);
    }
  }, [lines]);

  // Start/reset animation on viewport visibility
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setVisibleLines([]);
          setCurrentLineIndex(0);
          setTypedCmd('');
          setIsTyping(false);
          setIsComplete(false);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typing animation — only runs when visible
  useEffect(() => {
    if (!isVisible || currentLineIndex >= lines.length) {
      if (isVisible && currentLineIndex >= lines.length) {
        setIsComplete(true);
      }
      return;
    }

    const currentLine = lines[currentLineIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (currentLine.cmd) {
      setIsTyping(true);
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < currentLine.cmd!.length) {
          setTypedCmd(currentLine.cmd!.slice(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeChar, Math.random() * 60 + 50);
        } else {
          timeoutId = setTimeout(() => {
            setVisibleLines((prev) => [...prev, { cmd: currentLine.cmd, output: currentLine.output }]);
            setTypedCmd('');
            setIsTyping(false);
            setCurrentLineIndex((prev) => prev + 1);
          }, 600);
        }
      };

      typeChar();
    } else {
      timeoutId = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
      }, currentLine.delay || 800);
    }

    return () => clearTimeout(timeoutId);
  }, [currentLineIndex, lines, isVisible]);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, typedCmd]);

  const renderAllLines = () => (
    <pre>
      {lines.map((line, idx) => (
        <div key={idx} style={{ marginBottom: '16px' }}>
          {line.cmd && (
            <div style={{ color: 'var(--text-primary)', display: 'flex' }}>
              <span style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }}>$</span>
              <span>{line.cmd}</span>
            </div>
          )}
          {line.output && (
            <div style={{ color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.6' }}>
              {Array.isArray(line.output)
                ? line.output.map((out, i) => <div key={i}>{out}</div>)
                : <div>{line.output}</div>
              }
            </div>
          )}
        </div>
      ))}
      {/* Space for the final blinking cursor line */}
      <div style={{ color: 'var(--text-primary)', display: 'flex', marginTop: '16px' }}>
        <span style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }}>$</span>
        <span style={{ display: 'inline-block', width: '8px', height: '1.2em' }} />
      </div>
    </pre>
  );

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      {/* Hidden measurement div — renders all lines to pre-calculate height */}
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 'auto',
          width: '100%',
          padding: '20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          lineHeight: '1.7',
        }}
      >
        {renderAllLines()}
      </div>

      <div className="code-block">
        <div className="code-block-header">
          <div className="code-block-dots">
            <div className="code-block-dot" />
            <div className="code-block-dot" />
            <div className="code-block-dot" />
          </div>
          <div className="code-block-title">{title}</div>
        </div>
        <div
          ref={containerRef}
          className="code-block-body"
          style={{ height: containerHeight ? `${containerHeight}px` : undefined, scrollBehavior: 'smooth' }}
        >
          <pre>
            {visibleLines.map((line, idx) => (
              <div key={idx} style={{ marginBottom: '16px' }}>
                {line.cmd && (
                  <div style={{ color: 'var(--text-primary)', display: 'flex' }}>
                    <span style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }}>$</span>
                    <span>{line.cmd}</span>
                  </div>
                )}
                {line.output && (
                  <div style={{ color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.6' }}>
                    {Array.isArray(line.output)
                      ? line.output.map((out, i) => <div key={i}>{out}</div>)
                      : <div>{line.output}</div>
                    }
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div style={{ color: 'var(--text-primary)', display: 'flex' }}>
                <span style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }}>$</span>
                <span>{typedCmd}</span>
                <span className="terminal-cursor" />
              </div>
            )}
            {!isTyping && isComplete && (
              <div style={{ color: 'var(--text-primary)', display: 'flex', marginTop: '16px' }}>
                <span style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }}>$</span>
                <span className="terminal-cursor terminal-cursor-blink" />
              </div>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}
