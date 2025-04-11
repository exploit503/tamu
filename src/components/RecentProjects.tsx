import { motion } from 'framer-motion';
import { ExternalLink, Code, Layout, ArrowRight } from 'lucide-react';
import flamia from './images/projects/flamia.png';
import ngo from './images/projects/ngo.png';
import maevents from './images/projects/maevents.png';
import cyber from './images/projects/cyber.png';
import agape from './images/projects/agape.png';
import essence from './images/projects/pure-essence.png';

const recentProjects = [
  {
    title: "Cyber Innovatives",
    description: "A cutting-edge platform showcasing innovative cybersecurity solutions and services. Provides comprehensive security assessments, threat intelligence, and digital protection strategies for businesses.",
    image: cyber,
    link: "https://cisl.vercel.app/"
  },
  {
    title: "Agape Church",
    description: "A welcoming Christian community focused on spreading God's love through worship, fellowship, and service. Offers inspiring sermons, community outreach programs, and spiritual growth opportunities for all ages.",
    image: agape,
    link: "https://agape-gamma.vercel.app/"
  },
  {
    title: "Pure Essence",
    description: "A premier beauty service provider specializing in makeup and other beauty treatments for women. Offers personalized consultations and high-quality products to enhance natural beauty.",
    image: essence,
    link: "https://pure-essence-six.vercel.app/"
  },
  {
    title: "Flamia",
    description: "Offers reliable gas refill services and brand-new cylinders for your home or business needs. Our high-quality gas ensures safe and efficient performance for cooking, heating, and more.",
    image: flamia,
    link: "https://flamia.store/refill"
  },
  {
    title: "NGO",
    description: "Boychild Adolescents Skilling Foundation (BASF) is a non-profit organization registered with the NGO bureau under the ministry of gender, labor and social development with its headquarters in mukono district, Namyoya village, misindye parish, Goma division.",
    image: ngo,
    link: "https://www.basfug.org/"
  },
  {
    title: "M.A Events",
    description: "We specialize in stunning Event decorations and top-tier outside catering, bringing elegance, creativity, and exceptional taste to every occasion.",
    image: maevents,
    link: "https://maevents.site/"
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

export default function RecentProjects() {
  return (
    <div id="recent-projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Recently Completed Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work for Tamu and other clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-indigo-900 text-white p-2 rounded-bl-lg">
                  <Layout className="h-5 w-5" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                 
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-teal-500 hover:text-teal-700"
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="inline-flex items-center bg-indigo-900 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}