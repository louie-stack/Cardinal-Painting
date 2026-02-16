import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { 
      title: "Sedona-Style Residence", 
      type: "Full Exterior Repaint", 
      img: "/images/portfolio-1.jpg" 
    },
    { 
      title: "Chandler Family Home", 
      type: "Interior & Trim", 
      img: "/images/portfolio-2.jpg" 
    },
    { 
      title: "Gilbert Single-Family Home", 
      type: "Exterior Repaint", 
      img: "/images/portfolio-3.jpg" 
    },
    { 
      title: "Luxury Living Space", 
      type: "Interior Custom Finishes", 
      img: "/images/portfolio-4.jpg" 
    },
    { 
      title: "East Valley Business Center", 
      type: "Commercial Exterior", 
      img: "/images/portfolio-5.jpg" 
    },
    { 
      title: "Backyard Patio Refresh", 
      type: "Exterior & Patio Repaint", 
      img: "/images/portfolio-6.jpg" 
    },
    { 
      title: "Mesa Neighborhood Home", 
      type: "HOA Compliant Finish", 
      img: "/images/portfolio-7.jpg" 
    },
    { 
      title: "Power Ranch Property", 
      type: "Exterior Color Update", 
      img: "/images/portfolio-8.jpg" 
    },
    { 
      title: "Gilbert Two-Story Home", 
      type: "Full Exterior Repaint", 
      img: "/images/portfolio-9.jpg" 
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-24 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 reveal">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">
            Our Portfolio
          </h1>
          <div className="w-20 h-1 bg-[#9B1B30] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work across Gilbert and the surrounding Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all group reveal reveal-stagger-${idx % 4}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>

              <div className="p-6">
                <p className="text-[#9B1B30] text-[10px] font-bold uppercase tracking-widest mb-1">
                  {project.type}
                </p>
                <h3 className="text-[#333333] font-bold text-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
