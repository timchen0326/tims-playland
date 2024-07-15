'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css';
import Breadcrumbs from '@/util/breadcrumb/page';

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
        Explore Tim&apos;s latest endeavors. Delve into his insightful articles, peruse our gallery, and discover the passions that drive his work.
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