// src/components/Todo.js
import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const boxStyle = {
    backgroundColor: '#354F52', 
    borderRadius:'10px'
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
        <Typography variant='h3' textAlign="center" color="#CAD2C5"> Prrayer List</Typography>
      <TextField
        fullWidth
        label="Add a Prayer Request"
        variant="filled"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTask}
      >
        Add Task
      </Button>
      <List>
        {tasks.map((t, index) => (
          <ListItem key={index}>
            <ListItemText primary={t} />
            <Button
              variant="outlined"
              style={{color: "#CAD2C5"}}
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
