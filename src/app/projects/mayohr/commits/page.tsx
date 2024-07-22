'use client'
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import commits from '.';
import styles from './CommitsPage.module.css';

interface Commit {
  hash: string;
  message: string;
  author: string;
  date: string;
  learnings?: React.ReactNode;
}

const CommitsPage: React.FC = () => {
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const commitsPerPage = 10;
  const filteredCommits = commits.filter(
    commit =>
      commit.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commit.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      commit.hash.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const pageCount = Math.ceil(filteredCommits.length / commitsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const openLearnings = (commit: Commit) => {
    setSelectedCommit(commit);
  };

  const displayedCommits = filteredCommits.slice(
    currentPage * commitsPerPage,
    (currentPage + 1) * commitsPerPage
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search commits"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.content}>
        <ul className={styles.commitList}>
          {displayedCommits.map((commit, index) => (
            <li
            key={index}
            className={`${styles.commitItem} ${selectedCommit && selectedCommit.hash === commit.hash ? styles.selected : ''} ${commit.learnings ? 'bg-green-100' : ''}`}
            {...(commit.learnings && { onClick: () => openLearnings(commit) })}
          >
              <p><strong>Hash:</strong> {commit.hash}</p>
              <p><strong>Message:</strong> {commit.message}</p>
              <p><strong>Author:</strong> {commit.author}</p>
              <p><strong>Date:</strong> {commit.date}</p>
            </li>
          ))}
        </ul>
        <div className={styles.learnings}>
          {selectedCommit ? (
            <div className={styles.learnContent}>
              {selectedCommit.learnings}
            </div>
          ) : (
            <div className={styles.placeholder}>
              <p>Select a commit to see the learnings</p>
            </div>
          )}
        </div>
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default CommitsPage;
