import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import CityHighlights from '../components/home/CityHighlights';
import PopularDestinations from '../components/home/PopularDestinations';
import LocalEvents from '../components/home/LocalEvents';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Pekanbaru - The Vibrant Capital of Riau Province';
  }, []);

  return (
    <div>
      <Hero />
      <CityHighlights />
      <PopularDestinations />
      <LocalEvents />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;