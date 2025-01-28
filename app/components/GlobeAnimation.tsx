import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-70">
      {/* Rotating globe with planet ring */}
      <div className="globe absolute w-full h-full rounded-full animate-globe-rotate-tilted">
        {/* Planet ring */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] transform -translate-y-1/2 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-500/80 to-transparent ring-glow animate-flow-glow"></div>
        </div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
    </div>
  );
};

export default GlobeAnimation; 