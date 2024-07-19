"use client";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/util/redux/store';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Shoutout } from '@/util/shoutout/page';

const HomePage = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const [buttonClicked, setButtonClicked] = useState('');
  const [pokeballs, setPokeballs] = useState<number[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 120 } }
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0px 0px 8px rgba(0,0,0,0.2)' },
    tap: { scale: 0.9 },
    initial: { scale: 1 }
  };

  const counterVariants = {
    initial: { scale: 1, color: '#000000' },
    animate: { scale: [1, 1.5, 1], color: ['#000000', '#4a5568', '#000000'], transition: { duration: 0.3 } }
  };

  const pokeballVariants = {
    hidden: { x: 0, y: 0, opacity: 0, rotate: 0, scale: 1 },
    visible: { 
      x: [0, windowWidth], 
      y: [0, -100, 0], 
      opacity: 1, 
      rotate: [0, 360],
      scale: [1, 1.5, 1],
      transition: { duration: 1, ease: 'easeInOut' }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const handleIncrement = () => {
    dispatch(increment());
    setButtonClicked('increment');
    setPokeballs((prev) => [...prev, Date.now()]);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setButtonClicked('decrement');
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Shoutout 
      component='react-redux' 
      importMethod={`import { useSelector, useDispatch } from 'react-redux';'; `}  
      use={`const count = useSelector((state: any) => state.counter.value); \nconst dispatch = useDispatch();`}/>
      <motion.h1 
        className="text-6xl font-bold mb-8 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        Redux Counter
      </motion.h1>
      <motion.div 
        className="text-9xl font-bold mb-12 text-gray-900"
        variants={counterVariants}
        initial="initial"
        animate={buttonClicked ? 'animate' : 'initial'}
        key={count}
      >
        {count}
      </motion.div>
      <div className="flex flex-col items-center">
        <AnimatePresence>
          {buttonClicked && (
            <motion.p
              className="text-2xl text-gray-700 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {buttonClicked === 'increment' ? 'Incremented!' : 'Decremented!'}
            </motion.p>
          )}
        </AnimatePresence>
        <div className="flex space-x-4">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white rounded-full text-xl font-semibold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            onClick={handleDecrement}
          >
            Decrement
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-green-500 text-white rounded-full text-xl font-semibold"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            onClick={handleIncrement}
          >
            Increment
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {pokeballs.map((id) => (
          <motion.div
            key={id}
            className="absolute top-1/2"
            variants={pokeballVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={() => setPokeballs((prev) => prev.filter((ballId) => ballId !== id))}
          >
            <Image 
              src="/pokeball-transparent-png-2.png" 
              alt="Pokeball" 
              width={50} 
              height={50} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default HomePage;
