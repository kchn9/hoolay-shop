import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import useStyles from './styles';

const Gallery = ({ fullscreen, handleClickOpen = function(){}, srcs }) => {

    const classes = useStyles();
    const [visibleId, setVisibleId] = useState(0);
    const [leftDisabled, setLeftDisabled] = useState(false);
    const [rightDisabled, setRightDisabled] = useState(false);
    const len = srcs.length;

    const next = () => {
        setVisibleId((prev) => prev + 1);
    }

    const back = () => {
        setVisibleId((prev) => prev - 1);
    }

    useEffect(() => {
        if (visibleId + 1 === len) {
            setRightDisabled(true)
        } else {
            setRightDisabled(false)
        }
        if (visibleId - 1 < 0) {
            setLeftDisabled(true)
        } else {
            setLeftDisabled(false)
        }
    }, [visibleId, len])

    return (
        <div className={fullscreen ? classes.fullscreen : classes.root}>
            {srcs.map((_, id) => (
                <img alt="Zdjęcie podglądowe hulajnogi" onClick={() => handleClickOpen()} src={srcs[id]} className={`${classes.image} ${visibleId === id ? classes.shown : classes.hidden}`}></img>
            ))}
            <IconButton classes={{ disabled: classes.disabled }} disabled={leftDisabled} className={`${classes.button} ${classes.left}`} onClick={back}>
                <NavigateBefore />
            </IconButton>
            <IconButton classes={{ disabled: classes.disabled }} disabled={rightDisabled} className={`${classes.button} ${classes.right}`} onClick={next}>
                <NavigateNext />
            </IconButton>

        </div>
    )
}

export default Gallery;