'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Photo } from '@/data/albums';

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="relative h-60 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            onClick={() => openLightbox(photo)}
          >
            <Image
              src={photo.imagePath}
              alt={photo.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white w-full bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="font-bold">{photo.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-300"
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors duration-300"
            onClick={() => navigatePhoto('prev')}
          >
            &#8249;
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <div className="relative h-[70vh] w-full">
              <Image
                src={selectedPhoto.imagePath}
                alt={selectedPhoto.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="bg-black bg-opacity-70 p-4 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
              <p className="text-sm text-gray-300 mt-2">
                {new Date(selectedPhoto.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors duration-300"
            onClick={() => navigatePhoto('next')}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
