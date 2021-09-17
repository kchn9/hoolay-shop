import React from 'react';
import { CssBaseline, IconButton } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { Instagram, Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <CssBaseline />
            <Grid className={classes.grid} container justifyContent="center" alignItems="center">
                <Grid item className={classes.link}>
                    <Link to="/faq" className={classes.link}>
                        <Typography variant="subtitle1">
                            Zadawane pytania
                        </Typography>
                    </Link>
                </Grid>
                <Grid item className={classes.link}>
                    <Link to="/policy" className={classes.link}>
                        <Typography variant="subtitle1">
                            Polityka prywatności
                        </Typography>
                    </Link>
                </Grid>
                <Grid item className={classes.link}>
                    <Link to="/terms" className={classes.link}>
                        <Typography variant="subtitle1">
                            Regulamin
                        </Typography>
                    </Link>
                </Grid>
                <Grid container className={classes.footbar} alignItems="flex-end" spacing={3}>
                    <Grid item className={classes.left}>
                        <Typography variant="subtitle1" className={classes.copyright}>©hoolay</Typography>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Grid container justifyContent="flex-end" spacing={3}>
                            <Grid item>
                                <IconButton component="a" href="https://www.facebook.com/" target="_blank" >
                                    <Facebook color="inherit" />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton component="a" href="https://www.instagram.com/" target="_blank">
                                    <Instagram color="inherit" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;