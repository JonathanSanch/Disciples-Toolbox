import React from 'react'
import '../App.css'
import Container from '@mui/material/Container'
// import Box from "@mui/material/Box"
import bibleImg from "../images/bible.jpg"
import sermonImg from "../images/sermons.jpg"
import prayerImg from "../images/prayer.jpg"
import journalImg from "../images/journal.jpg"
import Grid from "@mui/material/Grid"
import { Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Card from './Card'


function HeroSection() {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const [verseOtd, setVerseOtd] = useState([{}])

    useEffect(() => {
        fetch("https://beta.ourmanna.com/api/v1/get?format=json&order=daily").then(
            response => response.json()
        ).then(
            data => {
                setVerseOtd(data)
            }
        )
    }, [options])

    return (
        <Container maxWidth= "xl">
            <Grid container spacing={2} className='verse_container'>
            <Grid item xs={12}  md={5} >
                <ThemeProvider>
                <Box sx={{
                        width: 500,
                        padding: '30px',
                        paddingTop: "215px",
                        paddingLeft:"100px",
                        color: '#cad2c5',
                        alignItems: "center",
                        '&:hover':{
                            backgroundColor:"primary.light",
                        },
                        justifyContent:"center"
                    }}>
                        <Typography variant='h4' textAlign="center">
                            Verse of the Day:
                        </Typography>
                        <Typography variant='h6'>
                          <div>
                            {(typeof verseOtd.verse === 'undefined') ? (
                              <p></p>
                            ): (
                              <p>{verseOtd.verse.details.text}</p>
                            )}
                          </div>
                          <div>
                            {(typeof verseOtd.verse === 'undefined') ? (
                              <p></p>
                            ): (
                              <p>{verseOtd.verse.details.reference}</p>
                            )}
                          </div>
                        </Typography>
                    </Box>
                </ThemeProvider>
            </Grid>
            <Grid item xs={12} md={4}  className="verse_container">
                <Box sx={{
                    width: 800,
                    padding: "20px",
                    color: "#CAD2C5",
                }}>
                <Typography variant='h4' textAlign="center" marginBottom="20px">Bible Dashbaord</Typography>
                <Box display="flex" justifyContent="space-around" marginBottom="50px" xs={12} sm={10} md={8} lg={6}>
                <Card image={bibleImg} alt="Bible image" title= "Bible" description="Explore our awesome Bible API"/>
                <Card image={sermonImg} alt="Sermon image" title= "Sermon" description="Explore our awesome sermons!"/>
                </Box>
                <Box display="flex" justifyContent="space-around"xs={12} sm={10} md={8} lg={6}>
                <Card image={prayerImg} alt="Prayer image" title= "Prayer" description="Join with us in prayer."/>
                <Card image={journalImg} alt="Journal image" title= "Journal" description="Take notes about your life." path='/journal'/>
                </Box>
                </Box>
            </Grid>
        </Grid>
        </Container>

    )
}

export default HeroSection
