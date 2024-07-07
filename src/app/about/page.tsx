"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Typography } from '@mui/material';

const HomePage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about/sally');
  };

  return (
    <Container maxWidth="md" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Website
      </Typography>
      <Typography variant="body1" paragraph>
        Click the button below to view the gallery of Sally.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{
          backgroundColor: '#ff9800',
          color: 'white',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '24px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
        }}
      >
        View Sally&apos;s Gallery
      </Button>
    </Container>
  );
};

export default HomePage;
