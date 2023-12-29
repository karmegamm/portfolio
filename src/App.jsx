import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Skills from './components/Skills';
import LoadingSpinner from './components/Loading';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  window.onload = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    // Use window.onload to wait for all assets to be loaded
    setTimeout(handleLoad,5000)

    // Cleanup the event listener
    return () => {
      clearTimeout(handleLoad)
    };
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
