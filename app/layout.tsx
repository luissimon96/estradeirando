import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather'
})

export const metadata: Metadata = {
  title: 'Estradeirando - Blog de Viagens e Aventuras',
  description: 'Compartilhando aventuras, descobertas e experiências pelo Brasil e pelo mundo. Um blog sobre viagens, fé e a paixão pela estrada.',
  keywords: 'viagens, blog de viagens, Brasil, aventuras, estrada, turismo, fé, Deus',
  authors: [{ name: 'Estradeirando' }],
  icons: {
    icon: '/icons/favicon.svg',
    apple: '/icons/favicon.svg',
  },
  openGraph: {
    title: 'Estradeirando - Blog de Viagens e Aventuras',
    description: 'Compartilhando aventuras, descobertas e experiências pelo Brasil e pelo mundo.',
    url: 'https://www.estradeirando.com.br',
    siteName: 'Estradeirando',
    images: [
      {
        url: '/images/estradeirando/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Estradeirando - Blog de Viagens',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="min-h-screen bg-estradeirando-light">
        {children}
      </body>
    </html>
  )
} 