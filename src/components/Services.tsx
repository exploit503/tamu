import React, { useState } from 'react';
import { Code, Globe, PenTool, Server, Shield, Smartphone, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices'
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'User-friendly interfaces and seamless experiences that engage your audience'
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Web Hosting',
    description: 'Secure and reliable hosting solutions with 99.9% uptime guarantee'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'SSL Certificates',
    description: 'Secure your website with industry-standard SSL encryption'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Responsive websites that work perfectly on all devices'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Domain Services',
    description: 'Domain registration and management for your online presence'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

interface ContactFormProps {
  service: Service;
  onClose: () => void;
}

function ContactForm({ service, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
          Inquire about {service.title}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
            <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition-colors"
            >
            Send Message
            </motion.button>
            <button
            type="button"
            onClick={() => {
              const message = `Hello, I am ${formData.name}. My email is ${formData.email}. ${formData.message}`;
              const whatsappUrl = `https://wa.me/256782283902?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-400 transition-colors mt-2"
            >
            Send via WhatsApp
            </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-indigo-900 mb-12"
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 group hover:border-teal-400 cursor-pointer bg-white"
              onClick={() => setSelectedService(service)}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-teal-500 mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedService && (
        <ContactForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}