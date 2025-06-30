import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/ModalAnimations.css';

interface Wedding {
  id: number;
  title: string;
  location: string;
  photos: Array<{
    id: number;
    url: string;
    alt: string;
  }>;
}

interface ModalProps {
  wedding: Wedding;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ wedding, onClose }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [clickedThumbnail, setClickedThumbnail] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const navigatePhoto = useCallback(
    (direction: 'prev' | 'next') => {
      setIsImageLoading(true);
      setCurrentPhotoIndex((prev) => {
        if (direction === 'prev') {
          return prev === 0 ? wedding.photos.length - 1 : prev - 1;
        } else {
          return prev === wedding.photos.length - 1 ? 0 : prev + 1;
        }
      });
    },
    [wedding.photos.length]
  );

  const handleThumbnailClick = (index: number) => {
    if (index === currentPhotoIndex) return;

    setClickedThumbnail(index);
    setIsImageLoading(true);
    setCurrentPhotoIndex(index);

    setTimeout(() => {
      setClickedThumbnail(null);
    }, 400);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigatePhoto('prev');
      if (e.key === 'ArrowRight') navigatePhoto('next');
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, navigatePhoto]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl max-h-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 text-white/70 hover:text-white transition-colors duration-300"
        >
          <X size={28} />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={() => navigatePhoto('prev')}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-60 text-white/70 hover:text-white transition duration-300"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={() => navigatePhoto('next')}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-60 text-white/70 hover:text-white transition duration-300"
        >
          <ChevronRight size={40} />
        </button>

        {/* Main Content */}
        <div className="w-full px-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-beezle text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-2">
              {wedding.title}
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              {wedding.location}
            </p>
            <div className="mt-2 text-white/50 text-xs sm:text-sm">
              {currentPhotoIndex + 1} of {wedding.photos.length}
            </div>
          </div>

          {/* Main Photo with animation */}
          <div className={`relative mb-6 transition-all duration-500 ease-in-out ${isImageLoading ? '' : 'animate-fade-in'}`}>
            <img
              src={wedding.photos[currentPhotoIndex].url}
              alt={wedding.photos[currentPhotoIndex].alt}
              onLoad={handleImageLoad}
              className="w-full max-h-[70vh] object-contain mx-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
            {wedding.photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded overflow-hidden transition-all duration-300 border-2 ${
                  index === currentPhotoIndex ? 'border-amber-400 opacity-100' : 'border-transparent opacity-60 hover:opacity-90'
                } ${clickedThumbnail === index ? 'animate-thumb-click' : ''}`}
              >
                <img
                  src={photo.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
