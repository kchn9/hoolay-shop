import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useStyles from './styles'
import { Products } from './Products/Products';

const Shop = ({ searchQuery, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path="/sklep">
                    <Redirect to="/sklep/wszystkie" />
                </Route>
                <Route path="/sklep/:categorySlug">
                    <Products searchQuery={searchQuery} onAddToCart={onAddToCart} />
                </Route>
            </Switch>
        </main>
    )
}

export default Shop;
