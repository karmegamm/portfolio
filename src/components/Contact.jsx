import React from 'react';
import {motion } from 'framer-motion';
import  { } from '../variants'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,Textarea
} from "@material-tailwind/react";
import { BiLogoTelegram } from 'react-icons/bi'; 
import gif from '../assets/ji.svg'

const Contact = () => {
  return <section id='contact' className='mb-[100px] md:mb-0 lg:section '>
    <div className="container mx-auto ">
      <div className='flex flex-col lg:flex-row justify-evenly gap-10 '>
        <div className='w-[40%] h-full flex justify-center items-center'  >
          <img className='' src={gif} alt="" />
        </div> 
        <div className='md:w-[34%] p-2'>
          <div >
            <h4 className='text-3xl  uppercase text-purple-500/70 font-bold mb-5 t '>Get in touch</h4>
          </div>
          <Card shadow={true} className='rounded-xl shadow-lg px-6 h-auto pb-3 w-[23rem] bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 ' >
            <div className="mt-8 mb-2 w-80 ">
              <div className="mb-1 flex flex-col gap-6 ">
                <Input color='blue-gray' variant='static' label="Email" size="lg" />
                <Input color='blue-gray' variant='static'  label="Password" size="lg"  />  
                <Textarea variant="static" color='blue-gray' label="Static"  />
              </div>
              <div className='flex justify-center items-center'>
                <Button className="mt-2 flex justify-center items-center gap-3" color='deep-purple' variant='gradient' size='sm' >
                  <span>send</span><BiLogoTelegram className='w-7 h-7'/>
                </Button>
              </div>
            </div>
          </Card>
        </div>   
      </div >
    </div>
  </section>

};

export default Contact;
