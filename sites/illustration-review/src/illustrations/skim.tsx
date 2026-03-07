import React from 'react';

// Shared Gradients & Definitions
const Defs = () => (
  <defs>
    <linearGradient id="skim-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#27272a" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#27272a" stopOpacity="0.2" />
    </linearGradient>
    <linearGradient id="skim-scan" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
      <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
    </linearGradient>
    <filter id="skim-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
);

export const BlazingFast = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Speed Lines Background */}
    <g opacity="0.1">
        <line x1="0" y1="40" x2="400" y2="40" stroke="var(--accent)" strokeWidth="1" strokeDasharray="10 20" />
        <line x1="0" y1="112" x2="400" y2="112" stroke="var(--accent)" strokeWidth="1" strokeDasharray="10 20" />
        <line x1="0" y1="180" x2="400" y2="180" stroke="var(--accent)" strokeWidth="1" strokeDasharray="10 20" />
    </g>

    {/* The "Runner" / Processor */}
    <g className="group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
        <path d="M100 80 L160 112.5 L100 145 Z" fill="#18181b" stroke="var(--accent)" strokeWidth="2" />
        <path d="M100 80 L160 112.5 L100 145 Z" fill="var(--accent)" fillOpacity="0.1" />
        
        {/* Stream Trail */}
        <path d="M100 90 H20" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
        <path d="M100 112.5 H0" stroke="var(--accent)" strokeWidth="1" opacity="0.8" />
        <path d="M100 135 H20" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
    </g>
  </svg>
);

export const CacheSpeedup = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Database / Cache Blocks */}
    <g transform="translate(140, 60)">
        <rect width="120" height="30" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <rect y="40" width="120" height="30" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <rect y="80" width="120" height="30" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    </g>

    {/* Energy Arc */}
    <path d="M200 40 V150" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" className="animate-draw" />
    <circle cx="200" cy="75" r="4" fill="var(--accent)" className="animate-pulse" />
    <circle cx="200" cy="115" r="4" fill="var(--accent)" className="animate-pulse delay-100" />
    
    {/* Flash */}
    <path d="M220 50 L180 80 L220 110 L180 140" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.5" />
  </svg>
);

export const NineLanguages = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Code Snippet Cards orbiting */}
    <g transform="translate(200, 112.5)" className="animate-spin-slow">
        {/* TS Card */}
        <g transform="translate(0, -70)">
            <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="bold">TS</text>
        </g>
        
        {/* RS Card */}
        <g transform="rotate(90) translate(0, -70)">
            <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fill="#71717a" fontSize="12" fontWeight="bold">RS</text>
        </g>
        
        {/* PY Card */}
        <g transform="rotate(180) translate(0, -70)">
            <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fill="#71717a" fontSize="12" fontWeight="bold">PY</text>
        </g>
        
        {/* GO Card */}
        <g transform="rotate(270) translate(0, -70)">
            <rect x="-20" y="-25" width="40" height="50" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fill="#71717a" fontSize="12" fontWeight="bold">GO</text>
        </g>
    </g>
    
    {/* Center Core */}
    <circle cx="200" cy="112.5" r="20" fill="#18181b" stroke="var(--accent)" strokeWidth="1" />
    <circle cx="200" cy="112.5" r="8" fill="var(--accent)" opacity="0.5" />
  </svg>
);

export const TransformationModes = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Layer Stack */}
    <g transform="translate(160, 60)">
        {/* Back Layer (Raw) */}
        <rect x="40" y="-20" width="80" height="100" rx="4" fill="#27272a" stroke="#3f3f46" opacity="0.3" />
        
        {/* Middle Layer (Structure) */}
        <rect x="20" y="-10" width="80" height="100" rx="4" fill="#27272a" stroke="#3f3f46" opacity="0.6" />
        
        {/* Front Layer (Signatures - Highlighted) */}
        <rect x="0" y="0" width="80" height="100" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        
        {/* Code Lines - Clean */}
        <line x1="10" y1="20" x2="70" y2="20" stroke="var(--accent)" strokeWidth="1.5" />
        <line x1="10" y1="35" x2="50" y2="35" stroke="#52525b" strokeWidth="1.5" />
        <line x1="10" y1="50" x2="60" y2="50" stroke="#52525b" strokeWidth="1.5" />
    </g>
    
    {/* Filter Icon / Funnel */}
    <path d="M100 80 L130 110" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const DirectorySupport = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Tree Structure */}
    <g transform="translate(100, 40)">
        <circle cx="10" cy="10" r="4" fill="var(--accent)" />
        <line x1="10" y1="10" x2="10" y2="120" stroke="#3f3f46" strokeWidth="1" />
        
        {/* Branch 1 */}
        <path d="M10 40 H40" stroke="#3f3f46" strokeWidth="1" />
        <rect x="40" y="30" width="20" height="20" rx="2" fill="#18181b" stroke="#52525b" />
        
        {/* Branch 2 */}
        <path d="M10 80 H40" stroke="#3f3f46" strokeWidth="1" />
        <rect x="40" y="70" width="20" height="20" rx="2" fill="#18181b" stroke="#52525b" />
        
        {/* Branch 3 - Active */}
        <path d="M10 120 H40" stroke="var(--accent)" strokeWidth="1" />
        <rect x="40" y="110" width="20" height="20" rx="2" fill="#18181b" stroke="var(--accent)" />
    </g>
    
    {/* Glob Pattern Overlay */}
    <rect x="180" y="90" width="120" height="40" rx="20" fill="#18181b" stroke="var(--accent)" strokeWidth="1" />
    <text x="240" y="115" textAnchor="middle" fill="var(--accent)" fontFamily="monospace" fontSize="14">src/**/*.ts</text>
  </svg>
);

export const StreamingOutput = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Terminal Window */}
    <rect x="60" y="40" width="280" height="150" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    
    {/* Header */}
    <rect x="60" y="40" width="280" height="24" rx="6" fill="#27272a" />
    <circle cx="80" cy="52" r="3" fill="#52525b" />
    <circle cx="92" cy="52" r="3" fill="#52525b" />
    
    {/* Content - Stream lines */}
    <g transform="translate(80, 80)">
        <line x1="0" y1="0" x2="200" y2="0" stroke="var(--accent)" strokeWidth="1.5" className="group-hover:animate-draw" strokeDasharray="200" strokeDashoffset="200" />
        <line x1="0" y1="20" x2="160" y2="20" stroke="#52525b" strokeWidth="1.5" className="delay-100 group-hover:animate-draw" strokeDasharray="160" strokeDashoffset="160" />
        <line x1="0" y1="40" x2="180" y2="40" stroke="#52525b" strokeWidth="1.5" className="delay-200 group-hover:animate-draw" strokeDasharray="180" strokeDashoffset="180" />
    </g>
    
    {/* Pipe Connector */}
    <path d="M340 115 H380" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 2" />
    <text x="390" y="120" fill="#71717a" fontSize="14">|</text>
  </svg>
);
