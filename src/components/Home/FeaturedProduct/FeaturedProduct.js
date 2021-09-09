import React from 'react';
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import Utils from '../../../lib/Utils';

import useStyles from './styles';

const FeaturedProduct = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent >
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="subtitle1">
                        {Utils.beautifyFormattedPrice(product.price.formatted_with_symbol)}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default FeaturedProduct;