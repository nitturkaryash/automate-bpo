import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="globe-container absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-80">
      <div className="globe absolute w-full h-full rounded-full border-t-4 border-blue-500/80 animate-globe-rotate-diagonal" style={{ transform: 'perspective(1000px) rotateX(45deg)' }}>
        <div className="absolute w-full h-full rounded-full border-t-4 border-cyan-400/70 rotate-90"></div>
        <div className="absolute w-full h-full rounded-full border-t-4 border-purple-500/70"></div>
        
        {/* Text wrapping around the globe */}
        <div className="absolute w-full h-full animate-text-rotate">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 whitespace-nowrap text-2xl font-bold text-blue-400/90 tracking-wider" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>
            THE CONNECTIONS
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 whitespace-nowrap text-xl font-semibold text-cyan-400/90 tracking-wide" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}>
            INDIA PVT LTD
          </div>
        </div>
      </div>
      <div className="globe-overlay absolute w-full h-3/4 top-0 bg-gradient-to-b from-gray-900 via-blue-900/50 to-transparent rounded-t-full"></div>
    </div>
  );
};

export default GlobeAnimation; 