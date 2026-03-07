import React from 'react';

// Shared Gradients & Definitions
const Defs = () => (
  <defs>
    <linearGradient id="backbeat-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#27272a" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#27272a" stopOpacity="0.2" />
    </linearGradient>
    <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#27272a" strokeWidth="0.5" />
    </pattern>
  </defs>
);

export const TaskDelegation = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Main Agent */}
    <circle cx="200" cy="112.5" r="30" stroke="var(--accent)" strokeWidth="2" fill="#18181b" />
    
    {/* Background Workers */}
    {[0, 120, 240].map((deg, i) => {
        const rad = deg * Math.PI / 180;
        const x = 200 + Math.cos(rad) * 80;
        const y = 112.5 + Math.sin(rad) * 50;
        return (
            <g key={i}>
                <line x1="200" y1="112.5" x2={x} y2={y} stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" className="animate-draw" />
                <circle cx={x} cy={y} r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                <circle cx={x} cy={y} r="5" fill="var(--accent)" opacity="0.5" className="animate-pulse" />
            </g>
        );
    })}
  </svg>
);

export const Autoscaling = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Graph Background */}
    <rect x="50" y="50" width="300" height="125" fill="url(#grid-pattern)" opacity="0.3" />
    <path d="M50 175 H350" stroke="#3f3f46" strokeWidth="1" />
    <path d="M50 50 V175" stroke="#3f3f46" strokeWidth="1" />
    
    {/* Load Curve */}
    <path d="M50 160 C100 160 120 100 150 100 C180 100 200 140 250 140 C300 140 320 60 350 50" stroke="#3f3f46" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    
    {/* Scaling Blocks */}
    <g transform="translate(60, 140)">
        <rect width="20" height="20" rx="2" fill="var(--accent)" opacity="0.2" />
        <rect x="30" width="20" height="20" rx="2" fill="var(--accent)" opacity="0.3" />
        <rect x="60" width="20" height="20" rx="2" fill="var(--accent)" opacity="0.4" />
        <rect x="90" y="-30" width="20" height="20" rx="2" fill="var(--accent)" opacity="0.5" />
        <rect x="120" y="-30" width="20" height="20" rx="2" fill="var(--accent)" opacity="0.6" />
        
        {/* New Instance Popping Up */}
        <g transform="translate(260, -80)" className="animate-float">
            <rect width="20" height="20" rx="2" fill="var(--accent)" />
            <path d="M10 25 L10 35" stroke="var(--accent)" strokeWidth="1" />
        </g>
    </g>
  </svg>
);

export const DagDependencies = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Root Node */}
    <g transform="translate(50, 112.5)">
        <circle r="15" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M15 0 H65" stroke="#3f3f46" strokeWidth="1" />
    </g>

    {/* Level 1 */}
    <g transform="translate(130, 70)">
        <circle r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <path d="M-65 42.5 L-15 10" stroke="#3f3f46" strokeWidth="1" />
        <path d="M15 0 H65" stroke="#3f3f46" strokeWidth="1" />
    </g>
    <g transform="translate(130, 155)">
        <circle r="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <path d="M-65 -42.5 L-15 -10" stroke="#3f3f46" strokeWidth="1" />
        <path d="M15 0 H65" stroke="#3f3f46" strokeWidth="1" />
    </g>

    {/* Diamond Merge */}
    <g transform="translate(210, 112.5)">
        <circle r="15" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M-65 -42.5 L-15 -5" stroke="#3f3f46" strokeWidth="1" />
        <path d="M-65 42.5 L-15 5" stroke="#3f3f46" strokeWidth="1" />
        <path d="M15 0 H65" stroke="var(--accent)" strokeWidth="1" className="animate-draw" />
    </g>

    {/* Final Node */}
    <g transform="translate(290, 112.5)">
        <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
    </g>
  </svg>
);

