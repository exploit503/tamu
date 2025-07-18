import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function ContactPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="pt-16"
    >
      <Contact />
    </motion.div>
  );
}