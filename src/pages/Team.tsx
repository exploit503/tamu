import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Team';

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

export default function TeamPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="pt-16"
    >
      <Team />
    </motion.div>
  );
}