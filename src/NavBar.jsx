import React, { useState } from 'react';
import { FaTimes, FaTelegramPlane, FaMask, FaRegCircle, FaBars, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring' }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-transparent  backdrop-blur-xs "
    >
      <div className="flex items-center space-x-3">
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/logo.jpeg" alt="logo" className="w-28 h-14 md:w-33 md:h-20" />
        </a>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="https://x.com/Ceasefire_Token" target="_blank" rel="noopener noreferrer"  className="bg-white rounded-full p-2 text-xl"><FaTwitter /></a>
        <a href="https://t.me/ceasefiretoken" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 text-xl"><FaTelegramPlane /></a>

      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(true)} className="bg-white rounded-full p-2 text-xl">
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-700">
                <FaTimes />
              </button>
            </div>
            <button className="bg-gray-100 rounded-full p-3 text-xl mb-4"><FaTelegramPlane /></button>
            <button className="bg-gray-100 rounded-full p-3 text-xl mb-4"><FaMask /></button>
            <button className="bg-gray-100 rounded-full p-3 text-xl mb-4"><FaRegCircle /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar; 