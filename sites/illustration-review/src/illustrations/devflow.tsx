import React from 'react';

// Shared Gradients & Definitions
const Defs = () => (
  <defs>
    <linearGradient id="devflow-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#27272a" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#27272a" stopOpacity="0.2" />
    </linearGradient>
    <marker id="arrow-sm" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0 0 L6 3 L0 6" fill="#3f3f46" />
    </marker>
  </defs>
);

export const Specify = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Raw Idea Input */}
    <g transform="translate(60, 90)">
        <circle r="20" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <path d="M-5 -5 L5 5 M5 -5 L-5 5" stroke="#71717a" strokeWidth="1.5" />
    </g>
    
    {/* Arrow */}
    <path d="M90 90 H130" stroke="#3f3f46" strokeWidth="1" markerEnd="url(#arrow-sm)" />

    {/* Clarification Gates */}
    <g transform="translate(150, 60)">
        <rect width="10" height="60" rx="2" fill="var(--accent)" opacity="0.2" />
        <rect x="20" width="10" height="60" rx="2" fill="var(--accent)" opacity="0.4" />
        <rect x="40" width="10" height="60" rx="2" fill="var(--accent)" opacity="0.6" />
    </g>

    {/* Arrow */}
    <path d="M210 90 H250" stroke="var(--accent)" strokeWidth="1" markerEnd="url(#arrow-sm)" />

    {/* Final Spec Doc */}
    <g transform="translate(260, 50)">
        <rect width="60" height="80" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="10" y1="20" x2="50" y2="20" stroke="var(--accent)" strokeWidth="1" />
        <line x1="10" y1="35" x2="40" y2="35" stroke="#3f3f46" strokeWidth="1" />
        <line x1="10" y1="50" x2="50" y2="50" stroke="#3f3f46" strokeWidth="1" />
        
        {/* Approved Checkmark */}
        <circle cx="50" cy="70" r="8" fill="var(--accent)" />
        <path d="M46 70 L49 73 L54 67" stroke="#18181b" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

export const Implement = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Lifecycle Circle */}
    <circle cx="200" cy="112.5" r="60" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
    
    {/* Stages */}
    <g transform="translate(200, 52.5)">
        <circle r="15" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fill="var(--accent)" fontSize="8">PLAN</text>
    </g>
    <g transform="translate(260, 112.5)">
        <circle r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#71717a" fontSize="8">CODE</text>
    </g>
    <g transform="translate(200, 172.5)">
        <circle r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#71717a" fontSize="8">TEST</text>
    </g>
    <g transform="translate(140, 112.5)">
        <circle r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#71717a" fontSize="8">PR</text>
    </g>

    {/* Central Hub */}
    <rect x="180" y="92.5" width="40" height="40" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1" />
    <path d="M190 102.5 L200 112.5 L210 102.5" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
  </svg>
);

