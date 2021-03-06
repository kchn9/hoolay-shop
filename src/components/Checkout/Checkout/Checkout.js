import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';

import { commerce } from '../../../lib/Commerce';

import useStyles from './styles';

const Confirmation = () => {
    return (
        <div>
            Confirmation
        </div>
    )
}

const steps = ['Adres dostawy', 'Szczególy płatności'];

const Checkout = ({ cart }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

    useEffect(() => {
        (async function () {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                console.log(token);
                setCheckoutToken(token);
            } catch (error) {
                //
             }
        }());
    }, [cart])

    const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm checkoutToken={checkoutToken}/>

    return (
        <>
            <div class={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" align="center">Zamówienie</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step classes={{ completed: classes.complete }} key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken ? <Form /> : <div className={classes.spinner}><CircularProgress color="inherit" /></div>}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;