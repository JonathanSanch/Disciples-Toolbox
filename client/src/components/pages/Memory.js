import React from 'react'
import '../../App.css'
import Grid from "@mui/material/Grid"
import { Paper, Typography } from '@mui/material'
import './Memory.css';
import Listbox from '../Listbox.js';

function Memory() {

  const typographyStyle = {
    fontFamily: 'Fugaz One', // Replace with your selected font family
    marginBottom: '10px',
  };

  const verseStyle = {
    fontStyle: 'italic',
    marginBottom: '15px',
  }

  return (

    <Grid container spacing={2}>
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Paper style={{ minHeight:'200px', borderRadius:'10px', padding: "40px", backgroundColor: "#594157", color:'#d0a4eb', margin:'45px'}} elevation={6}>
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
            <button class="cool-button">Add to Saved List</button>
          </Typography>
        </Paper>
      </Grid>
    {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ minHeight:'200px', borderRadius:'10px', backgroundColor:'#d0a4eb', color:'#594157', padding: '40px', margin: '45px' }}>
          <Typography variant='h4' textAlign="center" style={typographyStyle}>
              Saved List:
              <button class="cool-button-2">Clear list</button>
          </Typography> 
          <Grid container spacing={2}>
            <Listbox verseMessage="Trust in the Lord with all your heart, and 
            lean not on your own understanding." verseIndex="Proverbs 3:5"/>
            <Listbox verseMessage="Jesus wept." verseIndex="idk"/>
          </Grid>
        </Paper>
      </Grid>
    </Grid>

  )
}

export default Memory