import React, { useEffect } from 'react';
import { Clock, BookOpen } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft = true }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:contents`}>
      <div className={`col-start-${isLeft ? '1' : '5'} col-end-${isLeft ? '5' : '9'} p-4 my-4 ml-auto md:mr-auto rounded-xl ${isLeft ? 'md:text-right' : ''}`}>
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        <p className="text-emerald-700 font-semibold">{year}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="relative col-start-5 col-end-5 md:mx-auto">
        <div className="flex items-center justify-center h-full">
          <div className="h-full w-1 bg-emerald-300"></div>
        </div>
        <div className="absolute w-6 h-6 rounded-full bg-emerald-600 z-10 -ml-2 mt-4 md:ml-0 md:mt-0 md:top-1/2 md:-translate-y-1/2 left-1/2 md:-translate-x-1/2 flex items-center justify-center">
          <Clock size={12} className="text-white" />
        </div>
      </div>
    </div>
  );
};

const History: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'History of Pekanbaru - Journey Through Time';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-emerald-800 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">History of Pekanbaru</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-emerald-100">
            Tracing the origins and evolution of the capital city of Riau Province
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <BookOpen size={32} className="text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">The Origins of Pekanbaru</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Pekanbaru, which literally means "new market," has a rich history dating back to the 18th century. Originally a small riverside settlement, it has evolved into a vibrant metropolitan city while preserving its cultural heritage.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The city's strategic location on the Siak River made it an important trading port, connecting the inland areas of Sumatra with the Malacca Strait. Over the centuries, it has been influenced by various cultures, including Malay, Minangkabau, and Dutch colonial powers.
          </p>
          <p className="text-lg text-gray-700">
            Today, Pekanbaru stands as a testament to its historical significance and cultural resilience, blending traditional values with modern development.
          </p>
        </div>
      </div>

      {/* Historical Timeline */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Historical Timeline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
            <TimelineItem 
              year="1689"
              title="Establishment of Senapelan"
              description="The area that would become Pekanbaru was originally known as Senapelan, established by Sultan Mahmud Shah of the Siak Sultanate."
              isLeft={true}
            />
            
            <TimelineItem 
              year="1784"
              title="New Market (Pekan Baharu)"
              description="Sultan Muhammad Ali established a new market (Pekan Baharu) in Senapelan, which eventually gave the city its current name, Pekanbaru."
              isLeft={false}
            />
            
            <TimelineItem 
              year="1812"
              title="Colonial Period Begins"
              description="The Dutch colonial government established their presence in the region, influencing the city's development and administration."
              isLeft={true}
            />
            
            <TimelineItem 
              year="1919"
              title="Administrative Status"
              description="Pekanbaru was designated as the capital of Siak district under Dutch colonial rule, enhancing its administrative importance."
              isLeft={false}
            />
            
            <TimelineItem 
              year="1945-1949"
              title="Indonesian Independence Period"
              description="During Indonesia's struggle for independence, Pekanbaru played a strategic role due to its location and resources."
              isLeft={true}
            />
            
            <TimelineItem 
              year="1957"
              title="Capital of Riau Province"
              description="Pekanbaru was officially designated as the capital city of the newly formed Riau Province, cementing its importance in the region."
              isLeft={false}
            />
            
            <TimelineItem 
              year="1960s"
              title="Oil Industry Development"
              description="The discovery of oil in the region led to rapid economic development and population growth in Pekanbaru."
              isLeft={true}
            />
            
            <TimelineItem 
              year="1970s-1980s"
              title="Modern Urban Development"
              description="Significant infrastructure development transformed Pekanbaru into a modern urban center with improved roads, buildings, and public facilities."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2000s"
              title="Economic Diversification"
              description="Pekanbaru began diversifying its economy beyond oil, developing sectors such as services, education, and tourism."
              isLeft={true}
            />
            
            <TimelineItem 
              year="Present Day"
              title="Vibrant Metropolitan City"
              description="Today, Pekanbaru stands as one of Indonesia's fastest-growing cities, balancing modern development with cultural preservation."
              isLeft={false}
            />
          </div>
        </div>
      </div>

      {/* Historical Sites Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Historical Sites to Visit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Historical Site 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6077774/pexels-photo-6077774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Balai Adat Riau" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Balai Adat Riau</h3>
                <p className="text-gray-600 mb-4">
                  A cultural center showcasing the traditional architecture and cultural artifacts of the Riau Malay people.
                </p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* Historical Site 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Siak Sultan Palace Museum" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Siak Sultan Palace Museum</h3>
                <p className="text-gray-600 mb-4">
                  A historical palace that provides insights into the royal history of the Siak Sultanate and its influence on Pekanbaru.
                </p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* Historical Site 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/772686/pexels-photo-772686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Senapelan Old Market" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Senapelan Old Market</h3>
                <p className="text-gray-600 mb-4">
                  The historical marketplace that gave Pekanbaru its name, showcasing traditional trade activities and local products.
                </p>
                <button className="text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;