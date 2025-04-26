import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'images/flyers/1.jpg',
  'images/flyers/2.jpg',
  'images/flyers/3.jpg',
  'images/flyers/4.jpg',
  'images/flyers/5.jpg',
  'images/flyers/6.jpg',
  'images/flyers/7.jpg',
  'images/flyers/8.jpg',
];

const FlyerSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg">
      <div className="md:w-1/2 flex flex-col items-center">
        <div className="mb-4 w-58 h-64 mx-auto">
          <img src="images/flyers/slide.png" alt="Need a website" className="w-full h-full object-contain" />
        </div>
        <div className="text-left w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">7 Reasons Why You Need a Website</h2>
          <p className="text-lg text-gray-700">
            Having a professional website is essential for businesses today. It helps you connect with customers, build your brand, and grow your business effectively.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="p-4">
              <img src={src} alt={`Flyer ${index + 1}`} className="w-full h-auto rounded-md shadow-md" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FlyerSlider;
