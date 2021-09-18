import React from 'react';
import { CssBaseline, Grid, Typography } from '@material-ui/core';

import Banner from './Banner/Banner'
import Product from '../Products/Product/Product'

import useStyles from './styles';

const Home = ({ featured }) => {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" className={classes.content}>
                <Grid item xs={12}>
                    <Banner />
                </Grid>
                <Grid item>
                    <Typography variant="h3" color="primary" className={classes.subtitle}>Polecane produkty</Typography>
                </Grid>
                <Grid container justifyContent="center" className={classes.products} spacing={3}>
                        {
                            featured.map((product) => (
                                <Grid key={product.id} item xs={11} sm={6} md={5} xl={3}>
                                    <Product product={product}/>
                                </Grid>
                            ))
                        }
                </Grid>
            </Grid>
        </main>
    )
}

export default Home;