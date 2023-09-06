import React from 'react';
import  {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from "../variants"
import Image from "../assets/avatar.svg"
import { social } from '../Data';
import {Link} from 'react-scroll'

const Banner = () => {
  return <section id='home' className='section min-h-[85vh] lg:min-h-[78vh]'>
    <div className="container mx-auto -mt-28">
      <div className='flex flex-col  lg:flex-row lg:items-center lg:justify-between '>
        <div  className='flex-1 text-center font-secondary lg:text-left '>
          <h1 className='text-[55px] font-bold leading-[0.7] lg:text-[65px]'>KAR <span>MEGAM</span></h1>
            <div className='mb-3 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
            <span>I<span className='text-accent lg:text-[50px]'>'</span>m an Aspiring  </span>
            <TypeAnimation 
            sequence={[
              'Web Developer',2000,
              'MERN',2000,
              'Developer',2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </div>
          <p className='mb-3 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum cum laboriosam quia quis rerum cupiditate dignissimos officia,  nobis.</p>
          <div className='mb-4'>
              <Link smooth={true} to='contact' className='btn btn-lg p-3'>Contact me</Link>
          </div>
          <div className='mt-3 flex text-[20px] gap-x-6  mx-auto  items-center  lg:mx-0'>
            {social.map(({href,icon},index)=>{
              return <a className='text-white/70' key={index} href={href}>{icon}</a>
            })}
          </div> 
        </div>
        <div className='w-[38%]'>
          <img className='h-[80%] ' src={Image} alt={"profile"} />
        </div>
      </div>

    </div>
  </section>;
};

export default Banner;
