import React, { useEffect, useState } from 'react';
import { Divider, Grid, Typography, CircularProgress } from '@material-ui/core';
import { useParams, Route, Switch } from 'react-router-dom';
import { commerce } from '../../../lib/Commerce';

import Product from './Product/Product';
import ProductDetail from './ProductDetail/ProductDetail';

import useStyles from './styles';

const ALLOWED_CATEGORIES = ['hulajnogi', 'czesci', 'akcesoria'];

export const Products = ({ searchQuery, onAddToCart }) => {
    const classes = useStyles();
    let { categorySlug } = useParams();
    categorySlug = ALLOWED_CATEGORIES.includes(categorySlug) ? categorySlug : undefined;

    const [categoryName, setCategoryName] = useState('');
    const fetchCategoryNameBySlug = (slug) => {
        if (!slug) return setCategoryName(undefined);
        return commerce.categories.retrieve(slug, { type: 'slug' }).then(category => {
            setCategoryName(category.name)
        })
    }

    const [allProducts, setAllProducts] = useState([]);
    const fetchAllProducts = () => {
        return commerce.products.list().then((respond) => {
            const newProducts = respond.data;
            setAllProducts(newProducts);
        })
    }
    const areProductsReady = allProducts.length !== 0;

    const [filteredProducts, setFilteredProducts] = useState([]);
    const filterProducts = (slug, query) => {
        if (slug && query) {
            return allProducts.filter(product => {
                const { categories, name, permalink, description } = product;
                const slugs = [];
                categories.forEach(category => {
                    if (category.slug !== 'polecane') slugs.push(category.slug)
                });
                return slugs.includes(slug) && (permalink.toLowerCase().includes(query.toLowerCase()) ||
                    name.toLowerCase().includes(query.toLowerCase()) ||
                    description.toLowerCase().includes(query.toLowerCase()));
            })
        }
        else if (!slug && query) {
            return allProducts.filter(product => {
                const { name, permalink, description } = product;
                return permalink.toLowerCase().includes(query.toLowerCase()) ||
                name.toLowerCase().includes(query.toLowerCase()) ||
                description.toLowerCase().includes(query.toLowerCase());
            })
        }
        else if (!query && slug) {
            return allProducts.filter(product => {
                const { categories } = product;
                const slugs = [];
                categories.forEach(category => slugs.push(category.slug));
                return slugs.includes(slug);
            })
        }
        else {
            return allProducts;
        }
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    useEffect(() => {
        fetchCategoryNameBySlug(categorySlug);
    }, [categorySlug]);

    useEffect(() => {
        setFilteredProducts(filterProducts(categorySlug, searchQuery));
    }, [categorySlug, searchQuery, allProducts])

    return (
        <>
            <Switch>
                <Route exact path="/sklep/:categoryId">
                    <Typography variant="h6" color="primary" className={classes.text}>{"Wszystkie produkty" + (categoryName !== undefined ? ` > ${categoryName}` : '' )}</Typography>
                    <Divider variant="middle" className={classes.hr}/>
                    <Grid container justifyContent="flex-start" spacing={3} className={classes.content}>
                        {areProductsReady ? (filteredProducts.length > 0 ? filteredProducts.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} xl={2}>
                                <Product categorySlug={categorySlug} product={product} onAddToCart={onAddToCart} onShop/>
                            </Grid>
                        )) : <Typography variant="h6" color="primary" className={classes.text}>Przykro nam, żadne produkty nie spełniają Twoich kryteriów.</Typography>) : (
                            <CircularProgress className={classes.progress}/>
                        )}
                    </Grid>
                </Route>
                <Route path="/sklep/:categoryId/:productId">
                        <ProductDetail />
                </Route>
            </Switch>

        </>
    )
};