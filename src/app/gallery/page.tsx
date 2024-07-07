"use client";
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  const handleClick = (src: string) => {
    router.push('/gallery/sally');
  };

  return (
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
  );
}

export default About;
