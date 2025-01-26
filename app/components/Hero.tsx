import Link from "next/link"
import Image from "next/image"

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
          Welcome to The-Connections
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 animate-pulse-gentle"
          style={{ willChange: 'transform' }}
        >
          Empowering Businesses with Seamless Automation Solutions
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Transform Your Business with Us</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Are you looking to scale your business with efficient sales, customer service, and relationship
          management? The-Connections is here to revolutionize how you handle these critical functions.
        </p>
        <Link
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition duration-300 inline-block animate-pulse-gentle"
          style={{ willChange: 'transform' }}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

