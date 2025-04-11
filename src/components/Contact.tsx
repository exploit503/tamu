import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.service}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/256765458906?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div id="contact" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Contact Information</h3>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-teal-500" />
              <a href="tel:+256782283902" className="text-gray-600 hover:text-teal-500">
              +256 782 283902
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-indigo-900" />
              <a href="mailto:tamuwebsolutions@gmail.com" className="text-gray-600 hover:text-indigo-900">
              tamuwebsolutions@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-indigo-900" />
              <span className="text-gray-600">Banda, Kampala-Uganda</span>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-6 w-6 text-indigo-900" />
              <span className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-900"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-900"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <select 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-900"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="web-design">Web Design</option>
              <option value="hosting">Web Hosting</option>
              <option value="graphics">Graphics Design</option>
            </select>
            <textarea
              placeholder="Project Details"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-900"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button className="bg-indigo-900 text-white px-6 py-3 rounded-md hover:bg-indigo-800 w-full flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}