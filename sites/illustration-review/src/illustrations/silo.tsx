import React from 'react';

// Shared Gradients & Definitions
const Defs = () => (
  <defs>
    <linearGradient id="silo-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#27272a" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#27272a" stopOpacity="0.4" />
    </linearGradient>
    <filter id="silo-blur">
      <feGaussianBlur stdDeviation="4" />
    </filter>
  </defs>
);

export const SeparateLockedKeychain = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* System Keychain (Background) */}
    <g transform="translate(160, 40)" opacity="0.3">
        <rect width="80" height="100" rx="4" stroke="#71717a" strokeWidth="1" fill="#18181b" />
        <path d="M40 30 V40 M40 50 V60" stroke="#71717a" />
    </g>

    {/* Isolated Keychain (Foreground) */}
    <g transform="translate(180, 80)">
        <rect x="-40" y="0" width="80" height="100" rx="6" stroke="var(--accent)" strokeWidth="1.5" fill="#18181b" />
        
        {/* Lock Icon */}
        <g transform="translate(0, 40)">
            <rect x="-10" y="0" width="20" height="15" rx="2" fill="var(--accent)" />
            <path d="M-6 0 V-6 A 6 6 0 0 1 6 -6 V 0" stroke="var(--accent)" strokeWidth="1.5" />
            <circle cx="0" cy="7" r="2" fill="#18181b" />
        </g>
        
        <text x="0" y="80" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="bold">LOCKED</text>
    </g>
  </svg>
);

export const AutoLockAfterOp = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Timer Ring */}
    <circle cx="200" cy="112.5" r="40" stroke="#3f3f46" strokeWidth="2" />
    <circle cx="200" cy="112.5" r="40" stroke="var(--accent)" strokeWidth="2" strokeDasharray="251" strokeDashoffset="60" transform="rotate(-90 200 112.5)" strokeLinecap="round" />
    
    {/* Lock forming in center */}
    <g transform="translate(200, 112.5)">
        <rect x="-10" y="-5" width="20" height="15" rx="2" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M-6 -5 V-10 A 6 6 0 0 1 6 -10 V -5" stroke="var(--accent)" strokeWidth="1.5" className="animate-draw" />
    </g>
    
    <text x="200" y="175" textAnchor="middle" fill="#71717a" fontSize="12" fontFamily="monospace">auto-lock: immediate</text>
  </svg>
);

export const CliSdk = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* CLI Terminal */}
    <g transform="translate(60, 60)">
        <rect width="120" height="80" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
        <text x="10" y="20" fill="#a1a1aa" fontSize="10" fontFamily="monospace">$ silo get db</text>
        <text x="10" y="35" fill="var(--accent)" fontSize="10" fontFamily="monospace">*********</text>
    </g>

    {/* Connector */}
    <path d="M190 100 H210" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />

    {/* SDK Code Block */}
    <g transform="translate(220, 60)">
        <rect width="120" height="80" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="10" y="20" fill="var(--accent)" fontSize="10" fontFamily="monospace">import {'{'} silo {'}'}</text>
        <text x="10" y="35" fill="#71717a" fontSize="10" fontFamily="monospace">await silo.get()</text>
    </g>
  </svg>
);

export const PipeFriendlyOutput = () => (
  <svg viewBox="0 0 400 225" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Defs />
    
    {/* Silo Command */}
    <rect x="80" y="90" width="80" height="45" rx="4" fill="#18181b" stroke="var(--accent)" strokeWidth="1.5" />
    <text x="120" y="115" textAnchor="middle" fill="var(--accent)" fontSize="12" fontWeight="bold">silo</text>

    {/* Pipe Character */}
    <text x="180" y="118" textAnchor="middle" fill="#52525b" fontSize="20">|</text>

    {/* Next Tool */}
    <rect x="200" y="90" width="80" height="45" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <text x="240" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="12">jq</text>
    
    {/* Pipe Character */}
    <text x="300" y="118" textAnchor="middle" fill="#52525b" fontSize="20">|</text>

    {/* Final Tool */}
    <rect x="320" y="90" width="80" height="45" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <text x="360" y="115" textAnchor="middle" fill="#a1a1aa" fontSize="12">sh</text>
    
    {/* Data Flow Line */}
    <path d="M160 145 H360" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" className="animate-draw" opacity="0.3" />
  </svg>
);
