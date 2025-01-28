import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-70">
      {/* Tilted axis line */}
      <div className="absolute w-full h-full rotate-45 z-10">
        <div className="absolute left-0 bottom-0 w-[1px] h-[141%] origin-bottom-left bg-gradient-to-t from-blue-500 via-cyan-400 to-purple-500 glow-axis"></div>
      </div>
      {/* Rotating globe */}
      <div className="globe absolute w-full h-full rounded-full border-t-4 border-blue-500/60 animate-globe-rotate-tilted">
        <div className="absolute w-full h-full rounded-full border-t-4 border-cyan-400/50 rotate-45"></div>
        <div className="absolute w-full h-full rounded-full border-t-4 border-purple-500/50 -rotate-45"></div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
    </div>
  );
};

export default GlobeAnimation; 