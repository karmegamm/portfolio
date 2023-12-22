import React from 'react';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { skills } from '../Data';
import {RiProjectorFill} from 'react-icons/ri'
import { Link } from 'react-scroll';
import "../skills.css"
import SkillAnimo from '../assets/skillanimo.svg'

const Skills= () => {
  return <section id='skills' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row ' >
          <motion.div 
           variants={fadeIn('right',0.3)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:true,amount:0.7}} 
          className='flex-1 lg:bg- lg:bg-bottom  bg-no-repeat mix-blend-lighten mt-12 lg:mb-0'>
            <h2 className='font-semibold lg:text-[50px] text-[30px] font-primary text-accent mb-6'>Expertise Highlights</h2>
            <h3 className='font-secondary justify-start text-[20px] max-w-[455px] mb-5 text-white/90'>In the <span className='text-white font-medium text-ellipsis'>Realm of Coding</span> , I'm a <span className='text-yellow-400 font-medium'>maestro👑</span>  so rare, Weaving tech symphonies with expertise to spare.</h3>
            {/* <Link smooth={true} to={"work"} className='btn btn-md px-4 font-secondary flex  justify-center items-center gap-2 w-32 cursor-pointer'><RiProjectorFill className='text-white' />Projects</Link> */}
            <img src={SkillAnimo} className='lg:ml-12  w-96 h-96' alt="a skil" />

          </motion.div>

          <motion.div 
           variants={fadeIn('left',0.5)} 
           initial="hidden" 
           whileInView={'show'} 
           viewport={{once:true,amount:0.7}} 
          className='flex-1'>
            <div>
                  <div className=' lg:h-[120px]  flex my-2'>
                    <div className='lg:w-[472px]'>
                      <h4 className='text-[23px] -tracking-normal font-tertiary text-white/80 font-medium mb-3'>{skills['program']?.heading}</h4>
                      <div className='scrolling-wrapper  flex justify-start items-center w-auto  lg:h-[80px] lg:rounded-2xl ' >
                      <div className=' scroll-animation flex gap-3 justify-start items-center '>
                        {[...skills['program'].icons,...skills['program'].icons]?.map((icon,index)=>{
                          return <img className='lg:w-14 lg:h-14 h-9 w-9 transition-transform duration-300 hover:scale-125  hover:opacity-100 ' src={icon} key={index} alt="img"/>
                        })}
                      </div>
                      </div>
                    </div>
                    <div></div> 
                  </div>
                  <div className=' lg:h-[120px]  flex my-2'>
                    <div className='lg:w-[475px]'>
                      <h4 className='text-[23px] -tracking-normal font-tertiary text-white/80 font-medium mb-3'>{skills['libraries']?.heading}</h4>
                      <div className='scrolling-wrapper  flex justify-start items-center w-auto  lg:h-[80px] lg:rounded-2xl '>
                      <div className='scroll-animation  flex gap-3 justify-start items-center '>
                        {[...skills['libraries'].icons,...skills['libraries'].icons]?.map((icon,index)=>{
                          return <img className='lg:w-14 lg:h-14 h-9 w-9 hover:scale-125 transition-transform duration-300  hover:opacity-100 ' src={icon} key={index} alt="img"/>
                        })}
                      </div>
                      </div>
                    </div>
                    <div></div> 
                  </div>
                  <div className='lg:h-[120px] flex my-2'>
                    <div className='w-auto'>
                      <h4 className='text-[23px] -tracking-normal font-tertiary text-white/80 font-medium mb-3'>{skills['dataBases']?.heading}</h4>
                      <div className='scrolling-wrapper  flex justify-start items-center  lg:h-[80px] lg:rounded-2xl  w-[210px]'>
                      <div className=' scroll-animation2 flex gap-5 justify-start items-center w-full'>
                        {[...skills['dataBases'].icons,...skills['dataBases'].icons]?.map((icon,index)=>{
                          return <img className='lg:w-14 lg:h-14 h-9 w-9 hover:scale-125 transition-transform duration-300  hover:opacity-100 ' src={icon} key={index} alt="img"/>
                        })}
                      </div>
                      </div>
                    </div>
                    <div></div> 
                  </div>
                  <div className=' lg:h-[120px]  flex my-2'>
                    <div className='lg:w-[684px]'>
                      <h4 className='text-[23px] -tracking-normal font-tertiary text-white/80 font-medium mb-3'>{skills['others']?.heading}</h4>
                      <div className='scrolling-wrapper  flex justify-start items-center w-auto  lg:h-[80px] lg:rounded-2xl '>
                      <div className='scroll-animation flex gap-3 justify-start items-center '>
                        {[...skills['others'].icons,...skills['others'].icons]?.map((icon,index)=>{
                          return <img className='lg:w-14 lg:h-14 h-9 w-9 transition-transform duration-300 hover:scale-125  hover:opacity-100 ' src={icon} key={index} alt="img"/>
                        })}
                      </div>
                      </div>
                    </div>
                    <div></div> 
                  </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default Skills;
