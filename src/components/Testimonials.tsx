import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adam & Priyanka",
      wedding: "Pune",
      text: "Skyboundstories captured our wedding day with such artistry and grace. Every photo tells a story, and we're transported back to those magical moments every time we look at them. Their attention to detail and ability to capture genuine emotions is incredible.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Koustub & Pratiksha",
      wedding: "Kolhapur",
      text: "Working with Skyboundstories was an absolute dream. They made us feel so comfortable and natural in front of the camera. The photos exceeded all our expectations - they're not just pictures, they're works of art that we'll treasure forever.",
      rating: 5,
      image: "/testimonials-image/k&p.jpg" // Ensure this image exists in your public folder
    },
    {
      id: 3,
      name: "Bhakti & Shubham",
      wedding: "Kolhapur",
      text: "Skyboundstories has an incredible eye for capturing the perfect moments. They were professional, creative, and so easy to work with. Our families still talk about how wonderful they were on our wedding day. The photos are absolutely stunning!",
      rating: 5,
      image: "testimonials-image/Shubham.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="font-beezle text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            What Couples Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every love story is different, but the joy and trust couples place in me remains constant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg relative group hover:shadow-lg transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.wedding}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-amber-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-beezle text-2xl font-medium text-gray-900 mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your vision and create beautiful memories that will last a lifetime
            </p>
            <a href="#contact" className="btn-primary">
              Start Planning Your Wedding Photography
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
