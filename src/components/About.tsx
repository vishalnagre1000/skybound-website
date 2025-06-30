import React from 'react';
import { Camera, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-[#eaf2ca]">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/photos/vish.jpg"
              alt="Skyboundstories - Wedding Photographer"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center">
              <Camera size={48} className="text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="font-beezle text-4xl md:text-5xl font-medium text-gray-900 mb-4">
                About Skyboundstories
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 8 years of experience capturing love stories around the world, 
                I believe that every couple deserves to have their unique journey documented 
                with artistry, authenticity, and timeless elegance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                My approach combines classic portraiture with candid storytelling, 
                creating images that feel both sophisticated and genuine. I work closely 
                with each couple to understand their vision and bring their dream wedding 
                photography to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-amber-600" size={24} />
                </div>
                <div className="font-beezle text-2xl font-medium text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Weddings Captured</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-amber-600" size={24} />
                </div>
                <div className="font-beezle text-2xl font-medium text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Awards Won</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="text-amber-600" size={24} />
                </div>
                <div className="font-beezle text-2xl font-medium text-gray-900">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a 
                href="#contact"
                className="btn-primary inline-block"
              >
                Let's Create Magic Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
