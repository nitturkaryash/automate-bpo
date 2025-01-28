import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-70">
      {/* Rotating globe with glowing borders */}
      <div className="globe absolute w-full h-full rounded-full animate-globe-rotate-tilted">
        <div className="absolute w-full h-full rounded-full border-2 border-transparent border-t-blue-500/60 glow-border rotate-[135deg]"></div>
        <div className="absolute w-full h-full rounded-full border-2 border-transparent border-t-cyan-400/50 glow-border rotate-[225deg]"></div>
        <div className="absolute w-full h-full rounded-full border-2 border-transparent border-t-purple-500/50 glow-border rotate-[315deg]"></div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
    </div>
  );
};

export default GlobeAnimation; 