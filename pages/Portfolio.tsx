import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: "Gilbert Residence", type: "Full Exterior", img: "https://picsum.photos/seed/p1/600/600" },
    { title: "Modern Kitchen Refresh", type: "Cabinet Refinishing", img: "https://picsum.photos/seed/p2/600/600" },
    { title: "Chandler Estate", type: "Interior & Trim", img: "https://picsum.photos/seed/p3/600/600" },
    { title: "Retail Shop Front", type: "Commercial Exterior", img: "https://picsum.photos/seed/p4/600/600" },
    { title: "Val Vista Home", type: "Stucco Repair & Paint", img: "https://picsum.photos/seed/p5/600/600" },
    { title: "Luxury Living Room", type: "Interior Accent Walls", img: "https://picsum.photos/seed/p6/600/600" },
    { title: "East Valley Office", type: "Commercial Interior", img: "https://picsum.photos/seed/p7/600/600" },
    { title: "Power Ranch Property", type: "Deck & Wood Finishing", img: "https://picsum.photos/seed/p8/600/600" },
    { title: "Ocotillo Exterior", type: "HOA Compliant Finish", img: "https://picsum.photos/seed/p9/600/600" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-24 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 reveal">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">Our Portfolio</h1>
          <div className="w-20 h-1 bg-[#9B1B30] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore some of our recent work across Gilbert and the surrounding Valley.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all group reveal reveal-stagger-${idx % 4}`}>
              <div className="relative h-80 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="p-6">
                <p className="text-[#9B1B30] text-[10px] font-bold uppercase tracking-widest mb-1">{project.type}</p>
                <h3 className="text-[#333333] font-bold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;