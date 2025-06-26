import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const CONTRACT_ADDRESS = '6ckn2hHwPR5gBZR...qXJb9oBpump';

const Hero = () => {
  const [toast, setToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-[50vh] sm:min-h-[95vh] w-full text-center bg-main px-2 border-b-2 border-white">
      {/* Meme Image or Illustration */}
      {/* <img
        src="/images/hero-meme.png"
        alt="Meme Soldier"
        className="w-40 h-40 sm:w-56 sm:h-56 object-contain rounded-2xl shadow-xl mb-4 mt-16 md:mt-32"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      /> */}
      <div className="flex flex-col items-centermb-4 mt-66 md:mt-82 ">
        <div className="text-white text-3xl xs:text-4xl sm:text-5xl font-bold bangers-regular text-stroke-white max-w-xs sm:max-w-lg md:max-w-2xl leading-tight drop-shadow-lg">
          Grab your meme now
        </div>
      </div>
      <div className="backdrop-blur-md bg-white/60 border border-white/70 rounded-2xl px-4 py-4 shadow-2xl mt-4 inline-block w-full max-w-xs sm:max-w-md md:max-w-lg transition-all duration-300">
        <div className="font-bold text-base sm:text-lg text-gray-800 mb-1">$CEASEFIRE Contract Address :</div>
        <div className="flex items-center justify-center mt-1 gap-2">
          <span className="font-mono text-xs sm:text-sm text-gray-700 select-all truncate bg-white/40 px-2 py-1 rounded">
            {CONTRACT_ADDRESS}
          </span>
          <button
            onClick={handleCopy}
            className="ml-2 flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-150"
          >
            <FaRegCopy className="text-base" />
            Copy
          </button>
        </div>
      </div>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded shadow-lg z-50 text-sm animate-fade-in">
          Copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default Hero; 