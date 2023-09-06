import React from 'react';
import Logo from '../assets/logo.png'
const Header = () => {
  return <header className='py-6'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='lg:w-36 w-36 h-12  mix-blend-lighten overflow-hidden flex justify-between items-center rounded-full'> 
          <img src={Logo} className='border-teal-500 border-2  mix-blend-lighten rounded-full' alt="logo" />
        </div>
        <button className='btn btn-sm '>Get Cv</button>
      </div>
    </div>
  </header>;
};

export default Header;
