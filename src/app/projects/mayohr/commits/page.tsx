'use client'
import React, { useState } from 'react';
import commits from './index';
import { useSpring, animated } from '@react-spring/web';
import styles from './CommitsPage.module.css';

interface Commit {
  hash: string;
  message: string;
  author: string;
  date: string;
  learnings?: string;
}

const CommitsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);

  const openModal = (commit: Commit) => {
    setSelectedCommit(commit);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalAnimation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? `translateY(0%) scale(1)` : `translateY(-50%) scale(0.8)`,
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const overlayAnimation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div className={styles.container}>
      <ul className={styles.commitList}>
        {commits.map((commit, index) => (
          <li key={index} className={styles.commitItem}>
            <p><strong>Hash:</strong> {commit.hash}</p>
            <p><strong>Message:</strong> {commit.message}</p>
            <p><strong>Author:</strong> {commit.author}</p>
            <p><strong>Date:</strong> {commit.date}</p>
            {commit.learnings && (
              <button className={styles.learnButton} onClick={() => openModal(commit)}>
                What I Learned
              </button>
            )}
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <animated.div style={overlayAnimation} className={styles.overlay} onClick={closeModal}>
          <animated.div 
            style={modalAnimation} 
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedCommit && (
              <div className={styles.modalContent}>
                <p>{selectedCommit.learnings}</p>
                <button onClick={closeModal} className={styles.closeButton}>Close</button>
              </div>
            )}
          </animated.div>
        </animated.div>
      )}
    </div>
  );
};

export default CommitsPage;