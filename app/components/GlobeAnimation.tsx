import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container relative w-48 h-48 mx-auto">
      <div className="globe absolute w-full h-full rounded-full border-t-2 border-blue-500/30 animate-globe-spin">
        <div className="absolute w-full h-full rounded-full border-t-2 border-cyan-400/20 rotate-45"></div>
        <div className="absolute w-full h-full rounded-full border-t-2 border-purple-500/20 -rotate-45"></div>
      </div>
      <div className="globe-overlay absolute w-full h-1/2 top-0 bg-gradient-to-b from-black/50 via-transparent to-transparent rounded-t-full"></div>
      <div className="globe-dots">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/80 rounded-full animate-pulse-gentle"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GlobeAnimation; 