import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [journalData, setJournalData] = useState([{}]);
  let i = 0;

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    fetch('http://localhost:5000/journal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        text: text,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if(data.success) {
        i++;
        setJournalData(data);
      } else {
        throw new Error('Request failed!');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <input type='date' onChange={handleDateChange} value={date} />
      <input type='text' onChange={handleTextChange} value={text} />
      <button onClick={handleClick}>Update</button>
      <p>Date: {journalData[i] && journalData[i].date}</p>
      <p>Text: {journalData[i] && journalData[i].text}</p>
    </div>
  );
}

export default App;