export const CodeReview = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Code Window */}
    <rect x="130" y="50" width="140" height="125" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <line x1="145" y1="70" x2="255" y2="70" stroke="#3f3f46" strokeWidth="1" />
    <line x1="145" y1="85" x2="235" y2="85" stroke="#3f3f46" strokeWidth="1" />
    <line x1="145" y1="100" x2="200" y2="100" stroke="var(--accent)" strokeWidth="1" />
    
    {/* Reviewer Agents */}
    {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(${100 + i * 60}, 160)`}>
            <circle r="12" fill="#18181b" stroke={i === 1 ? "var(--accent)" : "#3f3f46"} strokeWidth="1.5" className="group-hover:animate-float" style={{ animationDelay: `${i*0.2}s` }} />
            <path d="M0 160 L145 100" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        </g>
    ))}
    
    {/* Review Comment */}
    <g transform="translate(220, 90)">
        <path d="M0 0 H40 V20 H10 L0 30 V0 Z" fill="var(--accent)" />
        <text x="20" y="14" textAnchor="middle" fill="#18181b" fontSize="10" fontWeight="bold">!</text>
    </g>
  </svg>
);

export const Debug = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Bug */}
    <circle cx="200" cy="80" r="6" fill="#ef4444" className="animate-pulse" />
    
    {/* Hypotheses Tree */}
    <path d="M200 90 V110" stroke="#3f3f46" strokeWidth="1" />
    
    <g transform="translate(200, 110)">
        {/* Branch 1 */}
        <path d="M0 0 L-60 40" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="-60" cy="40" r="15" fill="#18181b" stroke="#3f3f46" />
        <text x="-60" y="44" textAnchor="middle" fill="#71717a" fontSize="10">H1</text>
        
        {/* Branch 2 (Correct) */}
        <path d="M0 0 V 40" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="0" cy="40" r="15" fill="#18181b" stroke="var(--accent)" />
        <text x="0" y="44" textAnchor="middle" fill="var(--accent)" fontSize="10">H2</text>
        
        {/* Branch 3 */}
        <path d="M0 0 L60 40" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="60" cy="40" r="15" fill="#18181b" stroke="#3f3f46" />
        <text x="60" y="44" textAnchor="middle" fill="#71717a" fontSize="10">H3</text>
    </g>
  </svg>
);

export const Resolve = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Issue List */}
    <g transform="translate(100, 50)">
        <rect width="200" height="30" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="20" cy="15" r="4" fill="#ef4444" />
        <path d="M180 15 L190 15" stroke="#3f3f46" strokeWidth="1" />
        
        {/* Checkmark animation */}
        <g transform="translate(180, 15)" className="group-hover:opacity-100 opacity-0 transition-opacity">
            <path d="M-5 0 L0 5 L10 -5" stroke="var(--accent)" strokeWidth="2" fill="none" />
        </g>
    </g>
    
    <g transform="translate(100, 90)">
        <rect width="200" height="30" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <circle cx="20" cy="15" r="4" fill="#eab308" />
        <text x="160" y="20" fill="#71717a" fontSize="10">DEFER</text>
    </g>
  </svg>
);

export const SelfReview = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Code Blocks */}
    <g transform="translate(80, 60)">
        <rect width="80" height="100" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        {/* Messy Code */}
        <path d="M10 20 H70 M10 35 H50 M10 50 H60 M10 65 H40" stroke="#3f3f46" strokeWidth="1" />
    </g>

    {/* Magic Wand / Process */}
    <g transform="translate(200, 110)">
        <path d="M-10 0 H10" stroke="var(--accent)" strokeWidth="1" markerEnd="url(#arrow-sm)" />
        <path d="M0 -20 L5 -10 L15 -10 L5 0 L10 10 L0 5 L-10 10 L-5 0 L-15 -10 L-5 -10 Z" fill="var(--accent)" className="animate-spin-slow" />
    </g>

    {/* Clean Code */}
    <g transform="translate(240, 60)">
        <rect width="80" height="100" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        {/* Clean Code */}
        <path d="M15 20 H65" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M15 35 H55" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M15 50 H45" stroke="var(--accent)" strokeWidth="1.5" />
    </g>
  </svg>
);

export const Ambient = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Prompt Bar */}
    <rect x="100" y="180" width="200" height="30" rx="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <text x="120" y="200" fill="#a1a1aa" fontSize="12">/ambient add auth...</text>

    {/* Floating Skills */}
    <g className="animate-float">
        <circle cx="120" cy="80" r="20" fill="#18181b" stroke="var(--accent)" strokeWidth="1" />
        <text x="120" y="84" textAnchor="middle" fill="var(--accent)" fontSize="8">AUTH</text>
        <path d="M120 100 L150 180" stroke="var(--accent)" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
    </g>

    <g className="animate-float" style={{ animationDelay: '1s' }}>
        <circle cx="200" cy="50" r="20" fill="#18181b" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        <text x="200" y="54" textAnchor="middle" fill="#71717a" fontSize="8">DB</text>
    </g>

    <g className="animate-float" style={{ animationDelay: '0.5s' }}>
        <circle cx="280" cy="80" r="20" fill="#18181b" stroke="#3f3f46" strokeWidth="1" opacity="0.5" />
        <text x="280" y="84" textAnchor="middle" fill="#71717a" fontSize="8">UI</text>
    </g>
  </svg>
);

export const WorkingMemory = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Memory Chips */}
    <g transform="translate(140, 60)">
        <rect width="120" height="100" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        
        {/* Active Blocks */}
        <rect x="10" y="10" width="100" height="15" rx="2" fill="var(--accent)" opacity="0.8" />
        <rect x="10" y="30" width="100" height="15" rx="2" fill="var(--accent)" opacity="0.6" />
        <rect x="10" y="50" width="100" height="15" rx="2" fill="var(--accent)" opacity="0.4" />
        <rect x="10" y="70" width="100" height="15" rx="2" fill="#3f3f46" opacity="0.2" />
    </g>
    
    {/* Persistence Icon */}
    <path d="M200 170 V190" stroke="var(--accent)" strokeWidth="1" />
    <path d="M180 190 H220" stroke="var(--accent)" strokeWidth="1" />
    <circle cx="200" cy="190" r="3" fill="var(--accent)" />
  </svg>
);
