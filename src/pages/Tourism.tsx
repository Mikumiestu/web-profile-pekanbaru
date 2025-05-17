import React, { useEffect, useState } from 'react';
import { MapPin, Filter, Coffee, Landmark, Hotel, Sunrise, Camera, Utensils } from 'lucide-react';

interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  location: string;
  rating: number;
}

const Tourism: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Tourism in Pekanbaru - Explore Attractions & Activities';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const [attractions] = useState<Attraction[]>([
    {
      id: 1,
      name: "An-Nur Grand Mosque",
      category: "landmark",
      description: "One of the largest mosques in Indonesia, featuring stunning Islamic architecture and beautiful gardens.",
      image: "https://smarttourism.pekanbaru.go.id/storage/destinations/63422-masjid-raya-an-nur.jpg",
      location: "Jalan Hangtuah, Pekanbaru",
      rating: 4.8
    },
    {
      id: 2,
      name: "Soeman HS Library",
      category: "landmark",
      description: "A modern architectural landmark housing a vast collection of literature about Riau's heritage.",
      image: "https://www.gramedia.com/blog/content/images/2018/11/riau-berbagi.jpg",
      location: "Jalan Jenderal Sudirman, Pekanbaru",
      rating: 4.5
    },
    {
      id: 3,
      name: "Siak River Cruise",
      category: "nature",
      description: "Experience the historical waterway that has been a lifeline for trade and transportation in the region.",
      image: "https://bertuahpos.com/wp-content/uploads/2023/07/pencemaran-air-sungai-siak.jpg",
      location: "Siak River, Pekanbaru",
      rating: 4.6
    },
    {
      id: 4,
      name: "Riau Cultural Park",
      category: "culture",
      description: "Immerse yourself in the rich cultural heritage of Riau through traditional performances and exhibitions.",
      image: "https://smarttourism.pekanbaru.go.id/storage/destinations/md-65234-anjungan-seni-idrus-tintin.jpeg",
      location: "Jalan Sudirman, Pekanbaru",
      rating: 4.3
    },
    {
      id: 5,
      name: "Alam Mayang Recreation Park",
      category: "nature",
      description: "A family-friendly recreation area with water activities, playgrounds, and beautiful natural surroundings.",
      image: "https://ksmtour.com/media/images/articles12/taman-wisata-alam-mayang-riau.JPG",
      location: "Jalan Harapan Raya, Pekanbaru",
      rating: 4.4
    },
    {
      id: 6,
      name: "Traditional Riau Culinary Market",
      category: "food",
      description: "Sample local delicacies such as Bolu Kemojo, Asam Pedas, and other authentic Riau dishes.",
      image: "https://i0.wp.com/infopku.com/wp-content/uploads/2018/10/Berburu-Oleh-Oleh-di-Pasar-Wisata_htm_2601b101ec2dd286.jpg?resize=696%2C464&ssl=1",
      location: "Pasar Bawah, Pekanbaru",
      rating: 4.7
    },
    {
      id: 7,
      name: "Mall SKA",
      category: "shopping",
      description: "The largest shopping center in Pekanbaru, offering a wide range of retail stores, restaurants, and entertainment options.",
      image: "https://indonesiashoppingcenter.com/public/uploads/2016/06/Mal-SKA-1.jpg",
      location: "Jalan Soekarno Hatta, Pekanbaru",
      rating: 4.2
    },
    {
      id: 8,
      name: "Asia Heritage",
      category: "landmark",
      description: "Asia Heritage in Pekanbaru is a tourist attraction where visitors can experience the culture of four different Asian countries within one location.",
      image: "https://dbijapkm3o6fj.cloudfront.net/resources/31642,1004,1,6,4,0,600,450/-4601-/20220413164953/asia-heritage.jpeg",
      location: "Kecamatan Rumbai, Pekanbaru",
      rating: 4.3
    },
    {
      id: 9,
      name: "Pasar Bawah Night Market",
      category: "shopping",
      description: "Experience the vibrant local life at this traditional night market selling everything from souvenirs to local snacks.",
      image: "https://www.cakaplah.com/assets/news/13112023/cakaplahcom_tfs8l_104326.jpeg",
      location: "Pasar Bawah, Pekanbaru",
      rating: 4.4
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Attractions', icon: <Filter size={20} /> },
    { id: 'landmark', name: 'Landmarks', icon: <Landmark size={20} /> },
    { id: 'nature', name: 'Nature', icon: <Sunrise size={20} /> },
    { id: 'culture', name: 'Culture', icon: <Camera size={20} /> },
    { id: 'food', name: 'Food', icon: <Utensils size={20} /> },
    { id: 'shopping', name: 'Shopping', icon: <Coffee size={20} /> },
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'landmark':
        return <Landmark size={20} className="mr-1" />;
      case 'nature':
        return <Sunrise size={20} className="mr-1" />;
      case 'culture':
        return <Camera size={20} className="mr-1" />;
      case 'food':
        return <Utensils size={20} className="mr-1" />;
      case 'shopping':
        return <Coffee size={20} className="mr-1" />;
      default:
        return <MapPin size={20} className="mr-1" />;
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div 
        className="relative h-80 md:h-96 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://jalanjalanyuk.co.id/wp-content/uploads/2024/10/kawah-biru-tempat-wisata-pekanbaru.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Tourist Attractions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover the best places to visit in Pekanbaru
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8 -mt-8 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-wrap justify-center items-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Attractions */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map(attraction => (
            <div key={attraction.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-emerald-600 text-sm font-medium mb-2">
                  {getCategoryIcon(attraction.category)}
                  <span className="capitalize">{attraction.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{attraction.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{attraction.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(attraction.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">{attraction.rating.toFixed(1)}</span>
                </div>
                
                <button className="mt-4 text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Hotel size={28} className="text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Where to Stay</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hotel 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://smarttourism.pekanbaru.go.id/storage/destinations/67776-hotel-grand-jatra.jpg" 
                  alt="Luxury Hotel" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Grand Jatra</h3>
                <p className="text-gray-600 mb-4">
                  A luxury hotel in the heart of Pekanbaru, offering modern amenities and excellent service.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">From $100/night</span>
                  <button className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Hotel 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Mid-range Hotel" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pangeran Hotel</h3>
                <p className="text-gray-600 mb-4">
                  A comfortable mid-range hotel with convenient location and great amenities for business and leisure travelers.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">From $50/night</span>
                  <button className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Hotel 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Budget Hotel" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hotel Dyan Graha</h3>
                <p className="text-gray-600 mb-4">
                  An affordable hotel option offering clean rooms and basic amenities for budget-conscious travelers.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">From $30/night</span>
                  <button className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300">
              View All Accommodations
            </button>
          </div>
        </div>
      </div>

      {/* Travel Tips Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Travel Tips</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/7172887/pexels-photo-7172887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Travel Tips" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Essential Information for Visitors</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-emerald-700 mb-2">Best Time to Visit</h4>
                  <p className="text-gray-600">
                    The dry season (May to September) is the best time to visit Pekanbaru. Avoid the rainy season (October to April) if possible, as heavy rainfall can affect your activities.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-emerald-700 mb-2">Getting Around</h4>
                  <p className="text-gray-600">
                    Taxis and ride-hailing services are widely available. For a more local experience, try the angkot (public minivans) or rent a motorbike for greater flexibility.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-emerald-700 mb-2">Local Customs</h4>
                  <p className="text-gray-600">
                    Pekanbaru has a significant Muslim population. Dress modestly when visiting religious sites and be respectful of local customs and traditions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-emerald-700 mb-2">Weather</h4>
                  <p className="text-gray-600">
                    Pekanbaru has a tropical climate with high temperatures and humidity year-round. Light, breathable clothing is recommended, along with sun protection.
                  </p>
                </div>
              </div>
              
              <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300">
                Download Travel Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;