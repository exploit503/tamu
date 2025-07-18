import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import navImage from './images/logo/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' }, 
    { label: 'Profile', href: '/profile' },
    { label: 'Contact', href: '/contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  // Check if current route matches the menu item
  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-indigo-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img 
                src={navImage}
                alt="Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl group ${
                    isActiveRoute(item.href)
                      ? isScrolled 
                        ? 'text-white bg-gradient-to-r from-indigo-500 to-indigo-600' 
                        : 'text-white bg-gradient-to-r from-orange-400 to-orange-500'
                      : isScrolled
                        ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600'
                        : 'text-white hover:text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator dot */}
                  {isActiveRoute(item.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        isScrolled ? 'bg-white' : 'bg-white'
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}

            <div className="ml-4">
              <SearchBar />
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/booking')}
              className={`ml-4 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:shadow-lg hover:from-indigo-600 hover:to-indigo-700'
                  : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:shadow-lg hover:from-orange-500 hover:to-orange-600'
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <SearchBar />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md border-t border-gray-200' 
                : 'bg-indigo-900 border-t border-indigo-800'
            }`}
          >
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="px-4 pt-4 pb-6 space-y-2"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-left px-6 py-4 rounded-xl transition-all duration-300 text-lg relative group ${
                    isActiveRoute(item.href)
                      ? isScrolled
                        ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white'
                        : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-600 hover:text-white'
                        : 'text-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-500'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
              
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: menuItems.length * 0.1 }}
                onClick={() => navigate('/booking')}
                className={`block w-full text-left px-6 py-4 text-lg rounded-xl transition-all duration-300 font-medium ${
                  isScrolled
                    ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700'
                    : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}