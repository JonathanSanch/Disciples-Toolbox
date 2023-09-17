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

  
  const apiKey = "c5d7d0f8da90d9a53978171558396b7400b9cba6";
  const getScripture = async (book, ch, ver) => {
    const query = book + "+" + ch + ":" + ver;
    const apiUrl = `https://api.esv.org/v3/passage/text/?q=${query}&include-footnotes=false&wrapping-div=true`;

    const response = await fetch(apiUrl, {
        headers: {
            Authorization: `Token ${apiKey}`
        }
    });
    const data = await response.json();
    return data.passages[0];
  }

  const createMemoryScripture = async () => {
    let bibleText = await getScripture(inputValues.book, inputValues.chapter, inputValues.verses);

    const data = {
      book: inputValues.book,
      chapter: inputValues.chapter,
      verses: inputValues.verses,
      text: bibleText
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

  const clearList = () => {
    console.log("I totally cleared it")
  }

  const getRandomScripture = () => {
    console.log("yuh");
  }

  return (

    <Grid container spacing={2}>
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Paper style={{ minHeight:'200px', borderRadius:'10px', padding: "40px", backgroundColor: "#594157", color:'#d0a4eb', margin:'45px'}} elevation={6}>
          <Typography variant='h4' textAlign="center" style={typographyStyle}>
              Memory Scripture:
          </Typography>
          <Typography variant="h6" marginTop="15px">
            {(typeof memoryScriptures === 'undefined') ? (
                <p></p>
            ): (
                <div>
                    <p style={verseStyle}>{memoryScriptures[(Math.floor(Math.random() * (memoryScriptures.length - 1 + 1)) + 1) - 1].text}</p>
                </div>
            )}
          </Typography>
          <Typography style={{ textAlign: 'center' }}>
            <button className="cool-button" onClick={openModal}>New Scripture</button>
          </Typography>
        </Paper>
      </Grid>
    {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ minHeight:'200px', borderRadius:'10px', backgroundColor:'#d0a4eb', color:'#594157', padding: '40px', margin: '45px' }}>
          <Typography variant='h4' textAlign="center" style={typographyStyle}>
              Saved List:
              <button onClick={clearList} class="cool-button-2">Clear list</button>
          </Typography> 
          <Grid container spacing={2}>
          {(typeof memoryScriptures === 'undefined') ? (
                <p></p>
            ): (
                <>
                    {memoryScriptures.map((item) => (
                        <Listbox verseMessage={item.text} verseIndex={``}/>
                    ))}
                </>
            )}
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
            required
            value={inputValues.book}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="chapter"
            label="Chapter"
            fullWidth
            required
            value={inputValues.chapter}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            name="verses"
            label="Verse(s)"
            fullWidth
            required
            value={inputValues.verses}
            onChange={handleInputChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
                getScripture(inputValues.book, inputValues.chapter, inputValues.verses);
                createMemoryScripture()
            }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>

  )
}

export default Memory;


/*
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
      {/* Left Column *//*}
      <Grid item xs={12} md={6}>
        <Paper style={{ minHeight:'200px', borderRadius:'10px', padding: "40px", backgroundColor: "#594157", color:'#d0a4eb', margin:'45px'}} elevation={6}>
          <Typography variant='h4' textAlign="center" style={typographyStyle}>
              Memory Scripture:
          </Typography>
          <Typography variant='h6' marginTop='15px'>
            <div>
              {/* Hard coding current Memory Scripture. In the end, we want to get this from user. *//*}
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
    {/* Right Column *//*}
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

*/