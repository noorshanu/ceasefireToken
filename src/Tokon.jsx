import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'Public Power',
    percent: '70%',
    desc: 'The people hold the punchlines.',
    color: 'text-orange-500',
    emoji: '💥',
  },
  {
    title: 'Fuel for Fun',
    percent: '20%',
    desc: 'For spreading the message.',
    color: 'text-orange-500',
    emoji: '🔥',
  },
  {
    title: 'Vault of Vibes',
    percent: '5%',
    desc: 'Emergency meme reserves.',
    color: 'text-orange-500',
    emoji: '🔒',
  },
  {
    title: 'Burnt to Ashes',
    percent: '5%',
    desc: 'A salute to peace.',
    color: 'text-orange-500',
    emoji: '🕊️',
  },
];

export const Tokon = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-0 min-h-[80vh]">
      {/* Left: Heading and Grid */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col items-center md:items-start"
      >
        <h2 className="text-white text-7xl font-extrabold leading-tight bangers-regular mb-8 text-stroke-white text-center md:text-left">
          MEMENOMICS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{
                scale: 1.07,
                y: -8,
                boxShadow: '0 8px 32px 0 rgba(37,99,235,0.25)',
                background: 'linear-gradient(135deg, #e0e7ff 0%, #bae6fd 100%)',
                borderColor: '#2563eb',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="bg-white rounded-2xl border-4 border-dashed border-blue-600 p-6 w-64 text-center flex flex-col items-center shadow-xl cursor-pointer hover:border-solid hover:border-blue-400 relative overflow-hidden"
              style={{
                boxShadow: '0 4px 24px 0 rgba(37,99,235,0.18)',
                borderImage: 'linear-gradient(135deg, #2563eb 40%, #38bdf8 100%) 1',
              }}
            >
              <div className="text-4xl mb-2 animate-bounce-slow">{card.emoji}</div>
              <div className="text-black text-2xl font-bold mb-2">{card.title}</div>
              <div className={`${card.color} text-4xl font-extrabold mb-1`}>{card.percent}</div>
              <div className="text-black text-lg">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Right: Meme Soldier Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center mt-12 md:mt-0"
      >
        <img
          src="/images/memenomics-soldier.png"
          alt="Memenomics Soldier"
          className="w-[420px] h-[420px] object-cover rounded-3xl"
        />
      </motion.div>
    </section>
  );
}

// Add a slow bounce animation for the emoji
// In your global CSS (index.css), add:
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
