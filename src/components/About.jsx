import React from 'react';
import CountUp from 'react-countup';
import {useInView } from 'react-intersection-observer';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { countDetails,aboutDescription } from '../Data';
import { Link } from 'react-scroll';
import {GiCityCar,GiCrossMark} from 'react-icons/gi'

const About = () => {
  const [readmore,setReadMore ] = React.useState(false);
  const [ref,inView] = useInView({
    threshold:0.5,
  })
  return <section id='about' className='section' ref={ref}>
    <div className="container mx-auto lg:-mt-24">
      <div
      className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen' >
        <motion.div  
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}} 
          className='flex-1 mt-9'>
            <h2 className='font-semibold text-[45px] font-secondary text-accent/90 mb-7'>Myself</h2>
            <p className='text-[15px] mb-5 leading-6 lg:min-h-[160px] text-white/90'>&ensp;&ensp;&ensp;&ensp;{readmore? aboutDescription[0]+aboutDescription[1]:aboutDescription[0]}
              <span className='ml-2 text-cyan-500 font-semibold hover:underline underline-offset-2 opacity-40 hover:opacity-100' onClick={()=>setReadMore(!readmore)}>{readmore?"Read Less...":"Read More..."}</span> 
            </p>
            <div className='flex gap-x-0 lg:justify-start lg:gap-x-8  items-center'>
              <Link smooth={true} to={"skills"} className='btn btn-md px-4 font-secondary flex  justify-center items-center gap-2 cursor-pointer'><GiCrossMark/>Skills</Link>
              {/* <Link smooth={true} to={"home"} className='btn btn-md px-4 font-secondary flex  justify-center items-center gap-2'>Wanna See me<GiCityCar/></Link> */}
            </div>
        </motion.div>

        <motion.div 
           variants={fadeIn('left',0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.3}}
            className='flex-1 lg:mt-10'>
            {/* <h2 className='h2 text-accent font-primary font-bold'>Count ups</h2> */}
            <h3 className='h3 text-white/95  mb-6 leading-8 font-secondary  font-medium uppercase text-[30px] '>I'm the ♨️ Spark that Ignites Connections Everywhere. </h3>
            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-10  lg:max-w-[600px]'>
              {countDetails.map(({first,second,value,img},index)=>{
                        return  <div key={index} className='flex justify-center items-center gap-2  p-1'>
                                  <img src={img} className='h-12 w-12' alt="sds" />
                                  <div className=' flex-col items-start'>
                                    <div className=' text-[25px] font-tertiary   text-gradient '>
                                      {inView?<CountUp start={0} end={value} duration={3} />:0}+
                                    </div>
                                    <div className='font-secondary text-white/80 text-sm tracking-[1px]'>
                                    {first}<br /> {second}
                                    </div>
                                    
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
