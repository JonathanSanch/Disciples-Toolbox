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

    // const typographyStyle = {
    //     color: red,
    //     fontFamily: 'Fugaz One', 
    // };

    return (
        <Link to={props.path} className='link'>
            <Card sx={{ maxWidth: 300}} xs={12} sm={10} md={8} lg={6}  >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.image}
                        alt={props.alt}
                        sx={{width: 250}}

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}