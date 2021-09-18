import React, { useEffect, useState } from 'react';
import { Divider, Grid, Typography, CircularProgress } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { commerce } from '../../lib/Commerce';

import Product from './Product/Product';

import useStyles from './styles'

const Products = ({ searchQuery, onAddToCart }) => {
    const classes = useStyles();

    const { pathname } = useLocation();
    const pathArr = pathname.split('/');
    const isCategorySpecified = pathArr.length === 3;
    const categorySlug = isCategorySpecified ? pathArr[2] : '';

    const [categoryName, setCategoryName] = useState('');
    const fetchCategoryNameBySlug = (slug) => {
        return commerce.categories.retrieve(slug, { type: 'slug' }).then(category => {
            setCategoryName(category.name)
        }).catch(() => {
            setCategoryName(undefined)
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
        isCategorySpecified && fetchCategoryNameBySlug(categorySlug);
    }, [categorySlug]);

    useEffect(() => {
        setFilteredProducts(filterProducts(categorySlug, searchQuery));
    }, [categorySlug, searchQuery, allProducts])

    return (
        <main className={classes.root}>
            <div className={classes.toolbar} />
            <Typography variant="h6" color="primary" className={classes.text}>{"Wszystkie produkty" + (isCategorySpecified && categoryName !== undefined ? ` > ${categoryName}` : '' )}</Typography>
            <Divider variant="middle" className={classes.hr}/>
            <Grid container justifyContent="flex-start" spacing={3} className={classes.content}>
                {areProductsReady ? (filteredProducts.length > 0 ? filteredProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} xl={2}>
                        <Product product={product} onAddToCart={onAddToCart} onShop/>
                    </Grid>
                )) : <Typography variant="h6" color="primary" className={classes.text}>Przykro nam, żadne produkty nie spełniają Twoich kryteriów.</Typography>) : (
                    <CircularProgress className={classes.progress}/>
                )}
            </Grid>
        </main>
    )
}

export default Products;