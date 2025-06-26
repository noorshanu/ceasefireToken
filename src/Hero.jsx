import React, { useState } from 'react';

const CONTRACT_ADDRESS = '6ckn2hHwPR5gBZR...qXJb9oBpump';

const Hero = () => {
  const [toast, setToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[95vh] w-full text-center bg-main px-2">
      {/* <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-lg mt-12">
        THE ONLY EXPLOSION WE<br />BELIEVE IN IS LAUGHTER
      </h1> */}
      <div className="flex flex-col items-center mt-20 md:mt-82 mb-4 w-full">
        <div className="text-white text-3xl xs:text-4xl sm:text-5xl font-bold bangers-regular text-stroke-white max-w-xs sm:max-w-lg md:max-w-2xl leading-tight">
          Grab your meme now
        </div>
      </div>
      <div className="bg-white bg-opacity-90 rounded-lg px-4 py-3 shadow-lg mt-2 inline-block w-full max-w-xs sm:max-w-md md:max-w-lg">
        <div className="font-bold text-base sm:text-lg text-gray-800">$CEASEFIRE Contract Address :</div>
        <div className="flex items-center justify-center mt-1 gap-2">
          <span className="font-mono text-xs sm:text-sm text-gray-700 select-all truncate">{CONTRACT_ADDRESS}</span>
          <button
            onClick={handleCopy}
            className="ml-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
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