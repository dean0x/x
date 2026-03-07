import React from 'react';

// Shared Gradients & Definitions
const Defs = () => (
  <defs>
    <linearGradient id="mino-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#27272a" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#27272a" stopOpacity="0.2" />
    </linearGradient>
    <radialGradient id="mino-glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
    </radialGradient>
  </defs>
);

export const ProjectOnlyMount = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Container Boundary */}
    <rect x="100" y="40" width="200" height="140" rx="8" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4 4" fill="#18181b" fillOpacity="0.5" />
    <text x="120" y="30" fill="#71717a" fontSize="10" fontFamily="monospace">CONTAINER</text>

    {/* Mounted Volume */}
    <g transform="translate(140, 70)">
        <path d="M0 10 H40 L50 20 H120 V80 H0 V10 Z" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <rect x="10" y="30" width="100" height="40" rx="2" fill="var(--accent)" fillOpacity="0.1" />
        <text x="60" y="55" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="bold">/project</text>
    </g>

    {/* Blocked Paths */}
    <g transform="translate(120, 150)" opacity="0.4">
        <text x="0" y="10" fill="#ef4444" fontSize="10">~/.ssh</text>
        <line x1="-5" y1="5" x2="35" y2="5" stroke="#ef4444" strokeWidth="1" />
    </g>
    <g transform="translate(240, 150)" opacity="0.4">
        <text x="0" y="10" fill="#ef4444" fontSize="10">~/.aws</text>
        <line x1="-5" y1="5" x2="35" y2="5" stroke="#ef4444" strokeWidth="1" />
    </g>
  </svg>
);

export const TemporaryCredentials = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Credential Card */}
    <rect x="120" y="60" width="160" height="100" rx="6" fill="#18181b" stroke="var(--accent)" strokeWidth="1" />
    <rect x="120" y="60" width="160" height="24" rx="6" fill="var(--accent)" fillOpacity="0.1" />
    <text x="135" y="76" fill="var(--accent)" fontSize="10" fontWeight="bold">AWS_SESSION_TOKEN</text>

    {/* Obfuscated Key */}
    <text x="135" y="105" fill="#52525b" fontSize="12" fontFamily="monospace">ASIA...</text>
    <rect x="175" y="96" width="80" height="10" rx="2" fill="#27272a" />

    {/* Timer / Expiry */}
    <g transform="translate(250, 130)">
        <circle r="12" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
        <path d="M0 -8 V0 L4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <text x="20" y="4" fill="#71717a" fontSize="10">1h left</text>
    </g>
  </svg>
);

export const SshAgentForwarding = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Host Machine */}
    <rect x="50" y="60" width="100" height="100" rx="4" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
    <text x="60" y="50" fill="#71717a" fontSize="10">HOST</text>
    <path d="M90 100 L110 100" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="80" cy="100" r="15" stroke="var(--accent)" strokeWidth="1.5" fill="#18181b" />
    <path d="M75 100 H85 M80 95 V105" stroke="var(--accent)" strokeWidth="1.5" />

    {/* Container Machine */}
    <rect x="250" y="60" width="100" height="100" rx="4" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
    <text x="260" y="50" fill="#71717a" fontSize="10">CONTAINER</text>
    <text x="270" y="105" fill="#a1a1aa" fontSize="12" fontFamily="monospace">git pull</text>

    {/* Connection Tunnel */}
    <path d="M150 110 H250" stroke="#3f3f46" strokeWidth="4" opacity="0.3" />
    <circle cx="200" cy="110" r="4" fill="var(--accent)" className="animate-draw">
        <animate attributeName="cx" from="150" to="250" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const ContentAddressedCache = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Hexagon Grid */}
    <g transform="translate(200, 112.5)" stroke="#3f3f46" strokeWidth="1">
        <path d="M0 -30 L26 -15 V15 L0 30 L-26 15 V-15 Z" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M-52 -30 L-26 -15 V15 L-52 30 L-78 15 V-15 Z" fill="#18181b" opacity="0.5" />
        <path d="M52 -30 L78 -15 V15 L52 30 L26 15 V-15 Z" fill="#18181b" opacity="0.5" />
        <path d="M26 -60 L52 -45 V-15 L26 0 L0 -15 V-45 Z" fill="#18181b" opacity="0.3" />
        <path d="M-26 30 L0 45 V75 L-26 90 L-52 75 V45 Z" fill="#18181b" opacity="0.3" />
    </g>
    
    {/* Hash String */}
    <rect x="150" y="105" width="100" height="15" rx="2" fill="#18181b" />
    <text x="200" y="116" textAnchor="middle" fill="var(--accent)" fontSize="8" fontFamily="monospace">sha256:e7f2a1...</text>
  </svg>
);

