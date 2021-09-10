import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';

import Review from './Review/Review';

const PaymentForm = ({ checkoutToken }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0'}}>Metoda płatności</Typography>
        </>
    )
};

export default PaymentForm;