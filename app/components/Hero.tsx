import React from 'react';
import Link from "next/link"
import GlobeAnimation from './GlobeAnimation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.1)_0%,transparent_70%)]"></div>
      </div>
      <GlobeAnimation />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Build & Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dream Sales Team</span>
            </h1>
            <span className="text-lg md:text-xl text-red-500 font-semibold whitespace-nowrap">
              by The Connections India Pvt Ltd
            </span>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transform your business with our cutting-edge BPO solutions and sales team automation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Get Started
            </a>
            <a href="#services" className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold hover:bg-white/20 transition-colors duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

