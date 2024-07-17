'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';
import Breadcrumbs from '@/util/breadcrumb/page';
import { motion } from 'framer-motion';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          Explore Tim&apos;s latest endeavors. Delve into his insightful articles, peruse our gallery, and discover the passions that drive his work.
        </p>
      </header>

      <section className={styles.featuredProjects}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          <motion.div
            key='project1'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/projects/mayohr')}
            className="cursor-pointer m-4 transform transition-transform duration-300 w-80 rounded-lg shadow-lg p-4 bg-white"
          >
            <div className="relative h-40 overflow-hidden rounded-lg mb-4">
              <motion.img 
                src='/mayohr.jpg'
                className="absolute inset-0 w-full h-full object-cover"
                alt='MAYOHR'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">MAYOHR</h3>
              <p className="text-sm mb-4">Assisted in the development and maintenance of dynamic, user-friendly forms for various HR applications, ensuring compatibility and responsiveness across different browsers.</p>
              <div className="flex flex-wrap justify-center space-x-2">
                {['Form Development', 'TSX', 'Next.Js', 'React', 'VS Code'].map((tag, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.callToAction}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.callToActionText}>
          Interested in working together or have any questions? Feel free to reach out!
        </p>
        <button onClick={() => router.push('/contact')} className={styles.button}>
          Contact Me
        </button>
      </section>
    </div>
  );
};

export default HomePage;
