import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'LP BURN',
    percent: '100%',
    desc: 'The people hold the power.',
    color: 'text-orange-500',
    emoji: '💥',
    rotate: '-3deg',
    bg: 'bg-yellow-100',
  },
  {
    title: 'NO TAX',
    percent: '0%',
    desc: 'No tax, no fees, no worries.',
    color: 'text-orange-500',
    emoji: '🪙',
    rotate: '2deg',
    bg: 'bg-pink-100',
  },
  {
    title: 'NO FEE',
    percent: '0%',
    desc: 'No fee, no worries.',
    color: 'text-orange-500',
    emoji: '🔒',
    rotate: '-2deg',
    bg: 'bg-blue-100',
  },
  {
    title: 'SUPPLY',
    percent: '1B',
    desc: '1 Billion tokens.',
    color: 'text-orange-500',
    emoji: '🧮',
    rotate: '3deg',
    bg: 'bg-green-100',
  },
];

export const Tokon = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 min-h-[50vh]">
      <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight bangers-regular mb-8 text-stroke-white text-center">
        MEMENOMICS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cardData.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{
              rotate: [card.rotate, '0deg', card.rotate],
              scale: 1.08,
              y: -10,
              boxShadow: '0 12px 32px 0 #facc15, 0 0 0 4px #fff',
              backgroundColor: '#fef9c3',
              borderColor: '#facc15',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 8 }}
            className={
              `${card.bg} relative rounded-3xl p-6 w-64 sm:w-56 text-center flex flex-col items-center shadow-cartoon border-4 border-yellow-400 font-bangers transition-all duration-200`
            }
            style={{ transform: `rotate(${card.rotate})` }}
          >
            <div className="text-5xl mb-2 animate-bounce-slow drop-shadow-cartoon">{card.emoji}</div>
            <div className="text-black text-2xl font-bold mb-1 tracking-wide">{card.title}</div>
            <div className={`${card.color} text-4xl font-extrabold mb-1`}>{card.percent}</div>
            <div className="text-black text-lg mt-1">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Add a slow bounce animation for the emoji
// In your global CSS (index.css), add:
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

// Add to index.css:
// .shadow-cartoon { box-shadow: 4px 8px 0 #222, 0 0 0 4px #fff; }
// .drop-shadow-cartoon { filter: drop-shadow(2px 4px 0 #222); }
// .font-bangers { font-family: 'Bangers', system-ui; }
// .cartoon-border { border-style: dashed; border-width: 4px; border-color: #111; opacity: 0.7; }
