import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material'

function Listbox (props) {

    const verseStyle = {
        fontStyle: 'italic',
        font: 'Serif',
        fontSize: '1.4em',
        marginBottom: '15px',
        color:'#594157',
      }
    
    const indexStyle = {
        fontStyle: 'strong',
        color: '#594157',
        marginTop: '10px',
    }

    return (
        <Grid item xs={12}>
            <Paper elevation={3} style={{ backgroundColor: '#efcbf5', borderRadius:'10px', padding: '10px', margin: '5px' }}>
                <Typography variant="body1" style={verseStyle}>{props.verseMessage}
                </Typography>
                <Typography variant="body1" style={indexStyle}>{props.verseIndex}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Listbox