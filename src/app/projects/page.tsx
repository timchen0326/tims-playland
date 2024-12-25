"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem("userId") ?? '';
      setUserId(value);
    }
  }, []);

  const icons = [
    {
      id: 'mayohr',
      src: '/mayohr.jpg',
      alt: 'MAYOHR',
      link: '/projects/mayohr',
      description: 'Assisted in the development and maintenance of dynamic, user-friendly forms for various HR applications, ensuring compatibility and responsiveness across different browsers.',
      tags: ['Form Development', 'TSX', 'Next.Js', 'React', 'VS Code']
    },
    {
      id: 'housingPriceAnalysis',
      src: '/iStock-1309180566-min.width-1024.jpg',
      alt: 'Housing Price Analysis',
      link: '/projects/housingAnalysis',
      description: 'Investigated factors affecting housing prices, including lot size, number of rooms, and land contour, using multiple linear regression and R.',
      tags: ['R', 'Statistical Modeling', 'Housing Market', 'Linear Regression', 'Data Analysis']
    },
    {
      id: 'diabetesRiskFactors',
      src: '/360_F_321547123_ypHqaRsHnZl7lIrJNbFLtdU8ijL5V0fJ.jpg',
      alt: 'Diabetes Risk Factors Analysis',
      link: '/projects/diabetesRisk',
      description: 'Analyzed the influence of BMI, glucose levels, pregnancies, and genetic predisposition on diabetes risk using logistic regression and R.',
      tags: ['R', 'Statistical Modeling', 'Diabetes Research', 'Logistic Regression', 'Health Data Analysis']
    },
    {
      id: 'imdbAnalysis',
      src: '/IMDB_Logo_2016.svg.png',
      alt: 'IMDb Analysis',
      link: '/projects/iMDbAnalysis',
      description: 'Analyzed the relationship between IMDb votes, ratings, language diversity, and release year using scatter plots and Bayesian modeling in R.',
      tags: ['R', 'Statistical Modeling', 'IMDb Ratings', 'Bayesian Analysis', 'Data Visualization']
    },
    {
      id: 'bikeTheftAnalysis',
      src: '/istockphoto-1179640320-612x612.jpg',
      alt: 'Bike Theft Analysis',
      link: '/projects/bikeTheftAnalysis',
      description: 'Analyzed bike theft trends in Toronto, identifying high-risk locations, theft timing, and common bike characteristics using data visualizations and statistical modeling in R.',
      tags: ['R', 'Statistical Modeling', 'Bike Theft', 'Data Visualization', 'Urban Safety']
    },    
    {
      id: 'torontoTrafficAnalysis',
      src: '/istockphoto-1405232215-612x612.jpg',
      alt: 'Toronto Traffic Collosion Analysis',
      link: '/projects/trafficCollision',
      description: 'Explored temporal and spatial patterns of traffic collisions in Toronto using Tableau visualizations and urban safety data insights.',
      tags: ['Tableau', 'Data Analysis', 'Traffic Safety', 'Visualization', 'Urban Planning']
    },
    {
      id: 'torontoCrimeAnalysis',
      src: '/toronto.png',
      alt: 'Toronto Crime Analysis',
      link: '/projects/torontoCrimeAnalysis',
      description: 'Analyzed contextual and temporal factors influencing violent crimes in Toronto using Bayesian logistic regression and urban safety principles.',
      tags: ['Bayesian Modeling', 'Data Analysis', 'R', 'Crime Research', 'Visualization']
    },
  ];

  return (
    <AnimatePresence>
      <div className="flex flex-wrap items-start justify-start min-h-screen p-6">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(icon.link)}
            className="cursor-pointer m-4 transform transition-transform duration-300 w-80 rounded-lg shadow-lg p-4 bg-white"
          >
            <div className="relative h-40 overflow-hidden rounded-lg mb-4">
              <motion.img 
                src={icon.src}
                className="absolute inset-0 w-full h-full object-cover"
                alt={icon.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{icon.alt}</h3>
              <p className="text-sm mb-4">{icon.description}</p>
              <div className="flex flex-wrap justify-center space-x-2">
                {icon.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default Gallery;
