import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider, CircularProgress, Button, Dialog} from '@material-ui/core';
import { AddShoppingCart, Store } from '@material-ui/icons';
import { useParams, useHistory } from 'react-router-dom';
import { commerce } from '../../../../lib/Commerce';
import Utils from '../../../../lib/Utils';

import Gallery from './Gallery/Gallery';
import useStyles from './styles';

const ProductDetail = ({ onAddToCart }) => {
    const { productId, ...rest } = useParams();
    const history = useHistory();
    const classes = useStyles();

    const [assetsUrls, setAssetsUrls] = useState([]);
    const [product, setProduct] = useState({});
    const fetchProductById = (productId) => {
        commerce.products.retrieve(productId)
            .then(product => {
                setProduct(product);
                const { assets } = product;
                const urls = assets.map(asset => asset.url);
                setAssetsUrls(urls);
            })
    }

    const handleGoBackClick = () => {
        history.goBack();
    }

    const isProductReady = Object.keys(product).length !== 0;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        fetchProductById(productId);
    }, []);

    return (
        <Grid container className={classes.root} alignItems="center" direction="column">
            {isProductReady ? (
                <>
                    {/*top*/}
                    <Dialog open={open} onClose={handleClose}>
                        <Gallery fullscreen srcs={assetsUrls}/>
                    </Dialog>
                    <Grid item xs={12} sm={10} md={8} className={classes.top}>
                        <Grid className={classes.topWrapper} container spacing={4}>
                            <Grid item className={classes.gallery}>
                                <Gallery handleClickOpen={handleClickOpen} srcs={assetsUrls}/>
                            </Grid>
                            <Grid item className={classes.content}>
                                <Typography variant="h4" className={classes.name} color="textSecondary">{product.name}</Typography>
                                <Divider className={classes.hr} />
                                <Typography variant="subtitle1" className={classes.price} color="textSecondary">{Utils.beautifyFormattedPrice(product.price.formatted_with_symbol)}</Typography>
                                <div container direction="column" className={classes.buttons}>
                                    <Button onClick={() => onAddToCart(productId)} aria-label="Dodaj do koszyka" startIcon={<AddShoppingCart/>} variant="contained" color="secondary">Dodaj do koszyka</Button>
                                    <Button onClick={() => handleGoBackClick()} aria-label="Wróć do sklepu" startIcon={<Store/>} className={classes.backButton} variant="contained" color="primary">Wróć do sklepu</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*bottom*/}
                    <Grid item xs={12} sm={10} md={8} style={{ width: '100%', paddingTop: '5%'}}>
                        <Typography variant="h4" color="textSecondary" gutterBottom>Opis producenta</Typography>
                        <Divider className={classes.hr}/>
                        <Typography variant="body1" color="textSecondary" dangerouslySetInnerHTML={{ __html: product.description }}/>
                    </Grid>
                </>

            ) : (
                <CircularProgress style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}/>
            )}
        </Grid>
    )
}

export default ProductDetail;

