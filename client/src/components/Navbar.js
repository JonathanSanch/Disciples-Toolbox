import { Typography } from '@mui/material'
import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

function Navbar() {
  const iconStyle = {
    color: '#cad2c5', 
    display: 'inline-block',
    textDecoration: 'none',
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the component mounts and when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const titleStyle = {
    display: windowWidth > 800 ? 'inline' : 'none',
  };

  // Define a function to determine date options based on screen width
  const getDateOptions = () => {
    if (windowWidth > 900) {
      return {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    } else {
      return {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
    }
  };

  const currentDate = new Date();
  const dateOptions = getDateOptions();
  const currentDateString = currentDate.toLocaleDateString(undefined, dateOptions);

  return (
    <>
      <header>
        <Link to='/' className='link' id="title_link" style={{textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-lg fa-solid fa-book-bible title-elements" style={iconStyle}></i>
          <Typography id="disciples-toolbox" style={titleStyle} >DISCIPLE'S TOOLBOX</Typography>
          </Typography>
        </Link>
        <Typography variant='p' className='par'>
          <h2>{currentDateString}</h2>
          </Typography>
        <nav>
          <Typography variant='p' className='par'>
          <h2>Powered by Bun.js!</h2>
          </Typography>
        </nav>
      </header>
    </>
  )
}

export default Navbar
