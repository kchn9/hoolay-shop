import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Banner from './Banner/Banner'
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

import useStyles from './styles';

const Home = ({ featured }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container alignItems="center" spacing={4} direction="column">
                <Grid item>
                    <Banner />
                </Grid>
                <Grid item>
                    <Typography variant="h3" className={classes.subtitle} gutterBottom>Polecane produkty</Typography>
                </Grid>
                <Grid container justifyContent="center" spacing={4}>
                    {
                        featured.map((product) => (
                            <Grid key={product.id} item xs={12} md={6} lg={4}>
                                <FeaturedProduct product={product}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </main>
    )
}

export default Home;