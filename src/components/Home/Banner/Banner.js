import React from 'react';
import { Box, Typography } from '@material-ui/core';

import srcPhoto from '../../../assets/landing-photo.jpeg';
import useStyles from './styles';

const Banner = () => {
    const classes = useStyles();

    return (
        <Box>
            <img className={classes.image} src={srcPhoto} alt="Mezyczyna pozujący z hulajnogą elektryczną"></img>
            <Typography className={classes.text} variant="h1">Hoolay</Typography>
        </Box>
    )
}

export default Banner;