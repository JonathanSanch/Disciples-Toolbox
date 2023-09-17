import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material'

function Listbox (props) {
    return (
        <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '40px', margin: '45px' }}>
                <Typography variant="body1">{props.message}</Typography>
            </Paper>
        </Grid>
    )
}

export default Listbox