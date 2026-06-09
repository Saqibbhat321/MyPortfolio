import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    React.createElement(
      motion.div,
      {
        
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
        
      },
      
      children
    )
  );
}
