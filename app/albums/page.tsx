import { getAllAlbums } from '@/data/albums';
import AlbumCard from '@/app/components/AlbumCard';

export const metadata = {
  title: 'Álbuns de Viagem | Estradeirando',
  description: 'Confira os álbuns de fotos das nossas viagens pelo Brasil e pelo mundo.',
};

export default function AlbumsPage() {
  const albums = getAllAlbums();
  
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Álbuns de Viagem</h1>
      
      <div className="mb-8">
        <p className="text-gray-600 max-w-3xl">
          Aqui você encontra os registros fotográficos das nossas aventuras pelo Brasil e pelo mundo. 
          Cada álbum conta uma história única, com paisagens deslumbrantes, experiências gastronômicas, 
          hospedagens especiais e muito mais.
        </p>
      </div>
      
      {albums.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600">Nenhum álbum encontrado. Volte em breve para conferir nossas aventuras!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}
