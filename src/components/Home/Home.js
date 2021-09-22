import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { commerce } from '../../lib/Commerce';

import Banner from './Banner/Banner'
import Product from '../Shop/Products/Product/Product'

import useStyles from './styles';


const Home = () => {
    const classes = useStyles();

    const [featured, setFeatured] = useState([]);
    const fetchFeatured = (slug = "polecane", limit = 4) => {
        return commerce.products.list({ limit: limit, category_slug: slug }).then(respond => {
            const newFeatured = respond.data;
            setFeatured(newFeatured);
        });
    }
    const isFeaturedReady = featured.length > 0;

    useEffect(() => {
        fetchFeatured()
    }, [])

    return (
        <main className={classes.root}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" className={classes.content}>
                <Grid item xs={12}>
                    <Banner />
                </Grid>
                <Grid item>
                    {isFeaturedReady && <Typography variant="h3" color="primary" className={classes.subtitle}>Polecane produkty</Typography>}
                </Grid>
                <Grid container justifyContent="center" className={classes.products} spacing={3}>
                        {
                            featured.map((product) => (
                                <Grid key={product.id} item xs={11} sm={6} md={5} xl={3}>
                                    <Product product={product} onFeatured/>
                                </Grid>
                            ))
                        }
                </Grid>
            </Grid>
        </main>
    )
}

export default Home;