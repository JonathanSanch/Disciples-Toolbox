import React from 'react'
import '../../App.css'
import Container from '@mui/material/Container'
import Grid from "@mui/material/Grid"
import { Paper, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import './Memory.css';
import Listbox from '../Listbox.js';
import Card from '../Card.js';

function Memory() {

  const typographyStyle = {
    fontFamily: 'Fugaz One', // Replace with your selected font family
  };

  const verseStyle = {
    fontStyle: 'italic',
    marginBottom: '15px',
  }

  return (

    <Grid container spacing={2}>
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: "40px", backgroundColor: "#594157", color:'#d0a4eb', margin:'45px'}} elevation={6}>
          <Typography variant='h4' textAlign="center" style={typographyStyle}>
              Memory Scripture:
          </Typography>
          <Typography variant='h6' marginTop='15px'>
            <div>
              <p style={verseStyle}>All glory to God, who is able, through His mighty power at work within us, to accomplish
              infintely more than we might ask or think.</p>
            </div>
            <div style={{marginBottom:'15px'}}>
              <p>Ephesians 3:20 NLT</p>
            </div>
          </Typography>
          <Typography style={{textAlign: 'center'}}>
            <button class="cool-button">New Scripture</button>
          </Typography>
        </Paper>
      </Grid>
    {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '40px', margin: '45px' }}>
          <Typography variant='h4' textAlign="center" style={typographyStyle}>
              Saved List:
          </Typography> 
          <Grid container spacing={2}>
            <Listbox message="hi"/>
            <Listbox message="is there anybody out there?"/>
          </Grid>
        </Paper>
      </Grid>
    </Grid>

  )
}

export default Memory