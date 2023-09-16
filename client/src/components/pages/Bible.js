// Authorization: Token c5d7d0f8da90d9a53978171558396b7400b9cba6
// /v3/passage/text/ for plain text
// curl -H 'Authorization: Token YOUR_API_KEY' 'https://api.esv.org/v3/passage/text/?q=John+11:35'
import { useEffect } from "react"
import { useState } from "react"
import React from "react";

function Bible() {
  const [bibleText, setBibleText] = useState("");
  const apiKey = "c5d7d0f8da90d9a53978171558396b7400b9cba6"; // Replace with your ESV API key

  useEffect(() => {
    const apiUrl = `https://api.esv.org/v3/passage/text/?q=John+11:35`;
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

  return (
    <div>
      <h2>ESV Bible Text</h2>
      <p>{bibleText}</p>
    </div>
  );
}

export default Bible;


/*function Bible() {
    useEffect(() => {
        fetch("Authorization: Token 5d7d0f8da90d9a53978171558396b7400b9cba6' 'https://api.esv.org/v3/passage/text/?q=John+11:35'").then(
            response => response.json()
        ).then(
            data => {
                setVerseOtd(data)
            }
        )
    }, [options])
    return (
        <>
            
        </>
    )
    
}
export default Bible;
*/