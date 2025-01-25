import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AutomateBPO - Empowering Startups with Seamless Automation Solutions",
  description:
    "AutomateBPO offers tailored business process outsourcing (BPO) services that automate and optimize your in-house teams, allowing you to focus on growing your business.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

