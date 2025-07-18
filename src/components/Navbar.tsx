import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import navImage from './images/logo/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [pendingHash, setPendingHash] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Updated menuItems with explicit hrefs matching component routes
  const menuItems = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' }, 
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' }
  ];

  // Handle section detection on scroll
  useEffect(() => {
    // Set active section based on current route
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/services') setActiveSection('services');
    else if (path === '/portfolio') setActiveSection('portfolio');
    else if (path === '/team') setActiveSection('team');
    else if (path === '/contact') setActiveSection('contact');
    else setActiveSection('');
  }, [location]);

  const handleNavigation = async (href: string, section?: string) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-indigo-900 text-white fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center">
              <img 
                src={navImage}
                alt="Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  (item.href === '/' && activeSection === 'home') ||
                  (item.href !== '/' && activeSection === item.href.substring(1))
                    ? 'text-orange-400'
                    : 'text-white hover:text-orange-400'
                }`}
              >
                {item.label}
                {((item.href === '/' && activeSection === 'home') ||
                  (item.href !== '/' && activeSection === item.href.substring(1))) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            <SearchBar />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/booking')}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <SearchBar />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-indigo-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-indigo-800"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left px-6 py-4 rounded-lg transition-all duration-300 text-lg md:text-base ${
                    (item.href === '/' && activeSection === 'home') ||
                    (item.href !== '/' && activeSection === item.href.substring(1))
                      ? 'bg-indigo-800 text-orange-400'
                      : 'text-white hover:bg-indigo-800 hover:text-orange-400'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.1 }}
                onClick={() => navigate('/booking')}
                className="block w-full text-left px-6 py-4 text-lg md:text-base text-orange-400 hover:bg-indigo-800 rounded-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
