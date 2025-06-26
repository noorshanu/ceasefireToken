import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between  py-12 px-4 md:px-0">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
        className="flex-shrink-0 mb-8 md:mb-0 md:mr-1 sm:w-1/2 w-full"
      >
        <img
          src="/images/aboutus.jpeg"
          alt="About Us Meme"
          className="w-full sm:w-[500px]   h-full sm:h-[500px] object-cover rounded-3xl border-8 border-white shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
        viewport={{ once: true }}
        className=" text-left w-full sm:w-1/2"
      >
        <h2 className="text-stroke-white text-6xl md:text-7xl font-extrabold leading-tight bangers-regular mb-4">
          PEACE IS THE<br />PUNCHLINE.
        </h2>
        <p className="text-white text-lg md:text-xl font-bold mb-2">
          NO BOMB, JUST MEME was born from a simple idea:<br />
          If everyone's laughing, no one's launching missiles. We turned rage into retweets, conflict into copy-paste culture.
        </p>
        <p className="text-white text-lg md:text-xl font-bold mt-4">
          We're not neutral.<br />
          We're non-violent and very online.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutUs;