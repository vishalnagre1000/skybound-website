import React, { useState } from 'react';
import Modal from './Modal';

const Gallery = () => {
  const [selectedWedding, setSelectedWedding] = useState<number | null>(null);

  const weddings = [1, 2, 3, 4, 5, 6].map((id) => {
    return {
      id,
      title: `Wedding ${id}`,
      location: `Location ${id}`,
      thumbnail: `/photos/wedding${id}/1.jpg`,
      photos: Array.from({ length: 10 }, (_, j) => ({
        id: j + 1,
        url: `/photos/wedding${id}/${j + 1}.jpg`,
        alt: `Wedding ${id} Photo ${j + 1}`
      }))
    };
  });

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="font-beezle text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Wedding Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each love story is unique, and every collection captures the essence of your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddings.map((wedding, index) => (
              <div
                key={wedding.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                onClick={() => setSelectedWedding(wedding.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={wedding.thumbnail}
                    alt={`${wedding.title} Thumbnail`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/photos/fallback.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="font-beezle text-xl font-medium mb-1">
                        {wedding.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {wedding.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedWedding && (
        <Modal
          wedding={weddings.find(w => w.id === selectedWedding)!}
          onClose={() => setSelectedWedding(null)}
        />
      )}
    </>
  );
};

export default Gallery;