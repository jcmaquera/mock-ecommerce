import React from 'react';

import MyLogo from '../img/image1.png';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[400px] bg-gradient-to-r from-yellow-500 to-orange-500 bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* text */}
      <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div className='font-semibold flex items-center uppercase'>
        </div>
        {/* title */}
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
          Mock E-Commerce <br />
        </h1>
      </div>
      {/* image */}
      <div className='hidden lg:block'>
        <img className='h-[280px]' src={MyLogo} alt='' />
      </div>
    </div>
  </section>
  );
};

export default Hero;