export const TaskScheduling = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Calendar Grid */}
    <g transform="translate(100, 60)">
        <rect width="200" height="100" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <line x1="0" y1="25" x2="200" y2="25" stroke="#3f3f46" strokeWidth="1" />
        <line x1="0" y1="50" x2="200" y2="50" stroke="#3f3f46" strokeWidth="1" />
        <line x1="0" y1="75" x2="200" y2="75" stroke="#3f3f46" strokeWidth="1" />
        
        <line x1="50" y1="25" x2="50" y2="100" stroke="#3f3f46" strokeWidth="1" />
        <line x1="100" y1="25" x2="100" y2="100" stroke="#3f3f46" strokeWidth="1" />
        <line x1="150" y1="25" x2="150" y2="100" stroke="#3f3f46" strokeWidth="1" />
        
        {/* Scheduled Items */}
        <rect x="10" y="30" width="30" height="15" rx="2" fill="var(--accent)" opacity="0.8" />
        <rect x="60" y="55" width="30" height="15" rx="2" fill="var(--accent)" opacity="0.6" />
        <rect x="110" y="80" width="30" height="15" rx="2" fill="var(--accent)" opacity="0.4" />
        <rect x="160" y="30" width="30" height="15" rx="2" fill="var(--accent)" opacity="0.8" />
    </g>
  </svg>
);

export const PersistenceRecovery = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Database Cylinders */}
    <g transform="translate(140, 60)">
        <ellipse cx="60" cy="15" rx="60" ry="15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <path d="M0 15 V85 A60 15 0 0 0 120 85 V15" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <ellipse cx="60" cy="85" rx="60" ry="15" fill="none" stroke="#3f3f46" strokeWidth="1" />
        
        {/* Saved State */}
        <path d="M0 50 A60 15 0 0 0 120 50" stroke="var(--accent)" strokeWidth="1" fill="none" />
        <circle cx="60" cy="50" r="4" fill="var(--accent)" />
    </g>
    
    {/* Recovery Arrow */}
    <path d="M220 100 C240 100 260 80 260 60" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow-sm)" strokeDasharray="4 4" />
  </svg>
);

export const TaskResumption = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Progress Bar with Break */}
    <rect x="60" y="100" width="280" height="10" rx="5" fill="#3f3f46" opacity="0.3" />
    <rect x="60" y="100" width="120" height="10" rx="5" fill="var(--accent)" opacity="0.5" />
    
    {/* Break Point */}
    <path d="M180 90 L180 120" stroke="#ef4444" strokeWidth="2" />
    <text x="180" y="80" textAnchor="middle" fill="#ef4444" fontSize="10">CRASH</text>
    
    {/* Resume Point */}
    <rect x="180" y="100" width="100" height="10" rx="5" fill="var(--accent)" className="animate-draw" />
    <text x="230" y="130" textAnchor="middle" fill="var(--accent)" fontSize="10">RESUMING...</text>
  </svg>
);

export const EventDrivenCore = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Central Bus */}
    <rect x="50" y="100" width="300" height="25" rx="12.5" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <text x="200" y="116" textAnchor="middle" fill="#71717a" fontSize="10" letterSpacing="2">EVENT BUS</text>
    
    {/* Event Nodes */}
    <g transform="translate(100, 60)">
        <circle r="10" fill="var(--accent)" />
        <path d="M0 10 V40" stroke="var(--accent)" strokeWidth="1" />
    </g>
    <g transform="translate(200, 165)">
        <circle r="10" fill="var(--accent)" />
        <path d="M0 -10 V-40" stroke="var(--accent)" strokeWidth="1" />
    </g>
    <g transform="translate(300, 60)">
        <circle r="10" fill="var(--accent)" />
        <path d="M0 10 V40" stroke="var(--accent)" strokeWidth="1" />
    </g>
    
    {/* Pulses */}
    <circle cx="100" cy="112.5" r="4" fill="var(--accent)" className="animate-draw">
        <animate attributeName="cx" from="50" to="350" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const SessionContinuation = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Session 1 */}
    <rect x="60" y="80" width="80" height="65" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <text x="100" y="115" textAnchor="middle" fill="#71717a" fontSize="10">TASK A</text>
    
    {/* Context Flow */}
    <path d="M140 112.5 H180" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#arrow-sm)" />
    
    {/* Session 2 */}
    <rect x="180" y="80" width="80" height="65" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
    <text x="220" y="115" textAnchor="middle" fill="var(--accent)" fontSize="10">TASK B</text>
    
    {/* Context Data */}
    <rect x="190" y="130" width="60" height="10" rx="2" fill="var(--accent)" opacity="0.2" />
    <text x="220" y="138" textAnchor="middle" fill="var(--accent)" fontSize="6">INHERITED CTX</text>
    
    {/* Future */}
    <path d="M260 112.5 H300" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);
