import React, { useState, useEffect } from 'react';
import { commerce } from './lib/Commerce'
import { Navbar, Products, Cart, Home, Footer, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

const App = () => {
    const [categories, setCategories] = useState([]);
    //gets categories without featured products
    const fetchCategories = () => {
        return commerce.categories.list({ depth: 3 }).then((respond) => {
            const newCategories = respond.data;
            const remId = newCategories.findIndex(category => category.slug === 'polecane'); //id of featured cat
            newCategories.splice(remId, 1)
            setCategories(newCategories);
        })
    }

    const [featured, setFeatured] = useState([]);
    // returns all products if no slug provided
    const fetchProductsByCategorySlug = (setter, slug, limit = 200) => {
        if (!slug) {
            return commerce.products.list({ limit: limit }).then(respond => {
                const newFeatured = respond.data;
                setter(newFeatured);
            });
        }
        return commerce.products.list({ limit: limit, category_slug: slug }).then(respond => {
            const newFeatured = respond.data;
            setter(newFeatured);
        });
    }

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
        fetchProductsByCategorySlug(setFeatured, 'polecane', 4); //get 4 featured items
    }, []);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <div>
                    <Navbar
                        totalItems={cart.total_items}
                        categories={categories}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Home featured={featured}/>
                        </Route>
                        <Route path='/products'>
                            <Products
                                fetchProductsByCategorySlug={fetchProductsByCategorySlug}
                                onAddToCart={handleAddToCart}
                            />
                        </Route>
                        <Route path='/cart'>
                            <Cart
                                cart={cart}
                                handleUpdateCartQty={handleUpdateCartQty}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}
                            />
                        </Route>
                        <Route path='/checkout'>
                            <Checkout cart={cart}/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </ThemeProvider>
        </Router>
    )
}

export default App;