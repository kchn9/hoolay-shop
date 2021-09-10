import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography, InputBase } from '@material-ui/core';
import { ShoppingCart, Storefront, Search } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import srcLogo from '../../assets/hoolay-logo.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Link to='/'>
                        <img src={srcLogo} alt="Hoolay" height="80px" className={classes.image} />
                    </Link>
                    <div className={classes.grow}/>
                    {location.pathname !== '/products' && (
                    <IconButton component={Link} to='/products' aria-label="Pokaż sklep" color="inherit">
                        <Storefront />
                    </IconButton>
                    )}
                    {location.pathname === '/products' && (
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
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
                    {location.pathname === '/products' && (
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
