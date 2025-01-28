import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-80">
      <div className="globe absolute w-full h-full rounded-full border-t-[6px] border-blue-500/70 animate-globe-rotate transform rotate-[45deg]">
        <div className="absolute w-full h-full rounded-full border-t-[6px] border-cyan-400/60 rotate-[120deg]"></div>
        <div className="absolute w-full h-full rounded-full border-t-[6px] border-purple-500/60 rotate-[240deg]"></div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
    </div>
  );
};

export default GlobeAnimation; 