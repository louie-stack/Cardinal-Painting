import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Star, ShieldCheck, Users, Calendar, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section - Split Color Panel Design */}
      <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Brand Panel - Adjusted to approx 45% width */}
        <div className="lg:w-[45%] bg-[#9B1B30] flex items-center justify-center p-8 md:p-16 lg:p-24 min-h-[60vh] lg:min-h-0">
          <div className="max-w-2xl w-full">
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight reveal">
              Interior & Exterior <br className="hidden md:block" /> Painting
            </h1>
            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl mb-12 font-medium max-w-xl leading-relaxed reveal reveal-stagger-1">
              Serving the East Valley Since 1990
            </p>
            <div className="flex flex-col sm:flex-row gap-6 reveal reveal-stagger-2">
              <Link
                to="/contact"
                className="bg-white text-[#9B1B30] px-10 py-5 rounded shadow-lg font-bold text-lg hover:bg-gray-100 transition-all text-center flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                Get Your Free Estimate
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded shadow-lg font-bold text-lg hover:bg-white/10 transition-all text-center transform hover:-translate-y-1"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image Panel - Adjusted to approx 55% width */}
        <div className="lg:w-[55%] h-[40vh] lg:h-full relative">
          <img
            src="/images/hero-main.jpg"
            alt="Professional Painting Services"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center reveal">
              <Calendar className="w-8 h-8 text-[#9B1B30] mb-3" />
              <span className="font-bold text-[#333333] uppercase tracking-wider text-sm">{COMPANY_INFO.experience} Experience</span>
            </div>
            <div className="flex flex-col items-center text-center reveal reveal-stagger-1">
              <ShieldCheck className="w-8 h-8 text-[#9B1B30] mb-3" />
              <span className="font-bold text-[#333333] uppercase tracking-wider text-sm">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center text-center reveal reveal-stagger-2">
              <Users className="w-8 h-8 text-[#9B1B30] mb-3" />
              <span className="font-bold text-[#333333] uppercase tracking-wider text-sm">Family Owned</span>
            </div>
            <div className="flex flex-col items-center text-center reveal reveal-stagger-3">
              <CheckCircle2 className="w-8 h-8 text-[#9B1B30] mb-3" />
              <span className="font-bold text-[#333333] uppercase tracking-wider text-sm">Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#F5F1EA] py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Our Services</h2>
            <div className="w-20 h-1 bg-[#9B1B30] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">From meticulous interior refreshes to durable exterior protection, we handle it all with precision.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Interior Painting', desc: 'Walls, ceilings, trim, and professional cabinet refinishing.', img: 'https://picsum.photos/seed/int1/400/300', link: '/services#interior' },
              { title: 'Exterior Painting', desc: 'Durable weather-resistant finishes tailored for the AZ climate.', img: 'https://picsum.photos/seed/ext1/400/300', link: '/services#exterior' },
              { title: 'Residential Painting', desc: 'Full home repaints, touch-ups, and new construction projects.', img: 'https://picsum.photos/seed/res1/400/300', link: '/services#residential' },
              { title: 'Commercial Painting', desc: 'Professional retail, office, and multi-unit property solutions.', img: 'https://picsum.photos/seed/com1/400/300', link: '/services#commercial' },
            ].map((service, idx) => (
              <Link key={idx} to={service.link} className={`bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 reveal reveal-stagger-${idx}`}>
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-[#333333]">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center text-[#9B1B30] font-bold text-xs uppercase tracking-widest">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Family Values & Superior Craftsmanship</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 reveal">
              <div className="relative">
                <img src="https://picsum.photos/seed/painting-crew/800/600" alt="Cardinal Painting Crew" className="rounded shadow-2xl relative z-10" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F5F1EA] -z-0"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-[#9B1B30] -z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal reveal-stagger-1">
              <span className="text-[#9B1B30] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Trusted Since 2007</span>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Cardinal Painting is more than just a business; it's a legacy. Founded by Jason Bergmann in 2007, we've spent nearly two decades perfecting the art of residential and commercial painting in the Valley.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#9B1B30] shrink-0" />
                  <span className="text-gray-700 font-medium">Owner-operated with meticulous attention to detail.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#9B1B30] shrink-0" />
                  <span className="text-gray-700 font-medium">Deep roots in the Gilbert and East Valley community.</span>
                </div>
              </div>
              <Link to="/about" className="bg-[#9B1B30] text-white px-8 py-4 rounded font-bold hover:bg-[#7A1526] transition-all inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="bg-[#F5F1EA] py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">The Cardinal Difference</h2>
            <p className="text-gray-600">See how we transform homes across Arizona.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative group reveal">
                <img 
                  src="https://picsum.photos/seed/before-ext/800/500" 
                  alt="Before" 
                  className="w-full h-[350px] object-cover rounded transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg" 
                />
                <span className="absolute top-4 left-4 bg-black/60 text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">Before</span>
              </div>
              <div className="relative group reveal reveal-stagger-1">
                <img 
                  src="https://picsum.photos/seed/after-ext/800/500" 
                  alt="After" 
                  className="w-full h-[350px] object-cover rounded shadow-lg ring-4 ring-[#9B1B30]/10 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl" 
                />
                <span className="absolute top-4 left-4 bg-[#9B1B30] text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">After</span>
              </div>
            </div>
            <div className="flex flex-col justify-center reveal reveal-stagger-1">
              <h3 className="text-2xl font-bold mb-6 text-[#333333]">Exceptional Exterior Durability</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The Arizona sun is harsh on paint. We use premium weather-resistant finishes and HOA-compliant colors to ensure your home looks stunning and stays protected for years to come. Our preparation process includes thorough pressure washing and repair of any stucco cracks.
              </p>
              <Link to="/portfolio" className="text-[#9B1B30] font-bold hover:underline flex items-center">
                View Full Portfolio <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 reveal">
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Review Cards */}
            {[
              { text: '"I’ve used Cardinal Painting twice in the last year. Absolutely fabulous! Great price, fantastic job, and so easy to work with. I would highly recommend them!"', author: '— Alyson H. – Mesa, AZ' },
              { text: '"They did an amazing job, very quick responses, and friendly! No hidden fees, the price quoted was the price charged. I will absolutely recommend them to anyone needing paint."', author: '— Stephanie Greer' },
              { text: '"We were extremely pleased with our exterior painting. Jason was very nice and I was impressed with the level of detail. Great service, great people and at a great price."', author: '— J.C.' }
            ].map((review, idx) => (
              <div key={idx} className={`bg-[#FAF9F6] p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col h-full reveal reveal-stagger-${idx}`}>
                <div className="flex space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="italic text-gray-700 leading-relaxed mb-4 flex-grow">
                  {review.text}
                </p>
                <p className="not-italic font-bold text-sm text-[#333333] uppercase">{review.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link to="/reviews" className="text-[#9B1B30] font-bold hover:underline">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#9B1B30] py-20 reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Ready to Transform Your Home?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-white text-[#9B1B30] px-10 py-5 rounded-lg shadow-xl font-bold text-xl hover:bg-gray-50 transition-all">
              Get Your Free Estimate
            </Link>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-white/10 transition-all">
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
