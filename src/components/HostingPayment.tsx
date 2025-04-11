import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Lock, ArrowLeft, Code, PenTool, Server, Smartphone, Check } from 'lucide-react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

interface ServicePackage {
  name: string;
  price: string;
  features: string[];
  recurring?: boolean;
}

interface ServiceDetails {
  [key: string]: {
    name: string;
    icon: JSX.Element;
    packages: ServicePackage[];
  };
}

const services: ServiceDetails = {
  'web-development': {
    name: 'Web Development',
    icon: <Code className="h-10 w-10 text-orange-500" />,
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
  'ui-ux-design': {
    name: 'UI/UX Design',
    icon: <PenTool className="h-10 w-10 text-orange-500" />,
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
  'web-hosting': {
    name: 'Web Hosting',
    icon: <Server className="h-10 w-10 text-orange-500" />,
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
  'mobile-development': {
    name: 'Mobile Development',
    icon: <Smartphone className="h-10 w-10 text-orange-500" />,
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
};

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3
    }
  }
};

const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const featureListVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const featureItemVariants = {
  initial: {
    opacity: 0,
    x: -10
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

const formVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4
    }
  }
};

const inputVariants = {
  initial: {
    opacity: 0,
    x: -10
  },
  animate: i => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.5 + (i * 0.1)
    }
  })
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 1
    }
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#312e81",
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function HostingPayment() {
  const { plan } = useParams<{ plan: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPackage = searchParams.get('package');
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceDetails = plan && services[plan] ? services[plan] : null;
  const packageDetails = serviceDetails?.packages.find(
    pkg => pkg.name.toLowerCase() === selectedPackage
  );

  if (!serviceDetails || !packageDetails) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50 pt-24 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl font-bold text-red-600"
          >
            Invalid Service or Package Selected
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            Please select a valid service and package from our offerings.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Return to Services
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      // Format the WhatsApp message
      const whatsappMessage = encodeURIComponent(
        `*New Service Payment*\n\n` +
        `*Service:* ${serviceDetails.name}\n` +
        `*Package:* ${packageDetails.name}\n` +
        `*Price:* $${packageDetails.price}${packageDetails.recurring ? '/month' : ''}\n` +
        `*Name:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Card:* xxxx-xxxx-xxxx-${formData.cardNumber.slice(-4)}`
      );
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // After showing success message, redirect
      setTimeout(() => {
        // Open WhatsApp with the message
        window.open(`https://wa.me/256705142478?text=${whatsappMessage}`, '_blank');
        
        // Navigate back to home
        navigate('/');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-3xl mx-auto"
      >
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </motion.button>

        <motion.div
          variants={cardVariants}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <motion.div
            variants={headerVariants}
            className="bg-indigo-900 text-white p-6 flex items-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              className="mr-4"
            >
              {serviceDetails.icon}
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold">{serviceDetails.name}</h2>
              <p className="text-indigo-200">{packageDetails.name} Package</p>
              <div className="text-3xl font-bold mt-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  $
                </motion.span>
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {packageDetails.price}
                </motion.span>
                {packageDetails.recurring && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg"
                  >
                    /month
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>

          <div className="p-6">
            <div className="mb-6">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold mb-4"
              >
                Package Features:
              </motion.h3>
              <motion.ul
                variants={featureListVariants}
                className="space-y-2"
              >
                {packageDetails.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={featureItemVariants}
                    className="flex items-center text-gray-600"
                  >
                    <Check className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-50 p-6 rounded-lg text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                  >
                    <Check className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Payment Successful!</h3>
                  <p className="text-green-700">
                    Thank you for your order. Redirecting you to WhatsApp...
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={formVariants}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div custom={0} variants={inputVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </motion.div> ```tsx
                    <motion.div custom={1} variants={inputVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </motion.div>
                  </div>

                  <motion.div custom={2} variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </motion.div>

                  <motion.div custom={3} variants={inputVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        maxLength={19}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                          setFormData({ ...formData, cardNumber: value });
                        }}
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div custom={4} variants={inputVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={formData.expiry}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
                          setFormData({ ...formData, expiry: value });
                        }}
                      />
                    </motion.div>
                    <motion.div custom={5} variants={inputVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '') })}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center text-sm text-gray-500 mt-4"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Your payment information is secure and encrypted
                  </motion.div>

                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-900 text-white py-3 rounded-md hover:bg-indigo-800 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>Pay ${packageDetails.price}{packageDetails.recurring ? '/month' : ''}</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}