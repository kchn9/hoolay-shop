import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Fade } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Utils from '../../../lib/Utils';

import useStyles from './styles';

const Product = ({ product, onAddToCart = (() => {}), displayDesc, displayAction }) => {
    const classes = useStyles();

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
                    {displayDesc && <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textPrimary" />}
                </CardContent>
                {displayAction && (
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label="Dodaj do koszyka" onClick={() => { onAddToCart(product.id, 1) }}>
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                )}
            </Card>
        </Fade>
    )
}

export default Product;