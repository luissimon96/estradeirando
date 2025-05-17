import { getAlbumById, getAllAlbums } from '@/data/albums';
import PhotoGallery from '@/app/components/PhotoGallery';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const albums = getAllAlbums();
  return albums.map((album) => ({
    id: album.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const album = getAlbumById(params.id);
  
  if (!album) {
    return {
      title: 'Álbum não encontrado | Estradeirando',
    };
  }
  
  return {
    title: `${album.title} | Estradeirando`,
    description: album.description,
  };
}

export default function AlbumPage({ params }: { params: { id: string } }) {
  const album = getAlbumById(params.id);
  
  if (!album) {
    notFound();
  }
  
  // Format the date to a more readable format
  const formattedDate = new Date(album.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/albums"
          className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
        >
          <span className="mr-1">&#8592;</span> Voltar para álbuns
        </Link>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="relative h-96 w-full">
          <Image
            src={album.coverImage}
            alt={album.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white w-full">
              <h1 className="text-4xl font-bold mb-2">{album.title}</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <span>{formattedDate}</span>
                <span className="mx-2">•</span>
                <span>{album.location}</span>
                <span className="mx-2">•</span>
                <span>{album.photos.length} fotos</span>
              </div>
              <p className="text-lg max-w-3xl">{album.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <PhotoGallery photos={album.photos} />
      </div>
    </div>
  );
}
