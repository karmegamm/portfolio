import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Skills from './components/Skills';
import LoadingSpinner from './components/Loading';
import AnimatedCursor from "react-animated-cursor"
import bgImagePath from "./assets/site-bg-min.jpg"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // window.onload = () => {
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoading(false);
  //   };
  //   // Use window.onload to wait for all assets to be loaded
  //   setTimeout(handleLoad,3000)

  //   // Cleanup the event listener
  //   return () => {
  //     clearTimeout(handleLoad)
  //   };
  // }, []);

  return (
    <>
      <img 
        src={bgImagePath} 
        alt="Background" 
        onLoad={() => setIsLoading(false)}
        style={{ display: 'none' }} 
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='relative bg-site bg-no-repeat bg-cover overflow-hidden'>
          <Header />
          <Banner />
          <Nav />
          <About />
          <Skills />
          <Work />
          <Contact />
          {/* <div className='h-[4000px]'></div> */}
        </div>
      )}
     <AnimatedCursor
        innerSize={8}
        outerSize={34}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        outerStyle={{
          border: '2px solid #7C00A4 ',
          backgroundColor:'transparent',
          opacity:1
        }}
        innerStyle={{
        backgroundColor: '#fff'
        }}
      />
    </>
  );
}

export default App;
