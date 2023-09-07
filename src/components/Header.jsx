import React from 'react';
import Logo from '../assets/logo.png'
import { SiAzurefunctions } from "react-icons/si";

const Header = () => {
  return <header className='py-6'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='lg:w-36 w-36 h-12  mix-blend-lighten overflow-hidden flex justify-between items-center rounded-full'> 
          <img src={Logo} className='border-teal-500 border-2  mix-blend-lighten rounded-full' alt="logo" />
        </div>
        <button className='btn px-4 py-0.5 font-secondary lg:text-[20px] flex justify-evenly items-center gap-x-2'><SiAzurefunctions/>Get Cv</button>
      </div>
    </div>
  </header>;
};

export default Header;
