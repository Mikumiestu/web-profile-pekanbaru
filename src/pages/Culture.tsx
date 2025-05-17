import React, { useEffect } from 'react';
import { Palette, Music, Users, UtensilsCrossed } from 'lucide-react';

const Culture: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Culture of Pekanbaru - Arts, Traditions & Heritage';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div 
        className="relative h-80 md:h-96 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2834219/pexels-photo-2834219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Cultural Heritage</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover the rich traditions and cultural diversity of Pekanbaru
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Cultural Heart of Riau</h2>
          <p className="text-lg text-gray-700 mb-6">
            Pekanbaru serves as the cultural epicenter of Riau Province, where Malay traditions blend with influences from various ethnic groups, creating a rich tapestry of customs, arts, and heritage. The city proudly preserves its cultural identity while embracing modernization.
          </p>
          <p className="text-lg text-gray-700">
            From traditional dances and music to exquisite handicrafts and culinary delights, Pekanbaru offers visitors an authentic glimpse into the cultural wealth of Sumatra. The city hosts numerous cultural festivals and events throughout the year, celebrating its diverse heritage.
          </p>
        </div>
      </div>

      {/* Traditional Arts Section */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <Palette size={28} className="text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Traditional Arts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img 
                src="https://images.pexels.com/photos/2165583/pexels-photo-2165583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Traditional Dance" 
                className="rounded-lg shadow-md w-full h-80 object-cover mb-6"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Malay Dance</h3>
              <p className="text-gray-700">
                The traditional Malay dances in Pekanbaru showcase the grace and elegance of the Malay culture. Popular dances include Zapin, Joget, and Mak Yong, each telling unique stories through carefully choreographed movements and colorful costumes. These dances are often performed during cultural events, weddings, and festivals, preserving the region's artistic heritage for future generations.
              </p>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Traditional Crafts" 
                className="rounded-lg shadow-md w-full h-80 object-cover mb-6"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Handicrafts</h3>
              <p className="text-gray-700">
                Pekanbaru is known for its exquisite handicrafts, including songket weaving, wood carving, and silver craftsmanship. Songket, a luxurious fabric intricately woven with gold or silver threads, is particularly prized for its beauty and craftsmanship. These traditional crafts not only serve as cultural artifacts but also provide livelihoods for many local artisans who continue to practice age-old techniques passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Music & Performance */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <Music size={28} className="text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Music & Performance</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/939698/pexels-photo-939698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Traditional Music" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Traditional Musical Heritage</h3>
                <p className="text-gray-700 mb-6">
                  The musical traditions of Pekanbaru reflect the diverse cultural influences in the region. Traditional instruments such as the kompang (a type of Malay drum), gambus (a string instrument), and serunai (a wind instrument) create the distinctive sounds of Riau's musical heritage.
                </p>
                <p className="text-gray-700 mb-6">
                  One of the most significant musical traditions is the Dendang, a form of vocal performance often accompanied by traditional instruments. These performances convey stories, historical events, and moral teachings, serving as both entertainment and cultural education.
                </p>
                <p className="text-gray-700">
                  Throughout the year, visitors can experience these musical traditions at cultural centers, during festivals, or at special performances organized for tourists wanting to immerse themselves in local culture.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Kompang Ensemble</h4>
              <p className="text-gray-700">
                A percussion ensemble using kompang drums, commonly performed during ceremonies and processions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Berzanji</h4>
              <p className="text-gray-700">
                A traditional Islamic vocal performance praising the Prophet Muhammad, often performed during religious ceremonies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Marhaban</h4>
              <p className="text-gray-700">
                A form of musical recitation performed to welcome honored guests and during special celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Festivals & Celebrations */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <Users size={28} className="text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Festivals & Celebrations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Festival 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Petang Megang Festival" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Petang Megang Festival</h3>
                <p className="text-gray-600 mb-4">
                  A traditional festival celebrated before Ramadan, featuring traditional foods and cultural performances. The festival includes community feasts, traditional games, and special ceremonies.
                </p>
                <div className="text-sm text-emerald-600 font-medium">
                  Usually held in April (before Ramadan)
                </div>
              </div>
            </div>
            
            {/* Festival 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2263695/pexels-photo-2263695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Riau Arts Festival" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Riau Arts</h3>
                <p className="text-gray-600 mb-4">
                  An annual celebration of Riau's cultural heritage, featuring performances, exhibitions, and competitions showcasing traditional arts, crafts, music, and dance from across the province.
                </p>
                <div className="text-sm text-emerald-600 font-medium">
                  Usually held in August
                </div>
              </div>
            </div>
            
            {/* Festival 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Pekanbaru City Anniversary" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pekanbaru City Anniversary</h3>
                <p className="text-gray-600 mb-4">
                  Celebrating the founding of Pekanbaru with parades, cultural performances, exhibitions, and various community events throughout the city. The celebration highlights the city's achievements and cultural heritage.
                </p>
                <div className="text-sm text-emerald-600 font-medium">
                  Held on June 23rd
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300">
              View Events Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Culinary Heritage */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <UtensilsCrossed size={28} className="text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Culinary Heritage</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              The culinary traditions of Pekanbaru reflect the rich cultural heritage of the region, with influences from Malay, Minangkabau, and other ethnic groups. Local dishes are known for their bold flavors, aromatic spices, and unique cooking techniques that have been passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Bolu Kemojo" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bolu Kemojo</h3>
                <p className="text-gray-600 mb-4">
                  A traditional Riau sponge cake with a distinctive pandan flavor. This sweet delicacy is often served during special occasions and makes for a perfect souvenir from Pekanbaru.
                </p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* Dish 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Asam Pedas" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Asam Pedas</h3>
                <p className="text-gray-600 mb-4">
                  A spicy and sour fish stew, typically made with local river fish, tamarind, chili, and various herbs and spices. This flavorful dish perfectly represents the bold flavors of Riau cuisine.
                </p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* Dish 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Gulai Ikan Patin" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gulai Ikan Patin</h3>
                <p className="text-gray-600 mb-4">
                  A rich curry dish made with patin fish, coconut milk, and a blend of traditional spices. The dish is often cooked with pineapple, giving it a unique sweet and savory flavor.
                </p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300">
              Explore Culinary Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;