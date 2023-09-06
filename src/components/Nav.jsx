import React from 'react';
import {BiHome,BiSolidUserCircle} from 'react-icons/bi'
import { Link } from 'react-scroll';
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div  className='container mx-auto'>
      <div className='w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[470px] mx-auto px-5 flex justify-between text-2xl text-white/10'>
        <Link activeClass='active' smooth={true} spy={true} to='home' className='cursor-pointer w-[60px] flex justify-center items-center'>
          <BiHome/>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='about' className='cursor-pointer w-[60px] flex justify-center items-center'>
          <BiSolidUserCircle/>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='services' className='cursor-pointer w-[60px] flex justify-center items-center'>
          <BiSolidUserCircle/>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='work' className='cursor-pointer w-[60px] flex justify-center items-center'>
          <BiSolidUserCircle/>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='contact' className='cursor-pointer w-[60px] flex justify-center items-center'>
          <BiSolidUserCircle/>
        </Link>
      </div>
    </div>
  </nav>
};

export default Nav;
