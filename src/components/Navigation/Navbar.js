import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, InputBase, Grid } from '@material-ui/core';
import { ShoppingCart, Store, Search, Home, Menu } from '@material-ui/icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { commerce } from '../../lib/Commerce';

import Drawer from './Drawer/Drawer'

import useStyles from './styles';

const Navbar = ({ setSearchQuery, totalItems }) => {
    const classes = useStyles();
    const location = useLocation();
    const { control } = useForm();

    const [categories, setCategories] = useState([]);
    //gets categories without featured products
    const fetchCategories = () => {
        return commerce.categories.list({ depth: 3 }).then((respond) => {
            const newCategories = respond.data;
            const remId = newCategories.findIndex(category => category.slug === 'polecane');
            newCategories.splice(remId, 1)
            setCategories(newCategories.reverse());
        })
    }

    useEffect(() => {
        fetchCategories();
    }, [])

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
                    {location.pathname.startsWith('/sklep') && (
                        <div>
                            <IconButton onClick={toggleDrawer(open)} className={classes.menuButton} color="inherit" aria-label="Otwórz boczne mennu" >
                                <Menu />
                            </IconButton>
                            <Drawer toggleDrawer={toggleDrawer} categories={categories} open={open} />
                        </div>
                    )}
                    <Typography className={classes.title} component={Link} to={location.pathname === '/' ? '/' : '/sklep'} variant="h4">Hoolay</Typography>
                    <div style={{ flexGrow: 1 }} />
                    {!location.pathname.startsWith('/sklep') && (
                        <IconButton component={Link} to='/sklep' aria-label="Pokaż sklep" color="secondary">
                            <Store />
                        </IconButton>
                    )}
                    {location.pathname.startsWith('/sklep') && (
                        <Grid container component='ul' justifyContent="flex-start" alignItems="center" className={classes.categories}>
                            {categories.map(category => (
                                <Grid item component='li' key={category.id}>
                                    <NavLink className={classes.catLink} to={`/sklep/${category.slug}`}>{category.name}</NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {location.pathname.startsWith('/sklep') && (
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
                    {location.pathname.startsWith('/sklep') && (
                        <div className={classes.buttons}>
                            <IconButton component={Link} to='/' aria-label="Powrót do strony głównej" color="inherit">
                                <Home />
                            </IconButton>
                            <IconButton component={Link} to='/koszyk' aria-label="Pokaż towary w koszyku" color="inherit">
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