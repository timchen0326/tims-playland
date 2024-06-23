import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <div className='hover-sclatransition-transform duration-300 hover:scale-105 pointer-hover'>
        <img 
          src="/IMG_4605.JPG" 
          className="mt-3 px-8 py-8 rounded-full shadow-lg rotate-0" 
          alt="Sally" 
        />
      </div>
    </div>
  );
}

export default About;
