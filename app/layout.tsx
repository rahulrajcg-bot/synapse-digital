import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
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

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Synapse Digital | Premium IT Solutions & Digital Transformation',
  description: 'Transform your business with cutting-edge web development, mobile apps, video production, and digital marketing solutions. Premium quality, delivered.',
  keywords: ['IT Solutions', 'Web Development', 'Mobile Apps', 'Video Editing', 'SEO', 'Digital Marketing', 'India'],
  authors: [{ name: 'Synapse Digital' }],
  openGraph: {
    title: 'Synapse Digital | Premium IT Solutions',
    description: 'Transform your business with cutting-edge digital solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
