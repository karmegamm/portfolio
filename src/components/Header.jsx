import React from 'react';
import { SiAzurefunctions } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

const Header = () => {
  return <header className='py-8'>
    <div className='md:px-20 mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='relative content -top-3 left-16'> 
          <h2 className='absolute font-bold text-white/80 text-[3em]'>MK</h2>
          <h2 className='absolute font-bold text-white/80 text-[3em]'>MK</h2>
          <div className='absolute text-[12px] -rotate-90 left-[59px] -top-1 font-extrabold text-gradient tracking-[2px]'>DEV</div>
          <HiOutlineCode className='absolute -left-12 -top-2 text-[45px] text-accent'/>
        </div>
        <button className='btn px-4 py-0 font-secondary lg:text-[20px] flex justify-evenly items-center gap-x-2'><SiAzurefunctions/>Get Cv</button>
      </div>
    </div>
  </header>;
};

export default Header;
