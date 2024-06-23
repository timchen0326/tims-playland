import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <div className='hover-sclatransition-transform duration-300 hover:scale-105 pointer-hover'>
        <Image 
          src="/IMG_4605.JPG" 
          width={150} 
          height={150} 
          className="mt-3 rounded-full shadow-lg rotate-image" 
          alt="Sally" 
        />
      </div>
    </div>
  );
}

export default About;
