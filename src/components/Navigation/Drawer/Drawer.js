import React from 'react';
import { Grid, List, ListItem, ListItemText, ListSubheader, Typography, SwipeableDrawer, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram } from '@material-ui/icons';
import { useStyles } from './styles'

export const Drawer = ({ toggleDrawer, categories, open }) => {
    const classes = useStyles();

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(open)}
            onKeyDown={toggleDrawer(open)}
        >
            <List subheader={
                <ListSubheader className={classes.subheader}>
                    Kategorie
                </ListSubheader>
            }>
                {categories.map((category) => (
                    <ListItem component={NavLink} to={`/products/${category.slug}`} divider button key={category.id}>
                        <ListItemText>{category.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <div className={classes.foot}>
                <Grid container alignItems="center" justifyContent="space-evenly">
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>hoolay.store</Typography>
                    </Grid>
                    <div style={{ flexGrow: 1 }} />
                    <Grid item>
                        <IconButton component="a" href="https://www.instagram.com/" target="_blank">
                            <Facebook color="inherit"/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton component="a" href="https://www.instagram.com/" target="_blank">
                            <Instagram edge='end' color="inherit"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

    return (
        <SwipeableDrawer
            open={open}
            onClose={toggleDrawer(open)}
            onOpen={toggleDrawer(open)}
        >
            {list()}
        </SwipeableDrawer>
    )
}