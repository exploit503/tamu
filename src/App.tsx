import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import RecentProjects from './components/RecentProjects';
import Team from './components/Team';
import Hosting from './components/Hosting';
import HostingPayment from './components/HostingPayment';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const pageVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  }
};

function MainContent() {
  const location = useLocation();

  if (location.pathname === '/booking') {
    return <Booking />;
  }

  if (location.pathname.startsWith('/hosting/')) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <Routes>
          <Route path="/hosting/:plan" element={<HostingPayment />} />
        </Routes>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <RecentProjects />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Services />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Portfolio />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Team />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Hosting />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <MainContent />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;