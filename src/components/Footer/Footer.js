import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Grid, Typography, Box } from '@material-ui/core';
import { Instagram, Facebook } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <CssBaseline />
            <Grid container justifyContent="center" spacing={10}>
                <Grid item>
                    <Link to="/faq" className={classes.link}>
                        <Typography variant="subtitle1">
                            Zadawane pytania
                        </Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/policy" className={classes.link}>
                        <Typography variant="subtitle1">
                            Polityka prywatności
                        </Typography>
                    </Link>
                </Grid>
                <Grid item>
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
                        <Grid container className={classes.socials} justifyContent="flex-end" spacing={3}>
                            <Grid item>
                                <Facebook style={{ color: "#fafafa" }} />
                            </Grid>
                            <Grid item>
                                <Instagram style={{ color: "#fafafa" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;