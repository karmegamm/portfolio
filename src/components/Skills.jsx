import React from 'react';
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { skills } from '../Data';



const Skills= () => {
  return <section id='services' className='section'>
      <div className="container mx-auto">
        <div>
          <div className='flex-1 lg:be-services '>
            <h2 className='h2 text-accent mb-6'>In what im specialised In.</h2>
            <h3 className='h3 max-w-[455px] mb-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum officiis, est aliquam temporibus </h3>
            <button className='btn btn-sm '>Go To Projects</button>
          </div>
          <div>skills</div>
        </div>
      </div>
    </section>;
};

export default Skills;
