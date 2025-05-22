import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export function generateMetadata({
  title = 'Estradeirando - Blog de Viagens e Aventuras',
  description = 'Compartilhe suas aventuras, descobertas e experiências pelo Brasil e pelo mundo.',
  image = '/images/og-image.jpg',
  url = 'https://estradeirando.com.br',
  type = 'website',
}: SEOProps): Metadata {
  const siteTitle = 'Estradeirando';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL('https://estradeirando.com.br'),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteTitle,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'pt_BR',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
} 