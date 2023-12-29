import React from 'react';
import {motion } from 'framer-motion';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,Textarea
} from "@material-tailwind/react";
import { BiLogoTelegram } from 'react-icons/bi'; 
import gif from '../assets/ji.svg'
import { fadeIn } from '../variants';

const Contact = () => {
  return <section id='contact' className='mb-[100px] md:mb-0 lg:section '>
    <div className="container mx-auto ">
      <div className='flex flex-col lg:flex-row justify-between gap-10 mt-10 md:mt-0'>
        <motion.div 
        variants={fadeIn('right',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:true,amount:0.7}} 
        className='md:w-[40%] h-full flex justify-center items-center'  >
          <img className='h-full w-full' src={gif} alt="" />
        </motion.div> 
        <motion.div 
        variants={fadeIn('left',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once:true,amount:0.7}} 
        className='md:w-[34%] p-2'>
          <div >
            <h4 className='text-3xl  uppercase text-accent font-bold mb-5 t '>Get in touch</h4>
          </div>
          <Card shadow={true} className='rounded-xl flex justify-center items-center shadow-lg px-6 h-auto pb-3 md:w-[25rem] md:h-[26rem] bg-gray-900 bg-clip-padding backdrop-filter md:backdrop-blur-3xl bg-opacity-30 ' >
            <div className="mt-8 mb-5 md:w-80 ">
              <div className="mb-8 flex flex-col gap-6 ">
                <Input color='purple' className='text-white font-secondary font-bold text-md' label="Name" size="lg" />
                <Input color='purple' className='text-white font-secondary font-bold text-md'   label="Email Address" size="lg"  />  
                <Textarea color='purple' className='text-white font-secondary font-bold text-md' label="What's a matter ? "  />
              </div>
              <div className='flex justify-center items-center '>
                <Button className="mt-2 flex justify-center items-center gap-3" color='deep-purple' variant='gradient' size='sm' >
                  <span>send</span><BiLogoTelegram className='w-7 h-7'/>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>   
      </div >
    </div>
  </section>

};

export default Contact;
