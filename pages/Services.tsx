import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const ServiceSection: React.FC<{
  id: string;
  title: string;
  intro: string;
  additionalText?: string;
  benefits: string[];
  image: string;
  isReversed?: boolean;
}> = ({ id, title, intro, additionalText, benefits, image, isReversed }) => (
  <section id={id} className={`py-24 ${isReversed ? 'bg-[#F5F1EA]' : 'bg-white'}`}>
    <div className="container mx-auto px-4">
      <div className={`flex flex-col lg:flex-row items-center gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        <div className="lg:w-1/2 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 uppercase tracking-tight">{title}</h2>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">{intro}</p>
          {additionalText && <p className="text-gray-600 text-lg mb-8 leading-relaxed">{additionalText}</p>}
          <div className="mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#9B1B30] mb-4">{title} Services Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className={`flex items-start space-x-3 reveal reveal-stagger-${i % 4}`}>
                  <div className="bg-[#9B1B30]/10 p-1 rounded mt-0.5">
                    <Check className="w-4 h-4 text-[#9B1B30]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/contact"
            className="bg-[#9B1B30] text-white px-8 py-4 rounded font-bold hover:bg-[#7A1526] transition-all inline-flex items-center"
          >
            Get Your Free Estimate <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="lg:w-1/2 reveal reveal-stagger-1">
          <img 
            src={image} 
            alt={title} 
            className="rounded-lg shadow-xl w-full h-[450px] object-cover transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl" 
          />
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Adjust for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight reveal">Our Expertise</h1>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-stagger-1">Providing high-end residential and commercial painting solutions across the East Valley.</p>
          
          {/* Internal Navigation Icons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Interior', 'Exterior', 'Residential', 'Commercial'].map((type, idx) => (
              <a
                key={type}
                href={`#${type.toLowerCase()}`}
                onClick={(e) => handleScroll(e, type.toLowerCase())}
                className={`bg-[#F5F1EA] text-[#333333] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#9B1B30] hover:text-white transition-all shadow-sm reveal reveal-stagger-${idx}`}
              >
                {type}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServiceSection
        id="interior"
        title="Interior"
        intro="Transform your living spaces with meticulous attention to detail. We treat your furniture and floors with the utmost respect, ensuring a clean and flawless finish."
        additionalText="Our comprehensive process begins with thorough surface preparation and patching. We know that the key to a smooth, long-lasting finish is in the meticulous prep work before a single drop of paint is applied."
        benefits={[
          "Interior wall painting",
          "Room painting",
          "Trim, baseboards, doors & molding",
          "Interior staining",
          "Room staining",
          "Wallpaper removal",
          "Drywall repair",
          "Surface preparation & patching"
        ]}
        image="https://picsum.photos/seed/interior-service/800/600"
      />

      <ServiceSection
        id="exterior"
        title="Exterior"
        isReversed
        intro="Arizona's harsh climate demands durable, high-quality finishes. We focus on heavy-duty surface preparation to ensure your exterior repaint lasts for many years."
        additionalText="We emphasize extreme durability to protect your home from the Arizona sun. By using premium weather-resistant coatings and rigorous application techniques, we ensure your property remains protected and vibrant."
        benefits={[
          "Stucco painting",
          "Wood trim painting",
          "Weather-resistant coatings",
          "Surface preparation",
          "Crack repair",
          "Pressure washing",
          "HOA-compliant color applications"
        ]}
        image="https://picsum.photos/seed/exterior-service/800/600"
      />

      <ServiceSection
        id="residential"
        title="Residential"
        intro="Whether it's a single room or a full exterior repaint, we bring the same level of professionalism and care to every home project."
        benefits={[
          "Full home repaints",
          "Single-room painting",
          "Interior & exterior refresh projects",
          "Drywall repair before painting",
          "Wallpaper removal",
          "New construction painting",
          "Accurate, free estimates",
          "Minimal home life disruption"
        ]}
        image="https://picsum.photos/seed/residential-service/800/600"
      />

      <ServiceSection
        id="commercial"
        title="Commercial"
        isReversed
        intro="Professional painting services for local businesses. We work around your schedule to minimize disruption to your operations."
        benefits={[
          "Office buildings",
          "Retail spaces",
          "Multi-unit properties",
          "Tenant improvements",
          "Flexible scheduling",
          "Minimal business disruption",
          "Licensed, bonded, and insured",
          "Large scale exterior coatings"
        ]}
        image="https://picsum.photos/seed/commercial-service/800/600"
      />
    </div>
  );
};

export default Services;