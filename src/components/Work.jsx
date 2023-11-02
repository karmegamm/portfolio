import React from 'react';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from "../assets/unijac.png"
import Img2 from "../assets/envirron.png"
import Img3 from "../assets/bookstore.png"
import {RiArrowRightCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Work = () => {
  return <section id='work' className='section '>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* {text} */}
          <div className='lg:h-[243px]'>
            <h2 className='lg:text-[55px] text-[30px] font-secondary font-medium leading-tight text-accent mb-3'>Projects Showcase</h2>
            <p className='max-w-sm mb-3 lg:mb-9 '>A JOURNEY THROUGH MY CREATIVE ACHIEVEMENTS
            </p>
            <button className='btn btn-sm'>View All Projects</button>
          </div>
          {/* {Image} */}
          <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[265px] lg:w-[500px]'>
            {/* {overlay} */}
            <div className='group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* {immage} */}
            <img className='group-hover:scale-125 transition-transform duration-700' src={Img3} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>E-Commerce Website</span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>K2 bookStore</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-1000 z-50'>
                <a className='flex justify-center items-center gap-3 bg-blue-gray-600 rounded-xl px-2' target='_blank' href="https://envirron.net"><span className=' text-white'>Goto</span> <RiArrowRightCircleFill color='white' className='h-5 w-5'/></a>
              </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-y-5'>
          <div className='lg:h-[265px] lg:w-[500px] group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* {immage} */}
              <img className='group-hover:scale-125 transition-transform duration-700' src={Img2} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>ERP Website</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Envirron  </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-1000 z-50'>
                <a className='flex justify-center items-center gap-3 bg-blue-gray-600 rounded-xl px-2' target='_blank' href="https://envirron.net"><span className=' text-white'>Goto</span> <RiArrowRightCircleFill color='white' className='h-5 w-5'/></a>
              </div>
          </div> 
          <div className='lg:h-[265px] lg:w-[500px] group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* {immage} */}
              <img className='group-hover:scale-125 transition-transform duration-700' src={Img1} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>web Devlopment</span>
                </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Unijac Technologies </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-1000 z-50'>
                <a className='flex justify-center items-center gap-3 bg-blue-gray-600 rounded-xl px-2' target='_blank' href="https://unijactech.com"><span className=' text-white'>Goto</span> <RiArrowRightCircleFill color='white' className='h-5 w-5'/></a>
              </div>
          </div> 
        </div>
      </div>
    </div>
  </section>;
};

export default Work;
