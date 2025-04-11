import { Code, PenTool, Server, Smartphone } from 'lucide-react';

export const images = {
  logo: '/images/logo.png',
  hero: [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg'
  ],
  projects: {
    web: [
      '/images/projects/web1.jpg',
      '/images/projects/web2.jpg',
      '/images/projects/web3.jpg'
    ],
    graphics: [
      '/images/projects/graphics1.jpg',
      '/images/projects/graphics2.jpg'
    ]
  },
  team: {
    johnSmith: '/images/team/alvin.png',
    sarahJohnson: '/images/team/sarah-johnson.jpg',
    michaelChen: '/images/team/michael-chen.jpg',
    emilyDavis: '/images/team/emily-davis.jpg'
  }
};

export const slides = [
  {
    image: images.hero[0],
    title: 'Web Development Excellence',
    description: 'Custom solutions built with cutting-edge technologies'
  },
  {
    image: images.hero[1],
    title: 'Professional Design Services',
    description: 'Creating stunning visuals that capture attention'
  },
  {
    image: images.hero[2],
    title: 'Reliable Hosting Solutions',
    description: 'Fast, secure, and always available'
  }
];

export const recentProjects = [
  {
    title: "Tamu's Restaurant",
    description: "A modern restaurant website with online ordering capabilities",
    image: images.projects.web[0],
    link: "#"
  },
  {
    title: "Tamu's E-commerce",
    description: "Full-featured online store with payment integration",
    image: images.projects.web[1],
    link: "#"
  },
  {
    title: "Tamu's Portfolio",
    description: "Elegant portfolio website showcasing creative work",
    image: images.projects.web[2],
    link: "#"
  }
];

export const portfolioProjects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: images.projects.web[0]
  },
  {
    title: 'Corporate Website',
    category: 'UI/UX Design',
    image: images.projects.web[1]
  },
  {
    title: 'Mobile App',
    category: 'Development',
    image: images.projects.web[2]
  },
  {
    title: 'Cloud Platform',
    category: 'Web Hosting',
    image: images.projects.graphics[0]
  }
];

export const teamMembers = [
  {
    name: 'John Smith',
    role: 'Lead Developer',
    image: images.team.johnSmith,
    bio: 'Full-stack developer with 10+ years of experience in web technologies.',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'UI/UX Designer',
    image: images.team.sarahJohnson,
    bio: 'Creative designer passionate about creating beautiful and intuitive user experiences.',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Backend Developer',
    image: images.team.michaelChen,
    bio: 'Expert in scalable architecture and cloud infrastructure.',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    image: images.team.emilyDavis,
    bio: 'Experienced in leading complex web development projects to success.',
    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  }
];

export const services = [
  {
    name: 'Web Development',
    icon: Code,
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
    icon: PenTool,
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
    icon: Server,
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
    icon: Smartphone,
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

export const searchData = [
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