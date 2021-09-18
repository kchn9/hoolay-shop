import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import { Delete, Add, Remove } from '@material-ui/icons'
import Utils from '../../../lib/Utils'

import useStyles from './styles';


const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <ListItem className={classes.root}>
            <ListItemAvatar>
                <Avatar className={classes.avatarSize} alt={item.name} src={item.media.source} />
            </ListItemAvatar>
            <ListItemText
                primary={`${item.quantity} x ${item.name}`}
                secondary={Utils.beautifyFormattedPrice(item.line_total.formatted_with_symbol)}
                className={classes.text}
                classes={{
                    primary: classes.nameText,
                    secondary: classes.priceText,
                }}
                inset
            />
            <ListItemSecondaryAction className={classes.actions}>
                <div className={classes.quantityActions}>
                    <IconButton edge="end" aria-label="Dodaj jedną sztukę" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
                        <Add color="inherit" />
                    </IconButton>
                    <IconButton edge="end" aria-label="Usuń jedną sztukę" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
                        <Remove color="inherit" />
                    </IconButton>
                </div>
                <IconButton edge="end" aria-label="Usuń z koszyka" onClick={() => handleRemoveFromCart(item.id)}>
                    <Delete color="inherit" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CartItem;
