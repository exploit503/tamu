import React from 'react';
import webImage from './images/projects/EC.jpeg';
import uiImage from './images/projects/auy.jpeg';
import devImage from './images/projects/mobile.jpeg';
import cloudImage from './images/projects/cloud.jpeg';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: webImage
  },
  {
    title: 'Corporate Website',
    category: 'UI/UX Design',
    image: uiImage
  },
  {
    title: 'Mobile App',
    category: 'Development',
    image: devImage
  },
  {
    title: 'Cloud Platform',
    category: 'Web Hosting',
    image: cloudImage
  }
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-teal-400">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}