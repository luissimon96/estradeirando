import Link from 'next/link';
import Image from 'next/image';
import { Album } from '@/data/albums';
import { formatDate } from '@/app/utils';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const formattedDate = formatDate(album.date);

  return (
    <article className="group card-premium">
      <div className="relative overflow-hidden rounded-2xl transition-all duration-500">
        {/* Card Image */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={album.coverImage}
            alt={album.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={false}
            className="transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent"></div>

          {/* Album Info Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            {/* Location Badge */}
            <div className="flex items-center mb-3">
              <span className="text-primary-400 mr-1">📍</span>
              <span className="text-sm font-medium text-white/90">{album.location}</span>
            </div>

            {/* Album Title */}
            <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary-300 transition-colors duration-300">
              {album.title}
            </h2>

            {/* Album Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white/80 text-sm">
                <span className="mr-1">📅</span>
                <time dateTime={album.date}>{formattedDate}</time>
              </div>

              <div className="flex items-center text-white/80 text-sm">
                <span className="mr-1">🖼️</span>
                {album.photos.length} fotos
              </div>
            </div>
          </div>

          {/* View Album Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={`/albums/${album.id}`}
              className="glass-effect text-primary-700 font-medium px-6 py-3 rounded-lg shadow-floating transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/95"
            >
              Ver Álbum
            </Link>
          </div>
        </div>
      </div>

      {/* Album Description (Optional) */}
      <div className="mt-4 px-2">
        <p className="text-dark-600 text-sm line-clamp-2 animate-fade-in">{album.description}</p>
      </div>
    </article>
  );
}
