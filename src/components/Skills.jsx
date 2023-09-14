import React from 'react';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { skills } from '../Data';
import {RiProjectorFill} from 'react-icons/ri'
import { Link } from 'react-scroll';


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
            <h2 className='font-semibold lg:text-[50px] text-[30px] font-secondary text-accent/90 mb-6'>Expertise Highlights</h2>
            <h3 className='font-secondary justify-start text-[20px] max-w-[455px] mb-16 text-white/90'>In the <span className='text-white font-medium text-ellipsis'>Realm of Coding</span> , I'm a <span className='text-yellow-400 font-medium'>maestro👑</span>  so rare, Weaving tech symphonies with expertise to spare.</h3>
            <Link smooth={true} to={"work"} className='btn btn-md px-4 font-secondary flex  justify-center items-center gap-2 w-32 cursor-pointer'><RiProjectorFill className='text-white' />Projects</Link>
          </motion.div>

          <motion.div 
           variants={fadeIn('left',0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:false,amount:0.7}} 
          className='flex-1'>
            <div>
              {skills.map(({heading,icons},index)=>{
                return (
                  <div className=' h-[120px]  flex my-2' key={index}>
                    <div className='max-w-[470px]'>
                      <h4 className='text-[23px] -tracking-normal font-tertiary text-white/80 font-medium mb-3'>{heading}</h4>
                      <div className='ml-4 flex flex-wrap gap-3 justify-start items-center '>
                        {icons.map((icon,index)=>{
                          return <img className='lg:w-11 lg:h-11 h-9 w-9 lg:opacity-80 lg:hover:opacity-100 ' src={icon} key={index} alt="img" />
                        })}
                      </div>
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
