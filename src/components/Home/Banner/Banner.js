import React from 'react';
import { Box, Typography } from '@material-ui/core';

import srcPhoto from '../../../assets/landing-photo.jpeg';
import useStyles from './styles';

const Banner = () => {
    const classes = useStyles();

    return (
        <figure className={classes.content}>
            <img className={classes.image} src={srcPhoto} alt="Mezyczyna pozujący z hulajnogą elektryczną"></img>
            <Typography className={classes.caption} component="figcaption" variant="caption">Hoolay</Typography>
        </figure>
    )
}

export default Banner;