import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, MapPin, Clock, CreditCard, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] animate-fadeIn">
      {/* Page Hero */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center reveal">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Get Your Free Estimate Today</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10 reveal reveal-stagger-1">Serving Gilbert and the East Valley with Professional Interior & Exterior Painting Services.</p>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="bg-[#9B1B30] text-white px-10 py-5 rounded shadow-xl font-bold text-xl hover:bg-[#7A1526] transition-all inline-flex items-center gap-3 reveal reveal-stagger-2"
          >
            <Phone className="w-6 h-6" /> Call {COMPANY_INFO.phone}
          </a>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12 reveal">
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-8 uppercase tracking-widest">Company Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 reveal reveal-stagger-1">
                    <MapPin className="w-6 h-6 text-[#9B1B30] shrink-0" />
                    <div>
                      <p className="font-bold text-[#333333]">{COMPANY_INFO.name}</p>
                      <p className="text-gray-600">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 reveal reveal-stagger-2">
                    <Phone className="w-6 h-6 text-[#9B1B30] shrink-0" />
                    <div>
                      <p className="font-bold text-[#333333]">Phone Number</p>
                      <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-[#9B1B30] transition-colors">{COMPANY_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 reveal reveal-stagger-3">
                    <Clock className="w-6 h-6 text-[#9B1B30] shrink-0" />
                    <div>
                      <p className="font-bold text-[#333333]">Business Hours</p>
                      <p className="text-gray-600">{COMPANY_INFO.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 reveal reveal-stagger-4">
                    <CreditCard className="w-6 h-6 text-[#9B1B30] shrink-0" />
                    <div>
                      <p className="font-bold text-[#333333]">Payment Methods</p>
                      <p className="text-gray-600">Major Credit Cards Accepted</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-stagger-4">
                <h3 className="text-xl font-bold text-[#333333] mb-6 uppercase tracking-widest">Proudly Serving the East Valley</h3>
                <div className="grid grid-cols-2 gap-4">
                  {COMPANY_INFO.serviceAreas.map((area, idx) => (
                    <div key={area} className={`flex items-center space-x-2 text-gray-600 font-medium reveal reveal-stagger-${idx}`}>
                      <div className="w-1.5 h-1.5 bg-[#9B1B30] rounded-full"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 reveal reveal-stagger-1">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-4 uppercase">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8">Thank you for reaching out. We respond quickly and will provide a clear, honest estimate with no hidden fees. We'll be in touch shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#9B1B30] font-bold uppercase tracking-widest hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#333333] mb-6 uppercase tracking-widest">Request Free Estimate</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name (Required)</label>
                      <input type="text" required className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded focus:ring-2 focus:ring-[#9B1B30] outline-none" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number (Required)</label>
                      <input type="tel" required className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded focus:ring-2 focus:ring-[#9B1B30] outline-none" placeholder="(480) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address (Required)</label>
                    <input type="email" required className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded focus:ring-2 focus:ring-[#9B1B30] outline-none" placeholder="john@example.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project Type</label>
                      <select className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded focus:ring-2 focus:ring-[#9B1B30] outline-none appearance-none">
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>Residential Painting</option>
                        <option>Commercial Painting</option>
                        <option>Drywall Repair</option>
                        <option>Wallpaper Removal</option>
                        <option>Interior Staining</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Property Location (City)</label>
                      <input type="text" className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded focus:ring-2 focus:ring-[#9B1B30] outline-none" placeholder="Gilbert, AZ" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message / Project Details</label>
                    <textarea rows={4} className="w-full bg-[#FAF9F6] border border-gray-200 p-4 rounded focus:ring-2 focus:ring-[#9B1B30] outline-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#9B1B30] text-white py-5 rounded font-bold text-lg hover:bg-[#7A1526] transition-all flex items-center justify-center gap-3 shadow-lg">
                    <Send className="w-5 h-5" /> Get Your Free Estimate
                  </button>
                  <p className="text-center text-xs text-gray-400 italic">We respond quickly and provide clear, honest estimates with no hidden fees.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white reveal">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 w-full h-[500px] rounded-lg overflow-hidden relative shadow-inner">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
               <div className="text-center">
                 <MapPin className="w-12 h-12 text-[#9B1B30] mx-auto mb-4" />
                 <p className="font-bold text-[#333333] uppercase tracking-widest mb-1">{COMPANY_INFO.address}</p>
                 <p className="text-gray-500 text-sm">Gilbert, AZ 85234</p>
                 <a 
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="mt-6 inline-block bg-white text-[#9B1B30] px-6 py-2 border border-[#9B1B30] rounded font-bold text-xs uppercase hover:bg-[#9B1B30] hover:text-white transition-all"
                 >
                   View on Google Maps
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F5F1EA] py-24 text-center reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-8 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Ready to Transform Your Home?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="bg-transparent border-2 border-[#9B1B30] text-[#9B1B30] px-10 py-5 rounded shadow-sm font-bold text-xl hover:bg-[#9B1B30] hover:text-white transition-all">
              Call {COMPANY_INFO.phone}
            </a>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="bg-[#9B1B30] text-white px-10 py-5 rounded shadow-lg font-bold text-xl hover:bg-[#7A1526] transition-all"
            >
              Get Your Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;