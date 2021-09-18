import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import Utils from '../../../../lib/Utils';

const Review = ({ checkoutToken }) => {

    console.log(checkoutToken);

    return (
        <>
            <Typography variant="h6" gutterBottom>Podsumowanie zamówienia</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem key={product.id} style={{ padding: '10px 0' }}>
                        <ListItemText primary={product.name} secondary={`Ilość: ${product.quantity}`} />
                        <Typography variant="body2">{Utils.beautifyFormattedPrice(product.line_total.formatted_with_symbol)}</Typography>
                    </ListItem>
                ))}
                <Divider/>
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="Dostawa:"/>
                    <Typography variant="subtitle2" style={{ fontWeight: 700 }}>
                        {Utils.beautifyFormattedPrice(checkoutToken.shipping_methods[0].price.formatted_with_symbol)}
                    </Typography>
                </ListItem>
                <ListItem style={{ padding: '10px 0' }}>
                    <ListItemText primary="Razem:"/>
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        {Utils.beautifyFormattedPrice(checkoutToken.live.subtotal.formatted_with_symbol)}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review;