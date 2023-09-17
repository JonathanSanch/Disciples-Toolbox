import React from 'react'
import { Container, Grid, Paper, TextField, Button, List, ListItem, ListItemButton, Typography,ListItemText } from '@mui/material'
import { useState, useEffect } from 'react'
import {IconButton} from '@mui/material'
import {Delete} from '@mui/icons-material'
import {Comment} from '@mui/icons-material'

import "../Journal.css"


function Journal() {
    const [inputValue, setInputValue] = useState('');

    const currentDateString = new Date().toLocaleDateString(undefined);

    const [journals, setJournals] = useState([{}]);
    const getJournals = () => {
        fetch("/journals").then(
            response => response.json()
        ).then(
            
            data => {
            setJournals(data)
            console.log(data)
            }
        )
    }

    useEffect(() => {getJournals()}, [])

    const [create, setCreate] = useState(true);
    const createJournalEntry = () => {
        if (create) {
            let data = {
                "date": currentDateString,
                "text": inputValue
            }
            fetch("/journals", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error("Failed to add journal entry");
                }
                console.log("Journal entry added successfully");
                setInputValue('');
                getJournals();
            })
            .catch((error) => {
                console.error("Error adding journal entry:", error);
            });
        }
    }

    const [journalId, setJournalId] = useState('');
    const [dateTime, setDateTime] = useState(currentDateString);
    const loadJournalEntry = (index, id) => {
        setCreate(false);
        setDateTime(journals[index].date);

        if (typeof journals != 'undefined') {
            setInputValue(journals[index].text);
            setJournalId(id);
        }
    }

    const editJournalEntry = () => {
        fetch(`/journals/${journalId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: inputValue}),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update journal entry");
                }
            console.log("Journal entry updated successfully");
        })
        .catch((error) => {
            console.error("Error updating journal entry:", error);
        });
        getJournals();
    }

    const deleteJournalEntry = (id) => {
        const instanceId = id;
  
        // Send the DELETE request
        fetch(`/journals/${instanceId}`, {
            method: "DELETE",
            params: instanceId
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to delete journal entry");
            }
            console.log("Journal entry deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting journal entry:", error);
        });
    };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
        <Button
            variant="contained"
            size="large"
            style={{ marginTop: '10px'}}
            className='jButt'
            fullWidth
            onClick={(create === true) ? (createJournalEntry): (editJournalEntry)}>
            {(create === true) ? ( <>Create A Journal Entry</>): (<>Edit Your Journal Entry</>)}
        </Button>

        <Paper style={{ padding: '20px' , backgroundColor:"#CAD2C5"}}>
            <Typography variant='h4'>{dateTime}</Typography>
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
          <Paper style={{ padding: '20px' , backgroundColor:"#CAD2C5", marginBottom: "20px", marginTop: "10px"}}>
            <Typography id='title' variant='h2' textAlign="center" color="black">Journal Entries</Typography>
            {(typeof journals === 'undefined') ? (
                <p></p>
            ): (
                <ul className='journalEntries'>
                    {journals.map((item, index) => (
                        <li key={index}>
                        <Container>
                            <ListItemButton className='listButton' style={{ display: 'flex', alignItems: 'flex-start' }} disableGutters="true" onClick={() => loadJournalEntry(index, item._id)}> {item.date} 
                        </ListItemButton>
                        <IconButton edge="end" aria-label="comments" >
                            <Delete />
                        </IconButton>
                        </Container>
                      </li>
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
