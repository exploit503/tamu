import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, PenTool, Server, Shield, Smartphone, ArrowRight, Check, Star, Zap, Users, Award, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const services: Service[] = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern Frameworks'],
    price: 'From $499',
    popular: true
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: 'UI/UX Design',
    description: 'User-friendly interfaces and seamless experiences that engage your audience',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    price: 'From $349'
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Web Hosting',
    description: 'Secure and reliable hosting solutions with 99.9% uptime guarantee',
    features: ['SSL Certificate', '24/7 Support', 'Daily Backups', 'CDN Integration'],
    price: 'From $24.99/mo'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'SSL Certificates',
    description: 'Secure your website with industry-standard SSL encryption',
    features: ['256-bit Encryption', 'Trust Seal', 'Browser Compatibility', 'Easy Installation'],
    price: 'From $49'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['Cross-Platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
    price: 'From $799'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Domain Services',
    description: 'Domain registration and management for your online presence',
    features: ['Domain Registration', 'DNS Management', 'Email Forwarding', 'Privacy Protection'],
    price: 'From $12/year'
  }
];

const stats = [
  { icon: <Users className="h-8 w-8" />, number: '500+', label: 'Happy Clients' },
  { icon: <Award className="h-8 w-8" />, number: '1000+', label: 'Projects Completed' },
  { icon: <Clock className="h-8 w-8" />, number: '5+', label: 'Years Experience' },
  { icon: <Star className="h-8 w-8" />, number: '4.9', label: 'Client Rating' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function ServicesPage() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="h-4 w-4 mr-2" />
            Professional Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Our <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-2xl mb-4 mx-auto"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className={`relative p-8 bg-white rounded-3xl border border-gray-200 overflow-hidden ${
                    service.popular ? 'ring-2 ring-indigo-500' : ''
                  }`}
                >
                  {service.popular && (
                    <motion.div
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      Popular
                    </motion.div>
                  )}
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-2xl mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600">{service.price}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                  
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    animate={hoveredCard === index ? { scale: 1.05 } : { scale: 1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-indigo-100 mb-8"
          >
            Let's discuss how we can help bring your vision to life
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}