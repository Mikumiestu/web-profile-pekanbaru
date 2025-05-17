import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2 text-emerald-400" />
              Pekanbaru
            </h3>
            <p className="text-emerald-100 mb-4">
              The capital of Riau Province, Pekanbaru is a vibrant city known for its rich culture, 
              delicious food, and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-emerald-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-emerald-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-emerald-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-emerald-300 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-300 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/history" className="text-emerald-300 hover:text-white transition-colors duration-300">History</Link>
              </li>
              <li>
                <Link to="/tourism" className="text-emerald-300 hover:text-white transition-colors duration-300">Tourism</Link>
              </li>
              <li>
                <Link to="/culture" className="text-emerald-300 hover:text-white transition-colors duration-300">Culture</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-emerald-300 hover:text-white transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-300 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-300">Local Businesses</a>
              </li>
              <li>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-300">Transportation</a>
              </li>
              <li>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-300">Accommodations</a>
              </li>
              <li>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-300">Events Calendar</a>
              </li>
              <li>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-300">Weather</a>
              </li>
              <li>
                <a href="#" className="text-emerald-300 hover:text-white transition-colors duration-300">Emergency Services</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-emerald-400 flex-shrink-0" size={18} />
                <span>Tourism Office, Jl. Jenderal Sudirman No. 468, Pekanbaru, Riau, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-emerald-400 flex-shrink-0" size={18} />
                <span>+62 761 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-emerald-400 flex-shrink-0" size={18} />
                <span>tourism@pekanbaru.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center">
          <p className="text-emerald-300">
            &copy; {currentYear} Pekanbaru City Tourism. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;