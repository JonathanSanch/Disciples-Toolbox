import React from 'react'
import './Footer.css';
import  {Button}  from "../components/Button";
import {Link} from 'react-router-dom'
import { Typography } from '@mui/material'

function Footer() {
  const iconStyle = {
    color: '#879fa8', 
    // display: 'inline-block',
    fontSize: '1.3em',
  };

  return (
    <header>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-github" style={iconStyle}></i>
          <Typography id="github">Github</Typography>
          </Typography>
        </Link>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-youtube" style={iconStyle}></i>
          <Typography id="github">YouTube</Typography>
          </Typography>
        </Link>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-facebook" style={iconStyle}></i>
          <Typography id="github">Facebook</Typography>
          </Typography>
        </Link>
        <Link to='/' className='link' id="title_link" style={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
        <Typography variant='h5'>
        <i class="fa-brands fa-linkedin" style={iconStyle}></i>
          <Typography id="github">Linkedin</Typography>
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
