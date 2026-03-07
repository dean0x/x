import React, { useRef, useState } from 'react';

interface IllustrationCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  accent?: string;
}

export const IllustrationCard: React.FC<IllustrationCardProps> = ({ 
  title, 
  description, 
  children,
  accent = '#3b82f6' // Default blue
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]"
      style={{ '--accent': accent } as React.CSSProperties}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Inner Highlight Border */}
      <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none" />

      {/* Illustration Area */}
      <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-[#121212] p-8">
        
        {/* Background Grid - Very subtle */}
        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
          }} 
        />
        
        {/* Ambient Glow behind illustration */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 blur-[60px] transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        />

        {/* The Illustration Content */}
        <div className="relative z-10 h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
          {children}
        </div>
      </div>

      {/* Text Content */}
      <div className="relative flex flex-1 flex-col gap-3 p-6 border-t border-white/5 bg-[#0f0f0f]">
        <h3 className="text-lg font-semibold text-white group-hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
};
