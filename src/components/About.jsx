import React from 'react';
import CountUp from 'react-countup';
import {useInView } from 'react-intersection-observer';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { countDetails } from '../Data';

const About = () => {
  const [ref,inView] = useInView({
    threshold:0.5,
  })
  return <section id='about' className='section' ref={ref}>
    <div className="container mx-auto">
      <div
      className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen' >
        <motion.div  
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}} className='flex-1 bg-about bg-contain bg-no-repeat lg:h-[500px] mix-blend-lighten bg-top' ></motion.div>
          <motion.div 
           variants={fadeIn('left',0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4 '> I'm an Aspiring full stack web developer (MERN) </h3>
            <p className='mb-6  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae voluptas dolorum est dolorem quas non nostrum facere? Quam aspernatur excepturi sequi deleniti non, debitis corporis tempore voluptas cupiditate inventore!</p>
            <div className='flex gap-x-6 lg:gap-x-10'>
              {countDetails.map(({first,second,value},index)=>{
                        return  <div>
                                  <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                    {inView?<CountUp start={0} end={value} duration={3} />:0}+
                                  </div>
                                  <div className=' font-primary text-sm tracking-[2px]'>
                                  {first}<br /> {second}
                                  </div>
                              </div> 
                        })}
            </div>
          </motion.div>
        </div>
      </div>
      <div>  
    </div>
  </section>;
  
};

export default About;
