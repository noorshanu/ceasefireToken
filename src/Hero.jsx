import React from 'react';

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[95vh] w-full text-center bg-main">
    {/* <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-lg mt-12">
      THE ONLY EXPLOSION WE<br />BELIEVE IN IS LAUGHTER
    </h1> */}
    <div className="flex flex-col items-center mt-92 mb-4">

      <div className="text-white text-5xl font-bold bangers-regular text-stroke-white">
        Grab your meme now
      </div>
    </div>
    <div className="bg-white bg-opacity-90 rounded-lg px-6 py-3 shadow-lg mt-2 inline-block">
      <div className="font-bold text-lg text-gray-800">$CEASEFIRE Contract Address :</div>
      <div className="font-mono text-xs text-gray-700 mt-1 select-all">6ckn2hHwPR5gBZR...qXJb9oBpump</div>
    </div>
  </section>
);

export default Hero; 