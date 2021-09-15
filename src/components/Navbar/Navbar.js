import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography, InputBase, Grid } from '@material-ui/core';
import { ShoppingCart, Storefront, Search } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = ({ totalItems, categories }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} component={Link} to={location.pathname.startsWith('/products') ? '/products' : '/'} variant="h4">Hoolay</Typography>
                    <div style={{ flexGrow: 1 }} />
                    {!location.pathname.startsWith('/products') && (
                    <IconButton component={Link} to='/products' aria-label="Pokaż sklep" color="secondary">
                        <Storefront />
                    </IconButton>
                    )}
                    {location.pathname.startsWith('/products') && (
                    <Grid container component='ul' justifyContent="flex-start" alignItems="center" className={classes.categories}>
                        {categories.map(category => (
                            <Grid item component='li' key={category.id}>
                                <Link className={classes.catLink} to={`/products/${category.slug}`}>{category.name}</Link>
                            </Grid>
                        ))}
                    </Grid>
                    )}
                    {location.pathname.startsWith('/products') && (
                    <div className={classes.search}>
                        <div aria-label="Szukaj" className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                        placeholder="Szukasz czegoś?"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'Szukaj' }}
                        />
                    </div>
                    )}
                    {location.pathname.startsWith('/products') && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Pokaż towary w koszyku" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
