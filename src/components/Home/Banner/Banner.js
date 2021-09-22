import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

import src1 from '../../../assets/banner/banner1.jpeg';
import src2 from '../../../assets/banner/banner2.jpeg';
import src3 from '../../../assets/banner/banner3.jpeg';

const Banner = () => {
    const classes = useStyles();

    const srcs = [src1, src2, src3];

    const [visibleId, setVisibleId] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleId((prev) => {
                if (prev >= srcs.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            })
        }, 10000);
        return () => clearInterval(timer);
    })

    return (
        <figure className={classes.content}>
            {srcs.map((_, id) => (
                <img alt="Banner sklepu Hoolay" src={srcs[id]} className={`${classes.image} ${visibleId === id ? classes.shown : classes.hidden}`}></img>
            ))}
            <Typography className={classes.caption} component="figcaption" variant="caption">Hoolay</Typography>
        </figure>
    )
}

export default Banner;