import React from 'react'
import { Container, Grid, Paper, TextField, Button, List, ListItem, ListItemButton, Typography,ListItemText } from '@mui/material'
import { useState, useEffect } from 'react'
import {IconButton} from '@mui/material'
import {Delete} from '@mui/icons-material'

import "../Journal.css"


function Journal() {
    const [items, setItems] = useState([]); // Initialize an empty array to store items
    const [inputValue, setInputValue] = useState(''); // Initialize an empty string for input value

    const addItemToList = () => {
        if (inputValue.trim() !== '') {
          // Check if the input value is not empty
          setItems([...items, inputValue]); // Append the input value to the list
          setInputValue(''); // Clear the input field
        }
      };
    
      const handleDelete = (deleteJournal) => {

        const updatedItems = items.filter((item, index) => index !== deleteJournal);
        setItems(updatedItems);
      }

      //Getting Date
      const currentDate = new Date();
      const currentDateString = currentDate.toLocaleDateString(undefined);

    const [journals, setJournals] = useState([{}]);
    useEffect(() => {
    fetch("/journals").then(
        response => response.json()
    ).then(
        data => {
        setJournals(data)
        }
    )
    }, [])


    const [create, setCreate] = useState(true);
    const createJournalEntry = () => {
        if (create) {
            if (inputValue.trim() !== '') {
                // Check if the input value is not empty
                setItems([...items, inputValue]); // Append the input value to the list
                setInputValue(''); // Clear the input field
                setCreate(!create)
            }
        }
    };


  return (
    
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <Button
            variant="contained"
            color="success"
            size="large"
            style={{ marginTop: '10px' }}
            fullWidth
            onClick={createJournalEntry}>
            {(create === true) ? ( <>Create Your Journal</>): (<>Edit Your Journal</>)}
        </Button>

        <Paper style={{ padding: '20px' , backgroundColor:"#CAD2C5"}}>
            <Typography variant='h4'>{currentDateString}</Typography>
            <TextField
              fullWidth
              label="Journal Entry"
              variant="outlined"
              multiline
              rows={20}
              placeholder="Whats on your mind..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
        </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' , backgroundColor:"#CAD2C5", marginBottom: "20px"}}>
            <Typography id='title' variant='h2' textAlign="center" color="black">Journal Entries</Typography>
            {(typeof journals === 'undefined') ? (
                <p></p>
            ): (
                <ul>
                    {journals.map((item, index) => (
                        <Button><li key={index}>{item.date}</li></Button> // Replace "name" with the key in your API response
                    ))}
                </ul>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Journal
