import React from 'react';
import  {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from "../variants"
import Image from "../assets/avatar.svg"
import { social } from '../Data';
import {Link} from 'react-scroll'
import { GoRocket } from "react-icons/go";

const Banner = () => {
  return <section id='home' className='section min-h-[85vh] lg:min-h-[78vh]'>
    <div className="container mx-auto -mt-28">
      <div className='flex flex-col  lg:flex-row lg:items-center lg:justify-between '>
        <div  className='flex-1 text-center font-secondary lg:text-left '>
          <motion.h1 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once:false,amount:0.7}} 
            className='text-[55px] font-bold leading-[0.7] lg:text-[65px]'
          >KAR <span>MEGAM</span></motion.h1>
            <motion.div 
             variants={fadeIn('up',0.4)} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once:false,amount:0.7}} 
            className='mb-3 text-[33px] lg:text-[35px] font-secondary font-semibold uppercase leading-[1]'>
              <span>I<span className='text-accent lg:text-[50px]'>'</span>m an Aspiring </span>
              <TypeAnimation 
              sequence={[
                'Web Developer',2000,
                'MERN Stack Developer',2000,
                'FULL Stack Developer',2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
          <motion.p 
           variants={fadeIn('up',0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}} 
          className='mb-4 max-w-lg mx-auto lg:mx-0 lg:leading-[1.5] leading-[1.3]'>A Web wizard crafting caffeine into code,sprinkling creativity and pixel-perfect precision,enriching every online adventure.</motion.p>
          <motion.div
           variants={fadeIn('up',0.6 )} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}}  
           className='mb-5 flex justify-center lg:justify-between items-center '>
              <Link smooth={true} to='contact' className='btn btn-sm p-3 font-secondary text-xl flex justify-between items-center gap-x-3 '>Contact me <GoRocket className='animate-pulse'/></Link>
          </motion.div>
          <motion.div 
           variants={fadeIn('up',0.7)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}} 
           className='mt-10 flex justify-center lg:justify-start text-[25px] gap-x-5  mx-auto  items-center  lg:mx-0'>
            {social.map(({href,icon},index)=>{
              return <a className='text-white/70 hover:text-white' key={index} href={href}>{icon}</a>
            })}
          </motion.div> 
        </div>
        <motion.div 
        variants={fadeIn('down',0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        className='hidden  lg:flex flex-1 lg:mx-w-[420px] mx-auto max-w-[320px]'>
          <img className=' ' src={Image} alt={"profile"} />

        </motion.div>
      </div>

    </div>
  </section>;
};

export default Banner;
