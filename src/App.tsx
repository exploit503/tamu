import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import ProfilePage from './pages/Profile';
import ContactPage from './pages/Contact';
import Hosting from './components/Hosting';
import HostingPayment from './components/HostingPayment';
import Booking from './components/Booking';
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

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/hosting" element={<Hosting />} />
      <Route path="/hosting/:plan" element={<HostingPayment />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
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