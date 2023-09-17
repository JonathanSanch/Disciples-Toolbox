// Authorization: Token c5d7d0f8da90d9a53978171558396b7400b9cba6
// /v3/passage/text/ for plain text
// curl -H 'Authorization: Token YOUR_API_KEY' 'https://api.esv.org/v3/passage/text/?q=John+11:35'
import { useEffect, useRef } from "react"
import { useState } from "react"
import React from "react";


import { Container, Typography, Paper, Pagination, TextField, Button, IconButton, Input } from '@mui/material';

function Bible() {
  const [data, setData] = useState([]);
  const [bibleText, setBibleText] = useState("");
  const [query, setQuery] = useState("John 1");

function ApiCall() {
  const apiKey = "c5d7d0f8da90d9a53978171558396b7400b9cba6"; // Replace with your ESV API key
    const apiUrl = `https://api.esv.org/v3/passage/text/?q=${query}&include-footnotes=false&wrapping-div=true`;
    fetch(apiUrl, {
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
          setBibleText(data); // Assuming ESV API returns passages as an array
          console.log(data.passages[0]);
          console.log(data)
          console.log(data.parsed[0][0]);
      })
      .catch((error) => {
        console.error(error);
      });
}
useEffect(() => {ApiCall()}, []);


  //Handles new search for Bible pages
    // Calculate the range of items to display on the current page

const inputRef = useRef();

function OnSubmit(e){
  e.preventDefault();

  setQuery(inputRef.current.value)
  ApiCall();
}

  console.log(query)
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginBottom: "30px", marginTop: "30px", alignItems:'center', backgroundColor:"#CAD2C5" }} width="200px" >
      {(typeof bibleText === 'undefined') ? (
          <Typography></Typography>
      ): (
      <div>
        <Typography variant="h4" gutterBottom textAlign="center">
          {bibleText.query}
        </Typography>
        <Typography variant="h6"  gutterBottom padding="20px" >
          {bibleText.passages}
        </Typography>
      </div>
        )}
          <div>
            <form onSubmit={OnSubmit} style={{display:'flex'}}>
              <div class="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">
                <input ref={inputRef} style={{width:"300px", backgroundColor:"#CAD2C5", height:"20px", outlineColor:"#CAD2C5", padding:"15px", margin:"20px"}} placeholder="Type Chapter"/>
                </span>
              <Button type="submit" variant="outlined">Search</Button>
              </div>
          {/* <Input
          fullWidth
          label="Search"
          variant="outlined"
          ref={inputRef} type='text'
          />
        <Button
        type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: '8px' }}>
          Search
        </Button> */}
        </form>
      </div>
        
      </Paper>
    </Container>
  );
}


export default Bible;

