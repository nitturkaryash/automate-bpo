import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Automate BPO
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="nav-link text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#process" className="nav-link text-gray-600 hover:text-gray-900">
              How it Works
            </Link>
            <Link href="#careers" className="nav-link text-gray-600 hover:text-gray-900">
              Work with Us
            </Link>
            <Link href="#contact" className="nav-link text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

