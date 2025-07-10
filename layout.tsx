
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Malik Aizaz Fitness Academy - Transform Your Body, Transform Your Life',
  description: 'Professional fitness training platform by Malik Aizaz Ahmed. Transform your life through proven fitness programs, HIIT cardio, strength training, and yoga. Monetized platform with affiliate partnerships and premium content.',
  keywords: 'Malik Aizaz fitness, Malik Aizaz Ahmed, fitness training, workout motivation, strength training, HIIT cardio, yoga, personal trainer, fitness transformation, affiliate fitness, monetized fitness platform',
  authors: [{ name: 'Malik Aizaz Ahmed' }],
  creator: 'Malik Aizaz Ahmed',
  publisher: 'Malik Aizaz Fitness Academy',
  robots: 'index, follow',
  openGraph: {
    title: 'Malik Aizaz Fitness Academy - Professional Training Platform',
    description: 'Transform your body and life with proven fitness programs. Created by certified trainer Malik Aizaz Ahmed.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Malik Aizaz Fitness Academy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malik Aizaz Fitness Academy - Transform Your Life Through Fitness',
    description: 'Professional fitness training platform by Malik Aizaz Ahmed',
    creator: '@MalikAizazAhmed'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://malikaizazfitness.com" />
        <meta name="author" content="Malik Aizaz Ahmed" />
        <meta name="contact" content="+92 334 9009265" />
        <meta name="email" content="aizaz4990@gmail.com" />
        <meta property="business:contact_data:phone_number" content="+92 334 9009265" />
        <meta property="business:contact_data:email" content="aizaz4990@gmail.com" />
        <meta name="business:name" content="Malik Aizaz Fitness Academy" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className} style={{'--font-pacifico': 'Pacifico, serif'} as React.CSSProperties}>
        {children}
      </body>
    </html>
  )
}
