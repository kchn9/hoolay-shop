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
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <Banner />
                </Grid>
                <Grid item>
                    <Typography variant="h3" className={classes.subtitle} gutterBottom>Polecane produkty</Typography>
                </Grid>
                <Grid container justifyContent="center" spacing={4}>
                    {
                        featured.map((product) => (
                            <Grid key={product.id} item xs={10} sm={5} xl={3}>
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