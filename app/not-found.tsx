import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Página não encontrada</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-md">
        Parece que você se perdeu na estrada. A página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        href="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
