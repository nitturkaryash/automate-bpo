import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Careers from "./components/Careers"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <article>
        {/* Services Section */}
        <Services />

        {/* Process Section */}
        <HowItWorks />

        {/* Careers Section */}
        <Careers />

        {/* Contact Section */}
        <Contact />
      </article>
    </main>
  )
}

