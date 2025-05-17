import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós | Estradeirando - Blog de Viagens e Aventuras',
  description: 'Conheça a história da família Estradeirando, nossa missão, valores e paixão por viagens e pela palavra de Deus.',
  keywords: 'estradeirando, sobre nós, família, viagens, fé, aventuras, blog de viagens',
  openGraph: {
    title: 'Sobre Nós | Estradeirando',
    description: 'Conheça a história da família Estradeirando, nossa missão, valores e paixão por viagens e pela palavra de Deus.',
    url: 'https://www.estradeirando.com.br/sobre',
    siteName: 'Estradeirando',
    images: [
      {
        url: '/images/estradeirando/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Família Estradeirando - Sobre Nós',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
} 