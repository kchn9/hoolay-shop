import React, { useEffect, useState } from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { useLocation, Route } from 'react-router-dom';
import { commerce } from '../../lib/Commerce';

import Product from './Product/Product';

import useStyles from './styles'

const Products = ({ fetchProductsByCategorySlug, onAddToCart }) => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const [ categorySlug, ...rest ] = pathname.split('/').reverse();

    const [category, setCategory] = useState({});
    const fetchCategoryByCategorySlug = (slug) => {
        return commerce.categories.retrieve(slug, { type: 'slug' }).then(category => {
            setCategory(category)
        }).catch(() => {
            setCategory({})
        })
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (pathname.split('/').length > 2){
            fetchProductsByCategorySlug(setProducts, categorySlug);
            fetchCategoryByCategorySlug(categorySlug);
        } else {
            fetchProductsByCategorySlug(setProducts);
        }
    }, [categorySlug]);

    return (
        <main className={classes.root}>
            <div className={classes.toolbar} />
            <Typography variant="h6" color="primary" className={classes.categoryName}>{"Wszystkie produkty" + (pathname.split('/').length > 2 ? ` -> ${category.name}` : '' )}</Typography>
            <Divider variant="middle" className={classes.hr}/>
            <Grid container justifyContent="left" spacing={3} className={classes.content}>
                {products.map((product) => (
                    <Grid item key={product.id} item xs={12} sm={6} md={3} xl={2}>
                        <Product product={product} onAddToCart={onAddToCart} displayDesc displayAction/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;