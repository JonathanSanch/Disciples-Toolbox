// src/components/Todo.js
import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const boxStyle = {
    backgroundColor: '#499c91', 
    marginTop: '30px',
    marginBottom: '30px',
    padding: '40px',
    borderRadius:'10px',
    minHeight: '300px',
  }

  const textFieldStyle = {
    color: "white",
    marginBottom: '20px',
  }

  const titleStyle = {
    textAlign: "center",
    color: "#CAD2C5",
    fontFamily: "Fugaz One",
    marginBottom: '30px',
  }

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="md">
        <Paper style={boxStyle}>
          <Typography variant='h3' style={titleStyle}> Prayer List</Typography>
          <TextField
            fullWidth
            label="Add a Prayer Request"
            variant="filled"
            value={task}
            style={textFieldStyle}
            sx={{  color: '#63baa9' , borderRadius: '10px', backgroundColor: '#63baa9'}} 
            onChange={(e) => setTask(e.target.value)}
            InputProps={{
                sx: {
                    '&:hover fieldset': {
                        border: '2px solid blue!important',
                        borderRadius: 0,
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: '4px solid red!important',
                    }
                }
            }}
          />
          <Typography style={{textAlign: 'center'}}>
            <Button
                variant="contained"
                onClick={addTask}
                style={{backgroundColor: '#49c4ad', marginBottom: '5px'}}

            >
                Add Prayer
                </Button>
            </Typography>
          <List>
            {tasks.map((t, index) => (
              <ListItem key={index} style= {{backgroundColor: '#2e7067', color: "#CAD2C5", borderRadius: '10px', marginTop: '10px'}}>
                <ListItemText primary={t} />
                <Button
                  variant="outlined"
                  style={{color: '#2e7067', borderColor: 'black', border: '10px'}}
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
    </Container>
  );
}

export default Todo;
