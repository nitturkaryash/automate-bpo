import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to AutomateBPO</h1>
        <p className="text-xl md:text-2xl mb-8">Empowering Startups with Seamless Automation Solutions</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Transform Your Business with Us</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Are you struggling with scaling your startup while managing your sales, customer service, and relationship
          management internally? AutomateBPO is here to revolutionize how you handle these critical functions.
        </p>
        <Link
          href="#contact"
          className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

