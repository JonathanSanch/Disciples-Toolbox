import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import '../../App.css';
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
  };

  const [memoryScriptures, setMemoryScriptures] = useState([]);
  const [inputValues, setInputValues] = useState({
    book: '',
    chapter: '',
    verses: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const createMemoryScripture = () => {
    const data = {
      book: inputValues.book,
      chapter: inputValues.chapter,
      verses: inputValues.verses,
      // Add other properties as needed
    };

    fetch("/memoryScripture", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add Memory scripture");
        }
        console.log("Memory scripture added successfully");
        setInputValues({
          book: '',
          chapter: '',
          verses: '',
          // Clear other fields if necessary
        });
        closeModal();
        getMemoryScriptures();
      })
      .catch((error) => {
        console.error("Error adding Memory scripture:", error);
      });
  };

  const getMemoryScriptures = () => {
    fetch("/memoryScripture")
      .then((response) => response.json())
      .then((data) => {
        setMemoryScriptures(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching Memory scriptures:", error);
      });
  };

  useEffect(() => {
    getMemoryScriptures();
  }, []);

  return (
    <Grid container spacing={2}>
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Paper
          style={{
            minHeight: '200px',
            borderRadius: '10px',
            padding: '40px',
            backgroundColor: '#594157',
            color: '#d0a4eb',
            margin: '45px',
          }}
          elevation={6}
        >
          <Typography variant="h4" textAlign="center" style={typographyStyle}>
            Memory Scripture:
          </Typography>
          <Typography variant="h6" marginTop="15px">
            <div>
              {/* Display the user-entered Memory Scripture */}
              <p style={verseStyle}>{inputValues.book} {inputValues.chapter} {inputValues.startVerse} - {inputValues.endVerse}</p>
            </div>
          </Typography>
          <Typography style={{ textAlign: 'center' }}>
            <Button className="cool-button" onClick={openModal}>
              New Scripture
            </Button>
            <button className="cool-button">Add to Saved List</button>
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
      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Enter Memory Scripture Information</DialogTitle>
        <DialogContent>
          <TextField
            name="book"
            label="Book"
            fullWidth
            value={inputValues.book}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="chapter"
            label="Chapter"
            fullWidth
            value={inputValues.chapter}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="verses"
            label="Verse(s)"
            fullWidth
            value={inputValues.verses}
            onChange={handleInputChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={createMemoryScripture} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Memory;
