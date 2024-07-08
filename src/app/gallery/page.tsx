"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const About = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem("userId") ?? '';
      setUserId(value);
    }
  }, []);

  return (
    (userId === "timchen0326" || userId === "sallytsai0620") && (
      <div className="flex flex-col items-start p-6 min-h-screen">
        <div className="hover:scale-105 transition-transform duration-300 pointer-hover">
          <img 
            src="/IMG_4605.JPG" 
            className="mt-3 w-40 h-50 rounded-full shadow-lg" // Adjusted width and height
            alt="Sally" 
            onClick={() => {
              router.push('/gallery/sally');
            }}
          />
        </div>
      </div>
    )
  );
}

export default About;
