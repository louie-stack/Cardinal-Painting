import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CreditCard, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              
              {/* Rounded Icon Container (Matches Header) */}
              <div className="bg-white p-1.5 rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                <img
                  src="/images/logo-cardinal.png"
                  alt="Cardinal Painting Logo"
                  className="h-10 w-10 object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <span className="text-[#333333] font-bold text-lg md:text-xl uppercase tracking-tight">
                  Cardinal
                </span>
                <span className="text-[#9B1B30] text-[11px] md:text-xs font-semibold uppercase tracking-[0.08em] mt-0.5">
                  Painting
                </span>
              </div>
            </Link>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Serving Gilbert and the East Valley with professional painting since 2007. Family-owned and operated with over 30 years of industry experience.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Cardinal-Painting/61572665441061/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#9B1B30] hover:border-[#9B1B30] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/cardinalpaintingaz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#9B1B30] hover:border-[#9B1B30] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#333333] mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin className="w-5 h-5 text-[#9B1B30] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="w-5 h-5 text-[#9B1B30] shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} 
                  className="hover:text-[#9B1B30] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <Clock className="w-5 h-5 text-[#9B1B30] shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <CreditCard className="w-5 h-5 text-[#9B1B30] shrink-0" />
                <span>Major Credit Cards Accepted</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#333333] mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-3">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-[#9B1B30]">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-[#9B1B30]">About</Link></li>
              <li><Link to="/services" className="text-sm text-gray-600 hover:text-[#9B1B30]">Services</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-600 hover:text-[#9B1B30]">Portfolio</Link></li>
              <li><Link to="/reviews" className="text-sm text-gray-600 hover:text-[#9B1B30]">Reviews</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-[#9B1B30]">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-[#333333] mb-6 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-y-2">
              {COMPANY_INFO.serviceAreas.map(area => (
                <li key={area} className="text-sm text-gray-600">{area}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-semibold">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Licensed & Insured • Painting Contractor Gilbert AZ</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
