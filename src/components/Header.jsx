import React from 'react';
// import Logo from '../assets/cover.png'
import { SiAzurefunctions } from "react-icons/si";
// import Logo from '../assets/cover.svg'

const Header = () => {
  return <header className='py-6'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='lg:w-36 w-36 h-12   overflow-hidden flex justify-between items-center rounded-full'> 
          {/* <img src={Logo} className= 'mix-blend-lighten rounded-full' alt="logo" /> */}
          <h3></h3>
        </div>
        <button className='btn px-4 py-0. font-secondary lg:text-[20px] flex justify-evenly items-center gap-x-2'><SiAzurefunctions/>Get Cv</button>
      </div>
    </div>
  </header>;
};

export default Header;
