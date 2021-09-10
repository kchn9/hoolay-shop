import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';

import { commerce } from '../../../lib/Commerce';

import useStyles from './styles';

const Confirmation = ({ cart }) => {
    return (
        <div>
            Confirmation
        </div>
    )
}

const steps = ['Adres dostawy', 'Szczególy płatności'];

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const generateToken = () => {
            return commerce.checkout.generateToken(cart.id, { type: 'cart' }).then(
                    (token) => {
                        console.log(token)
                }).catch(
                    (error) => {

                })
        }
    }, [])

    const Form = () => activeStep === 0
        ? <AddressForm />
        : <PaymentForm />

    return (
        <>
            <div class={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" align="center">Zamówienie</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;