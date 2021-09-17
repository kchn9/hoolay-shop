import React from 'react';
import { Container, Typography, Button, List, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Utils from '../../lib/Utils';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();
    if (!cart.line_items) return 'Strona ładuje się dla Ciebie...';

    const EmptyCart = () => (
        <Typography variant="subtitle1">Twój koszyk jest pusty! Gdy tylko dodasz produkty do koszyka, pojawią się tutaj.
            <br/>
            <Link to="/products" className={classes.link}>Powrót do sklepu.</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <List>
                {cart.line_items.map((item) => (
                    <>
                        <CartItem  alignItems="flex-start" item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                        <Divider />
                    </>
                ))}
            </List>

            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Kwota zamówienia: {Utils.beautifyFormattedPrice(cart.subtotal.formatted_with_symbol)}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="outlined" color="secondary" onClick={handleEmptyCart}>Wyczyść koszyk</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Zamów i zapłać</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container className={classes.content}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h2" gutterBottom>Twój koszyk</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;