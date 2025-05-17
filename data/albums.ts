export interface Photo {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  date: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  location: string;
  photos: Photo[];
}

export const albums: Album[] = [
  {
    id: 'bento-goncalves',
    title: 'Bento Gonçalves RS',
    description: 'Viagem pela Serra Gaúcha, visitando vinícolas, restaurantes e aproveitando as belas paisagens da região.',
    coverImage: '/images/albums/bento-goncalves/vinicola-01.jpg',
    date: '2023-04-06',
    location: 'Bento Gonçalves, Rio Grande do Sul, Brasil',
    photos: [
      {
        id: 'vinicola-01',
        title: 'Vinícola Aurora',
        description: 'Visita à tradicional Vinícola Aurora, uma das mais antigas e importantes da região.',
        imagePath: '/images/albums/bento-goncalves/vinicola-01.jpg',
        date: '2023-04-06'
      },
      {
        id: 'paisagem-01',
        title: 'Vale dos Vinhedos',
        description: 'Vista panorâmica do Vale dos Vinhedos, região famosa pela produção de vinhos finos.',
        imagePath: '/images/albums/bento-goncalves/paisagem-01.jpg',
        date: '2023-04-07'
      },
      {
        id: 'restaurante-01',
        title: 'Gastronomia Italiana',
        description: 'Almoço em restaurante típico italiano, com massas caseiras e muito vinho.',
        imagePath: '/images/albums/bento-goncalves/restaurante-01.jpg',
        date: '2023-04-07'
      },
      {
        id: 'degustacao-01',
        title: 'Degustação de Vinhos',
        description: 'Momento de degustação de vinhos tintos, brancos e espumantes da região.',
        imagePath: '/images/albums/bento-goncalves/degustacao-01.jpg',
        date: '2023-04-08'
      },
      {
        id: 'hotel-01',
        title: 'Hotel Spa do Vinho',
        description: 'Hospedagem no luxuoso Hotel Spa do Vinho, com vista para os parreirais.',
        imagePath: '/images/albums/bento-goncalves/hotel-01.jpg',
        date: '2023-04-08'
      }
    ]
  }
];

export function getAlbumById(id: string): Album | undefined {
  return albums.find(album => album.id === id);
}

export function getAllAlbums(): Album[] {
  return albums.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPhotoById(albumId: string, photoId: string): Photo | undefined {
  const album = getAlbumById(albumId);
  if (!album) return undefined;
  
  return album.photos.find(photo => photo.id === photoId);
}
