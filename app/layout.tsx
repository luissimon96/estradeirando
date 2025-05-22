import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from './components/layout/Layout'
import { generateMetadata } from './components/common/SEO'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 