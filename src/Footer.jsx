import React from 'react';
import { FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring' }}
      className="w-full bg-[#2563eb] pb-3 flex flex-col items-center justify-center border-t-2 border-white "
    >
      <div className="flex flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-1 w-full">
        <a href="https://x.com/Ceasefire_Token" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-200 transition-colors duration-200 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
          <FaTwitter />
        </a>
        <a href="https://t.me/ceasefiretoken" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-200 transition-colors duration-200 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
          <FaTelegramPlane />
        </a>
        
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-white text-sm font-semibold text-center px-2"
      >
        © {new Date().getFullYear()} All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;