import React from 'react';
import { COMPANY_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] animate-fadeIn">
      {/* Page Hero */}
      <section className="bg-[#F5F1EA] py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center reveal">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Trusted Painting Since 1990</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Cardinal Painting has proudly served Gilbert and the East Valley for decades, delivering quality painting services backed by experience and integrity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6 reveal">
              <h2 className="text-3xl font-bold text-[#333333] uppercase tracking-wider">Our Story</h2>
              <div className="w-16 h-1 bg-[#9B1B30]"></div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Jason Bergmann has been a resident of the East Valley since 1980 and has been painting throughout the Valley since 1990. After nearly two decades of hands-on experience, he founded Cardinal Painting in 2007.
                </p>
                <p>
                  An avid Arizona Cardinals fan, Jason chose the name as a tribute to his favorite team — a symbol of pride, loyalty, and commitment to the community he’s called home for over 40 years.
                </p>
                <p>
                  Since day one, Cardinal Painting has remained family-owned and locally operated, built on relationships, reputation, and repeat clients.
                </p>
                <p className="font-medium text-[#333333]">
                  At Cardinal Painting, Jason personally provides fast, free estimates and ensures every project meets the highest standards of craftsmanship and professionalism.
                </p>
                <p>
                  From interior refreshes to full exterior transformations, every job is completed with meticulous preparation, quality materials, and attention to detail.
                </p>
                <p className="italic">
                  We don’t just paint homes — we protect, enhance, and transform them. If you’re looking for dependable, experienced painters who treat your property with care and respect, Cardinal Painting is ready to bring your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#9B1B30] reveal reveal-stagger-1">
                  <p className="text-[#9B1B30] font-bold text-2xl mb-1">1990</p>
                  <p className="text-[#333333] text-xs font-bold uppercase tracking-widest">Painting the Valley</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-[#9B1B30] reveal reveal-stagger-2">
                  <p className="text-[#9B1B30] font-bold text-2xl mb-1">2007</p>
                  <p className="text-[#333333] text-xs font-bold uppercase tracking-widest">Established</p>
                </div>
              </div>
            </div>
            
            <div className="relative reveal reveal-stagger-1">
              <img 
  src="/images/about-main.jpg" 
  alt="Jason Bergmann - Cardinal Painting" 
  className="rounded-lg shadow-2xl" 
/>
              <div className="absolute -bottom-6 -right-6 bg-[#9B1B30] p-8 rounded text-white shadow-xl hidden md:block reveal reveal-stagger-3">
                <p className="text-sm uppercase tracking-widest font-bold mb-1">Owner-Operated</p>
                <p className="text-2xl font-bold">Licensed & Bonded</p>
              </div>
            </div>
          </div>

          {/* New Why Choose Us Section */}
          <div className="bg-white p-10 md:p-16 rounded-lg shadow-sm border border-gray-100 reveal">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Why Homeowners Choose Cardinal Painting</h2>
              <div className="w-20 h-1 bg-[#9B1B30] mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 reveal reveal-stagger-1">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cardinal Painting has been a staple of the East Valley community since 1990. Established as a formal business in 2007, we have spent decades perfecting our craft. As a strictly owner-operated company, Jason Bergmann personally handles every estimate and oversees the quality of every project.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This level of direct involvement ensures that the superior craftsmanship, clear communication, and professional integrity our clients expect are delivered on every single job, from start to finish.
                </p>
              </div>
              
              <div className="bg-[#F5F1EA] p-8 rounded-lg reveal reveal-stagger-2">
                <ul className="space-y-4">
                  {[
                    "Serving the East Valley Since 1990",
                    "Established in 2007",
                    "Licensed & Bonded",
                    "Owner-Operated",
                    "Satisfaction Guaranteed",
                    "Free, Fast Estimates"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-center space-x-3 reveal reveal-stagger-${index}`}>
                      <CheckCircle2 className="w-6 h-6 text-[#9B1B30] shrink-0" />
                      <span className="text-[#333333] font-bold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
