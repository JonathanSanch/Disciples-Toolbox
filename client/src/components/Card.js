import * as React from 'react';
import "./Card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Dashbaord(props) {

    const headerStyle = {
        fontFamily: 'Fugaz One',
        color: '#2f3e46',         
    };

    const descStyle = {
        fontFamily: 'Roboto Condensed',
        color: '#2f3e46',
    };

    const cardStyle = {
        backgroundColor: '#879fa8',
    }


    return (
        <Link to={props.path} className='link' style={{textDecoration:'none'}}>
            <Card sx={{ maxWidth: 300}} xs={12} sm={10} md={8} lg={6}  >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.image}
                        alt={props.alt}
                        sx={{width: 250}}

                    />
                    <CardContent style={cardStyle}>
                        <Typography gutterBottom variant="h5" component="div" style={headerStyle}>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" style={headerStyle}>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}