import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/grid.svg")',
          backgroundSize: '20px 20px',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4 animate-float-slow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
          style={{ willChange: 'transform' }}
        >
          Build Your Dream Sales Team
        </h1>
        <p 
          className="text-xl md:text-2xl mb-12 animate-pulse-gentle"
          style={{ willChange: 'transform' }}
        >
          Simple Steps to Transform Your Business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="step-card group">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(123,0,255,0.3)]">
              <h3 className="text-2xl font-semibold mb-3">1. Analyze</h3>
              <p>We understand your company's unique needs and goals</p>
            </div>
          </div>
          
          <div className="step-card group">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <h3 className="text-2xl font-semibold mb-3">2. Build</h3>
              <p>Recruit and train your dedicated sales team</p>
            </div>
          </div>
          
          <div className="step-card group">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(123,0,255,0.3)]">
              <h3 className="text-2xl font-semibold mb-3">3. Launch</h3>
              <p>Set up technology and start generating results</p>
            </div>
          </div>
        </div>

        <Link
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 inline-block hover:shadow-[0_0_30px_rgba(123,0,255,0.5)] hover:scale-105"
          style={{ willChange: 'transform' }}
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  )
}

