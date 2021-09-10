import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';

import { useForm, FormProvider } from 'react-hook-form';
import { default as FormInput } from '../CustomTextField';

import { commerce } from '../../../lib/Commerce';

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const fetchShippingCountries = (checkoutTokenId) => {
        commerce.services.localeListShippingCountries(checkoutTokenId).then((respond) => {
            const { countries } = respond;
            setShippingCountries(countries);
        })
    }

    const [shippingCountry, setShippingCountry] = useState('');

    const [shippingSubdivions, setShippingSubdivions] = useState([]);
    const [shippingSubdivion, setShippingSubdivion] = useState('');

    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();
    return (
        <>
            <Typography variant='h6' gutterBottom>Adres dostawy</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="Imię" />
                        <FormInput required name="lastName" label="Nazwisko" />
                        <FormInput required name="address1" label="Adres" />
                        <FormInput required name="email" label="E-mail" />
                        <FormInput required name="city" label="Miasto" />
                        <FormInput required name="zip" label="Kod pocztowy" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Kraj</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={} >
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Województwo</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={} >
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Metoda dostawy</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={} >
                                    Select me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
};

export default AddressForm;