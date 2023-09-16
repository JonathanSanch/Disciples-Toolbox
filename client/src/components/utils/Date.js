import React from 'react';
import { Typography } from '@mui/material';

function Date() {
  // Create a new Date object to get the current date
  const currentDate = new Date();

  // Extract the date, month, and year from the Date object
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
  const year = currentDate.getFullYear();

  // Create a string representation of the current date
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  return (
    <>
      <Typography variant='h3'>{formattedDate}</Typography>
    </>
  );
}

export default Date;
