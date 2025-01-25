import Link from "next/link"
import Tesseract from "./Tesseract"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float-slow">Welcome to The-Connections</h1>
        <p className="text-xl md:text-2xl mb-8 animate-pulse-gentle">Empowering Businesses with Seamless Automation Solutions</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Transform Your Business with Us</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Are you looking to scale your business with efficient sales, customer service, and relationship
          management? The-Connections is here to revolutionize how you handle these critical functions.
        </p>
        <Link
          href="#contact"
          className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-block animate-pulse-gentle"
        >
          Get Started
        </Link>
      </div>
      
      {/* Decorative Tesseracts */}
      <div className="absolute top-20 left-10 opacity-30 scale-75 hidden md:block">
        <Tesseract />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 scale-75 hidden md:block">
        <Tesseract />
      </div>
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-20 scale-50 hidden lg:block">
        <Tesseract />
      </div>
    </section>
  )
}

