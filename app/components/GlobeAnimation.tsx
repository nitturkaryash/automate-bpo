import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-70">
      {/* Rotating globe */}
      <div className="globe absolute w-full h-full rounded-full animate-globe-rotate-tilted">
        {/* Satellite orbit path */}
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 -rotate-[15deg]"></div>
        
        {/* Satellite */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[15deg]">
          <div className="satellite w-4 h-4 animate-orbit">
            <div className="w-full h-full bg-blue-400 rounded-full satellite-glow"></div>
            {/* Satellite trail */}
            <div className="absolute top-1/2 left-1/2 w-8 h-[2px] -translate-x-full -translate-y-1/2 bg-gradient-to-r from-blue-400/80 to-transparent satellite-trail"></div>
          </div>
        </div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
    </div>
  );
};

export default GlobeAnimation; 