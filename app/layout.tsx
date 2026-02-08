import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Synapse Digital | Professional IT Solutions',
  description: 'Premium IT solutions and digital transformation services for enterprises. Web development, mobile apps, and strategic consulting.',
  keywords: ['IT Solutions', 'Enterprise', 'Web Development', 'Digital Transformation', 'India'],
  authors: [{ name: 'Synapse Digital' }],
  openGraph: {
    title: 'Synapse Digital | Professional IT Solutions',
    description: 'Premium IT solutions for enterprises',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-cream-50">{children}</body>
    </html>
  )
}
