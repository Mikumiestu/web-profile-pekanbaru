import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const LocalEvents: React.FC = () => {
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Title",
      date: "April 2025",
      location: "Various locations across Pekanbaru",
      image: "https://www.bizzabo.com/wp-content/uploads/2021/09/event-roadshow-ideas-yext-on-tour-min.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur veritatis odit fugiat voluptates suscipit est ducimus laborum consequuntur labore sapiente dolor harum, impedit, fuga molestias. Soluta omnis quos ab?"
    },
    {
      id: 2,
      title: "Title",
      date: "August 2025",
      location: "Purna MTQ Exhibition Center",
      image: "https://www.bizzabo.com/wp-content/uploads/2021/09/event-roadshow-ideas-yext-on-tour-min.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur veritatis odit fugiat voluptates suscipit est ducimus laborum consequuntur labore sapiente dolor harum, impedit, fuga molestias. Soluta omnis quos ab?"
    },
    {
      id: 3,
      title: "Title",
      date: "October 2025",
      location: "Sudirman Street",
      image: "https://www.bizzabo.com/wp-content/uploads/2021/09/event-roadshow-ideas-yext-on-tour-min.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur veritatis odit fugiat voluptates suscipit est ducimus laborum consequuntur labore sapiente dolor harum, impedit, fuga molestias. Soluta omnis quos ab?"
    }
  ]);

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Plan your visit around these exciting local events and cultural celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2 text-emerald-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2 text-emerald-600" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
            View All Events <Calendar size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;