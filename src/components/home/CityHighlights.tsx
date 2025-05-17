import React from 'react';
import { MapPin, Clock, Heart, Coffee } from 'lucide-react';

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Highlight: React.FC<HighlightProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-emerald-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CityHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <MapPin size={40} />,
      title: "Strategic Location",
      description: "Located in the heart of Sumatra, Pekanbaru serves as a gateway to many destinations in the region."
    },
    {
      icon: <Heart size={40} />,
      title: "Cultural Heritage",
      description: "Experience the rich Malay culture through traditional arts, crafts, and performances."
    },
    {
      icon: <Coffee size={40} />,
      title: "Culinary Delights",
      description: "Savor local specialties like Bolu Kemojo, Asam Pedas, and other Riau culinary treasures."
    },
    {
      icon: <Clock size={40} />,
      title: "Modern Development",
      description: "A rapidly developing city that maintains its cultural identity while embracing modernity."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="main-content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Visit Pekanbaru</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover what makes Pekanbaru a unique destination for travelers seeking authentic Indonesian experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Highlight
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityHighlights;