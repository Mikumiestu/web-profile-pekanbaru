import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  url: string;
}

const Gallery: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Photo Gallery - Pekanbaru, Indonesia';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const [images] = useState<GalleryImage[]>([
    {
      id: 1,
      title: "An-Nur Grand Mosque",
      category: "landmarks",
      url: "https://smarttourism.pekanbaru.go.id/storage/destinations/63422-masjid-raya-an-nur.jpg"
    },
    {
      id: 2,
      title: "Siak River Sunset",
      category: "nature",
      url: "https://static.promediateknologi.id/crop/0x0:0x0/x/photo/p2/95/2025/01/28/tempat-wisata-pekanbaru-terdekat-1724366170.jpg"
    },
    {
      id: 3,
      title: "Traditional Malay Dance",
      category: "culture",
      url: "https://melayupedia.com/foto_berita/2021/07/2021-07-23-tari-zapin-melayu-dan-92-jenis-tariannya-di-4-negara.jpg"
    },
    {
      id: 4,
      title: "Local Market",
      category: "daily-life",
      url: "https://www.shutterstock.com/image-photo/riau-street-food-pekanbaru-november-260nw-1350896117.jpg"
    },
    {
      id: 5,
      title: "Soeman HS Library",
      category: "landmarks",
      url: "https://mediacenter.riau.go.id/foto_berita/medium/perpustakaan-soeman-hs-provinsi-ria.jpg"
    },
    {
      id: 6,
      title: "Traditional Food - Bolu Kemojo",
      category: "food",
      url: "https://cdn.rri.co.id/berita/Pekanbaru/o/1721964726598-Bolu_Kemojo/jvbqnoin2f7tia7.jpeg"
    },
    {
      id: 7,
      title: "City Skyline",
      category: "cityscape",
      url: "https://thumbs.dreamstime.com/b/aerial-view-pekanbaru-city-skyline-sunset-capital-riau-province-indonesia-293463667.jpg"
    },
    {
      id: 8,
      title: "Traditional Crafts",
      category: "culture",
      url: "https://selarasriau.com/assets/berita/original/97717701278-screenshot_2025-05-10-08-49-12-53_1c337646f29875672b5a61192b9010f9.jpg"
    },
    {
      id: 9,
      title: "Street View",
      category: "daily-life",
      url: "https://thumbs.dreamstime.com/b/beautiful-night-view-pekanbaru-city-riau-indonesia-102799786.jpg"
    },
    {
      id: 10,
      title: "Local Festival",
      category: "culture",
      url: "https://www.riauonline.co.id/foto/bank/images/Festival-Lampu-Colok2.jpg"
    },
    {
      id: 11,
      title: "Palm Oil Plantation",
      category: "nature",
      url: "https://en.infosawit.com/images/news/October-2024/26/palm-oil-plantation-potential-in-pekanbaru--the-optimism-to-realize-national-scale-self-sufficiency.jpg"
    },
    {
      id: 12,
      title: "Traditional Malay House",
      category: "architecture",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xb-7RcqzumWD1LvA51lltDyEoB6S569Qdg&s"
    }
  ]);

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'landmarks', name: 'Landmarks' },
    { id: 'nature', name: 'Nature' },
    { id: 'culture', name: 'Culture' },
    { id: 'daily-life', name: 'Daily Life' },
    { id: 'food', name: 'Food' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'cityscape', name: 'Cityscape' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard events for lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-emerald-800 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-emerald-100">
            Explore the beauty and culture of Pekanbaru through our collection of stunning photographs
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(image)}
            >
              <div className="h-56 md:h-64 bg-gray-200">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm capitalize">{image.category.replace('-', ' ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-sm capitalize text-gray-300">{selectedImage.category.replace('-', ' ')}</p>
            </div>
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors duration-300"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              <button 
                className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
                  setSelectedImage(filteredImages[prevIndex]);
                }}
                aria-label="Previous image"
              >
                &#10094;
              </button>
              <button 
                className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % filteredImages.length;
                  setSelectedImage(filteredImages[nextIndex]);
                }}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Photos Section */}
      <div className="container mx-auto px-4 py-16 mt-12 bg-gray-50 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Share Your Photos</h2>
          <p className="text-gray-600 mb-8">
            Have you visited Pekanbaru? We'd love to see your photos! Submit your best shots to be featured in our gallery.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            Submit Your Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;