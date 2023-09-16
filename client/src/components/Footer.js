import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react';

function Footer() {
  const iconStyle = {
    color: '#879fa8', 
    // display: 'inline-block',
    fontSize: '1.3em',
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
    display: windowWidth > 650 ? 'inline' : 'none',
  };

  return (
    <header id="foot">
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-github" style={iconStyle}></i>
          <Typography class="thing" style={titleStyle}>Github</Typography>
          </Typography>
        </Link>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-youtube" style={iconStyle}></i>
          <Typography class="thing" style={titleStyle}>YouTube</Typography>
          </Typography>
        </Link>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-facebook" style={iconStyle}></i>
          <Typography class="thing" style={titleStyle}>Facebook</Typography>
          </Typography>
        </Link>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-linkedin" style={iconStyle}></i>
          <Typography class="thing" style={titleStyle}>Linkedin</Typography>
          </Typography>
        </Link>
        {/*
        <Typography variant='p' className='par'>
          <h2>{currentDateString}</h2>
          </Typography>
        <nav>
          <Typography variant='p' className='par'>
          <h2>Powered by Bun.js!</h2>
          </Typography>
        </nav>
        */}
    </header>
  )
}

export default Footer
