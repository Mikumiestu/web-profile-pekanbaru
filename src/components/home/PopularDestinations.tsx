import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const DestinationCard: React.FC<DestinationProps> = ({ image, title, description, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg h-96">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110" 
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 transform group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link to={link} className="mt-4 inline-flex items-center text-emerald-300 hover:text-white transition-colors duration-300">
          Explore <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const PopularDestinations: React.FC = () => {
  const destinations = [
    {
      image: "https://smarttourism.pekanbaru.go.id/storage/destinations/63422-masjid-raya-an-nur.jpg",
      title: "An-Nur Grand Mosque",
      description: "One of the largest and most magnificent mosques in Indonesia, featuring stunning Islamic architecture.",
      link: "/tourism"
    },
    {
      image: "https://picture.triptrus.com/image/2014/06/sungai-siak.jpeg",
      title: "Siak River",
      description: "Experience the historical waterway that has been a lifeline for trade and transportation in the region.",
      link: "/tourism"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Soeman_HS_Library%2C_Pekanbaru%2C_Indonesia.jpg/1200px-Soeman_HS_Library%2C_Pekanbaru%2C_Indonesia.jpg",
      title: "Soeman HS Library",
      description: "A modern architectural landmark housing a vast collection of literature about Riau's heritage.",
      link: "/tourism"
    },
    {
      image: "https://dbijapkm3o6fj.cloudfront.net/resources/6976,1004,1,1,4,0,600,450/-4601-/20160613161415/taman-budaya-riau.jpeg",
      title: "Riau Cultural Park",
      description: "Immerse yourself in the rich cultural heritage of Riau through traditional performances and exhibitions.",
      link: "/culture"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover the most visited attractions in Pekanbaru and experience the city's unique charm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              description={destination.description}
              link={destination.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/tourism" 
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Destinations <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;