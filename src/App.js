import React, { useState, useEffect } from 'react';
import { commerce } from './lib/Commerce'
import { Navbar, Products, Cart, Home, Footer, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './theme/theme';

const App = () => {
    const [categories, setCategories] = useState([]);
    //gets categories without featured products
    const fetchCategories = () => {
        return commerce.categories.list({ depth: 3 }).then((respond) => {
            const newCategories = respond.data;
            const remId = newCategories.findIndex(category => category.slug === 'polecane'); //id of featured cat
            newCategories.splice(remId, 1)
            setCategories(newCategories.reverse());
        })
    }

    const [featured, setFeatured] = useState([]);
    const fetchFeatured = (slug, limit = 200) => {
        return commerce.products.list({ limit: limit, category_slug: slug }).then(respond => {
            const newFeatured = respond.data;
            setFeatured(newFeatured);
        });
    }

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
        fetchCategories();
        fetchCart();
        fetchFeatured('polecane', 4); //get 4 featured items
    }, []);

    return (
        <Router>
            <ThemeProvider theme={Theme}>
                <>
                    <Navbar
                        setSearchQuery={setSearchQuery}
                        totalItems={cart.total_items}
                        categories={categories}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Home featured={featured}/>
                        </Route>
                        <Route path='/sklep'>
                            <Products
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