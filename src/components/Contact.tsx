import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, Camera } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response=await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="font-beezle text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your wedding photography? I'd love to hear about your special day and how we can create magic together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-beezle text-2xl font-medium text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">skyboundstories.in</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a
                      href="tel:+918855044655"
                      className="text-amber-600 hover:underline transition-colors duration-300"
                    >
                      +91 8855044655
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Pune, Maharashtra (Travel Worldwide)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Grid */}
            <div>
              <h3 className="font-beezle text-2xl font-medium text-gray-900 mb-6">
                Follow My Journey
              </h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={`/insta/${i}.jpg`}
                      alt={`Instagram post ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <a
                href="https://instagram.com/skyboundstories.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300"
              >
                <Instagram size={20} className="mr-2" />
                @skyboundstories.in
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-beezle text-2xl font-medium text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Me About Your Wedding
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Share details about your wedding date, venue, vision, and what draws you to my work..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="relative flex items-center">
                    {/* Flash effect */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-70 animate-flash" />
                    {/* Camera shutter */}
                    <svg
                      className="w-5 h-5 mr-2 z-10 animate-shutter"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" />
                      <path
                        d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
                        stroke="#f59e0b"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
