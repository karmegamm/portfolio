import React from 'react';
import {BiHome,BiSolidUserCircle,BiCustomize,BiPhoneCall} from 'react-icons/bi'
import { FaJediOrder } from "react-icons/fa";
import { Link } from 'react-scroll';
const Nav = () => {
  

  return <nav className='fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50'>
    <div  className='container mx-auto'>
      <div className='w-full bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[400px] mx-auto px-5 py-1 flex justify-between text-2xl text-white/10'>
        <Link activeClass='active'  smooth={true} spy={true} offset={-210} to='home' className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <BiHome/>
        </Link>
        <Link activeClass='active'  smooth={true} spy={true} to='about' className='cursor-pointer w-[50px] h-[50px]  flex justify-center items-center'>
          <BiSolidUserCircle/>
        </Link>
        <Link activeClass='active'  smooth={true} spy={true} to='services' className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <FaJediOrder/>
        </Link>
        <Link activeClass='active' smooth={true} spy={true} to='work' className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <BiCustomize/>
        </Link>
        <Link activeClass='active'smooth={true} spy={true} to='contact' className='cursor-pointer w-[50px] h-[50px] flex justify-center items-center'>
          <BiPhoneCall/>
        </Link>
      </div>
    </div>
  </nav>
};

export default Nav;
