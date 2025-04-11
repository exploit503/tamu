import React from 'react';
import { Server, Shield, Zap, Clock, Code, PenTool, Smartphone, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Web Development',
    icon: <Code className="h-10 w-10 text-orange-500 mx-auto mb-4" />,
    packages: [
      {
        name: 'Starter',
        price: '499',
        features: [
          'Custom Website Design',
          'Responsive Mobile Layout',
          '3 Pages Included',
          'Basic SEO Setup',
          'Contact Form'
        ]
      },
      {
        name: 'Professional',
        price: '999',
        features: [
          'Everything in Starter',
          'Up to 8 Pages',
          'Content Management System',
          'Advanced SEO Optimization',
          'Social Media Integration',
          'Analytics Setup'
        ]
      },
      {
        name: 'Enterprise',
        price: '1999',
        features: [
          'Everything in Professional',
          'Unlimited Pages',
          'E-commerce Integration',
          'Custom Features',
          'Priority Support',
          'Monthly Maintenance'
        ]
      }
    ]
  },
  {
    name: 'UI/UX Design',
    icon: <PenTool className="h-10 w-10 text-orange-500 mx-auto mb-4" />,
    packages: [
      {
        name: 'Starter',
        price: '349',
        features: [
          'Basic Wireframing',
          'Simple Prototype',
          '2 Design Revisions',
          'Mobile-First Design',
          'Basic UI Kit'
        ]
      },
      {
        name: 'Professional',
        price: '699',
        features: [
          'Advanced Wireframing',
          'Interactive Prototype',
          '5 Design Revisions',
          'Complete UI Kit',
          'User Flow Diagrams',
          'Usability Testing'
        ]
      },
      {
        name: 'Enterprise',
        price: '1299',
        features: [
          'Custom Design System',
          'Unlimited Revisions',
          'Multiple Prototypes',
          'User Research',
          'A/B Testing',
          'Design Workshop'
        ]
      }
    ]
  },
  {
    name: 'Web Hosting',
    icon: <Server className="h-10 w-10 text-orange-500 mx-auto mb-4" />,
    packages: [
      {
        name: 'Starter',
        price: '24.99',
        recurring: true,
        features: [
          '20GB Storage',
          '100GB Bandwidth',
          'Free SSL Certificate',
          '5 Email Accounts',
          'Basic Support'
        ]
      },
      {
        name: 'Professional',
        price: '49.99',
        recurring: true,
        features: [
          '100GB Storage',
          'Unlimited Bandwidth',
          'Wildcard SSL',
          '20 Email Accounts',
          'Priority Support',
          'Daily Backups'
        ]
      },
      {
        name: 'Enterprise',
        price: '99.99',
        recurring: true,
        features: [
          'Unlimited Storage',
          'Unlimited Bandwidth',
          'Advanced Security',
          'Unlimited Emails',
          '24/7 Support',
          'Load Balancing'
        ]
      }
    ]
  },
  {
    name: 'Mobile Development',
    icon: <Smartphone className="h-10 w-10 text-orange-500 mx-auto mb-4" />,
    packages: [
      {
        name: 'Starter',
        price: '799',
        features: [
          'Single Platform (iOS/Android)',
          'Basic Features',
          '3 Screen Types',
          'Basic UI Design',
          'App Store Submission'
        ]
      },
      {
        name: 'Professional',
        price: '1499',
        features: [
          'Cross-Platform App',
          'Advanced Features',
          'Up to 10 Screens',
          'Custom UI/UX Design',
          'Push Notifications',
          'Analytics Integration'
        ]
      },
      {
        name: 'Enterprise',
        price: '2999',
        features: [
          'Native Apps (iOS & Android)',
          'Complex Features',
          'Unlimited Screens',
          'Backend Integration',
          'Admin Dashboard',
          'Maintenance Plan'
        ]
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const featureIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.2
    }
  }
};

const packageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: i * 0.1
    }
  })
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

export default function Hosting() {
  const navigate = useNavigate();

  const handleServiceSelection = (serviceName: string, packageName: string) => {
    navigate(`/hosting/${serviceName.toLowerCase().replace(/\s+/g, '-')}?package=${packageName.toLowerCase()}`);
  };

  return (
    <div id="hosting" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center text-indigo-900 mb-12"
        >
          Tamu Services & Pricing
        </motion.h2>
        
        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={featureIconVariants}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Server className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-indigo-900">Premium Quality</h3>
            <p className="text-gray-600">Professional solutions</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={featureIconVariants}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Shield className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-indigo-900">Secure & Reliable</h3>
            <p className="text-gray-600">Built with best practices</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={featureIconVariants}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Zap className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-indigo-900">Fast Delivery</h3>
            <p className="text-gray-600">Quick turnaround times</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              variants={featureIconVariants}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Clock className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-indigo-900">Ongoing Support</h3>
            <p className="text-gray-600">We're here when you need us</p>
          </motion.div>
        </motion.div>

        {/* Service Packages */}
        {services.map((service, serviceIndex) => (
          <motion.div
            key={serviceIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-16 last:mb-0"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-indigo-900">{service.name}</h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {service.packages.map((pkg, pkgIndex) => (
                <motion.div
                  key={pkgIndex}
                  custom={pkgIndex}
                  variants={packageVariants}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "#4F46E5"
                  }}
                  className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden"
                >
                  {pkgIndex === 1 && (
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      Popular
                    </motion.div>
                  )}
                  
                  <h4 className="text-xl font-semibold text-indigo-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-indigo-900 mb-6">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      ${pkg.price}
                    </motion.span>
                    {pkg.recurring && (
                      <span className="text-lg text-gray-500">/mo</span>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        custom={featureIndex}
                        variants={featureItemVariants}
                        className="flex items-center text-gray-600"
                      >
                        <Check className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceSelection(service.name, pkg.name)}
                    className={`w-full py-3 rounded-md transition-colors ${
                      pkgIndex === 1
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-indigo-900 text-white hover:bg-indigo-800'
                    }`}
                  >
                    Select {pkg.name}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}