export const NetworkIsolation = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Central Node */}
    <circle cx="200" cy="112.5" r="30" stroke="var(--accent)" strokeWidth="1.5" fill="#18181b" />
    
    {/* Shield Field */}
    <circle cx="200" cy="112.5" r="50" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 4" className="animate-spin-slow" />
    <circle cx="200" cy="112.5" r="70" stroke="#3f3f46" strokeWidth="1" opacity="0.3" />

    {/* Incoming Requests */}
    <g>
        {/* Allowed */}
        <path d="M100 112.5 L140 112.5" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
        <circle cx="95" cy="112.5" r="3" fill="#22c55e" />
        
        {/* Blocked */}
        <path d="M200 40 L200 70" stroke="#ef4444" strokeWidth="1.5" />
        <path d="M195 70 L205 80 M205 70 L195 80" stroke="#ef4444" strokeWidth="1.5" />
    </g>
  </svg>
);

export const RootlessPodman = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* User Space Box */}
    <rect x="80" y="40" width="240" height="145" rx="8" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
    <text x="100" y="30" fill="#a1a1aa" fontSize="10">USER SPACE (UID 1000)</text>

    {/* Container Inside */}
    <rect x="110" y="70" width="180" height="90" rx="4" stroke="var(--accent)" strokeWidth="1.5" fill="url(#mino-glass)" />
    
    {/* "Root" Crossed Out */}
    <g transform="translate(200, 115)">
        <text x="0" y="0" textAnchor="middle" fill="#52525b" fontSize="14" fontWeight="bold">ROOT</text>
        <line x1="-20" y1="0" x2="20" y2="-10" stroke="#ef4444" strokeWidth="2" opacity="0.8" />
    </g>
    
    {/* User Badge */}
    <circle cx="360" cy="50" r="15" fill="#3f3f46" />
    <path d="M360 45 A 5 5 0 0 1 360 55 A 5 5 0 0 1 360 45" fill="#a1a1aa" />
    <path d="M350 60 Q360 55 370 60" stroke="#a1a1aa" strokeWidth="2" fill="none" />
  </svg>
);

export const DefenseInDepth = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Layers */}
    <g transform="translate(200, 112.5)">
        <rect x="-80" y="-60" width="160" height="120" rx="4" stroke="#3f3f46" strokeWidth="1" fill="#18181b" opacity="0.3" transform="scale(1.1)" />
        <rect x="-80" y="-60" width="160" height="120" rx="4" stroke="#3f3f46" strokeWidth="1" fill="#18181b" opacity="0.6" transform="scale(1.05)" />
        <rect x="-80" y="-60" width="160" height="120" rx="4" stroke="var(--accent)" strokeWidth="1.5" fill="#18181b" />
        
        {/* Core Jewel */}
        <path d="M0 -20 L20 0 L0 20 L-20 0 Z" fill="var(--accent)" className="animate-pulse" />
    </g>
  </svg>
);

export const NetworkPresets = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Config Window */}
    <rect x="100" y="40" width="200" height="145" rx="6" stroke="#3f3f46" strokeWidth="1" fill="#18181b" />
    <path d="M100 70 H300" stroke="#3f3f46" strokeWidth="1" />
    
    {/* Presets List */}
    <g transform="translate(120, 90)">
        <g transform="translate(0, 0)">
            <rect width="12" height="12" rx="2" stroke="var(--accent)" fill="var(--accent)" />
            <path d="M3 6 L5 8 L9 4" stroke="#18181b" strokeWidth="1.5" fill="none" />
            <text x="20" y="10" fill="#e4e4e7" fontSize="12">npm-registry</text>
        </g>
        <g transform="translate(0, 30)">
            <rect width="12" height="12" rx="2" stroke="var(--accent)" fill="var(--accent)" />
            <path d="M3 6 L5 8 L9 4" stroke="#18181b" strokeWidth="1.5" fill="none" />
            <text x="20" y="10" fill="#e4e4e7" fontSize="12">github-api</text>
        </g>
        <g transform="translate(0, 60)">
            <rect width="12" height="12" rx="2" stroke="#3f3f46" />
            <text x="20" y="10" fill="#71717a" fontSize="12">public-internet</text>
        </g>
    </g>
  </svg>
);
