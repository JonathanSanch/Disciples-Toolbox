// Authorization: Token c5d7d0f8da90d9a53978171558396b7400b9cba6
// /v3/passage/text/ for plain text
// curl -H 'Authorization: Token YOUR_API_KEY' 'https://api.esv.org/v3/passage/text/?q=John+11:35'
import { useEffect } from "react"
import { useState } from "react"
import React from "react";

import axios from 'axios';
import { Container, Typography, Paper, Pagination } from '@mui/material';

function Bible() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

    const [bibleText, setBibleText] = useState("");
  const apiKey = "c5d7d0f8da90d9a53978171558396b7400b9cba6"; // Replace with your ESV API key
  useEffect(() => {
    const apiUrl = `https://api.esv.org/v3/passage/text/?q=Genesis+1`;
    fetch(apiUrl, {
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
          setBibleText(data.passages[0]); // Assuming ESV API returns passages as an array
          console.log(data.passages[0]);
          console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   // Fetch data from the API
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // // Calculate the range of items to display on the current page
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentData = data.slice(startIndex, endIndex);

  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  // };

  return (
    // <Container maxWidth="lg">
    //   <Paper style={{ padding: '20px' }}>
    //     <Typography variant="h4" gutterBottom>
    //       API Data Viewer
    //     </Typography>

    //     <ul>
    //       {currentData.map((item) => (
    //         <li key={item.id}>{item.title}</li>
    //       ))}
    //     </ul>

    //     <Pagination
    //       count={Math.ceil(data.length / itemsPerPage)}
    //       page={currentPage}
    //       onChange={handlePageChange}
    //     />
    //   </Paper>
    // </Container>
    <div>Hello</div>
  );
}

export default Bible;

// function Bible() {
//   const [bibleText, setBibleText] = useState("");
//   const apiKey = "c5d7d0f8da90d9a53978171558396b7400b9cba6"; // Replace with your ESV API key

//   useEffect(() => {
//     const apiUrl = `https://api.esv.org/v3/passage/text/?q=John+11:35`;
//     fetch(apiUrl, {
//       headers: {
//         Authorization: `Token ${apiKey}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//           setBibleText(data.passages[0]); // Assuming ESV API returns passages as an array
//           console.log(data.passages[0]);
//           console.log(data)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>ESV Bible Text</h2>
//       <p>{bibleText}</p>
//     </div>
//   );
// }

// export default Bible;
