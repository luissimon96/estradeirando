import { getAllPosts } from '@/data/posts';
import { getAllAlbums } from '@/data/albums';
import PostCard from './components/PostCard';
import AlbumCard from './components/AlbumCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts();
  const albums = getAllAlbums().slice(0, 3); // Get only the first 3 albums

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/serra-catarinense.jpg"
            alt="Estradeirando Hero"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-primary-900/40 to-dark-800/70" />
          <div className="absolute inset-0 bg-texture-dots opacity-30" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-50 z-10">
          <Image
            src="/images/backgrounds/blob-1.svg"
            alt=""
            fill
            className="animate-float"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-50 z-10">
          <Image
            src="/images/backgrounds/blob-2.svg"
            alt=""
            fill
            className="animate-float"
            style={{ animationDelay: '2s' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-30 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <div className="animate-fade-in stagger-children">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-slide-up">
              <span className="text-white">Estradeirando</span>
            </h1>
            <div className="flex justify-center mb-6">
              <div className="decorative-line animate-slide-up"></div>
            </div>
            <p className="text-xl md:text-2xl max-w-2xl mb-10 text-white/90 font-light animate-slide-up">
              Aventuras, descobertas e experiências pelo Brasil e pelo mundo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/albums" className="btn btn-lg bg-primary-600 hover:bg-primary-700 text-white shadow-floating hover-lift">
                Ver Álbuns de Fotos
              </Link>
              <Link href="/sobre" className="btn btn-lg glass-effect text-white hover:bg-white/20 hover-lift">
                Conheça Nossa História
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <span className="text-white/70 text-3xl">↓</span>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 left-0 w-full h-40">
          <Image
            src="/images/backgrounds/wave-top.svg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-4">BLOG</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-800 mb-6">Últimas Aventuras</h2>
            <div className="flex justify-center mb-6">
              <div className="decorative-line"></div>
            </div>
            <p className="text-xl text-dark-600 max-w-3xl">
              Descubra nossas experiências mais recentes e deixe-se inspirar para sua próxima jornada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {posts.map((post, index) => (
              <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link href="/posts" className="btn btn-outline hover-lift glass-effect">
              Ver Todas as Aventuras →
            </Link>
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="mb-24 py-24 bg-gradient-travel text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-16 bg-travel-sand" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
        <div className="absolute bottom-0 right-0 w-full h-16 bg-travel-sand" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="relative z-10 container-wide">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-4">GALERIAS</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Álbuns de Viagem</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 bg-white/30 rounded-full w-20"></div>
            </div>
            <p className="text-xl text-white/90 max-w-3xl">
              Explore nossas galerias de fotos e mergulhe nas paisagens e momentos que capturamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {albums.map((album, index) => (
              <div key={album.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <AlbumCard album={album} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/albums"
              className="btn btn-lg bg-white text-primary-700 hover:bg-white/90 shadow-floating hover-lift"
            >
              Ver todos os álbuns
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute bottom-40 left-0 w-full h-40">
          <Image
            src="/images/backgrounds/wave-bottom.svg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="bg-white rounded-2xl shadow-floating overflow-hidden glass-effect">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[500px] md:h-auto order-2 md:order-1 animate-fade-in">
                <Image
                  src="/images/author.jpg"
                  alt="Autor do Estradeirando"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-800/20"></div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-10 -right-6 w-16 h-16 bg-primary-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>

              <div className="p-8 md:p-16 flex flex-col justify-center order-1 md:order-2 animate-fade-in">
                <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">NOSSA HISTÓRIA</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-800 mb-6 animate-slide-in-left">Sobre o Estradeirando</h2>
                <div className="decorative-line mb-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}></div>
                <p className="text-dark-600 mb-6 text-lg leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                  O Estradeirando nasceu da paixão por viagens e da vontade de compartilhar experiências
                  únicas pelo Brasil e pelo mundo. Aqui você encontra relatos autênticos, dicas práticas
                  e muita inspiração para suas próximas aventuras.
                </p>
                <p className="text-dark-600 mb-10 text-lg leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                  Seja explorando as belezas naturais do nosso país, conhecendo culturas diferentes ou
                  simplesmente apreciando a jornada, o Estradeirando está sempre em busca de novas histórias
                  para contar e compartilhar com você.
                </p>
                <Link href="/sobre" className="btn btn-primary self-start hover-lift shadow-subtle animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                  Conheça nossa história
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-24 relative">
        <div className="container-wide">
          <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 font-medium text-sm mb-4">EXPERIÊNCIAS</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-800 mb-6">Por que viajar conosco?</h2>
            <div className="decorative-line mb-6"></div>
            <p className="text-xl text-dark-600 max-w-3xl">
              Descubra o que torna nossas aventuras especiais e como compartilhamos nossas experiências
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Feature 1 */}
            <div className="glass-effect rounded-xl p-8 shadow-card hover-lift animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 animate-pulse-subtle">
                <span className="text-2xl text-primary-600">🧭</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Destinos Autênticos</h3>
              <div className="w-10 h-1 bg-primary-200 rounded-full mb-4"></div>
              <p className="text-dark-600">
                Exploramos lugares fora das rotas turísticas convencionais, mostrando a verdadeira essência de cada destino.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect rounded-xl p-8 shadow-card hover-lift animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-6 animate-pulse-subtle">
                <span className="text-2xl text-secondary-600">📷</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Fotografia Imersiva</h3>
              <div className="w-10 h-1 bg-secondary-200 rounded-full mb-4"></div>
              <p className="text-dark-600">
                Capturamos momentos únicos com fotografias de alta qualidade que transportam você para cada lugar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect rounded-xl p-8 shadow-card hover-lift animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-6 animate-pulse-subtle">
                <span className="text-2xl text-accent-600">📚</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-4">Histórias Cativantes</h3>
              <div className="w-10 h-1 bg-accent-200 rounded-full mb-4"></div>
              <p className="text-dark-600">
                Compartilhamos narrativas envolventes que vão além do turismo, revelando a cultura e as pessoas de cada lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-24 relative overflow-hidden">
        <div className="container-wide">
          <div className="bg-gradient-travel rounded-3xl text-white p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-40 left-40 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 right-40 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

            <div className="relative z-10 animate-fade-in">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 animate-slide-up">Pronto para se aventurar?</h2>
              <div className="flex justify-center mb-6">
                <div className="h-1 bg-white/30 rounded-full w-20 animate-slide-up" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Acompanhe nossas jornadas, inspire-se com nossas histórias e comece a planejar sua próxima aventura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Link href="/albums" className="btn btn-lg glass-effect text-white hover:bg-white/20 shadow-floating hover-lift">
                  Explorar álbuns
                </Link>
                <Link href="/tags" className="btn btn-lg bg-primary-700 text-white hover:bg-primary-800 border border-white/20 shadow-floating hover-lift">
                  Descobrir por tags
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
