import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
            AutomateBPO
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="nav-link text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#services" className="nav-link text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#how-it-works" className="nav-link text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#contact" className="nav-link text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

