import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const testimonials = [
    {
      text: "I’ve used Cardinal Painting twice in the last year. Absolutely fabulous! Great price, fantastic job, and so easy to work with. I would highly recommend them!",
      author: "Alyson H. – Mesa, AZ (October 23, 2023)"
    },
    {
      text: "We used Jason at Cardinal Painting to fix stucco repairs and paint our house. It was an excellent job that they did. It looks perfect and they cleaned up everything and left it as it was found. They were fast enough but not too fast. The work was done excellently and they were very professional. I would recommend them to anyone.",
      author: "Cheryl F. – Mesa, AZ (February 3, 2020) — Cheryl & Joe Cannon"
    },
    {
      text: "My husband and I recently purchased a fixer-upper. The house had popcorn ceilings and I had heard what a nightmare it was to take them down. Lucky for us, it wasn’t that bad at all! Cardinal Painting worked with JMV Drywall Experts to remove the popcorn, resurface, and paint for us. WOW! It looks like a brand new house. This is the second time we have used this company and again we received prompt, professional, quality service. Every room was left neat and tidy at the end of the day. Jason thoroughly double-checked everything at the end of the job to be sure it was to our liking. It sure was! You have the best with Cardinal Painting. I refer them with the utmost confidence!",
      author: "Rita S. – Gilbert, AZ (June 18, 2013) — Rita Standerfer"
    },
    {
      text: "I am delighted with Cardinal Painting and especially with their carpenter. He did a great job installing our new kitchen cabinets and wood trim. He was also able to fabricate and add decorative trim for our new island. Professional and always on time. They painted walls, ceiling and newly installed trim work after that. Great job.",
      author: "Kathy Hawkins"
    },
    {
      text: "I have to say that we were extremely pleased with our painting on the exterior done by Cardinal Painting in February. Jason was very nice and I was impressed with the level of detail that they did and any questions that I had were addressed. Great service, great people and at a great price. Thank you Cardinal!",
      author: "J.C."
    },
    {
      text: "They did an amazing job, very quick responses, and friendly! No hidden fees, the price quoted was the price charged. They were respectful of my house, did not leave a bunch of trash everywhere, and made sure to protect areas we didn’t want paint overspray. I will absolutely recommend them to anyone needing paint.",
      author: "Stephanie Greer"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] animate-fadeIn">
      {/* Page Hero */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center reveal">
          <div className="flex justify-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 text-yellow-500 fill-yellow-500" />)}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6 uppercase tracking-tight text-center md:whitespace-nowrap leading-tight">What Our Customers Say</h1>
          <p className="text-[#9B1B30] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6">Rated 5.0 Stars Based on Verified Google Reviews</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">Real reviews from clients who chose Cardinal Painting for quality, reliability, and craftsmanship.</p>
        </div>
      </section>

      {/* Main Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {testimonials.map((review, idx) => (
              <div key={idx} className={`bg-white p-10 rounded-lg shadow-sm border border-gray-100 relative reveal reveal-stagger-${idx % 3}`}>
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[#9B1B30]/10" />
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-gray-700 text-xl italic leading-relaxed mb-6 font-medium">"{review.text}"</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-[2px] bg-[#9B1B30]"></div>
                  <span className="font-bold text-[#333333] uppercase text-sm tracking-widest">– {review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F5F1EA] py-24 text-center reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 uppercase">Read More Reviews or Leave Us One on Google</h2>
          <a
            href="https://www.google.com/search?cs=0&kgmid=%2Fg%2F1v1vdnqd&kgs=e26766ab8bfd5797&output=search&q=Cardinal+Painting+Company&sca_esv=d4f2f2587599d6c9&shem=dlvs1%2Csume%2Cshrtsdl&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1#lrd=0x872baefb28735477:0xac6a5dec4c10ee90,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9B1B30] text-white px-10 py-5 rounded shadow-lg font-bold text-lg hover:bg-[#7A1526] transition-all inline-block uppercase tracking-widest"
          >
            View Our Google Reviews
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;