import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, InputBase, Grid } from '@material-ui/core';
import { ShoppingCart, Storefront, Search, Home, Menu } from '@material-ui/icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Drawer } from './Drawer/Drawer'

import useStyles from './styles';

const Navbar = ({ setSearchQuery, totalItems, categories }) => {
    const classes = useStyles();
    const location = useLocation();
    const { control } = useForm();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(!open);
    };

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    {location.pathname.startsWith('/products') && (
                        <div>
                            <IconButton onClick={toggleDrawer(open)} className={classes.menuButton} color="inherit" aria-label="Otwórz boczne mennu" >
                                <Menu />
                            </IconButton>
                            <Drawer toggleDrawer={toggleDrawer} categories={categories} open={open} />
                        </div>
                    )}
                    <Typography className={classes.title} component={Link} to={location.pathname === '/' ? '/' : '/products'} variant="h4">Hoolay</Typography>
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
                                    <NavLink className={classes.catLink} to={`/products/${category.slug}`}>{category.name}</NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {location.pathname.startsWith('/products') && (
                        <div className={classes.search}>
                            <div aria-label="Szukaj" className={classes.searchIcon}>
                                <Search />
                            </div>
                            <Controller
                                name="searchQuery"
                                control={control}
                                render={(({ field }) => (
                                    <InputBase
                                        {...field}
                                        onChange={({ target }) => field.onChange(setSearchQuery(target.value))}
                                        placeholder="Szukasz czegoś?"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'Szukaj' }}
                                    />
                                ))}
                            />
                        </div>
                    )}
                    {location.pathname.startsWith('/products') && (
                        <div className={classes.buttons}>
                            <IconButton component={Link} to='/' aria-label="Powrót do strony głównej" color="inherit">
                                <Home />
                            </IconButton>
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