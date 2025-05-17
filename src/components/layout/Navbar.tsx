import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Tourism', path: '/tourism' },
    { name: 'Culture', path: '/culture' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-2xl font-bold transition-transform duration-300 hover:scale-105"
        >
          <MapPin className="text-emerald-600" size={28} />
          <span className={`${isScrolled ? 'text-emerald-800' : 'text-white'} transition-colors duration-300`}>
            Pekanbaru
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                ${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'} 
                ${location.pathname === link.path ? (isScrolled ? 'font-semibold text-emerald-600' : 'font-semibold text-emerald-300') : ''}
                transition-colors duration-300
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-emerald-600 hover:text-emerald-800 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-emerald-800 bg-opacity-95 z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl ${
                location.pathname === link.path
                  ? 'text-white font-semibold'
                  : 'text-emerald-100 hover:text-white'
              } transition-colors duration-300`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;