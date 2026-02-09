'use client';

import React from 'react';
import SystemsProcessTile from './components/SystemsProcessTile';

export default function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#101c22] p-4">
      {/* Background Gradient matching the theme */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#101c22] to-[#020617]" />
      
      {/* 
        The component below is the direct replacement for the 600x600 tile 
        requested in the prompt. It is self-contained and handles all internal 
        logic and responsiveness.
      */}
      <SystemsProcessTile />
    </div>
  );
}