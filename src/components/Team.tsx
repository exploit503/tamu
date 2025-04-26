import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import alvinImage from './images/team/alvin.png';
import DavidImage from './images/team/David.jpg';
import faridImage from './images/team/farid.png';
import lapterImage from './images/team/lapter.jpg';

const team = [
  {
    name: 'BANGOLE ALVIN',
    role: 'Lead Developer',
    image: alvinImage,
    bio: 'Full-stack developer with 2+ years of experience in web technologies.',
    social: {
      github: 'https://github.com/24-dianitrophenol',
      linkedin: 'https://www.linkedin.com/in/bangole-alvin-6a0520341'
    }
  },
  {
    name: 'ZIMULA FARID',
    role: 'UI/UX Designer',
    image: faridImage,
    bio: 'Creative designer passionate about creating beautiful and intuitive user experiences.',
    social: {
      github: '#',
      linkedin: '#',
    }
  },
  
  {
    name: 'LADU DAVID',
    role: 'Backend Developer',
    image: DavidImage,
    bio: 'Expert in scalable architecture and cloud infrastructure.',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },

  {
    name: 'LAPTER VICENT',
    role: 'Project Manager',
    image: lapterImage,
    bio: 'Experienced in leading complex web development projects to success.',
    social: {
      github: '#',
      linkedin: 'https://www.linkedin.com/in/mujuni-vincent-497b3435b?trk=contact-info',
    }
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

export default function Team() {
  return (
    <div id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of developers, designers, and managers work together to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative group p-6 flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full border-4 border-indigo-100 mb-4"
                />
                <div className="flex space-x-4 mt-2">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.github}
                    className="text-indigo-900 hover:text-orange-400"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.linkedin}
                    className="text-indigo-900 hover:text-orange-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mt-4"
                >
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}