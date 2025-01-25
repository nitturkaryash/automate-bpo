import Link from "next/link"
import Tesseract from "./Tesseract"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float-slow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Welcome to The-Connections
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-pulse-gentle">
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
        >
          Get Started
        </Link>
      </div>
      
      {/* Decorative Tesseracts */}
      <div className="absolute top-1/4 left-10 opacity-60 scale-100 hidden md:block">
        <Tesseract />
      </div>
      <div className="absolute bottom-1/4 right-10 opacity-60 scale-100 hidden md:block">
        <Tesseract />
      </div>
      <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 opacity-40 scale-75 hidden lg:block">
        <Tesseract />
      </div>
    </section>
  )
}

