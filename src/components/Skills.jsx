import React from 'react';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { skills } from '../Data';



const Skills= () => {
  return <section id='skills' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row' >
          <motion.div 
           variants={fadeIn('right',0.3)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}} 
          className='flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>In what im specialised In.</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum officiis, est aliquam temporibus </h3>
            <button className='btn btn-sm '>Go To Projects</button>
          </motion.div>

          <motion.div 
           variants={fadeIn('left',0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}} 
          className='flex-1'>{}
            <div>
              {skills.map(({name,description,link},index)=>{
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px]  flex ' key={index}>
                    <div className='max-w-[470px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold  mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight  mb-2'>{description}</p>
                    </div>
                    <div></div> 
                  </div>
                )  
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default Skills;
