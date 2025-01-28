import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'The-Connections | BPO Solutions & Sales Team Automation',
  description: 'Transform your business with The-Connections ITES. Expert sales team solutions, AI automation, and 24/7 customer support. Build your dream sales team today.',
  keywords: 'BPO, sales team, automation, customer support, AI solutions, outsourcing, The-Connections, ITES',
  authors: [{ name: 'The-Connections ITES' }],
  openGraph: {
    title: 'The-Connections | BPO Solutions & Sales Team Automation',
    description: 'Transform your business with The-Connections ITES. Expert sales team solutions, AI automation, and 24/7 customer support.',
    url: 'https://nitturkaryash.github.io/automate-bpo',
    siteName: 'The-Connections ITES',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The-Connections | BPO Solutions & Sales Team Automation',
    description: 'Transform your business with The-Connections ITES. Expert sales team solutions, AI automation, and 24/7 customer support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The-Connections ITES Business Services Private Limited',
              description: 'Expert BPO solutions and sales team automation services',
              url: 'https://nitturkaryash.github.io/automate-bpo',
              logo: 'YOUR_LOGO_URL', // Add your logo URL
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vega Center, Swargate',
                addressLocality: 'Pune',
                postalCode: '411037',
                addressCountry: 'IN'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-788-789-8196',
                contactType: 'customer service',
                email: 'info@the-connections.com'
              },
              sameAs: [
                // Add your social media URLs
                'YOUR_LINKEDIN_URL',
                'YOUR_FACEBOOK_URL'
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

