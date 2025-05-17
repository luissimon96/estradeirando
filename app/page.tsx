import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/estradeirando/hero-bg.jpg"
            alt="Estrada brasileira"
            fill
            className="object-cover"
            priority
          />
          {/* Gradiente de natureza */}
          <div className="absolute inset-0 bg-gradient-to-b from-estradeirando-primary/70 via-emerald-400/40 to-estradeirando-light/80" />
        </div>
        <div className="container-custom relative z-10 text-center flex flex-col items-center justify-center">
          {/* Novo logo animado */}
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/icons/logo-estradeirando.svg"
              alt="Logo Estradeirando"
              width={80}
              height={80}
              className="drop-shadow-lg"
              priority
            />
          </div>
          <h1 className="mb-6 text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg flex items-center justify-center gap-4">
            Estradeirando
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white drop-shadow">
            Compartilhando aventuras, descobertas e experiências pelo Brasil e pelo mundo. Uma jornada de fé, amor e paixão pela estrada.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Últimas Aventuras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post Card */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src="/images/montagempulse/capa.jpg"
                  alt="Post sobre montagem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">Montagem Motorhome Fiat Pulse</h3>
                <p className="text-gray-600 mb-4">
                  Uma jornada incrível construíndo nosso próprio lar em um carro.
                </p>
                <Link href="/posts/montagem-do-motorhome" className="btn btn-primary">
                  Ler mais
                </Link>
              </div>
            </article>
            {/* Adicione mais cards de posts aqui */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-estradeirando-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Sobre o Estradeirando</h2>
              <p className="mb-4">
                Somos uma família apaixonada por viagens e pela palavra de Deus.
                Nossa missão é compartilhar nossas experiências e inspirar outras
                pessoas a explorarem o mundo com fé e amor.
              </p>
              <Link href="/sobre" className="btn btn-secondary">
                Conheça nossa história
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/estradeirando/about.jpg"
                alt="Família Estradeirando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}