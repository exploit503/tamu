import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  description: string;
  link: string;
}

const searchData: SearchResult[] = [
  { title: 'Web Development', description: 'Custom web development services', link: '#services' },
  { title: 'UI/UX Design', description: 'Professional design services', link: '#services' },
  { title: 'Web Hosting', description: 'Reliable hosting solutions', link: '#hosting' },
  { title: 'Starter Plan', description: 'Basic hosting package', link: '/hosting/starter' },
  { title: 'Professional Plan', description: 'Advanced hosting solution', link: '/hosting/professional' },
  { title: 'Enterprise Plan', description: 'Premium hosting package', link: '/hosting/enterprise' },
  { title: 'Our Team', description: 'Meet our expert team', link: '#team' },
  { title: 'Portfolio', description: 'View our work', link: '#portfolio' },
  { title: 'Contact', description: 'Get in touch with us', link: '#contact' }
];

export default function SearchBar({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setSelectedIndex(-1);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > -1 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && selectedIndex > -1) {
      e.preventDefault();
      handleResultClick(results[selectedIndex].link);
    }
  };

  const handleResultClick = (link: string) => {
    setIsOpen(false);
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link);
    }
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 bg-indigo-800/50 text-white px-4 py-2 rounded-full hover:bg-indigo-700/50 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="hidden md:inline">Search</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4"
            >
              <div className="p-4 border-b relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-10 pr-4 py-2 text-gray-900 placeholder-gray-500 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {results.length > 0 && (
                <div className="max-h-96 overflow-y-auto p-2">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleResultClick(result.link)}
                        className={`w-full p-4 rounded-lg transition-colors flex items-center justify-between ${
                          selectedIndex === index ? 'bg-indigo-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                          <p className="text-gray-600">{result.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}

              {searchQuery && results.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  No results found for "{searchQuery}"
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}