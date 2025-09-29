"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'dots';
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'default',
  className = ''
}) => {
  if (variant === 'default') {
    return (
      <motion.div
        className={`w-full h-px bg-gradient-to-r from-transparent via-[#4c1d95] to-transparent ${className}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    );
  }

  if (variant === 'gradient') {
    return (
      <div className={`relative w-full flex items-center justify-center ${className}`}>
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-[#4c1d95] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-[#4c1d95] rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-[#4c1d95] rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default SectionDivider;