import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Fade, Button, Divider } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Utils from '../../../../lib/Utils';

import useStyles from './styles';

const Product = ({ product, onAddToCart, onShop, onFeatured }) => {
    const classes = useStyles();

    // do not use featured category to show more details about product
    const categorySlug = product.categories[0].slug === "polecane" && product.categories[1].slug;

    return (
        <Fade in timeout={500} >
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent >
                    <div className={classes.cardContent}>
                        <Typography variant="h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="body1">
                            {Utils.beautifyFormattedPrice(product.price.formatted_with_symbol)}
                        </Typography>
                    </div>
                    {onShop && <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textPrimary" />}
                </CardContent>
                <Divider color="inherit"/>
                <CardActions disableSpacing className={classes.cardActions}>
                    {onShop && <Button component={Link} to={`/sklep/${categorySlug}/${product.id}`} variant="text" color="inherit" aria-label="Zobacz więcej">Zobacz więcej</Button>}
                    {onShop && <div style={{ flexGrow: 1 }} />}
                    {onShop && (<IconButton aria-label="Dodaj do koszyka" color="inherit" onClick={() => { onAddToCart(product.id, 1) }}>
                        <AddShoppingCart />
                    </IconButton>
                    )}
                    {onFeatured && <Button component={Link} to={`/sklep/${categorySlug}/${product.id}`} variant="text" color="inherit" aria-label="Przejdź do sklepu">Przejdź do sklepu</Button>}
                </CardActions>
            </Card>
        </Fade>
    )
}

export default Product;