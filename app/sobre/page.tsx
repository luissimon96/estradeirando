import Image from 'next/image'
import Link from 'next/link'

export default function Sobre() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/estradeirando/about-hero.jpg"
            alt="Família Estradeirando"
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
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white drop-shadow">
            Uma família unida pela fé e pela paixão de viajar
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/estradeirando/family.jpg"
                alt="Família Estradeirando"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">Quem Somos</h2>
              <p className="mb-4 text-lg">
                Somos uma família apaixonada por viagens e pela palavra de Deus.
                Nossa jornada começou com um sonho simples: explorar o Brasil e
                compartilhar nossas experiências com outras pessoas.
              </p>
              <p className="mb-4 text-lg">
                Acreditamos que cada viagem é uma oportunidade de crescimento,
                aprendizado e fortalecimento dos laços familiares. Nossa missão
                é inspirar outras famílias a viverem experiências únicas e
                transformadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-estradeirando-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-estradeirando-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-center mb-4">Fé</h3>
              <p className="text-center text-gray-600">
                Nossa jornada é guiada pela fé em Deus, que nos dá força e
                direção em cada aventura.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-estradeirando-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-center mb-4">Família</h3>
              <p className="text-center text-gray-600">
                Acreditamos que as melhores memórias são criadas em família,
                fortalecendo nossos laços a cada viagem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-estradeirando-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-center mb-4">Aventura</h3>
              <p className="text-center text-gray-600">
                Buscamos constantemente novas experiências e descobertas,
                transformando cada viagem em uma aventura única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-estradeirando-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Junte-se à Nossa Jornada</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Siga-nos nas redes sociais e acompanhe nossas aventuras pelo Brasil e pelo mundo.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.instagram.com/estradeirando"
              target="_blank"
              className="btn btn-secondary"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100083581413735"
              target="_blank"
              className="btn btn-secondary"
            >
              Facebook
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 