'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      
      <h1 className={`${styles.title} ${styles.fadeInUp}`}>
        Welcome to My Website
      </h1>
      <p className={`${styles.description} ${styles.fadeInUp} ${styles['delay-1']}`}>
        Discover the latest trends in technology and innovation. Dive into our insightful articles, browse our gallery, and learn more about what drives us.
      </p>
      <div className={`${styles.buttonContainer} ${styles.fadeInUp} ${styles['delay-2']}`}>
        <button
          onClick={() => router.push('/about')}
          className={styles.button}
        >
          About
        </button>
        <button
          onClick={() => router.push('/gallery')}
          className={styles.button}
        >
          Gallery
        </button>
      </div>
    </div>
  );
};

export default HomePage;