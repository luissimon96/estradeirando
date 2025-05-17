import Image from 'next/image';

export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Sobre o Estradeirando</h1>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="relative h-96 w-full">
          <Image
            src="/images/author.jpg"
            alt="Autor do Estradeirando"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa História</h2>
          <p className="text-gray-600 mb-4">
            O Estradeirando nasceu em 2023, fruto da paixão por viagens e da vontade de compartilhar experiências 
            únicas pelo Brasil e pelo mundo. O que começou como um simples diário de viagens se transformou em 
            um espaço dedicado a inspirar pessoas a explorarem novos lugares, culturas e vivências.
          </p>
          <p className="text-gray-600 mb-4">
            Acreditamos que viajar vai muito além de conhecer novos lugares – é sobre as conexões que fazemos, 
            as histórias que coletamos e as transformações que experimentamos ao longo do caminho. Cada viagem 
            é uma oportunidade de aprendizado e crescimento, e é isso que buscamos compartilhar em cada publicação.
          </p>
          <p className="text-gray-600">
            Seja explorando as belezas naturais do nosso país, conhecendo culturas diferentes ou simplesmente 
            apreciando a jornada, o Estradeirando está sempre em busca de novas histórias para contar e 
            compartilhar com você.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
          <p className="text-gray-600 mb-4">
            Inspirar pessoas a explorarem o mundo com curiosidade, respeito e consciência, compartilhando 
            experiências autênticas e informações úteis que possam enriquecer suas jornadas.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Nossos Valores</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Autenticidade:</strong> Compartilhamos experiências reais, com suas belezas e desafios.</li>
            <li><strong>Respeito:</strong> Valorizamos as culturas, tradições e o meio ambiente dos lugares que visitamos.</li>
            <li><strong>Curiosidade:</strong> Mantemos sempre o desejo de aprender e descobrir.</li>
            <li><strong>Comunidade:</strong> Acreditamos no poder de conectar viajantes e compartilhar conhecimento.</li>
            <li><strong>Sustentabilidade:</strong> Promovemos práticas de viagem responsáveis e conscientes.</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-gray-600 mb-4">
            Tem alguma dúvida, sugestão ou quer compartilhar sua própria experiência de viagem? 
            Ficaríamos felizes em ouvir você!
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:contato@estradeirando.com.br" className="text-blue-500 hover:text-blue-700">contato@estradeirando.com.br</a>
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                Facebook
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
