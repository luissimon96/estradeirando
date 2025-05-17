import Image from 'next/image'

const fotos = [
  '/images/estradeirando/post-1.jpg',
  '/images/estradeirando/hero-bg.jpg',
  '/images/estradeirando/about.jpg',
]

const videos = [
  // Exemplo: '/videos/estradeirando/viagem1.mp4',
]

export default function DescobrindoOBrasil() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-4 text-estradeirando-dark">Descobrindo o Brasil</h1>
        <p className="mb-8 text-lg text-gray-700 max-w-2xl">
          Uma jornada incrível pelas estradas do nosso país, cheia de paisagens, fé e aventura!
        </p>
        {/* Galeria de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {fotos.map((src, i) => (
            <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image src={src} alt={`Foto ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        {/* Galeria de Vídeos */}
        {videos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((src, i) => (
              <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <video src={src} controls className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
} 