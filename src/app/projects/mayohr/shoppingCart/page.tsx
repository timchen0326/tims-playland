'use client'
import React from 'react';

interface EmbeddedPageProps {
  url: string;
}

const EmbeddedPage: React.FC<EmbeddedPageProps> = ({ url }) => {
  return (
    <iframe
      src={url}
      style={{
        border: 'none',
        width: '95%', // Slightly less than full width
        height: '85vh', // Slightly less than full viewport height
        marginTop: '20px', // Added top padding
      }}
    />
  );
}

const HomePage: React.FC = () => {
  return (
    <div style={{ margin: 0, padding: 0, height: 'calc(85vh + 20px)', width: '100vw', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <EmbeddedPage url="https://shopping-cart-k73y.vercel.app/" />
      <style jsx>{`
        body, html, #__next {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden; /* Prevent scroll bars on the page itself */
        }
        div {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
