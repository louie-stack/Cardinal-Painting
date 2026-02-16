import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-[#FAF9F6] py-4'
      }`}
    >
      <div className="w-full px-4 md:px-10 lg:px-20">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            
            {/* Rounded Icon Container */}
            <div className="bg-white p-1.5 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
              <img
                src="/images/logo-cardinal.png"
                alt="Cardinal Painting Logo"
                className="h-10 w-10 object-contain rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start leading-none">
              <span className="text-[#333333] font-bold text-lg md:text-xl uppercase tracking-tight">
                Cardinal
              </span>
              <span className="text-[#9B1B30] text-[11px] md:text-xs font-bold uppercase tracking-[0.08em] mt-0.5">
                Painting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors uppercase tracking-wider ${
                  location.pathname === link.path
                    ? 'text-[#9B1B30]'
                    : 'text-[#333333] hover:text-[#9B1B30]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#9B1B30] text-white px-6 py-2.5 rounded shadow-sm font-bold text-sm hover:bg-[#7A1526] transition-all transform hover:-translate-y-0.5"
            >
              Get Your Free Estimate
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="text-[#9B1B30] p-2"
            >
              <Phone className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#333333] p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col space-y-4 border-t border-gray-100 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold py-2 ${
                  location.pathname === link.path
                    ? 'text-[#9B1B30]'
                    : 'text-[#333333]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#9B1B30] text-white py-4 rounded text-center font-bold text-lg shadow-md"
            >
              Get Your Free Estimate
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
