import React from 'react';

// Shared Gradients & Definitions
const Defs = () => (
  <defs>
    <linearGradient id="glass-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#27272a" stopOpacity="0.4" />
      <stop offset="100%" stopColor="#27272a" stopOpacity="0.1" />
    </linearGradient>
    <radialGradient id="glow-gradient" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
    </radialGradient>
    <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
    </filter>
  </defs>
);

// Unified Workspace: A central "hub" (Mars logo style) connecting to satellite repos
export const UnifiedWorkspace = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Orbit Paths */}
    <ellipse cx="200" cy="112.5" rx="120" ry="60" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />
    <ellipse cx="200" cy="112.5" rx="80" ry="40" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />

    {/* Central Hub */}
    <g className="animate-float">
      <circle cx="200" cy="112.5" r="25" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
      <circle cx="200" cy="112.5" r="12" fill="url(#glow-gradient)" />
      <path d="M190 112.5 H210 M200 102.5 V122.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Satellites */}
    {[0, 120, 240].map((deg, i) => (
      <g key={i} className="group-hover:animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
        {/* Calculate positions based on ellipse roughly */}
        <g transform={`translate(${200 + Math.cos(deg * Math.PI / 180) * 80}, ${112.5 + Math.sin(deg * Math.PI / 180) * 40})`}>
          <rect x="-15" y="-10" width="30" height="20" rx="4" fill="#18181b" stroke="#52525b" strokeWidth="1" />
          <line x1="-15" y1="10" x2="15" y2="10" stroke="#27272a" strokeWidth="1" />
          {/* Connection Line */}
          <line x1="0" y1="0" x2={-Math.cos(deg * Math.PI / 180) * 80} y2={-Math.sin(deg * Math.PI / 180) * 40} stroke="var(--accent)" strokeWidth="1" opacity="0.2" />
        </g>
      </g>
    ))}
  </svg>
);

// Shared Claude Config: A config file beaming settings to multiple environments
export const SharedClaudeConfig = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />

    {/* Source Config File */}
    <g transform="translate(170, 40)">
      <rect x="0" y="0" width="60" height="80" rx="6" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M15 20 H45 M15 35 H45 M15 50 H30" stroke="#52525b" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="70" r="4" fill="var(--accent)" className="animate-pulse" />
    </g>

    {/* Data Streams */}
    <path d="M200 120 V150" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-draw" />
    <path d="M200 150 L100 170" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
    <path d="M200 150 L200 170" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
    <path d="M200 150 L300 170" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />

    {/* Target Environments */}
    <g transform="translate(70, 170)">
      <rect width="60" height="40" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <text x="30" y="25" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace">API</text>
    </g>
    <g transform="translate(170, 170)">
      <rect width="60" height="40" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <text x="30" y="25" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace">WEB</text>
    </g>
    <g transform="translate(270, 170)">
      <rect width="60" height="40" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
      <text x="30" y="25" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace">LIB</text>
    </g>
  </svg>
);

// Parallel Cloning: Multiple progress bars filling up simultaneously
export const ParallelCloning = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />

    {/* Main Container Window */}
    <rect x="60" y="40" width="280" height="160" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
    <path d="M60 70 H340" stroke="#27272a" strokeWidth="1" />
    <circle cx="80" cy="55" r="3" fill="#ef4444" opacity="0.5" />
    <circle cx="92" cy="55" r="3" fill="#eab308" opacity="0.5" />
    <circle cx="104" cy="55" r="3" fill="#22c55e" opacity="0.5" />

    {/* Progress Row 1 */}
    <g transform="translate(90, 90)">
      <text x="0" y="5" fill="#a1a1aa" fontSize="10" fontFamily="monospace">cloning frontend...</text>
      <rect x="0" y="15" width="220" height="6" rx="3" fill="#27272a" />
      <rect x="0" y="15" width="220" height="6" rx="3" fill="var(--accent)" className="group-hover:animate-draw origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100" />
    </g>

    {/* Progress Row 2 */}
    <g transform="translate(90, 130)">
      <text x="0" y="5" fill="#a1a1aa" fontSize="10" fontFamily="monospace">cloning backend...</text>
      <rect x="0" y="15" width="220" height="6" rx="3" fill="#27272a" />
      <rect x="0" y="15" width="180" height="6" rx="3" fill="var(--accent)" className="group-hover:animate-draw origin-left scale-x-0 transition-transform duration-1000 ease-out delay-100 group-hover:scale-x-100" />
    </g>
  </svg>
);

