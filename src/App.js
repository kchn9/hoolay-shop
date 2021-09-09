import React, { useState, useEffect } from 'react';
import { commerce } from './lib/Commerce'
import { Navbar, Products, Cart, Home, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = () => {
        return commerce.products.list().then((respond) => {
            const newProducts = respond.data;
            setProducts(newProducts);
        })
    }

    const [featured, setFeatured] = useState([]);
    const fetchProductsByCategorySlug = async (limit, slug) => {
        return commerce.products.list({ limit: limit, category_slug: slug }).then(respond => {
            const newFeatured = respond.data;
            setFeatured(newFeatured);
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
        fetchProducts();
        fetchCart();
        fetchProductsByCategorySlug(4, 'featured'); //get 4 featured items
    }, []);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path="/">
                        <Home featured={featured}/>
                    </Route>
                    <Route path='/products'>
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route path='/cart'>
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;