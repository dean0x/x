import { useState, useCallback, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const STORAGE_KEY = 'cli-pages-install-pm';

interface InstallOption {
  label: string;
  command: string;
}

interface InstallBlockProps {
  methods: InstallOption[];
}

export function InstallBlock({ methods }: InstallBlockProps) {
  const [selectedIndex, setSelectedIndex] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const idx = methods.findIndex((m) => m.label === saved);
        if (idx !== -1) return idx;
      }
    } catch {
      // localStorage unavailable
    }
    return 0;
  });
  const [copied, setCopied] = useState(false);

  const current = methods[selectedIndex];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, current.label);
    } catch {
      // localStorage unavailable
    }
  }, [current.label]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(current.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [current.command]);

  const handleTabChange = useCallback((index: number) => {
    setSelectedIndex(index);
    setCopied(false);
  }, []);

  return (
    <div className="install-block">
      <div className="install-block-container">
        {methods.length > 1 && (
          <div className="install-block-header">
            <div className="install-block-tabs">
              {methods.map((method, i) => (
                <button
                  key={method.label}
                  type="button"
                  className="install-block-tab"
                  data-active={i === selectedIndex ? '' : undefined}
                  onClick={() => handleTabChange(i)}
                >
                  {method.label}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="install-block-body">
          <span key={current.label} className="install-block-cmd">
            {current.command}
          </span>
          <button
            type="button"
            className={`copy-btn${copied ? ' copy-btn-copied' : ''}`}
            onClick={handleCopy}
            aria-label="Copy install command"
          >
            {copied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </div>
  );
}