// Tag Based Filtering: A funnel metaphor with sophisticated shapes
export const TagBasedFiltering = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />

    {/* Funnel Body */}
    <path d="M120 40 L160 120 H240 L280 40" stroke="#3f3f46" strokeWidth="1" fill="url(#glass-gradient)" />
    <path d="M160 120 V180 H240 V120" stroke="#3f3f46" strokeWidth="1" fill="url(#glass-gradient)" />

    {/* Particles Input */}
    <g className="group-hover:animate-float">
      <circle cx="150" cy="30" r="6" fill="#3f3f46" />
      <rect x="180" y="20" width="12" height="12" fill="var(--accent)" />
      <path d="M220 30 L226 40 L214 40 Z" fill="#3f3f46" />
      <circle cx="250" cy="35" r="5" fill="#3f3f46" />
    </g>

    {/* Filter Chips inside */}
    <rect x="170" y="135" width="60" height="20" rx="10" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" />
    <text x="200" y="148" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="bold">TAGGED</text>

    {/* Output */}
    <g transform="translate(180, 190)">
      <rect x="0" y="0" width="40" height="30" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M10 10 L15 15 L30 5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
);

export const StatusOverview = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <rect x="80" y="40" width="240" height="160" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
    <path d="M80 80 H320" stroke="#27272a" strokeWidth="1" />
    
    {/* Columns */}
    <g transform="translate(100, 100)">
        <rect width="200" height="24" rx="4" fill="#27272a" opacity="0.3" />
        <circle cx="15" cy="12" r="3" fill="#22c55e" />
        <rect x="30" y="10" width="80" height="4" rx="2" fill="#52525b" />
    </g>

    <g transform="translate(100, 135)">
        <rect width="200" height="24" rx="4" fill="#27272a" opacity="0.3" />
        <circle cx="15" cy="12" r="3" fill="#ef4444" className="animate-pulse" />
        <rect x="30" y="10" width="80" height="4" rx="2" fill="#52525b" />
        <text x="170" y="16" fill="#ef4444" fontSize="10" fontWeight="bold">2↓</text>
    </g>
  </svg>
);

export const BranchManagement = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <path d="M100 200 V50" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round" />
    <circle cx="100" cy="180" r="4" fill="#3f3f46" />
    <circle cx="100" cy="120" r="4" fill="#3f3f46" />
    
    {/* Branch curve */}
    <path d="M100 120 C100 90 160 120 160 80" stroke="var(--accent)" strokeWidth="2" fill="none" className="group-hover:animate-draw" strokeDasharray="100" strokeDashoffset="100" />
    <circle cx="160" cy="80" r="5" fill="var(--accent)" />
    
    {/* Tag */}
    <rect x="180" y="70" width="70" height="20" rx="4" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" />
    <text x="215" y="83" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="monospace">feature</text>
  </svg>
);

export const SyncRebase = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <g transform="translate(200, 112.5)">
        <circle r="40" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
        <path d="M-30 0 A 30 30 0 0 1 30 0" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" className="group-hover:rotate-180 transition-transform duration-1000" />
        <path d="M30 0 A 30 30 0 0 1 -30 0" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <path d="M25 -5 L30 0 L35 -5" stroke="var(--accent)" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

export const ExecAcrossRepos = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    <rect x="120" y="40" width="160" height="100" rx="6" fill="#18181b" stroke="var(--accent)" strokeWidth="1" />
    <text x="140" y="70" fill="var(--accent)" fontFamily="monospace" fontSize="12">$ run-all</text>
    <rect x="140" y="80" width="120" height="2" rx="1" fill="#3f3f46" />
    <rect x="140" y="90" width="80" height="2" rx="1" fill="#3f3f46" />
    
    {/* Fan out */}
    <path d="M200 140 L140 180" stroke="#3f3f46" strokeWidth="1" />
    <path d="M200 140 L200 180" stroke="#3f3f46" strokeWidth="1" />
    <path d="M200 140 L260 180" stroke="#3f3f46" strokeWidth="1" />
    
    <rect x="120" y="180" width="40" height="20" rx="2" fill="#27272a" />
    <rect x="180" y="180" width="40" height="20" rx="2" fill="#27272a" />
    <rect x="240" y="180" width="40" height="20" rx="2" fill="#27272a" />
  </svg>
);
