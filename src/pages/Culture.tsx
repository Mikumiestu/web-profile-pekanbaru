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
          backgroundImage: "url('https://asset-2.tstatic.net/pekanbaru/foto/bank/images/FOTO-Tugu-Zapin-Pekanbaru-Mulai-Rusak-Dimakan-Usia-3.jpg')"
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
                src="https://cdn0-production-images-kly.akamaized.net/tZ5sHoKADWmi499k5znWj95jYZ4=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5062478/original/069612200_1734932733-1734931252040_fungsi-tari-zapin.jpg" 
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
                src="https://porospro.com/assets/berita/original/59989102375-img-20221113-wa0041.jpg" 
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
                  src="https://asset.kompas.com/crops/oWkOcAckFpJ_kdqJjkM7rh4QqCA=/7x0:949x628/1200x800/data/photo/2024/01/11/65a013404eecd.jpg" 
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
              <h4 className="text-xl font-bold text-gray-800 mb-3">Gambus</h4>
              <p className="text-gray-700">
              Gambus is a stringed musical instrument, commonly found in Riau, Indonesia, which is similar to a guitar. It is often used to accompany Islamic songs and dances like Zapin, and has a distinct Middle Eastern influence according to Gramedia and other sources.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Rabana</h4>
              <p className="text-gray-700">
              Rebana, known as a "tambourine" in English, is a traditional musical instrument, specifically a percussion instrument, primarily used in Islamic musical traditions. It is a circular frame drum with a membrane on one side, usually made of animal skin, and is typically played with the palms of the hands. 
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
                  src="https://static.republika.co.id/uploads/images/inpicture_slide/ribuan-orang-berkumpul-untuk-mengikuti-tradisi-petang-megang-di-_150612132756-519.jpg" 
                  alt="Petang Megang " 
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
                  src="https://static.gonews.co/assets/news/28112019/gonews_xq4pp_79887.jpg" 
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
                  src="https://mediacenter.riau.go.id/foto_berita/medium/malam-puncak-perayaan-hut-ke-240-pe.jpg" 
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
                  src="https://cdn.rri.co.id/berita/Bengkalis/o/1724311241392-bolu_kemojo/660vhzvwjlyemcv.jpeg"
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
                  src="https://img-global.cpcdn.com/recipes/373d29c888e65ed5/1200x630cq70/photo.jpg" 
                  alt="Asam Pedas" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Asam Pedas Baung</h3>
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
                  src="https://awsimages.detik.net.id/community/media/visual/2023/01/11/resep-gulai-ikan-patin-tempoyak_43.jpeg?w=1200" 
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