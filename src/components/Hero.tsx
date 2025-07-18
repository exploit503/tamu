import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FlyerSlider from './FlyerSlider';

export default function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false // Removed navigation arrows
  };

  const handleStartProject = () => {
    navigate('/hosting');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000',
      title: 'Web Development Excellence',
      description: 'Custom solutions built with cutting-edge technologies'
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000',
      title: 'Professional Design Services',
      description: 'Creating stunning visuals that capture attention'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
      title: 'Reliable Hosting Solutions',
      description: 'Fast, secure, and always available'
    }
  ];

  return (
    <>
      <div id="home" className="relative bg-gradient-to-b from-indigo-900 to-indigo-800 pt-16 pb-8">
        <Slider {...settings} className="hero-slider">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-screen object-cover opacity-10"
                />
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 min-h-[calc(100vh-4rem)]">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleStartProject}
                      className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors flex items-center text-sm sm:text-base sm:px-8"
                    >
                      Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleViewWork}
                      className="border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-md hover:bg-teal-400 hover:text-white transition-colors text-sm sm:text-base sm:px-8"
                    >
                      View Our Work
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowVideo(true)}
                      className="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors flex items-center text-sm sm:text-base sm:px-8"
                    >
                      Watch Video <Play className="ml-2 h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <FlyerSlider />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-8 right-0 text-white hover:text-gray-200"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
