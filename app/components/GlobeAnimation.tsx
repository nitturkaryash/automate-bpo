import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-50">
      <div className="globe absolute w-full h-full rounded-full border-t-4 border-blue-500/30 animate-globe-rotate">
        <div className="absolute w-full h-full rounded-full border-t-4 border-cyan-400/20 rotate-45"></div>
        <div className="absolute w-full h-full rounded-full border-t-4 border-purple-500/20 -rotate-45"></div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
      <div className="globe-dots">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/80 rounded-full animate-pulse-gentle"
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