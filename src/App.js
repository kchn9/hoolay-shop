import React, { useState, useEffect } from 'react';
import { commerce } from './lib/Commerce'
import { Navbar, Shop, Cart, Home, Footer, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './theme/theme';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cart, setCart] = useState({});
    const fetchCart = () => {
        return commerce.cart.retrieve().then((respond) => {
            const newCart = respond;
            setCart(newCart);
        })
    }
    const handleAddToCart = (productId, quantity) => {
        return commerce.cart.add(productId, quantity).then((respond) => {
            setCart(respond.cart);
        })
    }
    const handleUpdateCartQty = (productId, quantity) => {
        return commerce.cart.update(productId, { quantity }).then((respond) => {
            setCart(respond.cart);
        })
    }
    const handleRemoveFromCart = (productId) => {
        return commerce.cart.remove(productId).then((respond) => {
            setCart(respond.cart);
        })
    }
    const handleEmptyCart = () => {
        return commerce.cart.empty().then((respond) => {
            setCart(respond.cart);
        })
    }

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <>
                    <Navbar
                        setSearchQuery={setSearchQuery}
                        totalItems={cart.total_items}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path='/sklep'>
                            <Shop
                                searchQuery={searchQuery}
                                onAddToCart={handleAddToCart}
                            />
                        </Route>
                        <Route path='/koszyk'>
                            <Cart
                                cart={cart}
                                handleUpdateCartQty={handleUpdateCartQty}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}
                            />
                        </Route>
                        <Route path='/zamowienie'>
                            <Checkout cart={cart}/>
                        </Route>
                    </Switch>
                    <Footer/>
                </>
            </ThemeProvider>
        </Router>
    )
}

export default App;